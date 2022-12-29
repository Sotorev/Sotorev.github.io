import React from 'react'
import styled from 'styled-components';

type Props = {
	text: string,
	idx: number,
}

const Wrapper = styled.div`
	display: flex;

`
const StyledSpan = styled.span`
	min-width: calc(10px + 1vw);
	color: var(--text-primary);
	font-weight: 700;
	//Calculate the font size based on viewport width
	font-size: clamp(2rem, 10vw, 3.5rem);
	@media screen and (min-width: 1024px) {
		font-size: calc(2.5rem + 3.5vw);
		line-height: 5rem;
	}
`;

function AnimattedLetters({ text, idx }: Props) {
	const textArray = Array.from(text);
	return (
		<Wrapper>
			{textArray.map((letter, index) => {
				return (
					<StyledSpan key={index}>
						{letter}
					</StyledSpan>
				)
			})}
		</Wrapper>
	)
}

export default AnimattedLetters