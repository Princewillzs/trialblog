import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

function Service(props) {
	// let {removePost} = props
	return (
		<div>
			<Card className="mainH">
				<CardImg top width="100%" src={props.services.img} alt="Card image" />
				<CardBody>
					<CardTitle>
						<strong>{props.services.title}</strong>
					</CardTitle>
					<CardText className="ctext">{props.services.post}</CardText>
					{/* <Button onClick={this.removePost(id)}>Delete</Button> */}
				</CardBody>
			</Card>
		</div>
	);
}

export default Service;
