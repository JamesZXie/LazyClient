import React, { Component } from 'react';
import Login from './Login';
import CategoryContainer from './mainScreen/CategoryContainer';

class App extends Component{
constructor(props){
	super(props)
	this.state={
		isLoggedIn: false,
	}
}

	render()
	{
		function makeLoggedIn(){
			this.setState({isLoggedIn:true,})
		}
		if (this.state.isLoggedIn)
		{
			return(
				<div style={{margin: 'auto', marginTop: 100}}>
					<CategoryContainer />
				</div>)
		}
		else
		{
			return(
				<div style={{width: 260, height: 60, margin: 'auto', marginTop: 100}} onClick={makeLoggedIn.bind(this)}>
					<Login />
				</div>)
		}

	}



}

export default App;