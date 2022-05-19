import React from 'react';
import styled from 'styled-components';
import { tablet } from '../styles/responsive';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: center;
	width: 100vw;
	gap: 1rem;
	flex-wrap: wrap;
`;

const Categories = () => {
	return (
		<Container>
			{categories.map((item) => (
				<CategoryItem key={item.id} item={item} />
			))}
		</Container>
	);
};

export default Categories;
