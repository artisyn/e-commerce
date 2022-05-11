import React from 'react';
import styled from 'styled-components';
import { globalStyles } from '../styles/gStyles';
import { IoSearchSharp } from 'react-icons/io5';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Container = styled.div`
	border: 4px solid black;
	height: 5rem;
`;

const Wrapper = styled.div`
	border: 1px solid green;
	padding: 0.7rem 1.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	border: 0.5px solid black;
	margin-left: 1rem;
	padding: 0.5rem;
`;
const Input = styled.input`
	border: none;
`;
const Language = styled.span`
	font-size: 1.2rem;
	cursor: pointer;
`;
const Logo = styled.h1`
	font-weight: bold;
`;

const MenuItem = styled.div`
	font-size: 1rem;
	cursor: pointer;
`;

const Left = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	border: 1px solid red;
	flex: 1;
	background-color: grey;
`;
const Center = styled.div`
	flex: 1;
	background-color: #6c8d9c;
	text-align: center;
`;
const Right = styled.div`
	flex: 1;
	background-color: #905567;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<IoSearchSharp style={{ fontSize: '1.5rem' }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>Logo.</Logo>
				</Center>
				<Right>
					<MenuItem>Register</MenuItem>
					<MenuItem>Sign In</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary">
							<ShoppingCartOutlinedIcon color="action" />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;

//23.11
