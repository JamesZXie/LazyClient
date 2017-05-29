import React, { Component } from 'react';
import gapi_conf from '../gapi_conf';


let gapi;

class Login extends Component {
	constructor (props) {
		super(props)
		this.state = {
			buttonEnabled: false
		}
	}

	scriptAppended = false;

	loadLabels () {
		gapi.client.gmail.users.labels.list({
			userId: 'me'
		}).then(({ result }) => {
			console.log(result);
		})
	}

	onSignInChange () {
		console.log('sign in state change')
		let signedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
		if (signedIn) {
			this.loadLabels()
		}
	}

	handleClientLoad () {
		gapi = window.gapi;
		gapi.load('client:auth2', _ => {
			this.setState({ buttonEnabled: true })
		});
	}

	login () {
		console.log(this)
		gapi.client.init({
			clientId: gapi_conf.web.client_id,
			scope: 'https://www.googleapis.com/auth/gmail.labels'
		}).then(_ => {
			//gapi.auth2.getAuthInstance().isSignedIn.listen(this.props.onSignInChange);
			return gapi.client.load('gmail')
		}).then(_ => {
			gapi.auth2.getAuthInstance().isSignedIn.listen((something) => {
				console.log(something)
				//console.log('sign in?')
				//let signedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
				//gapi.client.gmail.users.labels.list({
			//		'userId': 'me'
			//	}).then(({ result }) => {
			//		console.log(result)
			//	})
			});
			if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
				this.loadLabels();
			}
			gapi.auth2.getAuthInstance().signIn();
		});

	}

	render () {
		if (!this.scriptAppended) {
	    	const scriptBullshit = document.createElement('script')
	    	scriptBullshit.src = "https://apis.google.com/js/api.js"
	    	scriptBullshit.onload = (_ => {
	    		let once = false
	    		return _ => {
	    			console.log('onload')
	    			console.log(once)
		    		if (!once) {
		    			once = true
		    			this.handleClientLoad()
		    		}
		    	}
	    	})()

	    	document.body.appendChild(scriptBullshit)
	    	this.scriptAppended = true
	    }
		
		const buttonStyle={
	        backgroundColor: '#4CAF50',
	        border: 'none',
	        color: 'white',
	        textAlign: 'center',        
	        textDecoration: 'none',
	        display: 'inline-block',
	        fontSize: 16,
	        margin: 20,
	        height: 40,
			width: 180,
     	}

		return (
			<div>
				<button style={buttonStyle} disabled={!this.state.buttonEnabled} onClick={this.login.bind(this)}>
					Login to Gmail
				</button>
			</div>
		)
	}
}

export default Login;