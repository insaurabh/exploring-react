import React from "react";

const Loading = props => {
	console.log(props);
	if (props.state) {
		return (
			<div className="ui active dimmer">
				<div className="ui indeterminate text loader">
					{props.message}
				</div>
			</div>
		);
	} else {
		return null;
	}
};

Loading.defaultProps = {
	message: "Loading..."
};
export default Loading;
