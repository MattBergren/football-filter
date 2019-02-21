import React from 'react';

const Card = ({
        player: {
            team_id,
            firstName,
            lastName,
            position
        } 
    }) => {
    return( 
        <div className={`player-card ${team_id}`}>
            <div className="player-card-header">
                <h2>{`${firstName} ${lastName}`}<small>&nbsp;&mdash;&nbsp;{position}</small></h2>
            </div>
            <div class="player-card-stripe"></div>
            <div class="player-card-body">
            
            </div>
        </div>
    );
};

export default Card;