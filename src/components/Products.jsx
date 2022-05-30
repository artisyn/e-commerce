import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { EcommerceContext } from '../context/context';
import { AllProducts } from '../data';
import CategoryProduct from './Product';

const Container = styled.div`
	width: 100%;
	min-height: 60vh;
`;
const ProductsWrapper = styled.div`
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	flex-wrap: wrap;

	@media only screen and (max-width: 1085px) {
		display: grid;
		grid-template-columns: 1fr 1fr;

		place-content: center;
		place-items: center;
	}
`;

const BadSearch = styled.div`
	min-height: 60vh;
	display: flex;
	justify-items: center;
	align-items: flex-start;
	padding: 2rem 1rem;
`;
const BadSearchText = styled.h2`
	font-size: 1.3rem;
	font-weight: 500;
	letter-spacing: 0.06rem;
	border-bottom: 2px solid teal;
`;

const Products = ({ color, size, sortBy }) => {
	const { selectedCategory } = useContext(EcommerceContext);

	const [initialArray, setInitaialArray] = useState(
		selectedCategory === 'all'
			? [...AllProducts]
			: [...AllProducts.filter((el) => el.categorie === selectedCategory)]
	);

	const [productArray, setProductArray] = useState(
		selectedCategory === 'all'
			? [...AllProducts]
			: [...AllProducts.filter((el) => el.categorie === selectedCategory)]
	);

	useEffect(() => {
		setInitaialArray(
			selectedCategory === 'all'
				? [...AllProducts]
				: [
						...AllProducts.filter(
							(el) => el.categorie === selectedCategory
						),
				  ]
		);

		setProductArray(
			selectedCategory === 'all'
				? [...AllProducts]
				: [
						...AllProducts.filter(
							(el) => el.categorie === selectedCategory
						),
				  ]
		);
	}, [selectedCategory]);

	useEffect(() => {
		if (!color && !size) return;
		const HandleFilter = (color1, size1) => {
			let filteredArr;

			const color = color1;
			const size = size1;

			// first sort by color

			if (color && color !== 'color') {
				filteredArr = initialArray.filter(
					(el) => el.color === color.toLowerCase()
				);
			}
			// keep all colors
			if (color && color === 'color') {
				filteredArr = initialArray;
			}
			// then sort by size
			if (size && size !== 'size') {
				filteredArr = filteredArr.filter((el) =>
					el.sizes.includes(size)
				);
			}
			// keep all sizes in filtered colors
			if (size && size === 'size') {
				filteredArr = filteredArr;
			}
			// finally update productArray
			setProductArray([...filteredArr]);
		};

		HandleFilter(color, size);
	}, [color, size]);

	useEffect(() => {
		if (!sortBy) return;

		if (sortBy === 'Popular') {
			setProductArray([...productArray.sort((a, b) => a.id - b.id)]);
		}
		if (sortBy === 'Price (up)') {
			setProductArray([
				...productArray.sort((a, b) => a.price - b.price),
			]);
		}
		if (sortBy === 'Price (down)') {
			setProductArray([
				...productArray.sort((a, b) => b.price - a.price),
			]);
		}
	}, [sortBy]);

	return (
		<Container>
			<ProductsWrapper>
				{productArray.length !== 0 ? (
					productArray.map((product) => (
						<CategoryProduct key={product.id} product={product} />
					))
				) : (
					<BadSearch>
						<BadSearchText>
							Sorry, No Items found. Try To Use Different Options.
						</BadSearchText>
					</BadSearch>
				)}
			</ProductsWrapper>
		</Container>
	);
};

export default Products;
