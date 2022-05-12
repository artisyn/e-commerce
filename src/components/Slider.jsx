import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
`;
const Arrow = styled.div`
	width: 3rem;
	height: 3rem;
	background-color: #d2d1d1;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	cursor: pointer;
	left: ${(props) => props.direction === 'left' && '1rem'};
	right: ${(props) => props.direction === 'right' && '1rem'};
	opacity: 0.7;
	z-index: 2;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
	transition: transform ease-out 0.5s;
`;
const Slide = styled.div`
	padding: 1rem;
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: ${(props) => props.bg};
`;
const ImageContainer = styled.div`
	flex: 1;
	height: 100%;
	/* border: 1px solid black; */
	display: flex;
	//align-items: center;
	justify-content: center;
`;

const Image = styled.img`
	height: 80%;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 3rem;
`;

const Title = styled.h1`
	font-size: 5rem;
`;
const Description = styled.p`
	margin: 3rem 0;
	font-size: 1.5rem;
	font-weight: 700;
	letter-spacing: 0.1rem;
`;
const Button = styled.button`
	padding: 0.7rem;
	font-size: 1.5rem;
	background-color: transparent;
	cursor: pointer;
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (dir) => {
		if (dir === 'left') {
			setSlideIndex(
				slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1
			);
		}
		if (dir === 'right') {
			setSlideIndex(
				slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0
			);
		}
	};
	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick('left')}>
				<ArrowBackIosOutlinedIcon />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide key={item.id} bg={item.bg}>
						<ImageContainer>
							<Image src={item.img} />
						</ImageContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Description>{item.desc}</Description>
							<Button>SHOP NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>

			<Arrow direction="right" onClick={() => handleClick('right')}>
				<ArrowForwardIosOutlinedIcon />
			</Arrow>
		</Container>
	);
};

export default Slider;
