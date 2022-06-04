import React, { useContext, useEffect, useState } from 'react';
import { FilterFunc } from '../HelperFunctions/FilterFunc';
import { PaginationFunc } from '../HelperFunctions/PaginationFunc';
import styled from 'styled-components';
import { EcommerceContext } from '../context/context';
import { AllProducts } from '../data';
import CategoryProduct from './Product';
import { tablet } from '../styles/responsive';
import PaginationNumbers from './PaginationNumbers';

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

const Pagination = styled.div`
	margin: 2rem 0 2rem 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	background-color: #e4e3e3;
`;
const PageButton = styled.button`
	border: none;
	width: 8rem;
	height: 3rem;
	background-color: teal;
	outline: none;
	padding: 1rem 2rem;
	color: white;
	font-size: 1.4rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background ease 0.3s;

	&:hover {
		background-color: black;
	}

	${tablet({
		display: 'none',
	})}
`;
const NumContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.3rem;
`;

const Products = () => {
	// make initial array a context; ??

	const {
		selectedCategory,
		color,
		size,
		sortBy,
		currentPage,
		setCurrentPage,
		initialArray,
		setInitialArray,
	} = useContext(EcommerceContext);
	const [totalProductsPerPage, setTotalProductsPerPage] = useState(8);

	// first make initial array change depending on category

	useEffect(() => {
		setInitialArray(
			selectedCategory === 'all'
				? [...AllProducts]
				: [
						...AllProducts.filter(
							(el) => el.categorie === selectedCategory
						),
				  ]
		);
	}, [selectedCategory]);
	

	//then create array based on initial array and filter it accordingly

	const [filteredArray, setFilteredArray] = useState(
		FilterFunc(initialArray, color, size, sortBy)
	);

	// constantly update filtered array
	useEffect(() => {
		setCurrentPage(1);
		setFilteredArray(FilterFunc(initialArray, color, size, sortBy));
	}, [color, size, sortBy, initialArray]);
	

	// get paginated array, page numbers array and total pages
	let [paginatedArr, pageNumbersArr, totalPages] = PaginationFunc(
		filteredArray,
		totalProductsPerPage,
		currentPage
	);

	// update pagination

	useEffect(() => {
		[paginatedArr, pageNumbersArr, totalPages] = PaginationFunc(
			filteredArray,
			totalProductsPerPage,
			currentPage
		);
	}, [filteredArray, totalProductsPerPage, currentPage]);
	

	// Changing page related code
	const HandleNextPage = () => {
		if (currentPage === totalPages) return;
		setCurrentPage(currentPage + 1);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	const HandlePrevPage = () => {
		if (currentPage === 1) return;
		setCurrentPage(currentPage - 1);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const HandlePageChange = (el) => {
		setCurrentPage(el);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Container>
			<ProductsWrapper>
				{filteredArray.length !== 0 ? (
					paginatedArr.map((product) => (
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
			<Pagination>
				<PageButton onClick={HandlePrevPage}>Prev</PageButton>
				<NumContainer>
					{pageNumbersArr.map((el) => (
						<PaginationNumbers
							key={el}
							currentPage={currentPage}
							num={el}
							setCurrentPage={HandlePageChange}
						/>
					))}
				</NumContainer>
				<PageButton onClick={HandleNextPage}>Next</PageButton>
			</Pagination>
		</Container>
	);
};

export default Products;
