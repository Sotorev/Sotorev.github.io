import React from 'react'
import styled from 'styled-components'

const StyledSignature = styled.p`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	font-size: clamp(1rem, 2vw, 1.3rem);
	color: var(--text-primary);

`
const Wrapper = styled.footer`
	position: relative;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`

function Footer() {
	return (
		<Wrapper>
			<StyledSignature>Built by Manuel Soto</StyledSignature>
		</Wrapper>
	)
}

export default Footer