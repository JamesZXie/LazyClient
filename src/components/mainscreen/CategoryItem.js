import React, { Component } from 'react';


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


// use table (css) to style the render

  	render() {

      const self = this;

      const tdStyle = {
        fontFamily: 'Helvetica'
      };

      const buttonStyle={

        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '15 32',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: 16,

      }
      
      function toggleIsOpen(){
        var newIsOpen = !self.state.isOpen;
        self.setState({isOpen: newIsOpen});
      }

  		if (this.state.isOpen) {
  			return(
    				<tr onClick={this.toggleIsOpen}>
                <td style={{...tdStyle, width:'15%'}} colSpan='2'>

                {this.state.subject}
                  <br/>
                  <br/>
                {this.state.message}
                  <br/>
                  <br/>
                </td>
                  
                <td style={{...tdStyle, width: '1%'}}>
                  <button style={buttonStyle} onClick={toggleIsOpen}>^</button>
                </td>              
            </tr>
  			)
  		}
  		else {
	    	return (
		      		<tr onClick={this.toggleIsOpen}>
                <td style={{...tdStyle, width:'5%'}}>{this.state.subject}</td>
  		      		<td style={{...tdStyle, width: '10%'}}>{this.state.message.substr(0,23)}...</td>
                
                <td style={{...tdStyle, width: '1%'}}>
                  <button style={buttonStyle} onClick={toggleIsOpen}>v</button>
                </td>
              
              </tr>
	    	);
    	}
  	}
}

export default CategoryItem;
