import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/PopularProducts';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { FiPhone } from 'react-icons/fi';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { AiOutlineMinusSquare } from 'react-icons/ai';
import { desktop, tablet, mobile } from '../styles/responsive';
import { grid } from '@mui/system';

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
		padding: '0',
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
const Message = styled.p`
	text-align: left;
	font-size: 1.2rem;
	font-weight: bold;
`;
const CartItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const CartItem = styled.div`
	border: 1px solid black;
	max-height: 15rem;
	padding: 1rem;
	display: flex;
	gap: 1rem;
	${mobile({
		maxHeight: 'fit-content',
		display: 'grid',
		gridTemplateRows: '1fr 1fr',
	})}
`;

const ImageContainer = styled.div`
	background-color: #0b0b0b11;
	overflow: hidden;
	padding: 1rem;
	flex: 1;
	${mobile({
		maxHeight: '20rem',
	})}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center;
`;

const InfoContainer = styled.div`
	flex: 1;
`;

const CartItemTitle = styled.h2``;
const IdContainer = styled.div`
	font-size: 1.1rem;
	font-weight: 600;
`;
const IdValue = styled.span`
	color: teal;
`;
const ColorContainer = styled.div`
	font-size: 1.1rem;
	font-weight: 600;
`;
const Color = styled.span`
	color: teal;
`;
const SizeContainer = styled.div`
	font-size: 1.1rem;
	font-weight: 600;
`;
const Size = styled.span`
	color: teal;
`;
const CartQuantityContainer = styled.span`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: space-between;
`;

const AddContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	font-size: 1.5rem;
	align-items: center;
`;
const RemoveContainer = styled.div``;

const Add = styled.span`
	cursor: pointer;
`;
const Remove = styled.span`
	cursor: pointer;
`;

const QuantityInCart = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`;

const ItemPrice = styled.div`
	font-size: 1.3rem;
	font-weight: bold;
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
const PaymentSymbol = styled.span``;
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

const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Left>
					<Title>Your Cart</Title>
					<CartItems>
						<CartItem>
							<ImageContainer>
								<Image src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
							</ImageContainer>

							<InfoContainer>
								<CartItemTitle>Super Bag</CartItemTitle>
								<IdContainer>
									Item Id: <IdValue>333121</IdValue>
								</IdContainer>
								<ColorContainer>
									Color: <Color>Red Apple</Color>
								</ColorContainer>
								<SizeContainer>
									Size: <Size>XL</Size>
								</SizeContainer>
								<CartQuantityContainer>
									<AddContainer>
										<Remove>
											<AiOutlineMinusSquare />
										</Remove>
										<QuantityInCart>1</QuantityInCart>
										<Add>
											<AiOutlinePlusSquare />
										</Add>
									</AddContainer>

									<RemoveContainer>
										<Button>Remove</Button>
									</RemoveContainer>
								</CartQuantityContainer>
								<ItemPrice>
									( 10 <PaymentSymbol>$</PaymentSymbol> )
								</ItemPrice>
							</InfoContainer>
						</CartItem>
						<CartItem>
							<ImageContainer>
								<Image src="https://images.unsplash.com/photo-1566150905968-62f0de3d6df2?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470" />
							</ImageContainer>

							<InfoContainer>
								<CartItemTitle>Super Bag</CartItemTitle>
								<IdContainer>
									Item Id: <IdValue>333121</IdValue>
								</IdContainer>
								<ColorContainer>
									Color: <Color>Red Apple</Color>
								</ColorContainer>
								<SizeContainer>
									Size: <Size>XL</Size>
								</SizeContainer>
								<CartQuantityContainer>
									<AddContainer>
										<Remove>
											<AiOutlineMinusSquare />
										</Remove>
										<QuantityInCart>1</QuantityInCart>
										<Add>
											<AiOutlinePlusSquare />
										</Add>
									</AddContainer>

									<RemoveContainer>
										<Button>Remove</Button>
									</RemoveContainer>
								</CartQuantityContainer>
								<ItemPrice>
									( 10 <PaymentSymbol>$</PaymentSymbol> )
								</ItemPrice>
							</InfoContainer>
						</CartItem>
						<CartItem>
							<ImageContainer>
								<Image src="https://images.unsplash.com/photo-1585488763177-bde7d15fd3cf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687" />
							</ImageContainer>

							<InfoContainer>
								<CartItemTitle>Super Bag</CartItemTitle>
								<IdContainer>
									Item Id: <IdValue>333121</IdValue>
								</IdContainer>
								<ColorContainer>
									Color: <Color>Red Apple</Color>
								</ColorContainer>
								<SizeContainer>
									Size: <Size>XL</Size>
								</SizeContainer>
								<CartQuantityContainer>
									<AddContainer>
										<Remove>
											<AiOutlineMinusSquare />
										</Remove>
										<QuantityInCart>1</QuantityInCart>
										<Add>
											<AiOutlinePlusSquare />
										</Add>
									</AddContainer>

									<RemoveContainer>
										<Button>Remove</Button>
									</RemoveContainer>
								</CartQuantityContainer>
								<ItemPrice>
									( 10 <PaymentSymbol>$</PaymentSymbol> )
								</ItemPrice>
							</InfoContainer>
						</CartItem>
					</CartItems>
					<Message>
						Your shopping bag is empty. Explore our store and fill
						it up!
					</Message>
					<Button>Continue Shopping</Button>
				</Left>
				<Right>
					<PaymentContainer>
						<PaymentSection>
							<QuantityContainer>
								<Quantity>1</Quantity> items in your Cart
							</QuantityContainer>
						</PaymentSection>
						<PaymentSection>
							<PromocodeText>Enter your promocode</PromocodeText>
							<PromocodeContainer>
								<PromocodeInput placeholder="Enter Promocode" />
								<PromocodeButtonContainer>
									<Button>Apply</Button>
								</PromocodeButtonContainer>
							</PromocodeContainer>
						</PaymentSection>
						<PaymentSection>
							<SubtotalContainer>
								<SubContainer>
									Subtotal:
									<Subtotal>
										100 <PaymentSymbol>$</PaymentSymbol>
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
								<Total>
									100 <PaymentSymbol>$</PaymentSymbol>
								</Total>
							</TotalContainer>
							<Button>Check out</Button>
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
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Cart;
