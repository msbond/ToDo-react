import React,{Component} from "react";

class ListItem extends Component {

  state = {
    list :[]
  }

componentDidMount(){
  this.setState({
    list :this.props.initialItems
  });
}

  render(){
    this.props.actionItem &&this.state.list.push(this.props.actionItem);
    return(
   <div>
   {
     (this.state.list).map((key)=>
     <li>{key}</li>
    )
  }
   </div>
    );
  }
}

export default ListItem;
