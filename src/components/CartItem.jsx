import React, { useState, useContext } from 'react';
import { EcommerceContext } from '../context/context';
import styled from 'styled-components';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { AiOutlineMinusSquare } from 'react-icons/ai';
import { desktop, tablet, mobile } from '../styles/responsive';

const Item = styled.div`
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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const CartItemTitle = styled.h2`
	margin: 0;
`;
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
	font-size: 1.5rem;
	align-items: center;
	justify-content: center;
`;
const RemoveContainer = styled.div``;

const Add = styled.span`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Remove = styled.span`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const QuantityInCart = styled.div`
	font-size: 1.8rem;
	font-weight: bold;
	width: 2.5rem;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ItemPrice = styled.div`
	font-size: 1.3rem;
	font-weight: bold;
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
const PriceText = styled.span`
	font-size: 1.1rem;
	letter-spacing: 0.05rem;
	margin-right: 0.5rem;
`;
const PaymentSymbol = styled.span``;

const CartItem = ({ product }) => {
	const { cartItems, setCartItems } = useContext(EcommerceContext);
	const [amount, setAmount] = useState(product.amount);

	const UpdateCart = (quantity, productId) => {
		const i = cartItems.findIndex((el) => el.id === productId);
		let tempArr = [...cartItems];
		let tempObj = { ...cartItems[i] };
		tempObj.amount = +quantity;
		tempArr[i] = tempObj;
		setCartItems([...tempArr]);
	};

	const HandleIncrease = () => {
		if (amount === 20) return;
		setAmount(amount + 1);
		UpdateCart(amount + 1, product.id);
	};
	const HandleDecrease = () => {
		if (amount === 1) return;
		setAmount(amount - 1);
		UpdateCart(amount - 1, product.id);
	};
	const HandleRemove = () => {
		let tempArr = [...cartItems];

		setCartItems([...tempArr.filter((el) => el.id !== product.id)]);
	};

	return (
		<Item>
			<ImageContainer>
				<Image src={product.img} />
			</ImageContainer>

			<InfoContainer>
				<CartItemTitle>{product.name}</CartItemTitle>
				<IdContainer>
					Item Id: <IdValue>{product.id}</IdValue>
				</IdContainer>
				<ColorContainer>
					Color: <Color>{product.color}</Color>
				</ColorContainer>
				<SizeContainer>
					Size: <Size>{product.size}</Size>
				</SizeContainer>
				<CartQuantityContainer>
					<AddContainer>
						<Remove onClick={HandleDecrease}>
							<AiOutlineMinusSquare />
						</Remove>
						<QuantityInCart>{amount}</QuantityInCart>
						<Add onClick={HandleIncrease}>
							<AiOutlinePlusSquare />
						</Add>
					</AddContainer>

					<RemoveContainer>
						<Button onClick={HandleRemove}>Remove</Button>
					</RemoveContainer>
				</CartQuantityContainer>
				<ItemPrice>
					<PriceText>Price:</PriceText> {product.price * amount}
					<PaymentSymbol>$</PaymentSymbol>
				</ItemPrice>
			</InfoContainer>
		</Item>
	);
};

export default CartItem;
