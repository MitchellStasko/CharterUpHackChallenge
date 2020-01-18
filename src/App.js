import React, { Component } from 'react';
import './App.css';
import Inputs from './components/Inputs'
import QuoteButton from './components/QuoteButton'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        inputScreen: true,
        quoteScreen: false
    }
  }

  changeToQuote = () => {
    this.setState({
        ...this.state,
        inputScreen: false,
        quoteScreen: true
    })
  }
  render(){
    return (
      <div>
        <h1>
          Quote Calculator
        </h1>
        {this.state.inputScreen && <Inputs />}
        <div>
          <QuoteButton quoteSwitch = {this.changeToQuote}/>
        </div>
      </div>
    );
  }
}

export default App;
