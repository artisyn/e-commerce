import React, { useContext } from 'react';
import { EcommerceContext } from '../context/context';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { desktop, tablet, tabletMin, mobile } from '../styles/responsive';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpg';

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	&:hover {
		color: gray;
	}
`;
const Container = styled.div`
	min-height: 22rem;
	padding: 1rem;
	display: grid;
	gap: 1rem;
	justify-items: center;
	grid-template-columns: 1fr 1fr 1fr;
	${desktop({
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	})}
	${tablet({
		gridTemplateColumns: 'auto',
		gridTemplateRows: '1fr 1fr 1fr',
	})}
`;
const Left = styled.div`
	/* border: 1px solid black; */
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	${desktop({
		flex: 1,
		minWidth: '30rem',
		maxWidth: '32rem',
		minHeight: '22rem',
	})}
	${mobile({
		minWidth: '20rem',
	})}
`;
const Logo = styled.h1`
	width: 100%;
	font-size: 2.5rem;
	margin: 0;
	letter-spacing: 0.1rem;
	text-align: left;
	${tablet({ textAlign: 'center' })}
`;
const Description = styled.p`
	font-size: 1.3rem;
	line-height: 1.5rem;
`;
const SocialContainer = styled.div`
	display: flex;
	gap: 1rem;
	width: 100%;
	align-items: center;
	justify-content: space-evenly;
`;
const SocialIcon = styled.div`
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3rem;
	height: 3rem;
	border-radius: 0.5rem;
	background-color: ${(props) => props.color};
	cursor: pointer;
`;
const Center = styled.div`
	padding: 1rem;
	/* border: 1px solid black; */
	${desktop({
		flex: 1,
		minWidth: '30rem',
		maxWidth: '32rem',
		minHeight: '22rem',
	})}
	${mobile({
		minWidth: '20rem',
	})}
`;

const Title = styled.h3`
	margin: 0;
	font-size: 2rem;
	margin-bottom: 1.5rem;
	${tablet({ textAlign: 'center' })}
`;
const List = styled.ul`
	list-style: none;
	font-size: 1.3rem;

	padding: 0;
	margin: 0;
	display: flex;
	flex-wrap: wrap;
	${tablet({ flexDirection: 'column', alignItems: 'center' })}
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 0.2rem;
	cursor: pointer;
	&:hover {
		color: gray;
	}
	${tablet({ width: 'auto' })}
`;
const Right = styled.div`
	/* border: 1px solid black; */
	padding: 1rem;
	${desktop({
		flex: 1,
		minWidth: '30rem',
		maxWidth: '32rem',
		minHeight: '22rem',
	})}
	${mobile({
		minWidth: '20rem',
	})}
`;
const ContactItem = styled.div`
	display: flex;
	font-size: 1.2rem;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;
const Payment = styled.div`
	width: 100%;
`;

const PaymentImage = styled.img`
	max-width: 60%;
	height: 100%;
`;

const LogoWrap = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	${tablet({ justifyContent: 'center' })}
`;

const LogoContainer = styled.div`
	width: 6rem;
	height: 3rem;
	overflow: hidden;
`;
const LogoPicture = styled.img`
	max-height: 100%;
`;
const GitLink = styled.a`
	margin-right: 0.5rem;
`;

const Footer = () => {
	const {
		setSelectedCategory,
		setCurrentPage,
		setColor,
		setSize,
		setSortBy,
	} = useContext(EcommerceContext);
	const navigate = useNavigate();
	const resetFilters = () => {
		setColor('Color');
		setSize('Size');
		setSortBy('Sort By');
		setCurrentPage(1);
	};
	const handleShopNow = (title) => {
		setSelectedCategory(title.toLowerCase());
		resetFilters();
		navigate('/ProductList');
	};
	return (
		<Container id="footerScroll">
			<Left>
				<LogoWrap>
					<LogoContainer>
						<LogoPicture src={logo} />
					</LogoContainer>
				</LogoWrap>

				<Description>
					This Project was made using React and React styled
					components. It is a part of{' '}
					<GitLink href="https://github.com/artisyn">artisyn</GitLink>
					portfolio.
				</Description>
				<SocialContainer>
					<SocialIcon color="#003c95b2">
						<FacebookIcon />
					</SocialIcon>
					<SocialIcon color="#d83560a2">
						<InstagramIcon />
					</SocialIcon>
					<SocialIcon color="#4676b48f">
						<TwitterIcon />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title> Useful Links </Title>
				<List>
					<ListItem>
						<StyledLink to={'/Home'}>Home</StyledLink>
					</ListItem>
					<ListItem onClick={() => handleShopNow('all')}>
						All Categories
					</ListItem>
					<ListItem onClick={() => handleShopNow('sneakers')}>
						Sneakers
					</ListItem>
					<ListItem onClick={() => handleShopNow('shirts')}>
						Shirts
					</ListItem>
					<ListItem onClick={() => handleShopNow('headwear')}>
						Headwear
					</ListItem>
					<ListItem onClick={() => handleShopNow('hoodies')}>
						Hoodies
					</ListItem>
					<ListItem>
						<StyledLink to={'/Register'}>Register</StyledLink>
					</ListItem>
					<ListItem>
						<StyledLink to={'/Login'}>Sign In</StyledLink>
					</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<LocationOnIcon /> UK, 123 Clepington Rd, Angus, 01382
					828283
				</ContactItem>
				<ContactItem>
					<PhoneIcon />
					+988 01382 828283
				</ContactItem>
				<ContactItem>
					<EmailIcon />
					e-commerce@teleworm.mail
				</ContactItem>
				<Payment>
					<PaymentImage src="https://www.city-pension.com/wp-content/uploads/2021/08/epay_paypal_kreditkarte.png"></PaymentImage>
				</Payment>
			</Right>
		</Container>
	);
};

export default Footer;
