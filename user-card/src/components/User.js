import React from 'react';
import styled from 'styled-components';


const UserWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	border: 1px solid blue;
	margin: 20px 10px;
	font-size: 1.8rem;

	h3 {
		font-size: 2.6rem;
		margin: 10px;
	}

	p {
		margin: 5px;
	}

	img {
		height: 200px;
		width: auto;
		margin: 5px;
	}

	.timestamp {
		font-size: 1.4rem;
		font-style: italic;
	}


`;


const User = (props) =>  {
	console.log('in User');
	console.log(props);

	if (props.username === '') {
		return (
			<UserWrapper>
				<h3>Enter a Github user handle to display results!</h3>
			</UserWrapper>			
		);
	}


	return (
		<UserWrapper>
			<h3>Handle: {props.data.login}</h3>

			<div className='avatar'>
				<img src={props.data.avatar_url} alt={props.data.name} />
			</div>

			<div>
				<p>Name: {props.data.name}</p>
				<p>Github profile:<a href={props.data.html_url}>{props.data.html_url}</a></p>
				<p>Location: {props.data.location}</p>
				<p>Followers: {props.data.followers}</p>
				<p>Following: {props.data.following}</p>
				<div className='timestamp'>
					<p>Created: {props.data.created_at}</p>
					<p>Updated: {props.data.updated_at}</p>
				</div>
			</div>
		</UserWrapper>
	);
};


export default User;
