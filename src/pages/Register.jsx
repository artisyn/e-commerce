import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { EcommerceContext } from '../context/context';
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
	font-size: 1.3rem;
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
const Agreement = styled.div`
	margin-bottom: 1rem;
`;
const ImportantText = styled.span`
	font-weight: bold;
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
const LoginContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const MessageForUser = styled.div`
	min-height: 1.5rem;
	color: #8e0404;
	letter-spacing: 0.05rem;
	width: 100%;
`;
const StyledLink = styled(Link)`
	text-decoration: none;
`;

const Register = () => {
	const { users, setUsers, isAuth, setIsAuth, loggedUser, setLoggedUser } =
		useContext(EcommerceContext);
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [email, setEmail] = useState('');
	const [visiblePassword, setVisiblePassword] = useState(false);
	//Message States
	const [nameMessage, setNameMessage] = useState('');
	const [passwordMessage, setPasswordMessage] = useState('');
	const [repeatPasswordMessage, setRepeatPasswordMessage] = useState('');
	const [emailMessage, setEmailMessage] = useState('');

	// Messages for wrong inputs
	const noName = 'Please Enter Your Name';
	const noPassword = 'Please Enter Password';
	const shortPassword = 'Password should be at least 8 characters';
	const noNumPassword = 'Password should contain at least 1 number';
	const notEqualPasswords = 'Passwords do not match';
	const noEmail = 'Please Enter Your Email';
	const wrongEmail = 'Please Enter a valid Email';
	const emailInUse = 'Email Is Already In Use';

	const HandleNameChange = (e) => {
		setName(e.target.value);
	};
	const HandlePasswordChange = (e) => {
		if (e.nativeEvent.data === ' ') return;
		setPassword(e.target.value);
	};
	const HandleRepeatPassword = (e) => {
		if (e.nativeEvent.data === ' ') return;

		setRepeatPassword(e.target.value);
	};
	const HandleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const CheckUser = (email) => {
		let userExists = false;

		users.forEach((user) => {
			if (user.email === email) userExists = true;
		});

		return userExists;
	};
	const ClearFields = () => {
		setName('');
		setPassword('');
		setEmail('');
	};
	const HandleRegister = (e) => {
		e.preventDefault();
		if (name === '') {
			setNameMessage(noName);
			return;
		}
		setNameMessage('');

		if (password.length === 0) {
			setPasswordMessage(noPassword);
			return;
		}
		setPasswordMessage('');
		if (password.length < 8) {
			setPasswordMessage(shortPassword);
			return;
		}
		setPasswordMessage('');

		if (/[0-9]/.test(password) == false) {
			setPasswordMessage(noNumPassword);
			return;
		}
		setPasswordMessage('');

		if (password !== repeatPassword) {
			setRepeatPasswordMessage(notEqualPasswords);
			return;
		}
		setRepeatPasswordMessage('');

		if (repeatPassword.length === 0) {
			setRepeatPasswordMessage(noPassword);
			return;
		}
		setRepeatPasswordMessage('');

		if (repeatPassword.length < 8) {
			setRepeatPasswordMessage(shortPassword);
			return;
		}
		setRepeatPasswordMessage('');

		if (email.length === 0) {
			setEmailMessage(noEmail);
			return;
		}
		setEmailMessage('');
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setEmailMessage(wrongEmail);
			return;
		}
		setEmailMessage('');

		if (CheckUser(email)) {
			setEmailMessage(emailInUse);
			return;
		}
		const user = {
			name: `${name}`,
			password: `${password}`,
			email: `${email}`,
		};

		setUsers([...users, user]);
		ClearFields();
		setIsAuth(true);
		setLoggedUser(user);
		navigate(`/User/${user.name}`);
	};

	const HandleVisiblePassword = () => {
		setVisiblePassword(!visiblePassword);
	};

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<FormContainer>
					<Form>
						<Separator>
							<MiddleLine />
							<SeparatorText>
								Don't have an account yet?
							</SeparatorText>
							<MiddleLine />
						</Separator>

						<InputContainer>
							<Icon>
								<FiUser />
							</Icon>
							<Input
								maxLength={26}
								placeholder="Name"
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
								type={visiblePassword ? 'text' : 'password'}
								placeholder="Password"
								value={password}
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

						<InputContainer>
							<Icon>
								<FiLock />
							</Icon>
							<Input
								type={visiblePassword ? 'text' : 'password'}
								placeholder="Repeat Password"
								value={repeatPassword}
								onChange={HandleRepeatPassword}
							/>
							<PasswordIcon onClick={HandleVisiblePassword}>
								{visiblePassword ? (
									<AiOutlineEye />
								) : (
									<AiOutlineEyeInvisible />
								)}
							</PasswordIcon>
						</InputContainer>
						<MessageForUser>{repeatPasswordMessage}</MessageForUser>

						<InputContainer>
							<Icon>
								<FiMail />
							</Icon>
							<Input
								placeholder="Email"
								value={email}
								onChange={HandleEmailChange}
							/>
						</InputContainer>
						<MessageForUser>{emailMessage}</MessageForUser>

						<Agreement>
							By clicking <ImportantText>Register</ImportantText>,
							you confirm that you are agreeing to our Terms and
							Conditions.
						</Agreement>

						<Button onClick={HandleRegister}>Register</Button>
					</Form>
					<Separator>
						<MiddleLine />
						<SeparatorText>
							Already a registered user?
						</SeparatorText>
						<MiddleLine />
					</Separator>

					<LoginContainer>
						<StyledLink to={'/Login'}>
							<Button>Sign In</Button>
						</StyledLink>
					</LoginContainer>
				</FormContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Register;
