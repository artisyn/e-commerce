import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { FiLock } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';

const Container = styled.div``;
const Wrapper = styled.div`
	min-height: 100vh;
	padding: 2rem;
	background-image: url(https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470);
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;
const FormContainer = styled.div`
	background-color: #e1d0c3e0;
	margin: 0 auto;
	max-width: 30rem;
	padding: 3rem;
`;
const Title = styled.h1`
	text-align: center;
	margin: 0 0 1rem 0;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Input = styled.input`
	width: 100%;
	height: 3rem;
	padding-left: 2rem;
`;
const Button = styled.button`
	height: 3rem;
	width: 10rem;
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
	margin-bottom: 1rem;
`;

const InputContainer = styled.div`
	position: relative;
	margin-bottom: 1.5rem;
	width: 100%;
`;
const Icon = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	font-size: 1.3rem;
	padding-left: 0.3rem;
`;
const LoginContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const MessageForUser = styled.div`
	position: absolute;

	color: red;
	letter-spacing: 0.05rem;
	bottom: -1rem;
`;
const ForgotPasswordContainer = styled.div`
	font-size: 1.2rem;
	margin-bottom: 1rem;
`;
const PasswordLink = styled.span`
	transition: color ease 0.3s;
	cursor: pointer;
	font-weight: 500;
	color: #858585;
	&:hover {
		color: #040494;
	}
`;
const RemindPassword = styled.div``;

const Login = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title> SIGN IN</Title>
				<FormContainer>
					<Form>
						<InputContainer>
							<Icon>
								<FiUser />
							</Icon>
							<Input placeholder="Name" />
							<MessageForUser></MessageForUser>
						</InputContainer>

						<InputContainer>
							<Icon>
								<FiLock />
							</Icon>
							<Input placeholder="Password" />
							<MessageForUser></MessageForUser>
						</InputContainer>

						<Button>Sign In</Button>

						<ForgotPasswordContainer>
							Forgot your password?
							<PasswordLink> Remind me </PasswordLink>
						</ForgotPasswordContainer>
					</Form>
					<RemindPassword>
						<Form>
							<InputContainer>
								<Icon>
									<FiMail />
								</Icon>
								<Input placeholder="Email" />
								<MessageForUser></MessageForUser>
							</InputContainer>
							<Button>Remind</Button>
						</Form>
					</RemindPassword>
				</FormContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Login;
