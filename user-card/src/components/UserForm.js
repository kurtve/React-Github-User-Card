import React, { Component } from 'react';
import styled from 'styled-components';


const UserFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	border: 1px solid grey;
	padding: 10px 10px 0;

	margin-top: 20px;
	width: 350px;

	p {
		font-size: 1.4rem;
	}

	.input-bar {
		display: flex;
		flex-direction: row;
		margin: 10px 0;

		width: 300px;

		button {
			width: 40px;
			height: 40px;
			border-radius: 20px;
			border: none;
			background-color: green;
			color: white;

			&:hover {
				cursor: pointer;
			}
		}

		.user-input {
			width: 230px;
			height: 30px;
			padding-left: 5px;
			margin: 5px 20px 5px 0;
		}

	}

`;


class UserForm extends Component {
	constructor() {
		super();

		this.state = { newuser: '' };
	}


	handleChange = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};


	submitHandler = (e) => {
		e.preventDefault();

		// if input field is blank, ignore the submit
		if (this.state.newuser === '') return;

		// send the user up the chain to be processed
		this.props.setUser(this.state.newuser);

		// blank out the input field
		this.setState( { newuser: '' } );
	};


	render() {

		return (
			<UserFormWrapper>			
			    <form onSubmit={this.submitHandler}>
			    	<p>Enter Github user handle:</p>
			    	<div className='input-bar'>
					    <input
					    	className='user-input'
					        onChange={this.handleChange}
					        placeholder="user handle"
					        type="text"
					        name="newuser"
					        value={this.state.newuser}
					    />
						<button type="submit">Go!</button>
					</div>
			    </form>
			</UserFormWrapper>
		);

	}
}

export default UserForm;
