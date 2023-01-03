import PythonIcon from '../icons/python.js'
import ReactIcon from '../icons/react.js'
import JavaScriptIcon from '../icons/javascript.js'
import StyledComponentsIcon from '../icons/styledcomponents.js'
import TypeScriptIcon from '../icons/typescript.js'
// import NextIcon from 'icons/next.js'
import TailWindIcon from '../icons/tailwindicon.js'

type Skill = {
	name: string;
	Icon: () => JSX.Element;
}

const data : Skill[] =  [
	{
		name: 'Python',
		Icon: PythonIcon,
	},

	{
		name: 'React',
		Icon: ReactIcon,
	},
	{
		name: 'JavaScript ES6+',
		Icon: JavaScriptIcon,
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
