import React, { useState } from 'react';
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
const MessageContainer = styled.div`
	opacity: 0;
	min-height: 1.2rem;
	transition: all ease 1s;
	opacity: ${(props) => props.opacity};
`;

const Newsletter = () => {
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');
	const [opacity, setOpacity] = useState(0);
	const HandleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const HandleClick = () => {
		if (email.length === 0) {
			setMessage('Enter Your Email');
			setOpacity(1);
			setTimeout(() => {
				setOpacity(0);
			}, 5000);
			return;
		}
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setMessage('Email must be valid');
			setOpacity(1);
			setTimeout(() => {
				setOpacity(0);
			}, 5000);
			return;
		}

		setMessage('Thank You For Subscribtion !');
		setOpacity(1);
		setEmail('');
		setTimeout(() => {
			setOpacity(0);
		}, 5000);
	};
	return (
		<Container>
			<Title>Newsletter</Title>
			<Description>
				Sign up for Our Newsletter, to stay fashionable all the time.
			</Description>
			<InputContainer>
				<Input
					placeholder="Your Email..."
					value={email}
					onChange={HandleEmailChange}
				/>
				<Button onClick={HandleClick}>
					<SendOutlinedIcon />
				</Button>
			</InputContainer>
			<MessageContainer opacity={opacity}>{message}</MessageContainer>
		</Container>
	);
};

export default Newsletter;
