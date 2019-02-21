import React from 'react';
import Card from './Card';

const CardList = ({players}) => {
    const renderedList = players.map((player) => {
        return <Card key={player._id} player={player}/>
    });
    return <main className="team-list">{renderedList}</main>;
};

export default CardList;