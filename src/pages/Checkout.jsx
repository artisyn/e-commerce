import React, { useState, useContext } from 'react';
import { EcommerceContext } from '../context/context';
import { tablet } from '../styles/responsive';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';
import { FaRegCreditCard } from 'react-icons/fa';
import { BiLock } from 'react-icons/bi';
import { BsCalendarCheck } from 'react-icons/bs';
import { MdOutlineLock } from 'react-icons/md';

const Container = styled.div`
	padding-top: 7rem;
	${tablet({ paddingTop: '5rem' })}
`;
const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 3rem 0.5rem 0.5rem 0.5rem;
	flex-direction: column;
`;
const PaymentContainer = styled.div`
	border: 1px solid black;
	padding: 1rem;
	width: 40rem;
`;
const TotalPriceContainer = styled.div`
	position: relative;
	display: flex;
	gap: 1rem;
	justify-content: end;
	font-size: 1.3rem;
	font-weight: 500;
	align-items: center;
	&:after {
		content: '';
		width: 100%;
		height: 2px;
		position: absolute;
		bottom: 0;
		background-image: linear-gradient(
			to right,
			#ffffff,
			#d3dae8,
			#9bbbcf,
			#5a9dad,
			#008080
		);
	}
`;
const TotalPrice = styled.span`
	font-size: 1.5rem;
	font-weight: bold;
`;
const Title = styled.h2``;
const MethodContainer = styled.div`
	position: relative;
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: space-between;
	font-size: 1.3rem;
	&:after {
		content: '';
		width: 100%;
		height: 2px;
		position: absolute;
		bottom: 0;
		background-image: linear-gradient(
			to right,
			#ffffff,
			#d3dae8,
			#9bbbcf,
			#5a9dad,
			#008080
		);
	}
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
const CardNumContainer = styled.div`
	position: relative;
`;
const SpecialIcon = styled.span`
	position: absolute;
	left: 0.5rem;
	height: 100%;
	width: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
`;
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
	padding-left: 3rem;
`;
const InputContainer = styled.div`
	position: relative;
`;
const CardDetailsContainer = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	justify-content: space-between;
`;
const Left = styled.div`
	position: relative;
`;
const Right = styled.div`
	position: relative;
`;
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
const MsgContainer = styled.div`
	padding-top: 1rem;
	color: teal;
	font-size: 1.2rem;
`;

const Checkout = () => {
	const { checkoutPrice, setCheckoutPrice, cartItems, setCartItems } =
		useContext(EcommerceContext);
	const [cardValue, setCardValue] = useState('');
	const [sslValue, setSslValue] = useState('');
	const [dateValue, setDateValue] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();
	const HandleCardChange = (e) => {
		if (e.nativeEvent.data === ' ') return;
		if (
			e.target.value.length === 4 &&
			e.nativeEvent.inputType !== 'deleteContentBackward'
		) {
			setCardValue(`${e.target.value} `);
			return;
		}
		if (
			e.target.value.length === 9 &&
			e.nativeEvent.inputType !== 'deleteContentBackward'
		) {
			setCardValue(`${e.target.value} `);
			return;
		}
		if (
			e.target.value.length === 14 &&
			e.nativeEvent.inputType !== 'deleteContentBackward'
		) {
			setCardValue(`${e.target.value} `);
			return;
		}

		if (/^[0-9\s]*$/.test(e.target.value)) {
			setCardValue(e.target.value);
		}
	};

	const HandleSslChange = (e) => {
		if (e.target.value.length === 4) return;
		if (/^[0-9]*$/.test(e.target.value)) {
			setSslValue(e.target.value);
		}
	};
	const HandleDateChange = (e) => {
		if (e.target.value.length === 8) return;
		if (e.target.value.length === 2 && /^[0-9]*$/.test(e.target.value)) {
			setDateValue(`${e.target.value} / `);
			return;
		}

		if (/^[0-9\s/]*$/.test(e.target.value)) {
			setDateValue(e.target.value);
		}
	};
	const HandleConfirm = () => {
		if (
			cardValue.length === 19 &&
			dateValue.length === 7 &&
			sslValue.length === 3
		) {
			setCartItems([]);
			navigate('/Thanks');
			return;
		}
		setMessage('Please Fill Every input properly');
	};

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<PaymentContainer>
					<TotalPriceContainer>
						Total Price:
						<TotalPrice>{checkoutPrice} $</TotalPrice>
					</TotalPriceContainer>
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
						<SpecialIcon>
							<FaRegCreditCard />
						</SpecialIcon>
						<Input
							onChange={HandleCardChange}
							value={cardValue}
							maxLength={19}
							placeholder="000 000 000 000"
						/>
					</CardNumContainer>

					<CardDetailsContainer>
						<Left>
							<SectionTitle>Expiry Date</SectionTitle>
							<InputContainer>
								<SpecialIcon>
									<BsCalendarCheck />
								</SpecialIcon>
								<Input
									onChange={HandleDateChange}
									placeholder="00 / 00"
									value={dateValue}
								/>
							</InputContainer>
						</Left>
						<Right>
							<SectionTitle>CVV/CV</SectionTitle>
							<InputContainer>
								<SpecialIcon>
									<MdOutlineLock />
								</SpecialIcon>
								<Input
									onChange={HandleSslChange}
									placeholder="***"
									value={sslValue}
									type="password"
								/>
							</InputContainer>
						</Right>
					</CardDetailsContainer>
					<Message>
						<BiLock /> Your transaction is secured with SSL
						encryption
					</Message>
					<Button onClick={HandleConfirm}>Confirm</Button>
				</PaymentContainer>
				<MsgContainer>{message}</MsgContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Checkout;
