import React from 'react';

const MyClub = (props) => {
    const myClub = props.myClub;
    const totalSalary = myClub.reduce( (sum, player) => sum + player.salary, 0)
    const imageStyle = {height:'30px'}
    return (
        <div>
            <h2>Players Added: {myClub.length}</h2>
            {
                myClub.map(player => <h3><img style={imageStyle} src={player.image}  alt=""/>Player Name : {player.name} , Salary : ${player.salary}</h3>)
            }
            <h2  className="p-3 mb-2 bg-danger text-white">total budget: ${totalSalary}</h2>
        </div>
    );
};

export default MyClub;