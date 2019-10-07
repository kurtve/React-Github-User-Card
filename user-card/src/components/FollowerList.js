import React from 'react';
import styled from 'styled-components';

import Follower from './Follower.js';


const FLWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h3 {
		font-size: 2.4rem;
		margin: 10px;
	}

	li {
		margin: 10px;
	}

`;


const FollowerList = (props) =>  {
	return (
		<FLWrapper>
			<h3>Followers:</h3>
			<ul>
				{props.followers.map(follower => {
					return (
						<li key={follower.id}>
							<Follower data={follower} />
						</li>
					);
				})}
			</ul>
		</FLWrapper>
	);
};


export default FollowerList;
