import './Base.css';
import React from 'react';
import ReactDOM from 'react-dom';

const DetailCard = (props) => {
	return (
	<div className="ui card center">
		<i className="center massive map marker alternate icon"></i>
		<div className="content">Lattitude :: { props.lat }</div>
	</div>
	);
};


export default DetailCard;