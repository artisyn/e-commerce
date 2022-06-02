import React, { useState } from 'react';
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
const Wrapper = styled.div``;
const Title = styled.h1`
	text-align: center;
`;
const Found = styled.div``;
const NotFound = styled.div``;

const SearchResults = () => {
	const [searchSuccessful, setSearchSuccessful] = useState(false);
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				{searchSuccessful ? (
					<Found>
						{' '}
						<Title>Your Search Results</Title>{' '}
					</Found>
				) : (
					<NotFound>
						<Title>
							Sorry, we didn't find anything. Please try again.
						</Title>
					</NotFound>
				)}
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default SearchResults;
