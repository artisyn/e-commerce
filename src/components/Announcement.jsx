import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	min-height: 2.5rem;
	background-color: teal;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.3rem;
	flex-wrap: wrap;
	padding: 1rem;
	letter-spacing: 0.08rem;
`;
const Space = styled.span`
	margin: 0.5rem;
`;

const Announcement = () => {
	return (
		<Container>
			This weeks DEAL ! <Space /> Buy one, get another for free!
		</Container>
	);
};

export default Announcement;
