import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div<{ animation: boolean }>`
	@media screen and (max-width: 768px){
		display: none;
	}
	transform: ${props => props.animation ? 'translateY(0)' : 'translateY(100%)'};
	transition: all 0.5s ease-out;
	display: flex;
	width: 40px;
	position: fixed;
	left: 40px;
	bottom: 0;
	right: auto;
	z-index: 10;
	color: #a8b2d1;
	box-sizing: border-box;
	&::selection{
		background-color: var(--secondary);
		color: #ccd6f6
	}
`;
const StyledUl = styled.ul`
	&::after{
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0 auto;
		background-color: #a8b2d1;
	}
	display: flex;
	flex-direction: column;
	-moz-box-align: center;
	align-items: center;
	margin: 0px;
	padding: 0px;
	list-style: none;
`;
const StyledLi = styled.li`
	box-sizing: border-box;
`;
const StyledLink = styled(Link)`
	padding: 10px;
	display: inline-block;
	text-decoration: none;
	text-decoration-skip-ink: none;
	position: relative;
	transition: all 0.25s  cubic-bezier(0.645, 0.045, 0.355, 1);
	color: var(--text-primary);
	&:hover{
		transform: translateY(-3px);
		color: var(--secondary);
	}
`;
const StyledIcon = styled.svg`
	width: 20px;
	height: 20px;
	fill: none;
	vertical-align: middle;
	stroke: currentColor;
	/* color: var(--text-primary);	 */

`;

type Social = {
	name: string;
	url: string;
	icon: () => JSX.Element;

};

type Props = {
	socials: Social[];
}

function SocialList({ socials }: Props) {
	const [animation, setAnimation] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setAnimation(true);
		}, 800);
	}, []);
	if(!socials) return null;
	return (
		<Wrapper animation={animation}>
			<StyledUl>
				{socials.map((social, index) => (
					<StyledLi key={index}>
						<StyledLink target={'_blank'} href={social.url}>
							<StyledIcon>
								{social.icon()}
							</StyledIcon>
						</StyledLink>
					</StyledLi>
				))}
			</StyledUl>
		</Wrapper>
	);
}

export default SocialList;