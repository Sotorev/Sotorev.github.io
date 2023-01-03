type Project = {
	id: number;
	name: string;
	image: string;
	description: string;
	tech: string[];
	url: string;
};
const projectsData: Project[] = [
	{
		id: 1,
		name: "Rick and morty",
		image: 'https://i.imgur.com/DGe8bE8.png',
		description: `This is a Rick and Morty AdultSwim's series project.
		Making this project helped me a lot to get a better understanding of URLSearchParams.\n
		This project has interesting functionalities such as search filters through query strings
		in the URL and use of one API to access the data.`,
		url: "https://rickandmorty-chi-ten.vercel.app/",
		tech: [
			"React", "React Router", "Styled Components", "Serie Api"
		]
	},
	{
		id: 2,
		name: "News-App",
		image: 'https://i.imgur.com/GdBw8vv.png',
		description: "This is a News App project. Where you can search for news articles by keyword and filter them by category. This project helped me a lot to get a better understanding of React Hooks and how to use them.",
		url: "https://news-dkemvm23s-sotorev.vercel.app",
		tech: [
			"React", "Tailwind CSS", "News API", "TypeScript", "Stepzen", "GraphQL", "Next.js"
		]
	}
	
];
export {projectsData};