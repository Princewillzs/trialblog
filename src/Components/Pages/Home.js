import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Post from './Post';
import Service from './Service';
import Partners from './Partners';

class Home extends Component {
	state = {
		Article1: [
			{
				id: 'aa1',
				img: '/img/beach.jpg',
				title: 'A Day At The Beach',
				post:
					'It was a lovely Saturday afternoon. Madison and her friends Sofia and Noa had spent the whole day at the beach. It was getting close to sunset now, and as the three of them sat together, half in, half out of the water, putting the finishing touches on a great big sandcastle, they admired the changing colors of the sky.'
			},
			{
				id: 'aa2',
				img: '/img/bike.jpg',
				title: 'The story of the Bicycle',
				post:
					' You may be surprised to learn that the humble bicycle was invented several years later than the railway locomotive! But the two-wheeler has come a long way since the day it was invented by a Scottish blacksmith, Kirkpatrick MacMillan, back (it is said) in 1839. MacMillan developed his bike from an older wheeled vehicle, called a "hobby horse".This was a wooden horse with two wheels.The rider sat on the horse, and pushed the vehicle along with his feet.It was not a very fast or safe vehicle, since it had no steering and no brakes.'
			},
			{
				id: 'aa3',
				img: '/img/camera.jpg',
				title: 'World First Digital Camera',
				post:
					'Its hard to believe that digital cameras have been in existence for over four decades, but thanks to one creative engineer, we have one of the most ubiquitous pieces of modern technology.Hear the story of the birth of our beloved cameras from the inventor himself. Way back in 1974, a young engineer at Kodak named Steven Sasson was given a project: examining the imaging performance of CCDs(charge- coupled devices).Sasson quickly realized the potential of the device, and about a year later, he took the first digital camera image ever.His device had a resolution of 0.01 megapixels, weighed 8 pounds, and took 23 seconds to record a single image to a cassette tape.'
			}
		],
		Article2: [
			{
				id: 'ba1',
				img: '/img/conf.jpg',
				title: 'How to Cover Meetings',
				post:
					'Pick a few key issues on the agenda that you will focus on. Look for the issues that are the most newsworthy, controversial or interesting. If you’re not sure what’s newsworthy, ask yourself: which of the issues on the agenda will affect the most people in the community? Chances are, the more people affected by an issue, the more newsworthy it is. For example, if the school board is about to raise property taxes 3 percent, that’s an issue that will affect every homeowner in your town.Newsworthy, Absolutely.Likewise, is the board is debating whether to ban some books from school libraries after being pressured by religious groups, that’s bound to be controversial and newsworthy.'
			}
		],
		Article3: [
			{
				id: 'ca1',
				img: '/img/nature1.jpg',
				title: 'our relationship with nature',
				post:
					'What is nature? There is a great deal of talk and endeavour to protect nature, the animals, the birds, the whales and dolphins, to clean the polluted rivers, lakes, fields and so on. Nature is not put together by thought, as religion and belief are. Nature is the tiger, that extraordinary animal with its energy, its great sense of power. Nature is the solitary tree in the field, the meadows and the grove; it is that squirrel shyly hiding behind a bough. Nature is the ant, the bee and all the living things of the earth. Nature is the river, not a particular river, whether the Ganga, the Thames or the Mississippi. Nature is those mountains, snow-clad, with dark blue valleys and range of hills meeting the sea. The universe is part of nature. One must have a feeling for all this, not destroy it, not kill for one’s pleasure or one’s table. We do kill cabbages, the vegetables we eat, but one must draw the line somewhere. If you do not eat vegetables, how will you live? So one must intelligently discern.'
			},
			{
				id: 'ca2',
				img: '/img/library.jpg',
				title: 'Telling Your Library Story',
				post:
					'"...Libraries in general, and public libraries in particular, serve a uniquely central role in the universe of stories.  Its not the only role of libraries - but it may be what you do better than any other institution.Books are only the beginning; stories are central.You need to tell your story.Whether you call it storytelling, marketing, advocacy, promotion, or community outreach, you need to make the librarys story heard in your community.  You also need to make sure you understand your communitys and patrons stories and how your library can serve those stories, both through participatory networks and other new tools and through more traditional means..."  Walt Crawford Telling the library’s story will ensure that the library in your community is seen as an essential city service.On the State Library of Iowa’s web site is a whole section on Telling the Library Story.Here you will find a plethora of information to help you with public relations.'
			},
			{
				id: 'ca3',
				img: '/img/students.jpg',
				title: 'Student Life',
				post:
					'This is the story about the student life. It gives a moral lesson to all fun-loving students who spend their valuable time in enjoying parties, movies, etc and not serious in studies because every moment of student life is valuable and time must be utilized by the students in regular studies . Now-a-days, students think that student life is very easy and full of fun today especially college life of the students. But the future of students depend upon their achievements in student life because the fun-loving students of today used smart ways to get good marks in examination which is shown in my story. This is as follows:- Ashish and Amit were studying in the college.Both were classmates as well as roommates in the hostel room.Ashish was a studious boy but Amit was a fun- loving boy and was not serious in studies.Ashish used to study regularly to get good marks in exams whereas Amit was not serious in studies and used to study “Guess Paper”, “One - day Series “, etc.to get good marks in exams.'
			}
		]
	};

	// removePost = (id) => {
	// 	const Article2 = this.state.Article2.filter((Article) => Article.id !== id);
	// 	this.setState({ Article2: Article2 });
	// };

	removePost = (personIndex) => {
		const Article2 = this.state.Article2;
		Article2.splice(personIndex, 1);
		this.setState({ Article2: Article2 });
	};

	removePost1 = (personIndex) => {
		const Article1 = this.state.Article1;
		Article1.splice(personIndex, 1);
		this.setState({ Article1: Article1 });
	};
	render() {
		let details = this.state.Article1.map((article, index) => {
			return (
				<Col>
					<Post details={article} removePost1={() => this.removePost1(index)} key={this.state.Article1.id} />
				</Col>
			);
		});

		let services = this.state.Article2.map((meeting, index) => {
			return (
				<Col>
					<Service
						key={this.state.Article2.id}
						id={this.state.Article2.id}
						removePost={() => this.removePost(index)}
						services={meeting}
					/>
				</Col>
			);
		});

		let partner = this.state.Article3.map((nature) => {
			return (
				<Col>
					<Partners partner={nature} />
				</Col>
			);
		});
		return (
			<div>
				<Container>
					<Row>{details}</Row>
					<Row>{services}</Row>
					<Row>{partner}</Row>
				</Container>
			</div>
		);
	}
}

export default Home;
