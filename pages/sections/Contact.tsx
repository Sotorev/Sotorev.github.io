import React from 'react'
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components'
import AnimattedLetters from '../components/AnimattedLetters'

const Wrapper = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const StyledH2 = styled.h2`
	font-size: clamp(2.5rem, 11vw, 4.5rem);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-image: linear-gradient(300deg, #93f5ec 20%, #a77bf3 70%);
`
const ContactButton = styled.button`
	border: 1px solid #a77bf3;
	background-color: transparent;
	border-radius: 10px;
	padding: 1rem 2rem;
	color: #a77bf3;
	font-weight: lighter;
	font-size: clamp(1rem, 2vw, 1.2rem);
	&:hover {
		background-color: #93f5eb37;
	}
`

function Contact() {
	const [ref, inView] = useInView({ threshold: 0.8, triggerOnce: false });
	return (
		<Wrapper id='contact' ref={ref} className={inView ? 'fade-enter-active' : 'fade-enter'}>
			<StyledH2>
				Get in touch
			</StyledH2>
			<ContactButton>
				Say hello
			</ContactButton>
		</Wrapper>
	)
}

export default Contact