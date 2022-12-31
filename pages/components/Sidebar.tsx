import React from 'react'
import styled from 'styled-components';

const StyledSidebar = styled.aside<{ menuOpen: boolean }>`
	backdrop-filter: blur(10px);
  position: fixed;
	top: 0;
	right: 0;
	width: 50%;
	height: 100vh;
	background-color: rgba(0,0,0,.8);
	z-index: 2;
	transform: translateX(${props => props.menuOpen ? "0" : "100%"});
	transition: all .3s ease-in-out;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media screen and (min-width: 768px) {
		display: none;
	}

`;

function Sidebar({ menuOpen, children }: { menuOpen: boolean, children: React.ReactNode }) {
	return (
		<StyledSidebar
			menuOpen={menuOpen}
		>
			{children}
		</StyledSidebar>
	)
}

export default Sidebar