import React, { useContext, useState } from 'react';
import { EcommerceContext } from '../context/context';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { mobile, productCustom, tablet } from '../styles/responsive';

const Container = styled.div``;

const Wrapper = styled.div`
	display: flex;
	padding: 3rem;
	gap: 2rem;
	${productCustom({
		flexDirection: 'column',
	})}
	${mobile({
		padding: '.5rem',
	})}
`;
const Left = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	justify-content: center;
	align-items: center;
`;
const Right = styled.div`
	flex: 1;
	height: 100%;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: left;
	flex-direction: column;
	gap: 1.5rem;
`;
const Image = styled.img`
	height: 90vh;
	width: 100%;
	object-fit: cover;
	${tablet({
		height: '50vh',
	})}
`;

const Title = styled.h1`
	width: 100%;
	font-weight: 300;
	font-size: 3rem;
	text-align: left;
`;
const Desc = styled.div`
	font-size: 1.3rem;
	letter-spacing: 0.05rem;
`;
const Price = styled.div`
	font-size: 2rem;
	font-weight: bold;
	text-align: left;
	width: 100%;
`;
const FilterContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 2rem;
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
const FilterTitle = styled.span`
	font-size: 1.5rem;
	font-weight: 500;
`;
const FilterColor = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	border: 0.5px solid black;
	cursor: pointer;
	background-color: ${(props) => props.color};
`;
const FilterSize = styled.select`
	padding: 0.5rem;
	font-size: 1.3rem;
`;
const FilterSizeOption = styled.option`
	font-size: 1.3rem;
`;

const PurchaseContainer = styled.div`
	display: flex;
	justify-content: left;
	flex-wrap: wrap;
	width: 100%;
	gap: 2rem;
`;
const AmountContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: left;
`;
const Amount = styled.span`
	width: 3rem;
	height: 3rem;
	border: 1px solid black;
	font-size: 1.5rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0.3rem;
`;
const Icon = styled.span`
	cursor: pointer;
`;
const Button = styled.button`
	background-color: teal;
	border: 1px soid black;
	outline: none;
	padding: 1rem 2rem;
	color: white;
	font-size: 1.4rem;
	font-weight: bold;
	cursor: pointer;
	transition: background ease 0.3s;

	&:hover {
		background-color: black;
	}

	${mobile({
		fontSize: '1.2rem',
		padding: '1rem 1.5rem',
	})}
`;

const ProductPage = () => {
	const { selectedProduct, cartItems, setCartItems } =
		useContext(EcommerceContext);
	const [amount, setAmount] = useState(1);
	const [size, setSize] = useState(`${selectedProduct.sizes[0]}`);
	const IncreaseAmount = () => {
		if (amount === 20) return;
		setAmount(amount + 1);
	};
	const DecreaseAmount = () => {
		if (amount === 1) return;
		setAmount(amount - 1);
	};
	const HandleSizeChange = (e) => {
		setSize(e.target.value);
	};
	const HandleAddToCart = () => {
		if (cartItems.findIndex((el) => el.id === selectedProduct.id) !== -1) {
			const i = cartItems.findIndex((el) => el.id === selectedProduct.id);
			let tempArr = [...cartItems];
			let tempObj = { ...cartItems[i] };
			tempObj.amount = +tempObj.amount + +amount;
			tempArr[i] = tempObj;
			setCartItems([...tempArr]);
			console.log(cartItems);
			return;
		}
		setCartItems([
			...cartItems,
			{
				id: parseInt(`${selectedProduct.id}`),
				img: `${selectedProduct.img}`,
				name: `${selectedProduct.name}`,
				size: `${size}`,
				color: `${selectedProduct.color}`,
				amount: `${amount}`,
			},
		]);
	};
	return (
		<Container>
			<Navbar />
			<Announcement />

			<Wrapper>
				<Left>
					<Image src={selectedProduct.img} />
				</Left>
				<Right>
					<Title>{selectedProduct.name}</Title>
					<Desc>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Harum asperiores exercitationem expedita autem voluptas
						!
					</Desc>
					<Price>{selectedProduct.price} $</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>

							<FilterColor color={selectedProduct.color} />
						</Filter>

						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize onChange={HandleSizeChange}>
								{selectedProduct.sizes
									? selectedProduct.sizes.map((el, i) => (
											<FilterSizeOption key={i}>
												{el}
											</FilterSizeOption>
									  ))
									: ''}
								{/* <FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption> */}
							</FilterSize>
						</Filter>
					</FilterContainer>

					<PurchaseContainer>
						<AmountContainer>
							<Icon onClick={DecreaseAmount}>
								<RemoveOutlinedIcon sx={{ fontSize: 25 }} />
							</Icon>
							<Amount>{amount}</Amount>
							<Icon onClick={IncreaseAmount}>
								<AddOutlinedIcon sx={{ fontSize: 25 }} />
							</Icon>
						</AmountContainer>
						<Button onClick={HandleAddToCart}>ADD TO CART</Button>
					</PurchaseContainer>
				</Right>
			</Wrapper>

			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductPage;
