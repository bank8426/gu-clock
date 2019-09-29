import React, { Component } from 'react';
import './App.css';
import Clock from './Clock/Clock';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      minute : 0,
      second : 0,
      isStart : false
    };
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      const currentDateTime = new Date()
      const hour = currentDateTime.getHours()
      const minute = currentDateTime.getMinutes()
      const second = currentDateTime.getSeconds()
      //console.log(hour,minute,second)
      //console.log(this.state)
      this.setState({hour,minute,second})
    }, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <Clock hour={this.state.hour} minute={this.state.minute} second={this.state.second} />
      </div>
    )
  }
}

export default App;
