import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';


// create root component

const App = () => {
	// const buttenText = 'Subscribe!';
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetails 
					author="Ram"
					timeAgo="Today at 10:29 P.M "
					content="Nice blog post."
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetails 
					author="Shyam"
					timeAgo="Today at 11:29 P.M "
					content="Nice blog post man."
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetails
					author="Raman"
					timeAgo="Today at 12:29 A.M "
					content="Nice blog post, Its amazing."
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};


ReactDOM.render(
	<App />, 
	document.querySelector('#root')
);

