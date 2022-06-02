import React, { useContext } from 'react';
import styled from 'styled-components';
import { EcommerceContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Info = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	opacity: 0;
	transition: opacity ease 0.7s;
`;
const Container = styled.div`
	overflow: hidden;
	position: relative;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 21rem;
	min-width: 17rem;
	max-width: 17rem;
	border: 1px solid black;

	&:hover ${Info} {
		opacity: 1;
	}
`;
const Image = styled.img`
	height: 90%;
	width: 90%;
	z-index: 2;

	object-fit: cover;
`;

const Icon = styled.div`
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	background-color: gray;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background ease 0.3s;
	&:hover {
		background-color: #80808078;
		color: white;
	}
`;

const PopularProduct = ({ product }) => {
	const { selectedProduct, setSelectedProduct } =
		useContext(EcommerceContext);
	const navigate = useNavigate();
	const HandleClick = (product) => {
		setSelectedProduct(product);
		navigate(`/ProductPage/${product.id}`);
	};

	return (
		<Container>
			<Image src={product.img} />
			<Info>
				<Icon onClick={() => HandleClick(product)}>
					<SearchOutlinedIcon />
				</Icon>
			</Info>
		</Container>
	);
};

export default PopularProduct;
