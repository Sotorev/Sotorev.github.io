import React from 'react';
import styled from 'styled-components';
import AnimattedLetters from '../components/AnimattedLetters';
import { useInView } from 'react-intersection-observer';
import {data} from '../../lib/skills';
import Skill from '../components/Skill';

const Wrapper = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	padding-top: 150px;
`
const StyledParagraph = styled.p<{ inView: boolean }>`
	transition: all .7s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	opacity: ${({ inView }) => inView ? '1' : '0'};
	transform: translateX(${({ inView }) => inView ? '0' : '-5%'});
	font-size: clamp(1rem, 2vw, 1.2rem);
	
	color: var(--text-secondary);
	
`
const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`
const TechList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	margin-top: 5%;
	display: grid;
	row-gap: 1vh;
	flex-wrap: wrap;
	@media screen and (min-width: 768px) {
		display: flex;
		column-gap: 1rem;
	}
`


function About() {
	const [ref, inView] = useInView({threshold: 0.3, triggerOnce: false});
	return (
		<Wrapper id='about' ref={ref}>
			{inView &&
				<AnimattedLetters
					fontSize='clamp(2.5rem, 8vw, 4.5rem)'
					color='var(--text-primary)'
					text='About me'
					idx={0}
					timeOut={1000}
				/>
			}
			<ContentWrapper >
				<StyledParagraph inView={inView}>
					Hello!, My name is Manuel and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try creating fandom webpages. My main focus these days is building accesible, inclusive products and digital experiences.
				</StyledParagraph>
				
				<TechList>
					{
						data !== undefined &&
						data.map((item, idx) => (
							<Skill
								key={idx}
								name={item.name}
								Icon={item.Icon}
								idx={idx}
							/>
						))
					}
				</TechList>
			</ContentWrapper>
		</Wrapper>
	)
}

export default About