import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { EcommerceContext } from '../context/context';
import { AllProducts } from '../data';
import CategoryProduct from './Product';
import { mobile, tablet } from '../styles/responsive';
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

const Products = ({ color, size, sortBy }) => {
	const { selectedCategory } = useContext(EcommerceContext);
	const [totalProductsPerPage, setTotalProductsPerPage] = useState(8);
	const [currentPage, setCurrentPage] = useState(1);

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

	const CalculatePages = (arr, amount) => {
		if (arr === amount) return 1;
		if (arr < amount) return 1;
		if (arr > amount && arr % amount === 0) return Math.floor(arr / amount);
		if (arr > amount) return Math.floor(arr / amount) + 1;
	};
	// get total pages number
	const [totalPages, setTotalPages] = useState(
		CalculatePages(productArray.length, totalProductsPerPage)
	);
	// update every time productArray changes
	useEffect(() => {
		setTotalPages(
			CalculatePages(productArray.length, totalProductsPerPage)
		);
	}, [productArray]);

	const TotalPagesArray = () => {
		let arr = [];
		for (let i = 0; i < totalPages; i++) {
			arr.push(i + 1);
		}
		return arr;
	};

	// create array for page numbers
	const [pageNumbers, setPageNumbers] = useState(TotalPagesArray);
	// update every time totalPages changes
	useEffect(() => {
		setPageNumbers(TotalPagesArray);
	}, [totalPages]);
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

	// setPaginatedArray();

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

	useEffect(() => {
		if (!color && !size) return;

		const HandleFilter = (color1, size1) => {
			let filteredArr = [...initialArray];

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
				console.log(filteredArr);
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

	// Pagination
	const HandlePagination = (array) => {
		if (totalPages <= 1) return array;
		// pagination;
		if (totalPages > 1) {
			if (currentPage === totalPages) {
				const start =
					currentPage * totalProductsPerPage - totalProductsPerPage;
				const end = productArray.length;
				return [...productArray.slice(start, end)];
			}
			const start =
				currentPage * totalProductsPerPage - totalProductsPerPage;
			const end = currentPage * totalProductsPerPage;

			return [...productArray.slice(start, end)];
		}
	};

	// creating paginated array
	const [paginatedArray, setPaginatedArray] = useState(
		HandlePagination(productArray)
	);
	// updating paginated array
	useEffect(() => {
		setPaginatedArray(HandlePagination(productArray));
	}, [currentPage, productArray]);

	return (
		<Container>
			<ProductsWrapper>
				{productArray.length !== 0 ? (
					paginatedArray.map((product) => (
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
					{pageNumbers.map((el) => (
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
