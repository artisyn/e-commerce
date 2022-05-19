import React from 'react';
import styled from 'styled-components';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { tablet } from '../styles/responsive';

const Container = styled.div`
	height: 60vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	background-color: #fff3f3;
	padding: 1rem;
`;
const Title = styled.h1`
	font-size: 3.5rem;
	letter-spacing: 0.1rem;
`;
const Description = styled.div`
	font-size: 1.7rem;
	text-align: center;
`;
const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	width: 40%;

	${tablet({ width: '90%' })}
`;
const Input = styled.input`
	flex: 8;
	outline: none;
	border: none;
	border-radius: 0.5rem;
	height: 3rem;
	font-size: 1rem;
	padding-left: 1rem;
	color: gray;
`;
const Button = styled.button`
	flex: 1.5;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	border-radius: 0.5rem;
	border: none;
	outline: none;
	background-color: #6dc9e55f;
	color: white;
	cursor: pointer;
	transition: background ease 0.3s;

	&:hover {
		background-color: #6dc9e536;
		color: black;
	}
`;

const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Description>
				Sign up for Our Newsletter, to stay fashionable all the time.
			</Description>
			<InputContainer>
				<Input placeholder="Your Email..." />
				<Button>
					<SendOutlinedIcon />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
