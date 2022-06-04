import React, { useContext } from 'react';
import styled from 'styled-components';
import { EcommerceContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import { desktop, tablet, mobile } from '../styles/responsive';

const Container = styled.div`
	cursor: pointer;
	border: 1px solid black;
	position: relative;
	padding: 0.5rem;
	min-height: 27vw;
	min-width: 20vw;
	max-height: 27vw;
	max-width: 20vw;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	${desktop({
		minHeight: '37vw',
		minWidth: '30vw',
		maxHeight: '37vw',
		maxWidth: '30vw',
	})}
	${tablet({
		minHeight: '47vw',
		minWidth: '40vw',
		maxHeight: '47vw',
		maxWidth: '40vw',
	})}
    ${mobile({
		minHeight: '18rem',
		minWidth: '12rem',
		maxHeight: '18rem',
		maxWidth: '12rem',
	})}
`;
const Title = styled.h2`
	flex: 1;
	margin: 0;
	${desktop({
		fontSize: '1.1rem',
	})}
`;

const ImageContainer = styled.div`
	/* flex: 6; */
	border: 1px solid black;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	min-height: 100%;
	width: 100%;
`;
const Image = styled.img`
	min-height: 25vw;
	max-width: 100%;
	object-fit: cover;
	object-position: center;
	${desktop({
		minHeight: '37vw',
	})}
	${tablet({
		minHeight: '47vw',
	})}
	${mobile({
		minHeight: '18rem',
	})}
`;
const FoundItem = ({ item }) => {
	const { selectedProduct, setSelectedProduct } =
		useContext(EcommerceContext);
	const navigate = useNavigate();
	const HandleClick = () => {
		setSelectedProduct(item);
		navigate(`/ProductPage/${item.id}`);
	};

	return (
		<Container onClick={HandleClick}>
			<Title>{item.name.substring(0, 10) + '...'}</Title>
			<ImageContainer>
				<Image src={item.img} />
			</ImageContainer>
		</Container>
	);
};

export default FoundItem;
