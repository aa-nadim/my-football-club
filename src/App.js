import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import playersData from './Data/Data.json';
import Players from './components/Players/Players';
import MyClub from './components/MyClub/MyClub';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [players, setPlayers]= useState([]);
  const [myClub, setMyClub] = useState([]);

  useEffect(() => setPlayers(playersData), [])

  const handleAddPlayer = (player) => {
    const newMyClub = [...myClub, player];
    setMyClub(newMyClub);
  }

  return (
    <div className="App">
      <div className="p-3 mb-2 bg-success text-white">
        <h1>Player Available: {players.length}</h1>
        <MyClub myClub={myClub}></MyClub>
      </div>
      
      <div>
        {
          players.map(player => <Players player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Players>)
        }
      </div>
    </div>
  );
}

export default App;
