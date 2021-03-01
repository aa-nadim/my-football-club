import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    const {name, presentClub, salary, image} = props.player;
    const imageStyle = {height:'300px'}
    const playerStyle = {border: '1px solid red', margin:'100px', padding:'100px'}
    
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div style={playerStyle} className="p-3 mb-2 bg-secondary text-white">
            <img style={imageStyle} src={image}  alt=""/>
            <h1>{name}</h1>
            <h3>Current team : {presentClub}</h3>
            <p>Salary : ${salary}</p>
            <button className="btn btn-success" onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus}/>  Add Player</button>
        </div>
    );
};

export default Players;