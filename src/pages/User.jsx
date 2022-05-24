import React, { useContext } from 'react';
import styled from 'styled-components';
import { mobile, userCustom } from '../styles/responsive';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { EcommerceContext } from '../context/context';
import { FaRegUser } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

const Container = styled.div``;
const ImageContainer = styled.div`
	background-image: url('https://images.unsplash.com/photo-1589363358751-ab05797e5629?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2304');
	background-position: center;
	background-size: cover;
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const UserContainer = styled.div`
	min-height: 70vh;

	background-color: #d5d3c6;
	padding: 3rem;
	position: relative;
	border-radius: 0.5rem;
	max-width: 35rem;
	width: 100%;
`;
const Wrapper = styled.div`
	padding-top: 4rem;
	border-radius: 0.5rem;
	backdrop-filter: blur(8px) saturate(200%);
	-webkit-backdrop-filter: blur(8px) saturate(200%);
	background-color: #928474ae;
	background-color: #92847484;
	border-radius: 12px;
	border: 1px solid rgba(255, 255, 255, 0.125);
`;

const Title = styled.h1`
	z-index: 10;
	text-align: center;
	position: absolute;
	color: #504b4b;
	background-color: #d5d3c6;

	height: 6rem;
	min-width: 12rem;
	padding: 2rem;
	top: -0.7rem;
	left: 0;
	border-radius: 0.5rem;

	${userCustom({
		minWidth: '5rem',
		maxWidth: '10rem',
		fontSize: '1.3rem',
	})}
`;
const Icon = styled.span`
	margin-right: 0.5rem;
`;
const OptionsContainer = styled.div`
	padding: 1rem;
	display: flex;
	gap: 1rem;
	${userCustom({ flexDirection: 'column' })}
`;

const Option = styled.div`
	cursor: pointer;
	font-size: 1.2rem;
	font-style: italic;
	font-weight: 500;
	transition: color ease 0.3s;
	&:hover {
		color: #424141;
	}
	${userCustom({
		fontSize: '1rem',
	})}
`;
const WishTitle = styled.h2`
	text-align: center;
	margin: 3rem 1rem 1rem 1rem;
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
	const { users, setUsers, loggedUser, setLoggedUser } =
		useContext(EcommerceContext);

	return (
		<Container>
			<Navbar />
			<Announcement />
			<ImageContainer>
				<UserContainer>
					<Title>
						<Icon>
							<FaRegUser />
						</Icon>
						Artiom
					</Title>
					<Wrapper>
						<OptionsContainer>
							<Option>Change Password</Option>
							<Option>Change Email</Option>
							<Option>Sign Out</Option>
						</OptionsContainer>
						<WishTitle>
							Your WishList <FaRegHeart />
						</WishTitle>
						<WishList>
							<WishListItem>
								<WishPicture src="https://images.unsplash.com/photo-1521369909029-2afed882baee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470" />
							</WishListItem>
							<WishListItem>
								<WishPicture src="https://images.unsplash.com/photo-1574368822296-1dfd47114b1c?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476"></WishPicture>
							</WishListItem>
						</WishList>
					</Wrapper>
				</UserContainer>
			</ImageContainer>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default User;
