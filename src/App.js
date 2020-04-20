import React from 'react';
import './App.css';
import { Component, PureComponent } from 'react';
import Child from './Child'
import Child2 from './Child2'

class App extends PureComponent {
  constructor(){
    super();
    this.state = {
      data : 10
    }
  }
  render(){
    console.warn("Rendered Parent")
    return(
      <div className = "App" >
        <h1>Component {this.state.data}</h1>
        <button onClick={()=>{this.setState({data:this.state.data+1})}}>Increment</button>
        <Child data={this.state.data}/>
        <Child2 data={this.state.data}/>
      </div>
    );
  }
}

export default App;
