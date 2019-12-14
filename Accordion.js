import React from 'react';


class Accordion extends React.Component {

  static defaultProps = {
    sections: [
      {
        title: this.props,
        content: this.props 
      }
    ]
  };

  state = {currentTabIndex: 0 };

  handleButtonClick = (index) => { 
    console.log('clicked');
    this.setState({
      currentTabIndex: index
    })
}



  renderButtons() {
    return this.props.sections.map((section, index) => (<button key={index} onClick = {() => this.handleButtonClick(index) }>
      {section.title}
    </button>));
  }

  renderContent() {

    const sectionContent = this.props.sections[this.state.currentTabIndex];
    return (
    <div className="Content">
      <p>
        {sectionContent.content}
      </p>
    </div>
    )
  }
  handleClick = () => {console.log('clicked')}
  render() {
    return (
      <ul>
        <li>
          {this.renderButtons()}
          <p>
            {this.props.sections.length && 
            this.renderContent()}
          </p>
        </li> 
            <button onClick = {() => this.handleClick()}>clicked</button>
      </ul>

    );

  }
}

export default Accordion;