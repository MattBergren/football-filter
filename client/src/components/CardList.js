import React, { Component } from "react";
import Card from './Card';
import axios from "axios";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// const CardList = ({players}) => {
//     const renderedList = players.map((player) => {
//         return <Card key={player._id} player={player}/>
//     });
//     return <main className="team-list">{renderedList}</main>;
// };


class CardList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            players: []
        };
    }

    getDataFromDb = (props) => {
        console.log('getting data' + props);
        axios.post('/api/players', {
        team: props.team,
        position: props.position,
        proBowl: props.proBowl
        }).then((response) => {
            console.log('got data');
            this.setState({players: response.data })
        });
    };

    componentDidMount() {
        console.log('mount cardlist');
        this.getDataFromDb(this.props);

    }

    componentDidUpdate(prevProps){
        console.log('update cardlist');
        console.log(prevProps);
        console.log(this.props);
        if (prevProps !== this.props) {
           
            console.log('props changed');
            this.getDataFromDb(this.props);
        }
    }


    render() {
        const playerList = this.state.players.map((player) => {
            return (
                <TransitionGroup>
                    <CSSTransition
                        key={player._id}
                        timeout={300}
                        classNames="fade"
                    >
                        <Card key={player._id} player={player}/>
                    </CSSTransition>
                </TransitionGroup>
                
            );
        });
        return <main className="team-list">{playerList}</main>;
    }

}

export default CardList;