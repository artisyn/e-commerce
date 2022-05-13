import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	flex: 1;
	height: 70vh;
	background: url(${(props) => props.background}) center center no-repeat;
	background-size: 35rem;
	transition: background ease-out 1s;

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
	return (
		<Container background={item.img}>
			{/* <Image src={item.img} /> */}
			<Info>
				<Title>{item.title}</Title>
				<Button>SHOP NOW</Button>
			</Info>
		</Container>
	);
};

export default CategoryItem;