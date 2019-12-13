import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) { super(props) }
    state = {
        who: 'World'
    }

    render() {

        return (
            <div className="HelloWorld">
                <p>Hello, {this.state.who}</p>
                <button onClick={() => this.setState({ who: 'World' })}>World</button>
                <button onClick={() => this.setState({ who: 'Friend' })}>Friend</button>
                <button onClick={() => this.setState({ who: 'React' })}>React</button>
            </div>)
    }
}

export default HelloWorld