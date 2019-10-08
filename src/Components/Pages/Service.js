import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

function Service(props) {
	// let {removePost} = props
	return (
		<Card className="mainH mt-2">
			<CardImg top width="100%" src={props.services.img} alt="Card image" />
			<CardBody>
				<CardTitle>
					<strong>{props.services.title}</strong>
				</CardTitle>
				<CardText className="ctext">{props.services.post}</CardText>
				<Button onClick={props.removePost}>Delete</Button>
			</CardBody>
		</Card>
	);
}

export default Service;
