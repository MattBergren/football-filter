import React from 'react';

const Card = ({
        player: {
            team_id,
            firstName,
            lastName,
            position,
            passTds,
            passYds,
            rushYds,
            rushTds,
            recYds,
            recTds,
            team: {
                city,
                name
            }
        } 
    }) => {

    const renderPosition = (position) => {
        if (position === 'QB') {
            return(
                <div>
                    <div className="player-card-header">
                        <h2>{`${firstName} ${lastName}`}<small>&nbsp;&mdash;&nbsp;{position}</small></h2>
                    </div>
                    <div className="player-card-stripe"></div>
                    <div className="player-card-body">
                        <img className="player-card-image" src={`img/players/${firstName.toLowerCase()}${lastName.toLowerCase()}.png`} alt={`${firstName} ${lastName}`} />
                        <div className="logos">
                            <img className="player-card-team" src={`img/teams/${team_id}.gif`} alt={`${team_id}`} />
                        </div>
                        <div className="yards">
                            <div className="stat-block">
                                <h4 className="stat-block-label">Passing Yards</h4>
                                <h5 className="stat-block-data">{passYds.toLocaleString()}</h5>
                            </div>
                        </div>
                        <div className="tds">
                            <div className="stat-block">
                                <h4 className="stat-block-label">Passing TD's</h4>
                                <h5 className="stat-block-data">{passTds}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="player-card-footer">
                        <h3>{city}&nbsp;{name}</h3>
                    </div>
                </div>
            );
        } else if(position === 'RB') {
            return(
                <div>
                    <div className="player-card-header">
                        <h2>{`${firstName} ${lastName}`}<small>&nbsp;&mdash;&nbsp;{position}</small></h2>
                    </div>
                    <div className="player-card-stripe"></div>
                    <div className="player-card-body">
                        <img className="player-card-image" src={`img/players/${firstName.toLowerCase()}${lastName.toLowerCase()}.png`} alt={`${firstName} ${lastName}`} />
                        <div className="logos">
                            <img className="player-card-team" src={`img/teams/${team_id}.gif`} alt={`${team_id}`} />
                        </div>
                        <div className="yards">
                            <div className="stat-block">
                                <h4 className="stat-block-label">Rushing Yards</h4>
                                <h5 className="stat-block-data">{rushYds.toLocaleString()}</h5>
                            </div>
                        </div>
                        <div className="tds">
                            <div className="stat-block">
                                <h4 className="stat-block-label">Rushing TD's</h4>
                                <h5 className="stat-block-data">{rushTds}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="player-card-footer">
                        <h3>{city}&nbsp;{name}</h3>
                    </div>
                </div>
            );
        } else {
            return(
                <div>
                    <div className="player-card-header">
                        <h2>{`${firstName} ${lastName}`}<small>&nbsp;&mdash;&nbsp;{position}</small></h2>
                    </div>
                    <div className="player-card-stripe"></div>
                    <div className="player-card-body">
                        <img className="player-card-image" src={`img/players/${firstName.toLowerCase()}${lastName.toLowerCase()}.png`} alt={`${firstName} ${lastName}`} />
                        <div className="logos">
                            <img className="player-card-team" src={`img/teams/${team_id}.gif`} alt={`${team_id}`} />
                        </div>
                        <div className="yards">
                            <div className="stat-block">
                                <h4 className="stat-block-label">Recieving Yards</h4>
                                <h5 className="stat-block-data">{recYds.toLocaleString()}</h5>
                            </div>
                        </div>
                        <div className="tds">
                            <div className="stat-block">
                                <h4 className="stat-block-label">Recieving TD's</h4>
                                <h5 className="stat-block-data">{recTds}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="player-card-footer">
                        <h3>{city}&nbsp;{name}</h3>
                    </div>
                </div>
            );
        }
    };

    return ( 
        <div className={`player-card ${team_id}`}>
            {renderPosition(position)}
        </div>
    );
};

export default Card;