import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

function Partners(props) {
	return (
		<div>
			<Card className="mainH">
				<CardImg top width="100%" src={props.partner.img} alt="Card image" />
				<CardBody>
					<CardTitle>
						<strong>{props.partner.title}</strong>
					</CardTitle>
					<CardText className="ctext">{props.partner.post}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

export default Partners;
