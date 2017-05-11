import React, { Component } from 'react';
import CategoryItem from './CategoryItem.js';

class Category extends Component {
constructor(props){
  super(props)
  this.state={
  	sender: props.emails[0].sender,
    emails: props.emails,
  }
}  

  render(){
  	const headerStyle = {
  		fontFamily: 'Helvetica',
  		fontSize: 20,
  	}
  	
  	const tableStyle = {
  		padding: 5,
        borderBottom: 'solid black',
        borderTop: 'solid black'
    };


  	function parseEmails(email){
			return (<CategoryItem subject={email.subject} message={email.message} />);
	}

    return (

      <div>
	      <div>
	      	<div style={headerStyle}>From {this.state.sender}</div>
	      </div>

	      <table style={tableStyle}>
	      	{this.state.emails.map(parseEmails)}
	      </table>
      </div>
      // See all + Read all buttons inserted here
    );
  }
}

export default Category;
