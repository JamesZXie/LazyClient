import React, { Component } from 'react';

class Category extends Component {
constructor(props){
  super(props)
  this.state={
  	sender: this.props.sender,
    emails:[{subject: "", message: ""}],
    
  }
}  

  render(){

  	function parseArray(index){
			return (<CategoryItem subject={index.subject} message={index.message} />);
	}

    return (

      <div>
	      <div>
	      	<h1>From {this.state.sender}</h1>
	      </div>
	      
	      <div style={{flex:1, flexDirection: 'vertical'}}>
	      	{this.state.emails.map(parseArray)}
	      </div>
      </div>
      // See all + Read all buttons inserted here
    );
  }
}

export default Category;
