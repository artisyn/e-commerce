import React from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Info = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	opacity: 0;
	transition: opacity ease 0.7s;
`;
const Container = styled.div`
	padding: 1rem;
	overflow: hidden;
	position: relative;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	/* height: 21rem;
	min-width: 17rem;
	max-width: 17rem; */

	height: 40vw;
	min-width: 30vw;
	max-width: 30vw;

	color: black;
	border: 1px solid black;

	&:hover ${Info} {
		opacity: 1;
	}
`;
const ImageContainer = styled.div`
	overflow: hidden;
	flex: 2;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Image = styled.img`
	height: 90%;
	width: 90%;
	z-index: 2;

	object-fit: cover;
`;

const Icon = styled.div`
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	background-color: gray;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background ease 0.3s;
	&:hover {
		background-color: #80808078;
		color: white;
	}
`;
const Name = styled.h2`
	z-index: 10;
	margin: 0;
`;
const Price = styled.h3`
	z-index: 10;
	margin: 0;
`;

const Product = ({ product }) => {
	return (
		<Container>
			<ImageContainer>
				<Image src={product.img} />
			</ImageContainer>

			<Info>
				<Icon>
					<ShoppingCartOutlinedIcon />
				</Icon>
				<Icon>
					<SearchOutlinedIcon />
				</Icon>
				<Icon>
					<FavoriteBorderOutlinedIcon />
				</Icon>
			</Info>
			<Name>{product.name}</Name>
			<Price>
				{product.price}
				{'$'}
			</Price>
		</Container>
	);
};

export default Product;
