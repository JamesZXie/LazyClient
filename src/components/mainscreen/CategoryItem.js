import React, { Component } from 'react';
import './styles/topBar.css';

class CategoryItem extends Component {
constructor(props){
  super(props)
  this.state={
    subject: this.props.subject,
    message: this.props.message,
    isRead: false,
    isOpen: false,
  }
}  

  render() {
  	if (isOpen == true){
  		return(
  			<div>
  			Error: isOpen not implemented yet.
  			</div>

  			)
  	}

  	if (isOpen == false){
	    return (
	      // do I need to use React control flow to ensure that once the onClick for the below div activates, my DOM re-renders?
	      <div onClick={this.setState({isOpen: true})}>
		      <div style={{flex: 1, flexDirection: 'column'}}>{this.state.subject}</div>
		      <div style={{flex: 1, flexDirection: 'column'}}>{this.state.message.substr(0,10)}...</div>

		      // button that opens up the message
		      <div>
		      </div>
	      </div>
	    );
    }
  }
}

export default CategoryItem;
