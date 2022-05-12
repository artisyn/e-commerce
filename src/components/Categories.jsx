import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: space-between;
	width: 100vw;
	gap: 1rem;
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
