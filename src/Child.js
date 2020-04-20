import React from 'react';
import { Component, PureComponent } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentData: 0
        }
    }

    static getDerivedStateFromProps(p, state) {
        // console.warn("Hook",props,state)
        return {
            currentData : p.data*10
        }
    }

    render() {
        console.warn("Rendered Child")
        // console.warn("Hook",this.props,this.state)
        return (
            <div className="App" >
                <h1>Child Component {this.state.currentData}</h1>
            </div>
        );
    }
}

export default Child;