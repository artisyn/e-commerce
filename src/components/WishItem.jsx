import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { EcommerceContext } from '../context/context';
import { AllProducts } from '../data';

const WishListItem = styled.div`
	max-height: 8rem;
	width: 6rem;
	display: flex;
	flex-direction: column;
	background-color: #008080;
	padding: 0.3rem;
	cursor: pointer;
	gap: 0.5rem;
`;
const Title = styled.h3`
	text-align: center;

	font-size: 0.7rem;
	margin: 0;
	color: white;
`;
const PictureContainer = styled.div`
	border: 1px solid black;
	height: 6rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

const WishPicture = styled.img`
	min-height: 100%;
	min-width: 100%;
	object-fit: cover;
	object-position: center;
`;

const WishItem = ({ item }) => {
	const { selectedProduct, setSelectedProduct } =
		useContext(EcommerceContext);
	const navigate = useNavigate();

	const HandleWishItem = (item) => {
		setSelectedProduct(AllProducts.find((el) => el.id === item.id));
		navigate(`/ProductPage/${item.id}`);
	};
	return (
		<WishListItem onClick={() => HandleWishItem(item)}>
			<Title>{item.name.substring(0, 10) + '...'}</Title>
			<PictureContainer>
				<WishPicture src={item.img} />
			</PictureContainer>
		</WishListItem>
	);
};

export default WishItem;
