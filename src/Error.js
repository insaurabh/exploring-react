import React from 'react';

const Error = (props) => {
  return (
	<div className="ui error message">
		<i className="close icon"></i>
		<div className="header">
			There were some errors with your submission
		</div>
		<ul className="list">
			<li>{props.message}</li>
		</ul>
	</div>
  );
}

Error.defaultProps = {
  message: 'Error...'
}

export default Error;