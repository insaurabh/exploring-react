import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images : [] };

	onSearchSubmit = (term) => {
		console.log(term);
		 axios.get('https://api.unsplash.com/search/photos', {
		 	params: {
		 		query: term
		 	},
		 	headers: {
		 		Authorization: 'Client-ID 997c5d51237e8b9996fe2da32e433239a757e4611dfff1dd17ed579ae9b9f128',
		 	}
		 })
		 .then((response) => {
			 	this.setState({ images : response.data.results });
		 	});
	}

	render() {
		return (
		<div className="ui container" style={{ marginTop: '10px'}}>
			<SearchBar onSubmit={this.onSearchSubmit}/>
			<ImageList images={this.state.images} />
		</div>
		);
	}
}


export default App;
