import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { tablet } from '../styles/responsive';
import { EcommerceContext } from '../context/context';

const Container = styled.div`
	border: 2px solid black;
	position: relative;
	flex: 1;
	height: 70vh;
	max-width: 32rem;
	min-width: 20rem;
	min-height: 30rem;
	background: url(${(props) => props.background}) center center no-repeat;
	background-size: 35rem;
	transition: background ease-out 1s;
	${tablet({ height: '10rem' })}

	&:hover {
		background-size: 40rem;
	}
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const Info = styled.div`
	color: white;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
`;
const Title = styled.h1``;
const Button = styled.button`
	border: 2px solid white;
	padding: 1rem;
	cursor: pointer;
	background-color: transparent;
	color: white;
	font-weight: bold;

	&:hover {
		background-color: #ffffff3e;
	}
`;

const CategoryItem = ({ item }) => {
	const { selectedCategory, setSelectedCategory } =
		useContext(EcommerceContext);
	const navigate = useNavigate();
	const HandleShopNow = (title) => {
		setSelectedCategory(title.toLowerCase());
		navigate('/ProductList');
	};
	return (
		<Container background={item.img}>
			<Info>
				<Title>{item.title}</Title>
				<Button onClick={() => HandleShopNow(item.title)}>
					SHOP NOW
				</Button>
			</Info>
		</Container>
	);
};

export default CategoryItem;
