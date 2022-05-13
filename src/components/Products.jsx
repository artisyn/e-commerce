import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../data';

const Container = styled.div`
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;

	gap: 1rem;
	flex-wrap: wrap;
`;

const Products = () => {
	return (
		<Container>
			{popularProducts.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</Container>
	);
};

export default Products;
