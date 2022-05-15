import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div``;

const Wrapper = styled.div`
	display: flex;
	/* align-items: center;
	justify-content: center; */
	padding: 1rem;
`;
const Left = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	justify-content: center;
	align-items: center;
`;
const Right = styled.div`
	flex: 1;
	height: 100%;
	border: 2px solid green;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: left;
	flex-direction: column;
	gap: 1rem;
`;
const Image = styled.img`
	height: 90vh;
	max-width: 100%;
	object-fit: cover;
`;

const Title = styled.h1`
	width: 100%;
	font-weight: 300;
	font-size: 3rem;
	text-align: left;
`;
const Desc = styled.div`
	font-size: 1.3rem;
	letter-spacing: 0.05rem;
`;
const Price = styled.div`
	font-size: 2rem;
	font-weight: bold;
	text-align: left;
	/* border: 1px solid black; */
	width: 100%;
`;

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />

			<Wrapper>
				<Left>
					<Image src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
				</Left>
				<Right>
					<Title>Jack Rose Peach</Title>
					<Desc>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Harum asperiores exercitationem expedita autem voluptas
						!
					</Desc>
					<Price>34 €</Price>
				</Right>
			</Wrapper>

			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
