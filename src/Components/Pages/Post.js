import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

function Post(props) {
	return (
		<div>
			<Card className="mainH mt-2">
				<CardImg top width="100%" src={props.details.img} alt="Card image" />
				<CardBody>
					<CardTitle>
						<strong>{props.details.title}</strong>
					</CardTitle>
					<CardText className="ctext">{props.details.post}</CardText>
					<Button onClick={props.removePost1}>Delete</Button>
				</CardBody>
			</Card>
		</div>
	);
}

export default Post;
