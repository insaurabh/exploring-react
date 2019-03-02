import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line 
import faker from 'faker';
// eslint-disable-next-line 
import CommentDetails from './CommentDetails';
// eslint-disable-next-line
import ApprovalCard from './ApprovalCard';



// class based component
class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = { lat : 1 };
		
		// called once
		window.navigator.geolocation.getCurrentPosition(
		position => console.log(position),
			err => console.log(err)
		);
	}

	render() {

	return (
		<div className="ui container comments">
			Latitude : { this.state.lat }
		</div>
	);

	}
}
ReactDOM.render(
	<App />, 
	document.querySelector('#root')
);

