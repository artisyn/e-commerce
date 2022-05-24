import React from 'react';
import styled from 'styled-components';

const WishListItem = styled.div`
	height: 6rem;
	width: 6rem;
	border-radius: 50%;
	overflow: hidden;
	background-color: white;
`;
const WishPicture = styled.img`
	max-height: 100%;
	object-fit: cover;
	object-position: center;
`;

const WishItem = (data) => {
	return (
		<WishListItem>
			<WishPicture src={data.picture} />
		</WishListItem>
	);
};

export default WishItem;
