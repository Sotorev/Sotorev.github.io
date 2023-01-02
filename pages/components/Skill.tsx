import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

type Props = {
	name: string;
	Icon: () => JSX.Element;
	idx: number;
};

const Wrapper = styled.div<{ inView: boolean, idx: number }>`

	position: relative;
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 300ms ease-in-out;
	opacity: ${(props) => props.inView ? '1' : '0'};
	transform: ${(props) => props.inView ? 'translateX(0)' : 'translateX(-100px)'};
	transition-delay: ${(props) => props.idx * 100}ms;
	@media screen and (min-width: 768px) {
		width: 150px;
		height: 150px;
	}

`;
const GlowAux = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	opacity: 0;
	background: linear-gradient(180deg, rgba(120, 117, 255, 0.1) 0%, #84edc1 88.02%);
	filter: blur(24px);

	&:hover {
		opacity: .4;
	}

	transition: opacity .3s ease;
`;
const Content = styled.div`
	position: relative;
	z-index: 5;
	box-shadow: 0 10px 5px rgba(0, 0, 0, 0.281), 0 1px 1px rgba(255, 255, 255, 0.1) inset;
	background-color: #24292f;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border-radius: 10px;
	border: 1px solid black;
	width: 100%;
	height: 100%;
	svg,
	img {
		margin: 0;
		margin-left: 3%;
		width: 64px;
	}

			h4 {
				margin-left: 3%;
				color: white;
				font-weight: normal;
				font-size: small;
			}
	

	&:hover {
		transform: translateY(-15px);
		box-shadow: 0 0 0 0;
	}

	&:hover+.glow {
		opacity: .4;
	}

	transition: transform 300ms ease-in-out;
	@media screen and (min-width: 768px) {
		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		svg,
		img {
			margin-top: 10%;
		}

		h4 {
			
		}
	}
`;
export default function Skill({idx, name, Icon}: Props) {
	const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

	return (
		 <Wrapper ref={ref} inView={inView} idx={idx}>
			<Content>
			
				{
					// @ts-ignore
					<Icon />}
				<h4>{name}</h4>
			</Content>
			<GlowAux className='glow' />
		</Wrapper>
	);
}