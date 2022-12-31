import React from 'react'
import styled from 'styled-components'
import AnimattedLetters from '../components/AnimattedLetters'

const Wrapper = styled.section`
	
	position: relative;
	display: flex;
	flex-direction: column;

`
const ProjectsContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	
`

function Projects() {
	return (
		<Wrapper id='projects'>
			<AnimattedLetters
				idx={0}
				text='Projects'
				color='var(--text-primary)'
				fontSize='clamp(2.5rem, 8vw, 4.5rem)'
			/>
			
		</Wrapper>
	)
}

export default Projects