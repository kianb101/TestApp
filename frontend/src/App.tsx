import React from 'react';
import './App.css';
import teams from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string; // Change type to string
  latitude: number;
  longitude: number;
}

function Welcome() {
  return <h1>Colleges in NCAA Basketball</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-wrapper">
        <h2>{oneTeam.school}</h2>
        <h3>{oneTeam.name}</h3>
        <h3>
          {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teams.teams.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
