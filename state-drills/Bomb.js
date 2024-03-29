import React from 'react';

class Bomb extends React.Component {
    constructor(props) { super(props) }
    state = {
        count: 0
    }

    componentDidMount() {

        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    counter() {
        const { count } = this.state
        if (count >= 8) {
            clearInterval(this.interval)
            return 'BOOM!'
        }
        else if (count % 2 === 0) {
            return 'tick'
        }
        else if (count % 2 !== 0) {
            return 'tock'
        }
    }


    render() {
        return (
            <div className="Bomb">
                <p>{this.counter()}</p>
            </div>
        )
    }
}



export default Bomb 