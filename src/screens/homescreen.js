import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class HomeScreen extends Component{
	constructor(props){
		super(props);
		this.state={};
	}


	render(){

		return(

			<div style={{flex: 1, flexDirection: 'horizontal'}}>
				<Sidebar style={{flex: 1, flexDirection: 'column'}}/>
			</div>

			<div style={{flex: 1, flexDirection: 'horizontal'}}>
				<TopBar />
				<Categories />
			</div>	

			)
	}



}