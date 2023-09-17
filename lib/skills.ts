import PythonIcon from '../icons/python.js'
import ReactIcon from '../icons/react.js'
import JavaScriptIcon from '../icons/javascript.js'
import StyledComponentsIcon from '../icons/styledcomponents.js'
import TypeScriptIcon from '../icons/typescript.js'
// import NextIcon from 'icons/next.js'
import TailWindIcon from '../icons/tailwindicon.js'
import HTMLIcon from '../icons/html.js'
import CSSIcon from '../icons/css.js'

type Skill = {
	name: string;
	Icon: () => JSX.Element;
}

const data: Skill[] = [
	{
		name: 'HTML',
		Icon: HTMLIcon,
	},
	{
		name: 'CSS3+',
		Icon: CSSIcon,
	},
	{
		name: 'JavaScript ES6+',
		Icon: JavaScriptIcon,
	},
	{
		name: 'Python',
		Icon: PythonIcon,
	},

	{
		name: 'React',
		Icon: ReactIcon,
	},
	
	{
		name: 'Styled Components',
		Icon: StyledComponentsIcon,
	},
	{
		name: 'TypeScript',
		Icon: TypeScriptIcon,
	},
	// {
	// 	name: 'Next.js',
	// 	icon: NextIcon,
	// },
	{
		name: 'Tailwind CSS',
		Icon: TailWindIcon,
	},
	
]

export { data };
