import React, { useState, useEffect, useContext } from 'react';
import { EcommerceContext } from '../context/context';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import FoundItem from '../components/FoundItem';
import { tablet } from '../styles/responsive';

const Container = styled.div`
	padding-top: 7rem;
	${tablet({ paddingTop: '5rem' })}
`;
const Wrapper = styled.div``;
const Title = styled.h1`
	text-align: center;
`;
const Found = styled.div`
	padding: 1rem;
`;
const FoundItemsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
`;
const NotFound = styled.div`
	padding: 1rem;
`;
// add author to footer

const SearchPage = () => {
	const { searchResults } = useContext(EcommerceContext);
	const [searchSuccessful, setSearchSuccessful] = useState(false);
	useEffect(() => {
		if (searchResults.length === 0 || !searchResults) {
			setSearchSuccessful(false);
			return;
		}

		setSearchSuccessful(true);
	}, [searchResults]);

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				{searchSuccessful ? (
					<Found>
						<Title>Your Search Results</Title>
						<FoundItemsContainer>
							{searchResults.map((el) => (
								<FoundItem key={el.id} item={el} />
							))}
						</FoundItemsContainer>
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

export default SearchPage;
