import React, { useContext, useEffect, useState } from 'react';
import { EcommerceContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import { promoCodes } from '../data';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import { FiPhone } from 'react-icons/fi';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
import { desktop, tablet, mobile } from '../styles/responsive';
import { ImHappy } from 'react-icons/im';

const Container = styled.div``;
const Wrapper = styled.div`
	min-height: 100vh;
	padding: 2rem;
	display: flex;
	gap: 1rem;
	${desktop({
		flexDirection: 'column',
	})}
	${tablet({
		padding: '0.2rem',
	})}
`;
const Left = styled.div`
	border: 1px solid black;
	flex: 1;
	padding: 1rem;
`;
const Title = styled.h1`
	text-align: left;
`;
const CartItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Right = styled.div`
	border: 1px solid black;
	flex: 1;
	padding: 1rem;
`;
const PaymentContainer = styled.div`
	min-height: 50%;
	background-color: #f5f5f5;
	padding: 1rem;
`;
const QuantityContainer = styled.div`
	font-size: 1.3rem;
	letter-spacing: 0.05rem;
`;
const Quantity = styled.span`
	font-weight: bold;
	margin-right: 0.5rem;
`;
const PaymentSection = styled.div`
	border-bottom: 1px solid grey;
	padding: 1rem;
`;

const PromocodeInput = styled.input`
	outline: none;
	border: none;
	padding: 0.5rem;
	height: 3rem;
	width: 100%;
	flex: 2;
`;
const PromocodeText = styled.p`
	color: grey;
	font-size: 1.3rem;
	margin: 0 0 1rem 0;
`;
const PromocodeContainer = styled.div`
	display: flex;
	gap: 1rem;
`;
const PromocodeButtonContainer = styled.div`
	flex: 1;
`;

const PromoResult = styled.div`
	color: teal;
	font-size: 1.3rem;
	margin: 1rem 0 0 0;
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
const SubtotalContainer = styled.div`
	font-size: 1.3rem;
	font-weight: 600;
	letter-spacing: 0.05rem;
`;
const Subtotal = styled.span`
	font-size: 1.2rem;
	font-weight: bold;
`;
const SubContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const SubtotalText = styled.p`
	font-size: 1.1rem;
`;
const PaymentSymbol = styled.span`
	margin-left: 0.5rem;
`;
const TotalContainer = styled.div`
	font-size: 1.3rem;
	font-weight: 600;
	letter-spacing: 0.05rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2rem;
`;
const Total = styled.span`
	font-size: 1.2rem;
	font-weight: bold;
`;
const TotalMessage = styled.div`
	color: teal;
`;

const HelpContainer = styled.div`
	padding: 1rem;
`;
const HelpText = styled.p`
	text-align: center;
	display: flex;
	align-items: center;
	font-size: 1.3rem;
`;
const HelpContacts = styled.div``;
const Logo = styled.span`
	font-size: 1.3rem;
	margin-right: 1rem;
`;
const PhoneContainer = styled.span`
	margin-left: 1rem;
	font-weight: bold;
	font-size: 1.1rem;
`;
const PaymentMethods = styled.div`
	margin-top: 1rem;
	font-size: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

const EmptyCart = styled.div`
	min-height: 60vh;
	padding-top: 2rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
`;
const EmptyCartText = styled.h2`
	font-size: 1.3rem;
	font-weight: 500;
	letter-spacing: 0.05rem;
	border-bottom: 2px solid teal;
	text-align: center;
`;
const EmptyCartButton = styled.div`
	max-width: 20rem;
`;

const Cart = () => {
	const { cartItems, setCartItems, checkoutPrice, setCheckoutPrice } =
		useContext(EcommerceContext);
	const [promo, setPromo] = useState('');
	const [promoText, setPromoText] = useState('');
	const [promoName, setPromoName] = useState('');
	const [discount, setDiscount] = useState(1);
	const [totalPrice, setTotalPrice] = useState(
		cartItems.reduce((acu, el) => {
			const total = el.price * el.amount + acu;
			return total;
		}, 0)
	);
	const [finalPrice, setFinalPrice] = useState(0);

	const navigate = useNavigate();

	const HandlePromocodeInput = (e) => {
		setPromo(e.target.value);
	};
	const HandlePromo = () => {
		if (promoCodes.find((el) => el.name === promo)) {
			const code = promoCodes.find((el) => el.name === promo);
			setDiscount(code.percentOff);
			setPromoText('Promocode Applied');
			setPromoName(code.name);
			return;
		}
		if (!promoCodes.find((el) => el.name === promo))
			setPromoText('Promocode not found');
	};
	const HandleContinueShopping = () => {
		navigate('/Home');
	};

	useEffect(() => {
		setTotalPrice(
			cartItems.reduce((acu, el) => {
				const total = el.price * el.amount + acu;
				return total;
			}, 0)
		);
	}, [cartItems]);

	useEffect(() => {
		if (discount === 1) {
			setFinalPrice(totalPrice);
			return;
		}
		setFinalPrice(totalPrice - (totalPrice * discount) / 100);
	}, [totalPrice, discount]);

	const HandleCheckout = () => {
		setCheckoutPrice(finalPrice);
		navigate('/Checkout');
	};

	return (
		<Container>
			<Navbar />
			<Announcement />
			{cartItems.length !== 0 ? (
				<Wrapper>
					<Left>
						<Title>Your Cart</Title>
						<CartItemsContainer>
							{cartItems.length !== 0
								? cartItems.map((el) => (
										<CartItem key={el.id} product={el} />
								  ))
								: ''}
						</CartItemsContainer>
					</Left>
					<Right>
						<PaymentContainer>
							<PaymentSection>
								<QuantityContainer>
									<Quantity>{cartItems.length}</Quantity>
									items in your Cart
								</QuantityContainer>
							</PaymentSection>
							<PaymentSection>
								<PromocodeText>
									Enter your promocode
								</PromocodeText>
								<PromocodeContainer>
									<PromocodeInput
										value={promo}
										onChange={HandlePromocodeInput}
										placeholder="Enter Promocode"
									/>
									<PromocodeButtonContainer>
										<Button onClick={HandlePromo}>
											Apply
										</Button>
									</PromocodeButtonContainer>
								</PromocodeContainer>
								<PromoResult>{promoText}</PromoResult>
							</PaymentSection>
							<PaymentSection>
								<SubtotalContainer>
									<SubContainer>
										Subtotal:
										<Subtotal>
											{totalPrice}
											<PaymentSymbol>$</PaymentSymbol>
										</Subtotal>
									</SubContainer>
									<SubtotalText>
										INCL. VAT (Calculated in checkout)
									</SubtotalText>
								</SubtotalContainer>
							</PaymentSection>
							<PaymentSection>
								<TotalContainer>
									Total:
									{discount === 1 ? (
										''
									) : (
										<TotalMessage>
											-{discount}% {promoName}
										</TotalMessage>
									)}
									<Total>
										{discount === 1
											? totalPrice
											: totalPrice -
											  (totalPrice * discount) / 100}
										<PaymentSymbol>$</PaymentSymbol>
									</Total>
								</TotalContainer>
								<Button onClick={HandleCheckout}>
									Check out
								</Button>
							</PaymentSection>
							<PaymentMethods>
								<FaCcVisa /> <FaCcMastercard /> <FaCcPaypal />
							</PaymentMethods>
							<HelpContainer>
								<HelpText>
									<Logo>
										<FiPhone />
									</Logo>
									Need help with your purchase?
								</HelpText>
								<HelpContacts>
									Call Customer Support on
									<PhoneContainer>
										+76 432 234 3452
									</PhoneContainer>
								</HelpContacts>
							</HelpContainer>
						</PaymentContainer>
					</Right>
				</Wrapper>
			) : (
				<EmptyCart>
					<EmptyCartText>
						Your Cart is Empty. Fill It With Happiness ! <ImHappy />
					</EmptyCartText>
					<EmptyCartButton>
						<Button onClick={HandleContinueShopping}>
							Continue Shopping
						</Button>
					</EmptyCartButton>
				</EmptyCart>
			)}

			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Cart;
