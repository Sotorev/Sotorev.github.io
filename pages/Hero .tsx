import React from 'react'
import styled from 'styled-components'
import AnimattedLetters from './AnimattedLetters'

const Wrapper = styled.section`
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`
const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`
function Hero () {
  return (
		<Wrapper>
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
					text='software engineer.'
					idx={"Hello, I'm Manuel,".length}
				/>
			</TextWrapper>
	</Wrapper>
  )
}

export default Hero 