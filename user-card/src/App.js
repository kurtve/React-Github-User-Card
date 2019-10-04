import React, { Component } from 'react';
import styled from 'styled-components';


const AppWrapper = styled.div`

	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 6rem;
	}

`;


class App extends Component {
	constructor() {
		super();

		this.state = { greeting: 'Hello, World!' };
	}


	render() {
		return (
			<AppWrapper>
				<div className='main'>
					<h1>{this.state.greeting}</h1>
				</div>
			</AppWrapper>
		);
	}

}

export default App;
