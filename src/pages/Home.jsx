import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import PopularProducts from '../components/PopularProducts';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { tablet } from '../styles/responsive';

const Container = styled.div`
	// nav height
	padding-top: 7rem;
	${tablet({ paddingTop: '5rem' })}
`;

const Home = () => {
	const footerRef = useRef(null);

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Slider />
			<Categories />
			<PopularProducts />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Home;
