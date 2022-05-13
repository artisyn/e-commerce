import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
	height: 22rem;
	padding: 1rem;
	display: flex;
`;
const Left = styled.div`
	padding: 1rem;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
`;
const Logo = styled.h1`
	width: 100%;
	font-size: 2.5rem;
	margin: 0;
	letter-spacing: 0.1rem;
	text-align: left;
`;
const Description = styled.p`
	font-size: 1.2rem;
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
	flex: 1;
`;

const Title = styled.h3`
	margin: 0;
	font-size: 2rem;
	margin-bottom: 1.5rem;
`;
const List = styled.ul`
	/* border: 1px solid black; */
	list-style: none;
	font-size: 1.3rem;
	font-style: italic;
	padding: 0;
	margin: 0;
	display: flex;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	cursor: pointer;
	&:hover {
		color: gray;
	}
`;
const Right = styled.div`
	padding: 1rem;
	flex: 1;
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

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Logo.</Logo>
				<Description>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Ipsa, culpa voluptatum quia officiis numquam voluptatem.
					Odit eligendi neque, iste quia ratione corporis nam saepe
					dolorem soluta sequi minus pariatur officiis
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
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
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