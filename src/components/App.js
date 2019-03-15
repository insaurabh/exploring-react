import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Loading from "./Loading";

class App extends React.Component {
	state = { images: [], isLoading: true };

	getImages = term => {
		console.log("App.js getImages called");
		axios
			.get("https://api.unsplash.com/search/photos", {
				params: {
					query: term
				},
				headers: {
					Authorization:
						"Client-ID 997c5d51237e8b9996fe2da32e433239a757e4611dfff1dd17ed579ae9b9f128"
				}
			})
			.then(response => {
				console.log(
					`isLoading  previous value ${this.state.isLoading}`
				);

				this.setState({ isLoading: false });
				console.log(`1 isLoading ${this.state.isLoading}`);
				this.setState({ images: response.data.results });
				console.log(`2 isLoading ${this.state.isLoading}`);
			});
	};

	onSearchSubmit = term => {
		this.getImages(term);
	};

	componentDidMount() {
		console.log("app.js componentDidMount");
		this.getImages("code");
	}

	render() {
		console.log("app.js render called");

		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<Loading state={this.state.isLoading} />
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
