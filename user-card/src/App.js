import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import User from './components/User.js';
import UserForm from './components/UserForm.js';


const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid green;

	margin-top: 30px;

	h1 {
		border: 1px solid red;
		font-size: 5rem;
		padding-bottom: 10px;
	}

`;


class App extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			data: {},
			followers: []
		};

		console.log('in App constructor');
		console.log(this.state);
	}


	componentDidMount() {
		if (this.state.username !== '') {
			this.fetchProfile(this.state.username);
		}
	}


	componentDidUpdate(prevProps, prevState) {
		if ((prevState.username !== this.state.username) && (this.state.username !== '')) {
			this.setState({ data: {}, followers: [] });
			this.fetchProfile(this.state.username);
		}
	}


	setUser = (user) => {
		this.setState({
			username: user
		});
	};


	fetchProfile = (username) => {
		axios.get(`https://api.github.com/users/${username}`)
			.then(result => {
				console.log('in fetchProfile');
				console.log(result);

				this.setState({...this.state, data: result.data});

				// successfully got user -- now get followers
				this.fetchFollowers(username);
			})
			.catch(error => {
				console.log(error);
			});	
	};


	fetchFollowers = (username) => {
		axios.get(`https://api.github.com/users/${username}/followers`)
			.then(result => {
				console.log('in fetchFollowers');
				console.log(result);

				this.setState({...this.state, follower: result.data});
			})
			.catch(error => {
				console.log(error);
			});	
	};


	render() {
		return (
			<AppWrapper>
				<h1>GitHub User Lookup</h1>

				<UserForm setUser={this.setUser} />

				<User username={this.state.username} data={this.state.data} />
			</AppWrapper>
		);
	}

}

export default App;
