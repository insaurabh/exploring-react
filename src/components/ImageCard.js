import React from 'react';

class ImageCard extends React.Component {

	render() {
		const { description, urls, created_at, user } = this.props.image;
		return (
			<div className="ui card">
				<div className="image">
					<img 
						src={urls.thumb}
						alt={description}
					/>
				</div>
				<div className="content">
					<div className="meta">
						<span className="date">{created_at}</span>
					</div>
					<div className="description">
						{description}
					</div>
				</div>
				<div className="extra content">
					Photo By : {user.first_name}
				</div>
			</div>
		);
	}
}


export default ImageCard;
