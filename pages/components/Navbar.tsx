import Link from 'next/link';
import { useEffect, useState} from 'react';
import useScrollDir from '../hooks/useScrollDir';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const NavMenuButton = styled.div`
	position: relative;
	z-index: 3;
	display: none;
	cursor: pointer;
	span {
		display: block;
		width: 35px;
		height: 5px;
		background-color: #fff;
		margin: 6px 0;
		transition: 0.4s;
		
	}
	&.open {
		span:nth-child(1) {
			transform: rotate(-45deg) translate(-9px, 6px);
		}
		span:nth-child(2) {
			opacity: 0;
		}
		span:nth-child(3) {
			transform: rotate(45deg) translate(-8px, -8px);
		}
	}
	@media (max-width: 768px) {
		display: block;
	}
`
const NavBar = styled.nav<{ scrollDir: string; }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	height: 80px;
	position: fixed;
	width: 100%;
	top: ${props => props.scrollDir === "DOWN" ? "-80px" : "0px"};
	box-shadow: ${props => props.scrollDir === "UP" ? "0 0 10px rgba(0,0,0,.548)" : props.scrollDir === "DOWN" ? "0 0 10px rgba(0,0,0,.548)" : "none"};
	transition: all .5s ease-in-out;
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	z-index: 1;
	padding: 0 2rem;
	
`
const StyledOl = styled.ol`
		color: var(--secondary);
		margin: 0;
		padding: 0;
		margin-left: 2rem;
		@media screen and (min-width: 768px){
			display: flex;
			align-items: center;
		}
`;
const StyledLinks = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 768px) {
		display: none;
	}

`;
const StyledMenu = styled.div<{ menuOpen: boolean }>`
	@media screen and (min-width: 768px) {
		display: none;
	}
`
const StyledLi = styled.li<{ animate: boolean, idx: number }>`
	  margin: 1rem 0;
	  transition: all .4s;
	  a {
		text-decoration: none;
		color: var(--text-primary);
		&:hover {
			color: var(--quaternary);
		}
	  }
	  @media screen and (min-width: 768px) {
			margin: 0 1rem;
			transform: translate(0, ${props => props.animate ? "-100px" : "0"});
			transition-delay: ${props => props.idx*0.1 + "s" };		
			transition-timing-function: cubic-bezier(0.77, 0.2, 0.05, 1.0);
		}
		  
`

const Img = styled.img<{ animate: boolean }>`
	height: clamp(1vw, 50px, 50px);
	width: clamp(1vw, 50px, 50px);
	@media screen and (min-width: 768px) {
		opacity: ${props => props.animate ? "0" : "1"};
		transition: all 1s ease-in-out 100ms;
	}
`


export default function Navbar() {

	const [menuOpen, setMenuOpen] = useState(false);
	const [animate, setAnimate] = useState(true);
	const scrollDir = useScrollDir();

	useEffect(() => {
		setMenuOpen(false);
		setTimeout(() => {setAnimate(false)}, 100);
	}, [])

	const toggleMenu = () => {
		document.body.style.overflow = menuOpen ? "auto" : "hidden";
		setMenuOpen(!menuOpen);
	}
	const items = ["Home", "About", "Projects", "Contact"];
	return (
		<>
			
			<NavBar scrollDir={scrollDir}>
				<a href="/"><Img src="images/manrev.png" alt="logo" animate={animate} /></a>
				<StyledLinks>
					<StyledOl>
						{items.map((item, idx) => (
							<StyledLi animate={animate} idx={idx} key={idx + item}>
								<Link href={`#${item.toLowerCase()}`}>{item}</Link>
							</StyledLi>
						))}
					</StyledOl>
				</StyledLinks>
				<StyledMenu menuOpen={menuOpen}>
					<NavMenuButton
						className={menuOpen ? "open" : "closed"}
						onClick={toggleMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</NavMenuButton>
					<Sidebar menuOpen={menuOpen}>
						<nav>
							<StyledOl>
								{items.map((item, idx) => (
									<StyledLi animate={animate} idx={idx} key={idx + item}>
										<Link href={`#${item.toLowerCase()}`} onClick={toggleMenu}>{item}</Link>
									</StyledLi>
								))}
							</StyledOl>
						</nav>

					</Sidebar>
				</StyledMenu>
				
			</NavBar>
		</>
	)
}
