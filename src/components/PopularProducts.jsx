import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from './PopularProduct';
import { popProductsAmount, AllProducts } from '../data';

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
	const CreateIArr = (num, arr, rndArr) => {
		let maxLength = num;
		let rnd = Math.floor(Math.random() * AllProducts.length);
		let array = [...arr];
		let randomArray = [...rndArr];
		if (array.length === maxLength) return array;
		if (randomArray.includes(rnd))
			return CreateIArr(maxLength, array, randomArray);
		randomArray.push(rnd);
		array = [...array, rnd];
		return CreateIArr(maxLength, array, randomArray);
	};

	const [randomIArr, setRandomIArr] = useState(
		CreateIArr(popProductsAmount, [], [])
	);

	const [popularArray, setPopularArray] = useState([
		...randomIArr.reduce((acu, el) => {
			return [...acu, AllProducts[el]];
		}, []),
	]);

	return (
		<>
			{popularArray.length === 0 ? (
				<h2>No Popular Products</h2>
			) : (
				<Container>
					<Title>Popular Products</Title>
					<ProductsWrapper>
						{popularArray.map((product) => (
							<Product key={product.id} product={product} />
						))}
					</ProductsWrapper>
				</Container>
			)}
		</>
	);
};

export default PopularProducts;
