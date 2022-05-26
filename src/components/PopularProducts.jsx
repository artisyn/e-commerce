import React from 'react';
import styled from 'styled-components';
import Product from './PopularProduct';
import { popularProducts } from '../data';

const Container = styled.div`
	width: 100%;
`;
const Title = styled.h2`
	margin: 2rem 1rem;
	padding-top: 1rem;
	text-align: center;
	font-size: 1.6rem;
	letter-spacing: 0.1rem;
`;
const ProductsWrapper = styled.div`
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	flex-wrap: wrap;
`;

const PopularProducts = () => {
	return (
		<Container>
			<Title>Popular Products</Title>
			<ProductsWrapper>
				{popularProducts.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</ProductsWrapper>
		</Container>
	);
};

export default PopularProducts;