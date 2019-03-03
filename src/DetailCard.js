import React from 'react';
import ReactDOM from 'react-dom';

// class DetailCard  extends React.Component {

// 	render() {
// 		return (
// 			<div className="ui card">
// 				<div className="content">
// 					Lat : {this.state.lat}
// 				</div>
// 			</div>
// 		);
// 	}	
	
// }

const DetailCard = (props) => {
	return (
	<div className="ui card">
		<div className="content">Lattitude :: { props.lat }</div>
	</div>
	);
};


export default DetailCard;