import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { mobile, productCustom, tablet } from '../styles/responsive';

const Container = styled.div``;

const Wrapper = styled.div`
	display: flex;
	padding: 3rem;
	gap: 2rem;
	${productCustom({
		flexDirection: 'column',
	})}
	${mobile({
		padding: '.5rem',
	})}
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
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: left;
	flex-direction: column;
	gap: 1.5rem;
`;
const Image = styled.img`
	height: 90vh;
	width: 100%;
	object-fit: cover;
	${tablet({
		height: '50vh',
	})}
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
	width: 100%;
`;
const FilterContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 2rem;
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
const FilterTitle = styled.span`
	font-size: 1.5rem;
	font-weight: 500;
`;
const FilterColor = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	border: 0.5px solid black;
	cursor: pointer;
	background-color: ${(props) => props.color};
`;
const FilterSize = styled.select`
	padding: 0.5rem;
	font-size: 1.3rem;
`;
const FilterSizeOption = styled.option`
	font-size: 1.3rem;
`;

const PurchaseContainer = styled.div`
	display: flex;
	justify-content: left;
	flex-wrap: wrap;
	width: 100%;
	gap: 2rem;
`;
const AmountContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: left;
`;
const Amount = styled.span`
	width: 3rem;
	height: 3rem;
	border: 1px solid black;
	font-size: 1.5rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0.3rem;
`;
const Icon = styled.span`
	cursor: pointer;
`;
const Button = styled.button`
	background-color: teal;
	border: 1px soid black;
	outline: none;
	padding: 1rem 2rem;
	color: white;
	font-size: 1.4rem;
	font-weight: bold;
	cursor: pointer;
	transition: background ease 0.3s;

	&:hover {
		background-color: black;
	}

	${mobile({
		fontSize: '1.2rem',
		padding: '1rem 1.5rem',
	})}
`;

const ProductPage = () => {
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
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="orange" />
							<FilterColor color="lightblue" />
							<FilterColor color="yellow" />
						</Filter>

						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>

					<PurchaseContainer>
						<AmountContainer>
							<Icon>
								<AddOutlinedIcon sx={{ fontSize: 25 }} />
							</Icon>

							<Amount>1</Amount>
							<Icon>
								<RemoveOutlinedIcon sx={{ fontSize: 25 }} />
							</Icon>
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</PurchaseContainer>
				</Right>
			</Wrapper>

			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductPage;
