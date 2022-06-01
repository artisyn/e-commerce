import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	font-size: 2rem;
	font-weight: bold;
	color: black;
	cursor: pointer;
`;
const HighlitedContainer = styled.span`
	font-size: 2rem;
	font-weight: bold;
	text-decoration: underline;
	color: #474747;
`;

const PaginationNumbers = ({ currentPage, num, setCurrentPage }) => {
	return (
		<Container onClick={() => setCurrentPage(num)}>
			{num === currentPage ? (
				<HighlitedContainer>{num}</HighlitedContainer>
			) : (
				num
			)}
		</Container>
	);
};

export default PaginationNumbers;
