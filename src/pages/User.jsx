import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { mobile, userCustom, tablet } from '../styles/responsive';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import WishItem from '../components/WishItem';
import { EcommerceContext } from '../context/context';
import { FaRegUser } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

const Container = styled.div`
	padding-top: 7rem;
	${tablet({ paddingTop: '5rem' })}
`;

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

const PasswordChangeMessage = styled.div`
	letter-spacing: 0.05rem;
	color: teal;
	min-height: 1.2rem;
`;
const EmailChangeMessage = styled.div`
	letter-spacing: 0.05rem;
	color: teal;
	min-height: 1.2rem;
`;

const User = () => {
	const { users, setUsers, loggedUser, setLoggedUser, isAuth, setIsAuth } =
		useContext(EcommerceContext);
	const navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [emailMessage, setEmailMessage] = useState('');
	const [passwordMessage, setPasswordMessage] = useState('');

	const HandleSignOut = () => {
		setIsAuth(false);
		navigate('/home');
	};
	const HandleClear = () => {
		const userIndex = users.findIndex(
			(el) => el.email === loggedUser.email
		);
		// delete all favorites
		let tempObj = { ...users[userIndex] };
		tempObj.wishlist = [];
		setLoggedUser({ ...tempObj });
		let newUsers = [...users];
		newUsers[userIndex] = tempObj;
		setUsers([...newUsers]);

		return;
	};

	const HandlePasswordValue = (e) => {
		setPassword(e.target.value);
	};
	const HandleEmailValue = (e) => {
		setEmail(e.target.value);
	};

	const HandleChangePassword = () => {
		if (password.length === 0) {
			setPasswordMessage('Enter new Password');
			return;
		}
		const userIndex = users.findIndex(
			(el) => el.email === loggedUser.email
		);
		// change password
		let tempObj = { ...users[userIndex] };
		tempObj.password = password;
		setLoggedUser({ ...tempObj });
		let newUsers = [...users];
		newUsers[userIndex] = tempObj;
		setUsers([...newUsers]);

		setPassword('');
		setPasswordMessage('Password Changed Successfully');
	};
	const HandleEmailChange = () => {
		if (email.length === 0) {
			setEmailMessage('Enter new Email');
			return;
		}
		const userIndex = users.findIndex(
			(el) => el.email === loggedUser.email
		);
		// change email
		let tempObj = { ...users[userIndex] };
		tempObj.email = email;
		setLoggedUser({ ...tempObj });
		let newUsers = [...users];
		newUsers[userIndex] = tempObj;
		setUsers([...newUsers]);
		setEmail('');
		setEmailMessage('Email Changed Successfully');
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
								<Input
									placeholder="New Password"
									value={password}
									onChange={HandlePasswordValue}
								/>
								<Button onClick={HandleChangePassword}>
									Change
								</Button>
							</OptionsContainer>
							<PasswordChangeMessage>
								{passwordMessage}
							</PasswordChangeMessage>
							<Separator>
								<MiddleLine />
								<SeparatorText>Change Email</SeparatorText>
								<MiddleLine />
							</Separator>
							<OptionsContainer>
								<Input
									placeholder="New Email"
									value={email}
									onChange={HandleEmailValue}
								/>
								<Button onClick={HandleEmailChange}>
									Change
								</Button>
							</OptionsContainer>
							<EmailChangeMessage>
								{emailMessage}
							</EmailChangeMessage>
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
							{loggedUser.wishlist.length === 0 ? (
								<h2 style={{ textAlign: 'center' }}>
									Explore Our Shop for Happiness !
								</h2>
							) : (
								<WishList>
									{loggedUser.wishlist.map((el) => (
										<WishItem key={el.id} item={el} />
									))}
								</WishList>
							)}

							<Separator>
								<MiddleLine />
								<SeparatorText>Clear Wishlist</SeparatorText>
								<MiddleLine />
							</Separator>

							<OptionsContainer>
								<Button onClick={HandleClear}>Clear</Button>
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
