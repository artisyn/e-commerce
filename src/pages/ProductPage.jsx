import React, { useContext, useEffect, useState } from 'react';
import { EcommerceContext } from '../context/context';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { mobile, productCustom, tablet } from '../styles/responsive';
import { BsHeart } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
	padding-top: 7rem;
	${tablet({ paddingTop: '5rem' })}
`;

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
	display: flex;
	align-items: center;
	margin-bottom: 0;
`;
const WishListIconAdd = styled.div`
	position: relative;
	cursor: pointer;
	margin-left: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	color: teal;

	&::after {
		content: 'Add to Wishlist';
		font-size: 1rem;
		position: absolute;
		right: -6rem;
		top: -2rem;
		color: teal;
		display: flex;
		width: 10rem;
		opacity: 0;
		transition: all ease 0.6s;
	}
	&:hover {
		&::after {
			content: 'Add to Wishlist';
			font-size: 1rem;
			position: absolute;
			right: -6rem;
			top: -2rem;
			color: teal;
			display: flex;
			width: 10rem;
			opacity: 1;
		}
	}
`;
const WishListIconRemove = styled.div`
	position: relative;
	cursor: pointer;
	margin-left: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	color: teal;

	&::after {
		content: 'Remove from Wishlist';
		font-size: 1rem;
		position: absolute;
		right: -6rem;
		top: -2rem;
		color: teal;
		display: flex;
		width: 10rem;
		opacity: 0;
		transition: all ease 0.6s;
	}
	&:hover {
		&::after {
			content: 'Remove from Wishlist';
			font-size: 1rem;
			position: absolute;
			right: -6rem;
			top: -2rem;
			color: teal;
			display: flex;
			width: 10rem;
			opacity: 1;
		}
	}
`;
const WishTextContainer = styled.div`
	min-height: 1.5rem;
	text-align: left;
	width: 100%;
	color: teal;
	font-size: 1.2rem;
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
	const {
		selectedProduct,
		cartItems,
		setCartItems,
		isAuth,
		users,
		setUsers,
		loggedUser,
		setLoggedUser,
	} = useContext(EcommerceContext);
	const navigate = useNavigate();

	// redirect if no selected product
	useEffect(() => {
		if (!selectedProduct) {
			navigate('/Home');
		}
	}, []);

	const [amount, setAmount] = useState(1);
	const [size, setSize] = useState(
		selectedProduct ? `${selectedProduct.sizes[0]}` : ''
	);
	const [showMessage, setShowMessage] = useState(false);
	const [wishMessage, setWishMessage] = useState('');
	const [inFavorites, setInFavorites] = useState(false);

	const CheckIfFavorited = (product) => {
		if (!isAuth) return;
		let favorited = true;
		const userIndex = users.findIndex(
			(el) => el.email === loggedUser.email
		);
		const favoritedItemIndex = users[userIndex]?.wishlist.findIndex(
			(el) => el.id === product.id
		);

		// check if user has item in favorites
		if (favoritedItemIndex === -1) {
			favorited = false;
			// updating current users favorites;
			return favorited;
		}

		return favorited;
	};
	const AddRemoveFromFavorites = (product) => {
		if (!isAuth) return;
		const isFavorited = CheckIfFavorited(product);
		const userIndex = users.findIndex(
			(el) => el.email === loggedUser.email
		);
		const favoritedItemIndex = users[userIndex].wishlist.findIndex(
			(el) => el.id === product.id
		);

		if (isFavorited) {
			// delete from favorites
			let tempObj = { ...users[userIndex] };
			let tempWishlist = [...tempObj.wishlist];
			tempWishlist.splice(favoritedItemIndex, 1);
			tempObj.wishlist = tempWishlist;
			setLoggedUser({ ...tempObj });
			let newUsers = [...users];
			newUsers[userIndex] = tempObj;
			setUsers([...newUsers]);

			return;
		}

		if (!isFavorited) {
			// add to favorites
			let tempObj = { ...users[userIndex] };
			tempObj.wishlist.push({
				id: product.id,
				img: product.img,
				name: product.name,
				size: size,
				color: product.color,
				price: product.price,
			});
			setLoggedUser({ ...tempObj });
			let newUsers = [...users];
			newUsers[userIndex] = tempObj;
			setUsers([...newUsers]);
			return;
		}
	};

	useEffect(() => {
		if (!isAuth) return;
		if (!CheckIfFavorited(selectedProduct)) {
			setInFavorites(false);
			return;
		}

		if (CheckIfFavorited(selectedProduct)) {
			if (!isAuth) return;

			setInFavorites(true);
			return;
		}
	}, [users]);
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
	const ShowTemporary = () => {
		setShowMessage(true);
		setTimeout(() => {
			setShowMessage(false);
		}, 6000);
	};
	const HandleAddToCart = () => {
		if (cartItems.findIndex((el) => el.id === selectedProduct.id) !== -1) {
			const i = cartItems.findIndex((el) => el.id === selectedProduct.id);
			let tempArr = [...cartItems];
			let tempObj = { ...cartItems[i] };
			tempObj.amount = +tempObj.amount + +amount;
			tempArr[i] = tempObj;
			setCartItems([...tempArr]);
			ShowTemporary();
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
				amount: +`${amount}`,
				price: `${selectedProduct.price}`,
			},
		]);
		ShowTemporary();
	};
	const HandleWishClick = () => {
		if (!isAuth) setWishMessage('You have to be logged in');
		setTimeout(() => {
			setWishMessage('');
		}, 3000);
		/// make this work
		if (isAuth) {
			AddRemoveFromFavorites(selectedProduct);
		}
	};
	return (
		<Container>
			<Navbar showMessage={showMessage} />
			<Announcement />

			<Wrapper>
				<Left>
					<Image src={selectedProduct.img} />
				</Left>
				<Right>
					<Title>
						{selectedProduct.name}

						{!inFavorites ? (
							<WishListIconAdd onClick={HandleWishClick}>
								<BsHeart />
							</WishListIconAdd>
						) : (
							<WishListIconRemove onClick={HandleWishClick}>
								<BsHeartFill />
							</WishListIconRemove>
						)}
					</Title>
					<WishTextContainer>{wishMessage}</WishTextContainer>
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
