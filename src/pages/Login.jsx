import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { EcommerceContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { FiLock } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';

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
	font-size: 1.2rem;
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
const PasswordIcon = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	font-size: 1.3rem;
	padding-right: 0.3rem;
	right: 0;
	cursor: pointer;
`;

const MessageForUser = styled.div`
	min-height: 1.5rem;
	color: #8e0404;
	letter-spacing: 0.05rem;
	width: 100%;
`;
const ForgotPasswordContainer = styled.div`
	font-size: 1.2rem;
	margin-bottom: 1rem;
`;
const Text = styled.span`
	margin-right: 0.5rem;
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
	const { users, isAuth, setIsAuth, loggedUser, setLoggedUser } =
		useContext(EcommerceContext);
	const navigate = useNavigate();
	const [remindShown, setRemindShown] = useState(false);
	const [visiblePassword, setVisiblePassword] = useState(false);
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const [nameMessage, setNameMessage] = useState('');
	const [passwordMessage, setPasswordMessage] = useState('');
	const [emailMessage, setEmailMessage] = useState('');

	const HandleNameChange = (e) => {
		setName(e.target.value);
	};
	const HandlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const HandleShowRemind = () => {
		setRemindShown(true);
	};
	const HandleVisiblePassword = () => {
		setVisiblePassword(!visiblePassword);
	};
	const HandleSignIn = (e) => {
		e.preventDefault();
		if (name === '') {
			setNameMessage('Please Enter Your Email');
			return;
		}
		setNameMessage('');
		if (password === '') {
			setPasswordMessage('Please Enter Your Password');
			return;
		}
		setPasswordMessage('');
		const user = users.find((el) => el.email === name);
		console.log(user);

		if (!user) {
			setNameMessage('Email or Password is incorrect');
			return;
		}
		setNameMessage('');
		if (user?.password !== password) {
			setNameMessage('Password is incorrect');
			return;
		}
		setPasswordMessage('');

		if (user.password === password) {
			setIsAuth(true);
			setLoggedUser(user);
			navigate('/user');
		}
	};
	const HandleRemind = (e) => {
		e.preventDefault();
		setEmailMessage("We've sent you a recovery Link");
	};
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
							<Input
								placeholder="Email"
								value={name}
								onChange={HandleNameChange}
							/>
						</InputContainer>
						<MessageForUser>{nameMessage}</MessageForUser>

						<InputContainer>
							<Icon>
								<FiLock />
							</Icon>
							<Input
								value={password}
								placeholder="Password"
								type={visiblePassword ? 'text' : 'password'}
								onChange={HandlePasswordChange}
							/>
							<PasswordIcon onClick={HandleVisiblePassword}>
								{visiblePassword ? (
									<AiOutlineEye />
								) : (
									<AiOutlineEyeInvisible />
								)}
							</PasswordIcon>
						</InputContainer>
						<MessageForUser>{passwordMessage}</MessageForUser>

						<Button onClick={HandleSignIn}>Sign In</Button>

						<ForgotPasswordContainer>
							<Text>Forgot your password?</Text>
							<PasswordLink onClick={HandleShowRemind}>
								Remind me
							</PasswordLink>
						</ForgotPasswordContainer>
					</Form>
					{remindShown ? (
						<RemindPassword>
							<Form>
								<InputContainer>
									<Icon>
										<FiMail />
									</Icon>
									<Input placeholder="Email" />
								</InputContainer>
								<MessageForUser>{emailMessage}</MessageForUser>

								<Button onClick={HandleRemind}>Remind</Button>
							</Form>
						</RemindPassword>
					) : (
						''
					)}
				</FormContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Login;
