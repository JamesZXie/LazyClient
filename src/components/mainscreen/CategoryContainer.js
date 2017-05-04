import React, { Component } from 'react';

class CategoryContainer extends Component {
constructor(props){
  super(props)
  this.state={
    allEmails: [{sender: "", subject: "", message:""}]
  }
}  

// takes this.state.allEmails and sorts it k arrays based on sender
sortArray(){}  

  render() {
    function parseArray(index){
			return (<Category sender={index.sender} message={index.message} />);
	}

    return (
      <div>
      	
      </div>
      /*
		When isOpen is false, there are two states we can be in: isRead, or !isRead.
		When isOpen is true, isRead will not change.


		<div id= "openButton" />
		<div id = "Email" />
      */
    );
  }
}

export default CategoryContainer;

