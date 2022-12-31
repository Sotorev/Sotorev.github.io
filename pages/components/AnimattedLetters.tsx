import React, { useEffect } from 'react'
import styled from 'styled-components';

type Props = {
	text: string;
	idx: number;
	fontSize?: string;
	timeOut?: number;
	color?: string;
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 480px){
		flex-wrap: wrap;
	}
`


const StyledSpan = styled.span<{fontSize?: string, color?: string}>`
	display: flex;
	min-width: calc(10px + 1vw);
	color: ${({ color }) => color ? color : 'var(--text-primary)'};
	font-weight: 700;
	//Calculate the font size based on viewport width
	font-size: ${({ fontSize }) => fontSize ? fontSize : 'clamp(2rem, 10vw, 3.5rem)'};
	@media screen and (min-width: 1024px) {
		font-size: ${({ fontSize }) => fontSize ? fontSize : 'calc(2.5rem + 3.5vw)'};
		line-height: 5rem;
		&:hover{
			color: var(--secondary);
		}
		transition: all 300ms ease-in-out;
	}

`;

function AnimattedLetters({ text, idx, fontSize, timeOut, color}: Props) {
	const [hasLoaded, setHasLoaded] = React.useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setHasLoaded(true);
		}, timeOut ? timeOut : 3000);
		return () => clearTimeout(timeout);
	}, []);

	const handleAnimationEnd = (e: React.AnimationEvent) => {
		const classList = e.currentTarget.classList;
		if(classList.contains('animate__bounceIn') && classList.contains('animate__animated')) {
			classList.remove('animate__bounceIn', 'animate__animated');
		}
		else if(classList.contains('animate__rubberBand') && classList.contains('animate__animated')) {
			classList.remove('animate__rubberBand', 'animate__animated');
		}
		
	};
	const handleMouseOver = (e: React.MouseEvent) => {
		if(hasLoaded) {
			const classList = e.currentTarget.classList;
			classList.add('animate__rubberBand', 'animate__animated');
		}
	}

	return (
		<Wrapper>
			{
				text.split('').map((letter, i) => {
					return (

						<StyledSpan
							color={color}
							fontSize={fontSize}
							onMouseOver={handleMouseOver}
							onAnimationEnd={handleAnimationEnd}
							key={i + letter}
							className={'animate__animated animate__bounceIn'}
							style={hasLoaded ? { animationDelay: '0ms' } : { animationDelay: `${(idx + i) * 50}ms` }}
						>
							{letter}
						</StyledSpan>

					)
				}
				)
			}
		</Wrapper>
	)
}
const Button = styled.button`
	width: 100px;
	height: 50px;
	background: gray;
	color: white;
	border: none;
	border-radius: 5px;
	margin: 5px;
	&:hover{
		cursor: pointer;
	}
`
export default AnimattedLetters