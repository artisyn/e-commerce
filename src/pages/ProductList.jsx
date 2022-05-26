import React, { useContext } from 'react';
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
import SelectedCategoryProducts from '../components/Products';

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
	height: 2rem;
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
					<Select defaultValue={'color'}>
						<Option value={'color'} disabled>
							Color
						</Option>
						<Option>Green</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Brown</Option>
						<Option>Rose</Option>
						<Option>Gold</Option>
						<Option>Black</Option>
					</Select>
					<Select defaultValue={'size'}>
						<Option value={'size'} disabled>
							Size
						</Option>
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
					<Select defaultValue={'sort by'}>
						<Option value={'sort by'} disabled>
							Sort By
						</Option>
						<Option>Popular</Option>
						<Option>Price (up)</Option>
						<Option>Price (down)</Option>
						<Option>New</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<SelectedCategoryProducts />
			<PopularProducts />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductList;
