import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile, tablet, tabletMin } from '../styles/responsive';
import { IoSearchSharp } from 'react-icons/io5';
import { MdArrowForwardIos } from 'react-icons/md';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
`;
const Container = styled.div`
	position: relative;
	border: 1px solid black;
	min-height: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
const Wrapper = styled.div`
	height: 5rem;
	width: 100%;
	padding: 0.7rem 1.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 3px solid #f5f5f5;
`;
const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	border: 0.5px solid black;
	margin-left: 1rem;
	padding: 0.5rem;
	${tablet({ display: 'none' })}
`;

const SearchIcon = styled.span`
	font-size: 2rem;
	cursor: pointer;
	display: none;
	${tablet({ display: 'block' })}
`;
const Input = styled.input`
	border: none;
	outline: none;
	font-size: 1.1rem;
`;
const Language = styled.span`
	font-size: 1.2rem;
	cursor: pointer;
	${tablet({ display: 'none' })}
`;
const Logo = styled.h1`
	font-weight: bold;
	margin: 0;
	${tablet({ fontSize: '1.5rem' })}
`;

const MenuItem = styled.div`
	font-size: 1.2rem;
	font-weight: 500;
	cursor: pointer;
	${tablet({ display: 'none' })}
`;
const MenuCart = styled.div`
	cursor: pointer;
`;

const Left = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	flex: 1;
	${tablet({ flex: 'auto' })}
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
	${tablet({ flex: 'auto' })}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;
	${tablet({ flex: 'auto' })}
`;

// Mobile Components

const BurgerIcon = styled.span`
	cursor: pointer;
	font-size: 2rem;
	display: none;
	transition: transform ease-out 0.4s;
	${tablet({ display: 'block' })}
	transform-origin: center;
	${(props) => props.menu && 'transform: rotate(90deg)'};
`;

const MobileSearchContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	height: 100%;
	padding: 1rem;
`;
const MobileSearchInput = styled.input`
	width: 100%;
	outline: none;
	border: none;
	height: 100%;
	background-color: #f5f5f5;
	font-size: 1.3rem;
	font-style: italic;
	letter-spacing: 0.07rem;
`;
const MobileSearchButton = styled.button`
	border: none;
	outline: none;
	background-color: #f5f5f5;
	font-size: 1.3rem;
	padding: 0.3rem 0.5rem;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
const MobileContainer = styled.div`
	${tabletMin({ display: 'none' })}
	background-color: #f5f5f5;
	position: relative;
	transition: height ease 0.5s;
	overflow: hidden;
	width: 100%;
	height: 0;
	${(props) => props.mobSearch && 'height: 4rem'}
`;
const MenuContainer = styled.div`
	${tabletMin({ display: 'none' })}
	transition: transform ease-out 0.5s;
	position: absolute;
	min-height: calc(100vh - 5rem);
	z-index: 10;
	width: 100%;
	background-color: white;
	top: 5rem;
	transform: translateX(-190vw);
	${(props) => props.menu && 'transform: translateX(0)'}
`;

const MobileSection = styled.div`
	border: 1px solid black;
	height: 5rem;
	margin-bottom: 0.5rem;
`;
const SectionItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	width: 100%;
	height: 100%;
`;
const SectionCategory = styled.span`
	padding-left: 5rem;
	transition: color ease 0.4s;
	font-size: 1.3rem;
	font-weight: 500;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
	color: grey;
	text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};

	&:hover {
		color: black;
	}
`;

const Navbar = () => {
	const [mobSearch, setMobSearch] = useState(false);
	const [menu, setMenu] = useState(false);

	const handleMobileSearch = () => {
		setMenu(false);
		setMobSearch(!mobSearch);
	};

	const handleMenuOpen = () => {
		setMobSearch(false);
		setMenu(!menu);
		// Preventing scrolling when modal is open
		if (!menu) document.body.style.position = 'fixed';
		if (!menu) document.querySelector('.App').style.overflowY = 'hidden';
		if (menu) document.body.style.position = 'static';
		if (menu) document.querySelector('.App').style.overfloY = 'visible';
	};

	return (
		<Container>
			<Wrapper>
				<Left>
					<BurgerIcon onClick={handleMenuOpen} menu={menu}>
						<MenuIcon style={{ fontSize: '2.5rem' }} />
					</BurgerIcon>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<IoSearchSharp
							style={{ fontSize: '1.5rem', color: 'gray' }}
						/>
					</SearchContainer>
					<SearchIcon onClick={handleMobileSearch}>
						<IoSearchSharp />
					</SearchIcon>
				</Left>
				<Center>
					<StyledLink to={'/Home'}>
						<Logo>Logo.</Logo>
					</StyledLink>
				</Center>
				<Right>
					<StyledLink to={'/Register'}>
						<MenuItem>Register</MenuItem>
					</StyledLink>
					<StyledLink to={'/Login'}>
						<MenuItem>Sign In</MenuItem>
					</StyledLink>
					<StyledLink to={'/Cart'}>
						<MenuCart>
							<Badge badgeContent={4} color="primary">
								<ShoppingCartOutlinedIcon
									style={{ fontSize: '1.6rem' }}
									color="action"
								/>
							</Badge>
						</MenuCart>
					</StyledLink>
				</Right>
			</Wrapper>

			<MobileContainer mobSearch={mobSearch}>
				<MobileSearchContainer>
					<MobileSearchInput placeholder="Search here..." />
					<MobileSearchButton>
						Search <MdArrowForwardIos />
					</MobileSearchButton>
				</MobileSearchContainer>
			</MobileContainer>
			<MenuContainer menu={menu}>
				<MobileSection>
					<SectionItem>
						<SectionCategory underline={true}>
							Register <MdArrowForwardIos />
						</SectionCategory>
						<SectionCategory underline={true}>
							Sign In <MdArrowForwardIos />
						</SectionCategory>
					</SectionItem>
				</MobileSection>
				<MobileSection>
					<SectionItem>
						<SectionCategory>
							MEN <MdArrowForwardIos />
						</SectionCategory>
					</SectionItem>
				</MobileSection>
				<MobileSection>
					<SectionItem>
						<SectionCategory>
							WOMEN <MdArrowForwardIos />
						</SectionCategory>
					</SectionItem>
				</MobileSection>
				<MobileSection>
					<SectionItem>
						<SectionCategory>
							KIDS <MdArrowForwardIos />
						</SectionCategory>
					</SectionItem>
				</MobileSection>
				<MobileSection>
					<SectionItem>
						<SectionCategory>
							ACCESSORIES <MdArrowForwardIos />
						</SectionCategory>
					</SectionItem>
				</MobileSection>
			</MenuContainer>
		</Container>
	);
};

export default Navbar;
