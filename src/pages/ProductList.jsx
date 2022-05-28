import React, { useContext, useState, useEffect } from 'react';
import { EcommerceContext } from '../context/context';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import PopularProducts from '../components/PopularProducts';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../styles/responsive';
import { IoOptions } from 'react-icons/io5';
import { BiSort } from 'react-icons/bi';
import Products from '../components/Products';

const Container = styled.div``;
const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Title = styled.h1`
	margin: 1rem;
`;
const Filter = styled.div`
	margin: 1rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	z-index: 10;
	${mobile({
		gap: '0.2rem',
	})}
`;
const FilterText = styled.span`
	font-size: 1.2rem;
	font-weight: 600;
`;
const Text = styled.span`
	${mobile({
		display: 'none',
	})}
`;
const Select = styled.select`
	height: 2.5rem;
	padding: 0.5rem;
`;
const Option = styled.option``;

// mobile

const Icon = styled.span`
	font-size: 1.5rem;
	display: none;
	${mobile({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	})}
`;

const ProductList = () => {
	const { selectedCategory, setSelectedCategory } =
		useContext(EcommerceContext);
	const [color, setColor] = useState('');
	const [size, setSize] = useState('');
	const [sortBy, setSortBy] = useState('');

	const HandleColorChange = (e) => {
		setColor(e.target.value);
	};
	const HandleSizeChange = (e) => {
		setSize(e.target.value);
	};
	const HandleSortBy = (e) => {
		setSortBy(e.target.value);
	};
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>{selectedCategory.toUpperCase()}</Title>
			<FilterContainer>
				<Filter>
					<FilterText>
						<Text>Filter Products</Text>

						<Icon>
							<IoOptions />
						</Icon>
					</FilterText>
					<Select onChange={HandleColorChange} defaultValue={'color'}>
						<Option value={'color'}>Color</Option>
						<Option>Green</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Pink</Option>
						<Option>Orange</Option>
						<Option>Black</Option>
						<Option>White</Option>
					</Select>
					<Select onChange={HandleSizeChange} defaultValue={'size'}>
						<Option value={'size'}>Size</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
						<Option>XXL</Option>
						<Option>XXXL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>
						<Text>Sort Products</Text>

						<Icon>
							<BiSort />
						</Icon>
					</FilterText>
					<Select onChange={HandleSortBy} defaultValue={'sort by'}>
						<Option value={'sort by'} disabled>
							Sort By
						</Option>
						<Option>Popular</Option>
						<Option>Price (up)</Option>
						<Option>Price (down)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products color={color} size={size} sortBy={sortBy} />
			<PopularProducts />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductList;
