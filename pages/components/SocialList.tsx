import Link from 'next/link';
import { type } from 'os';
import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
	@media screen and (max-width: 768px){
		display: none;
	}
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
	if(!socials) return null;
	return (
		<Wrapper>
			<StyledUl>
				{socials.map((social, index) => (
					<StyledLi key={index}>
						<StyledLink href={social.url}>
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