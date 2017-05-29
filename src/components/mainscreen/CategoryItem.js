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
        fontFamily: 'Helvetica',
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

      function toggleIsRead(){
        var newIsRead = !self.state.isRead;
        self.setState({isRead: newIsRead});
      }

  		if (this.state.isOpen) {
  			return(
    				<tr>
                <td style={{...tdStyle, width:'32%'}} colSpan='2'>

                {this.state.subject}
                  <br/>
                  <br/>
                {this.state.message}
                  <br/>
                  <br/>
                </td>
                  
                <td style={{...tdStyle, verticalAlign: 'top', width: '1%', textAlign: 'center',}}>
                  <button style={buttonStyle} onClick={toggleIsOpen}>^</button>
                </td>              
            </tr>
  			)
  		}
      else{
        if (this.state.isRead)
        {
          return(
              <tr style={{color: 'WhiteSmoke', }}>
                <td onClick={toggleIsRead} style={{...tdStyle, width:'5%'}}>{this.state.subject.substr(0,16)}...</td>
                <td onClick={toggleIsRead} style={{...tdStyle, width: '10%'}}>{this.state.message.substr(0,23)}...</td>
                
                <td style={{...tdStyle, width: '1%',textAlign: 'center',}}>
                  <button style={{...buttonStyle, backgroundColor:'black',}}>v</button>
                </td>
              
              </tr>
            );
        }
        else
        {
          return(  
              <tr>
                <td onClick={toggleIsRead} style={{...tdStyle, width:'5%'}}>{this.state.subject.substr(0,16)}...</td>
                <td onClick={toggleIsRead} style={{...tdStyle, width: '10%'}}>{this.state.message.substr(0,23)}...</td>
                
                <td style={{...tdStyle, width: '1%',textAlign: 'center',}}>
                  <button style={buttonStyle} onClick={toggleIsOpen}>v</button>
                </td>
              
              </tr>
            );
        }

      }

  		/*else {
	    	return (
		      		<tr>
                <td style={{...tdStyle, width:'5%'}}>{this.state.subject}</td>
  		      		<td style={{...tdStyle, width: '10%'}}>{this.state.message.substr(0,23)}...</td>
                
                <td style={{...tdStyle, width: '1%'}}>
                  <button style={buttonStyle} onClick={toggleIsOpen}>v</button>
                </td>
              
              </tr>
	    	);
    	}*/
  	}
}

export default CategoryItem;
