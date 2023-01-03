import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import AnimattedLetters from '../components/AnimattedLetters'
import Project from '../components/Project'
import { projectsData } from '../../lib/projects'

const Wrapper = styled.section`
	
	position: relative;
	display: flex;
	flex-direction: column;

`
const ProjectsContainer = styled.ul`
	margin: 0;
	padding: 0;
	position: relative;
	margin-top: 2rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem 0;
`

function Projects() {
	const [ref, inView] = useInView({threshold: 0.3, triggerOnce: true});
	return (
		<Wrapper id='projects' ref={ref}>
			{
				inView &&
				<AnimattedLetters
					idx={0}
					text='Projects'
					color='var(--text-primary)'
					fontSize='clamp(2.5rem, 8vw, 4.5rem)'
				/>
			}
			<ProjectsContainer className='projects'>
				{
					projectsData.map((project) => (
						<Project
							id={project.id}
							name={project.name}
							image={project.image}
							description={project.description}
							tech={project.tech}
							url={project.url}
							key={project.id}
						/>
					))
				}
			</ProjectsContainer>
		</Wrapper>
	)
}

export default Projects