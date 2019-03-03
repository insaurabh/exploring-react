import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line 
import faker from 'faker';
// eslint-disable-next-line 
import CommentDetails from './CommentDetails';
// eslint-disable-next-line
import ApprovalCard from './ApprovalCard';
import DetailCard from './DetailCard';
import Loading from './Loading';




// class based component
class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = { lat : null, errorMessage: '', date: new Date() };
		
		// called once
		window.navigator.geolocation.getCurrentPosition(
		position => {
			this.setState({ lat: position.coords.latitude });
		},
		err => {
			console.log('Errors Not good');
			console.log(err)
			this.setState({ errorMessage: err.message });
		}
		);
	}

	render() {
		
		if (this.state.errorMessage && !this.state.lat) {
			return (
				<div>
					Error : { this.state.errorMessage }
				</div>
			);
		}

		if (!this.state.errorMessage && this.state.lat) {
			return (
				<DetailCard lat={this.state.lat} />
			);
		}

		return (
			<Loading />
		);
	}
}

ReactDOM.render(
	<App />, 
	document.querySelector('#root')
);

