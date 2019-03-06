import React from 'react';

const getSeason = (lat, month) => {
	if(month >2 && month < 9 ) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
}
const SeassonCard = (props) => {

	const seasson = getSeason(props.lat, new Date().getMonth());
	console.log(seasson);
	return (
	<div className="ui card">
		{ seasson }
	</div>
	);
};


export default SeassonCard;
