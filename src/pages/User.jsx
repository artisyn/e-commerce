import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { mobile, userCustom } from '../styles/responsive';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { EcommerceContext } from '../context/context';
import { FaRegUser } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

const Container = styled.div``;

const UserContainer = styled.div`
	min-height: 100vh;

	background-image: url(https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470);
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	padding: 2rem 1rem;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;
const Wrapper = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;
	width: 100%;
	max-width: 70rem;
	@media only screen and (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`;
const LeftWrapper = styled.div`
	background-color: #e1d0c3e0;
	max-width: 30rem;
	padding: 1rem;
	flex: 1;
	width: 100%;
`;
const RightWrapper = styled.div`
	background-color: #e1d0c3e0;
	max-width: 30rem;
	padding: 1rem;
	flex: 1;
	width: 100%;
`;

const Title = styled.h1`
	text-align: center;
`;
const MiddleLine = styled.span`
	background-color: black;
	width: 100%;
	height: 0.2rem;
	flex: 1;
`;
const SeparatorText = styled.div`
	flex: 2;
	font-size: 1.3rem;
	font-weight: 500;
`;
const Separator = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin: 1rem 0;
	text-align: center;
`;

const Icon = styled.span`
	margin-right: 0.5rem;
`;
const OptionsContainer = styled.div`
	width: 100%;
	padding: 1rem;
	display: flex;

	gap: 1rem;
	@media only screen and (max-width: 560px) {
		flex-direction: column;
	}
`;

const Input = styled.input`
	width: 100%;
	height: 3rem;
	outline: none;
	border: none;
	padding-left: 0.5rem;
	font-size: 1.3rem;
`;

const Button = styled.button`
	height: 3rem;
	min-width: 10rem;
	max-width: 10rem;
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

const WishList = styled.div`
	min-height: 20vh;
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	padding: 1rem;
`;
const WishListItem = styled.div`
	height: 6rem;
	width: 6rem;
	border-radius: 50%;
	overflow: hidden;
	background-color: white;
`;
const WishPicture = styled.img`
	max-height: 100%;
	object-fit: cover;
	object-position: center;
`;

const User = () => {
	const { users, setUsers, loggedUser, setLoggedUser, isAuth, setIsAuth } =
		useContext(EcommerceContext);
	const navigate = useNavigate();

	const HandleSignOut = () => {
		setIsAuth(false);
		navigate('/home');
	};

	return (
		<Container>
			<Navbar />
			<Announcement />
			<UserContainer>
				{isAuth ? (
					<Wrapper>
						<LeftWrapper>
							<Title>
								<Icon>
									<FaRegUser />
								</Icon>
								{loggedUser.name}
							</Title>
							<Separator>
								<MiddleLine />
								<SeparatorText>Change Password</SeparatorText>
								<MiddleLine />
							</Separator>
							<OptionsContainer>
								<Input placeholder="New Password" />
								<Button>Change</Button>
							</OptionsContainer>
							<Separator>
								<MiddleLine />
								<SeparatorText>Change Email</SeparatorText>
								<MiddleLine />
							</Separator>
							<OptionsContainer>
								<Input placeholder="New Email" />
								<Button>Change</Button>
							</OptionsContainer>
							<Separator>
								<MiddleLine />
								<SeparatorText>Sign Out</SeparatorText>
								<MiddleLine />
							</Separator>
							<OptionsContainer>
								<Button onClick={HandleSignOut}>
									Sign Out
								</Button>
							</OptionsContainer>
						</LeftWrapper>
						<RightWrapper>
							<Title>
								<Icon>
									<FaRegHeart />
								</Icon>
							</Title>
							<Separator>
								<MiddleLine />
								<SeparatorText>Wishlist</SeparatorText>
								<MiddleLine />
							</Separator>

							<WishList>
								<WishListItem>
									<WishPicture src="https://images.unsplash.com/photo-1521369909029-2afed882baee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470" />
								</WishListItem>
								<WishListItem>
									<WishPicture src="https://images.unsplash.com/photo-1574368822296-1dfd47114b1c?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476"></WishPicture>
								</WishListItem>
							</WishList>
							<Separator>
								<MiddleLine />
								<SeparatorText>Clear Wishlist</SeparatorText>
								<MiddleLine />
							</Separator>

							<OptionsContainer>
								<Button>Clear</Button>
							</OptionsContainer>
						</RightWrapper>
					</Wrapper>
				) : (
					''
				)}
			</UserContainer>

			<Newsletter />
			<Footer />
		</Container>
	);
};

export default User;
