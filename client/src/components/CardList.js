import React, { Component } from "react";
import Card from './Card';
import axios from "axios";
import {Animated} from "react-animated-css";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

class CardList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            players: null
        };
    }

    getDataFromDb = (props) => {
        axios.post('/api/players', {
        team: props.team,
        position: props.position,
        proBowl: props.proBowl
        }).then((response) => {
            this.setState({players: response.data })
        });
    };

    componentDidMount() {
        this.getDataFromDb(this.props);
    }

    componentDidUpdate(prevProps){
        if (prevProps !== this.props) {
            this.getDataFromDb(this.props);
        }
    }


    render() {
        if(this.state.players !== null) {
            if (this.state.players.length > 0) {
                const playerList = this.state.players.map((player) => {
                    return (
                        <Animated key={player._id} animationIn="fadeInUp" animationOut="fadeOutDown" isVisible={true}>
                            <Card  player={player}/>
                        </Animated>
                    );
                });
                return <main className="team-list">{playerList}</main>;
            } else {
                return( 
                    <main className="team-list">
                        <div class="no-match">
                            <h2>No Pro Bowlers</h2>
                        </div>
                    </main>
                );
            }
            
        } else {
            return(  
                <Segment>
                    <Dimmer active>
                    <Loader size='huge'>Loading</Loader>
                    </Dimmer>
            
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </Segment>
            );
        }
        
    }

}

export default CardList;