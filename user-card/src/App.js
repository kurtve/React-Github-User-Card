import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 6rem;
	}

	h3 {
		font-size: 3rem;
	}

	img {
		height: 100px;
		width: auto;
		margin: 5px;
	}

`;


class App extends Component {
	constructor() {
		super();

		this.state = {
			breed: 'husky',
			images: []
		};
	}


	componentDidMount() {
		this.fetchDogs();
	}


	componentDidUpdate(prevProps, prevState) {
		if (prevState.breed !== this.state.breed) {
			this.setState({images: []});
			this.fetchDogs();
		}
	}


	handleChange = (event) => {
		this.setState({
			breed: event.target.value
		});
	};


	fetchDogs = () => {
		axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
			.then(result => {
				this.setState({...this.state, images: result.data.message});
			})
			.catch(error => {
				console.log(error);
			});	
	}


	render() {
		return (
			<AppWrapper>
				<div className='main'>
					<h1>Dogs!</h1>
					<h3>Breed: {this.state.breed}</h3>

					<select value={this.state.breed} onChange={this.handleChange} >
						<option value='husky'>Husky</option>
						<option value='beagle'>Beagle</option>
						<option value='corgi'>Corgi</option>
					</select>

					<div>
						{this.state.images.map((image, idx) => {
							return (
								<img key={idx}
									 src={image}
									 alt={`dog ${idx}`}
								/>
							);
						})}
					</div>

				</div>
			</AppWrapper>
		);
	}

}

export default App;
