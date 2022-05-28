import React, { useContext } from 'react';
import { EcommerceContext } from '../context/context';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HoverBorderTop = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 0.4rem;
	background-color: teal;
	transition: opacity ease 0.7s;
	opacity: 0;
	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
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
	height: 40vw;
	min-width: 30vw;
	max-width: 30vw;

	color: black;
	border: 1px solid black;

	&:hover ${HoverBorderTop} {
		opacity: 1;
	}
	@media only screen and (max-width: 1200px) {
		min-width: 21rem;
		max-width: 21rem;
		height: 26rem;
	}
	@media only screen and (max-width: 1085px) {
		min-width: 46vw;
		max-width: 46vw;
		width: 46vw;
		height: 65vw;
	}
`;
const ImageContainer = styled.div`
	overflow: hidden;
	flex: 2;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
const Image = styled.img`
	height: 90%;
	width: 90%;
	z-index: 2;

	object-fit: cover;
`;

const Name = styled.h2`
	z-index: 10;
	margin: 0;
	transition: color ease 0.4s;
	cursor: pointer;
	&:hover {
		color: teal;
	}
`;
const Price = styled.h3`
	z-index: 10;
	margin: 0;
`;

const Product = ({ product }) => {
	const { selectedProduct, setSelectedProduct } =
		useContext(EcommerceContext);
	const navigate = useNavigate();
	const HandleClick = (product) => {
		setSelectedProduct(product);
		navigate(`/ProductPage/${product.id}`);
	};
	return (
		<Container>
			<HoverBorderTop />
			<ImageContainer onClick={() => HandleClick(product)}>
				<Image src={product.img} />
			</ImageContainer>
			<Name onClick={() => HandleClick(product)}>{product.name}</Name>
			<Price>
				{product.price}
				{'$'}
			</Price>
		</Container>
	);
};

export default Product;
