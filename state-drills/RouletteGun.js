//Still working on it...

import React from 'react';

class Roulette extends React.Component {
  constructor(props) { super(props) }
  this.state = {
    chamber: null,
    spinningTheChamber: false
  }
  this.



  render() {
    return (
      <div className="Roulette">
        <p>Spinning the chamber and pulling the trigger</p>
        <p>You're safe!</p>
        <p>BANG!!!</p>

        <button className="PullTheTrigger">Pull The Trigger</button>
      </div>
    )
  }
}



export default Roulette 