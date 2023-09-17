import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AnimattedLetters from '../components/AnimattedLetters'

const Wrapper = styled.section`
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
	flex-wrap: wrap;
`
const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`
const StyledP = styled.p`
	animation-delay: .8s;
  color: var(--text-secondary);
	font-weight: lighter;
	@media screen and (min-width: 768px) {
		font-size: clamp(1.2rem, 2vw, 1.5rem);
	}
`

function Hero() {
	const [hasLoaded, setHasLoaded] = React.useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setHasLoaded(true);
		}, 3000);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<Wrapper id='home'>
			<TextWrapper>
				<AnimattedLetters
					text='Hi,'
					idx={0}
				/>
				<AnimattedLetters
					text="I'm Manuel,"
					idx={'Hi,'.length}
				/>
				<AnimattedLetters
					text='web developer.'
					idx={"Hello, I'm Manuel,".length}
				/>
				<StyledP className='animate__animated animate__fadeInUp' >
					Passionated about
					creating beautiful and functional websites.
				</StyledP>
			</TextWrapper>
		</Wrapper>
	)
}

export default Hero 