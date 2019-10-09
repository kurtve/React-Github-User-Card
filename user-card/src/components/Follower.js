import React from 'react';
import styled from 'styled-components';


const FollowerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	border: 1px solid orange;
	margin: 20px 10px;
	font-size: 1.8rem;

	img {
		height: 80px;
		width: auto;
		margin: 5px;
	}

	.userdata {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 5px 10px 5px 5px;
	}

`;


const Follower = (props) =>  {
	console.log('in Follower');
	console.log(props);

	return (
		<FollowerWrapper>
			<div className='avatar'>
				<img src={props.data.avatar_url} alt={props.data.name} />
			</div>

			<div className='userdata'>
				<p>User: {props.data.login}</p>
				<p>Profile:<a href={props.data.html_url}>{props.data.html_url}</a></p>
			</div>
		</FollowerWrapper>
	);
};


export default Follower;
