import React, { Component } from 'react';
import Category from './Category';

class CategoryContainer extends Component {
constructor(props){
  super(props)
  this.state={
    allEmails: [
    [{sender: "James", subject: "Hi", message:"Hello World Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"},
    {sender: "James", subject: "Hi2", message:"Hello World"},
    {sender: "James", subject: "Hi3", message:"Hello World"},
    {sender: "James", subject: "Hi4", message:"Hello World"},
    {sender: "James", subject: "Hi5", message:"Hello World"}],
    [{sender: "Jerry", subject: "No", message:"Hello World"},
    {sender: "Jerry", subject: "No1", message:"Hello World"}],
    [{sender: "Sherry", subject: "Yes", message:"Hello World"}]
    ]
  }
}  

  render() {

    function parseCategories(Email){
			return (
				<div>
					<Category emails={Email} />
					<br/>
				</div>	
			);
	}

	const divStyle = {
		margin: 25,
		width: 450,
	}

    return (
      <div style={{flex:1, alignItems: 'center'}}>
	      <div style={divStyle}>
	      	{this.state.allEmails.map(parseCategories)}
	      </div>
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

