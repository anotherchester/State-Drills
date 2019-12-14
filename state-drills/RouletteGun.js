//Still working on it...

import React from 'react';

class Roulette extends React.Component {

  static defaultProps = {
    bulletInChamber: 8
  }

  state = {
    spinningTheChamber: false,
    chamber: 0
  }

  spinTheChamber() {
    // The state should update spinningTheChamber to be true.
    this.setState({ spinningTheChamber: true });

    // A timeout should be registered for 2 seconds.

    let timeout = setTimeout(() => {

      const randomChamber = Math.ceil(Math.random() * 8)
      // Within the timeout, a random number between 1 and 8 should be generated.
      // Within the timeout, the state should be updated so that the generated random number
      // is the new value for chamber and the spinningTheChamber should be false.

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false
      })
    }, 2000);
  }

  handleClick() {
    this.spinTheChamber()
  }


  render() {

    let text = "Pull the trigger!";
    if (this.state.spinningTheChamber) {
     text = "Spinning the chamber and pulling the trigger";
    }
    else if (this.state.chamber === this.props.bulletInChamber) {
     text = "BANG!!!";
    }  
    else {text = "You're safe!"};
    
    return (
      <div className="Roulette">
       {this.state.spinningTheChamber || <button className="PullTheTrigger" onClick={() => this.handleClick()}>Pull The Trigger</button>}
        <p>{text}</p>
      </div>
    )
  }
}



export default Roulette 