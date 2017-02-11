import React, { Component } from 'react';
import ListItem from "./ListItem"
import './App.css';

class App extends Component {
state={
  item:null,
  initialItems:[]
}
  __handleClick(){
     this.setState({
       item:this.refs.enter.value
     });
     this.refs.enter.value='';
  }
  componentWillMount(){
    this.setState({
      initialItems:["hi","all"]
    })

  }
  render() {
    return (
        <div>
            <h1>Welcome</h1>
         <input type="text" ref="enter"/>
         <button onClick={this.__handleClick.bind(this)}>Add</button>
           <ListItem
           actionItem={this.state.item}
           initialItems={this.state.initialItems}
            />
        </div>
    );
  }
}

export default App;
