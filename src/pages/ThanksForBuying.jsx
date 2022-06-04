import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import { tablet } from '../styles/responsive';

const Container = styled.div`
	padding-top: 7rem;
	${tablet({ paddingTop: '5rem' })}
`;
const Wrapper = styled.div`
	min-height: 70vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 2rem;
	flex-direction: column;
	gap: 1rem;
`;
const Title = styled.h1`
	margin: 0;
	text-align: center;
`;

const ThanksForBuying = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>Thank you for choosing us! We appreciate it.</Title>
				<Title>BTW this store is just a Demo !</Title>
			</Wrapper>

			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ThanksForBuying;
