import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

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
`;
const FilterText = styled.span`
	font-size: 1.2rem;
	font-weight: 600;
`;
const Select = styled.select`
	height: 2rem;
	padding: 0.5rem;
`;
const Option = styled.option``;

const ProductList = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products</FilterText>
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
					<FilterText>Sort Products</FilterText>
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
			<Products />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductList;
