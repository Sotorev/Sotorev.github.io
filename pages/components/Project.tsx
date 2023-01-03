import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.li`
	position: relative;
	/* aspect-ratio: 1/1; */
	max-width: 1000px;
	width: 100%;
	display: grid;
	flex-direction: column;
	align-items: center;
	grid-template-columns: repeat(12, 1fr);
	@media screen and (min-width: 768px){
		aspect-ratio: unset;
		margin: 0 auto;
		&:nth-child(even){
		.project-content{
			grid-column: 1 / 8;
			.project-title{
				align-self: flex-start;
			}
		}
		.project-image{
				grid-column: 6 / -1;
		}
	}
	&:nth-child(odd){
		h2{
			align-self: flex-end;
		}
	}
	}
`;


const StyledImageContainer = styled.div`
	box-sizing: border-box;
	cursor: pointer;
	position: relative;
	width: 100%;
	height: 100%;
	border: 1px solid #5f4ca3;
	
	border-radius: 5px;
	overflow: hidden;
	grid-area: 1 / 1 / -1 / 8;
	
	&:hover {
		mix-blend-mode: normal;
		border: none;
		background: transparent;
	}
	@media screen and (max-width: 768px){
		grid-column: 1/-1;
	}
	@media screen and (min-width: 768px){
		aspect-ratio: 16/9;
	}
	transition: all 1s;
`;
const StyledLink = styled(Link)`
	display: block;
	width: 100%;
	height: 100%;
	background-color: #3c2d75;

	@media screen and (min-width: 768px){
		background-color: #93f5ec;
	}
	position: relative;
	&::before{
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
`;
const StyledImage = styled.img`
	mix-blend-mode: multiply;
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	max-width: 700px;
	object-fit: cover;
	
	@media screen and (min-width: 768px){
		filter: grayscale(100%) contrast(1) brightness(60%);
		&:hover {
		mix-blend-mode: normal;
		filter: none;
		}
	}
	transition: all 1s;
`

const StyledContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	/* align-items: center; */
	box-sizing: border-box;
	grid-area: 1 / 6 / -1 / -1;
	@media screen  and (min-width: 768px){
		position: relative;
		margin: auto;
	}
	@media screen and (max-width: 768px){
		grid-column: 1/-1;
	}
`;
const StyledDescription = styled.div`

	position: relative;
	display: flex;
	box-sizing: border-box;
	padding: 25px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	z-index: 5;
	box-shadow: 0 10px 20px -15px rgba(147, 245, 235, 0.034);
	@media screen and (min-width: 768px){
		background-color: #24292F;

		align-items: flex-start;
		&:hover {
			box-shadow: 0 20px 20px -15px rgba(147, 245, 235, 0.116);
		}
	}
`;
const StyledText = styled.p`
	font-size: clamp(1rem, 2vw, 1rem);
	font-weight: 300;
	color: var(--text-primary);
`;

const StyledTitle = styled.h2`
	font-size: clamp(1.5rem, 2vw, 2rem);
	font-weight: 700;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-image: linear-gradient(300deg, #93f5ec 20%, #a77bf3 70%);
	margin: 0;
	margin-bottom: 20px;
	a{
		text-decoration: none;
	}
`;
const StyledTech = styled.div`
	position: relative;
	z-index: 1;
	display: flex;

	ul{
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		margin: 0;
		padding: 0;
		li{
			font-size: clamp(.7rem, 2vw, .9rem);
			font-weight: 300;
			color: var(--text-primary);
			margin: 0 5px;
		}
	}
`;
type Props = {
	id: number;
	name: string;
	image: string;
	description: string;
	tech: string[];
	url: string;
}

function Project({ name, image, description, tech, url }: Props) {
	if (!name || !image || !description || !tech || !url) {
		return null;
	}
	return (
		<Wrapper>
			<StyledContent className='project-content'>
				<StyledTitle className='project-title'>{<Link target={'_blank'} href={url}>{name}</Link>}</StyledTitle>
				<StyledDescription className='project-description'>
					<StyledText>{description}</StyledText>
				</StyledDescription>
				<StyledTech className='project-tech'>
					<ul>
						{tech.map((tech, index) => (
							<li key={index}>{tech}</li>
						))}
					</ul>
				</StyledTech>
			</StyledContent>
			<StyledImageContainer className="project-image">
				<StyledLink target={'_blank'} href={url} aria-label={`${name} project`}>
					<StyledImage src={image} alt={name} />
				</StyledLink>
			</StyledImageContainer>
		</Wrapper>
	)
}

export default Project