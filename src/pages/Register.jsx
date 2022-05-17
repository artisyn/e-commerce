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
	min-height: 90vh;
	padding: 3rem;
`;
const FormContainer = styled.div`
	background-color: #efcfc388;
	margin: 0 auto;
	border: 1px solid black;
	max-width: 30rem;
	padding: 3rem;
`;
const Title = styled.h1`
	text-align: center;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Input = styled.input`
	width: 100%;
	height: 2.5rem;
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
`;

const Search = styled.div`
	position: relative;
	margin-bottom: 1rem;
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

const Register = () => {
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
						<Search>
							<Icon>
								<FiUser />
							</Icon>
							<Input placeholder="Name" />
						</Search>

						<Search>
							<Icon>
								<FiLock />
							</Icon>
							<Input placeholder="Password" />
						</Search>
						<Search>
							<Icon>
								<FiLock />
							</Icon>
							<Input placeholder="Repeat Password" />
						</Search>
						<Search>
							<Icon>
								<FiMail />
							</Icon>
							<Input placeholder="Email" />
						</Search>
						<Agreement>
							By clicking <ImportantText>Register</ImportantText>,
							you confirm that you are agreeing to our Terms and
							Conditions.
						</Agreement>

						<Button>Register</Button>
					</Form>
					<Separator>
						<MiddleLine />
						<SeparatorText>
							Already a registered user?
						</SeparatorText>
						<MiddleLine />
					</Separator>

					<LoginContainer>
						<Button>Login</Button>
					</LoginContainer>
				</FormContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Register;
