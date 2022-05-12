import React from 'react';
import styled from 'styled-components';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container = styled.div`
	flex: 1;
	min-width: 17rem;
	height: 21rem;
`;
const Circle = styled.div``;
const Image = styled.img`
	height: 75%;
	width: 100%;
	object-fit: cover;
`;
const Info = styled.div``;
const Icon = styled.div``;

const Product = ({ product }) => {
	return (
		<Container>
			<Circle />
			<Image src={product.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlinedIcon />
				</Icon>
				<Icon>
					<SearchOutlinedIcon />
				</Icon>
				<Icon>
					<FavoriteBorderOutlinedIcon />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
