import React, { useState, useContext } from 'react';
import { EcommerceContext } from '../context/context';

import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import { FaCcMastercard } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';
import { FaRegCreditCard } from 'react-icons/fa';
import { BiLock } from 'react-icons/bi';

const Container = styled.div``;
const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 3rem 0.5rem 0.5rem 0.5rem;
`;
const PaymentContainer = styled.div`
	border: 1px solid black;
	padding: 1rem;
	width: 40rem;
`;
const Title = styled.h2``;
const MethodContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid teal;
	font-size: 1.3rem;
`;
const Label = styled.label`
	display: flex;
	align-items: center;
`;
const Check = styled.input``;
const LogoContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
`;
const Logo = styled.span``;

const SectionTitle = styled.h3``;
const CardNumContainer = styled.div``;
const Input = styled.input`
	width: 100%;
	height: 3rem;
	border: 2px solid teal;
	border-radius: 0.2rem;
	font-size: 1.3rem;
	letter-spacing: 0.1rem;
	outline: none;
	padding-left: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const CardDetailsContainer = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	justify-content: space-between;
`;
const Left = styled.div``;
const Right = styled.div``;
const Message = styled.p`
	margin-top: 2rem;
	font-size: 1.3rem;
	font-style: italic;
	display: flex;
	align-items: center;
`;
const Button = styled.button`
	margin: 0 auto;
	height: 3rem;
	width: 100%;
	padding: 1rem 2rem;
	background-color: teal;
	border: none;
	outline: none;
	color: white;
	font-size: 1.3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background ease 0.3s;

	&:hover {
		background-color: black;
	}
`;

const Checkout = () => {
	const { checkoutPrice, setCheckoutPrice } = useContext(EcommerceContext);
	const [cardValue, setCartValue] = useState('');
	const HandleCardChange = (e) => {
		if (
			cardValue.length === 16 &&
			e.nativeEvent.inputType !== 'deleteContentBackward'
		) {
			return;
		}
		if (e.target.value < 0) return;
		setCartValue(e.target.value);
	};

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<PaymentContainer>
					<Title>Payment Method</Title>
					<MethodContainer>
						<Label>
							<Check type={'checkbox'} checked={true} disabled />
							Credit or Debit Card
						</Label>
						<LogoContainer>
							<Logo>
								<FaCcVisa />
							</Logo>
							<Logo>
								<FaCcMastercard />
							</Logo>
							<Logo>
								<FaRegCreditCard />
							</Logo>
						</LogoContainer>
					</MethodContainer>
					<SectionTitle>Card Number</SectionTitle>
					<CardNumContainer>
						<Input
							onChange={HandleCardChange}
							value={cardValue}
							type={'number'}
							placeholder="000 000 000 000"
						/>
					</CardNumContainer>

					<CardDetailsContainer>
						<Left>
							<SectionTitle>Expiry Date</SectionTitle>
							<Input placeholder="00 / 00" />
						</Left>
						<Right>
							<SectionTitle>CVV/CV</SectionTitle>{' '}
							<Input placeholder="***" />
						</Right>
					</CardDetailsContainer>
					<Message>
						<BiLock /> Your transaction is secured with SSL
						encryption
					</Message>
					<Button>Confirm</Button>
				</PaymentContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Checkout;
