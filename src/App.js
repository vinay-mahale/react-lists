import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {

  state = {
    change:false
  };

  clickHandle = () => {
    this.setState({ change: true });
  }

  render() {

    const ulStyle = {
      color: "blue"
    }

    const btnStyle = {
      backgroundColor : "lightblue"
    }

    const arr = this.props.numbers;
    
    const newArr = arr.map( (num,i) => {
      return <li key={i}>{ num } </li>
    } );

    if(this.state.change){
      btnStyle.backgroundColor = "white"
    }

    return (
      <React.Fragment>
      <ul style={ulStyle}>
        {newArr}            
      </ul>

      <button onClick={this.clickHandle} style={btnStyle}>Click Me</button>

      <h1 className="external-h1 external-underline">This text uses External Style Sheet</h1>
      </React.Fragment>


    )
  }
}
