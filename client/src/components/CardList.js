// import './ImageList.css';
import React from 'react';
// import ImageCard from './ImageCard';

const CardList = (props) => {
    console.log(props);
    const teams = props.teams.map((team) => {
        return <li>{team}</li>
    });

    return <ul className="image-list">{teams}</ul>

};

export default CardList;