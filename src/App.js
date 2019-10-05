import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap';
import NavHead from './Components/Layout/Nav';
import Home from './Components/Pages/Home';
import Footer from './Components/Layout/Footer';
import Slider from './Components/Pages/Slider';

class App extends Component {
	render() {
		//let article = this.state.Article1;
		// 	return (
		// 		<Col sm="4">
		// 			<Posts article1={row.img} post={row.post} key={row.id} />
		// 		</Col>
		// 	);
		// });
		return (
			<div>
				<NavHead />
				<Container>
					<Slider />
					<Row>
						<Home />
					</Row>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default App;
