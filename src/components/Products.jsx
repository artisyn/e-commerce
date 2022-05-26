import React, { useContext } from 'react';
import styled from 'styled-components';
import { EcommerceContext } from '../context/context';
import { AllProducts } from '../data';
import CategoryProduct from './Product';

const Container = styled.div`
	width: 100%;
`;
const ProductsWrapper = styled.div`
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	flex-wrap: wrap;
`;

const Products = () => {
	const { selectedCategory } = useContext(EcommerceContext);
	// const productArray = AllProducts.filter(
	// 	(el) => el.categorie === selectedCategory
	// );

	return (
		<Container>
			<ProductsWrapper>
				{AllProducts.filter(
					(el) => el.categorie === selectedCategory
				).map((product) => (
					<CategoryProduct key={product.id} product={product} />
				))}
			</ProductsWrapper>
		</Container>
	);
};

export default Products;
