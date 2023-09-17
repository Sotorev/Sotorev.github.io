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
		name: "News-App",
		image: 'https://i.imgur.com/GdBw8vv.png',
		description: "This is a News App project. Where you can search for news articles by keyword and filter them by category. This project helped me a lot to get a better understanding of React Hooks and how to use them.",
		url: "https://news-dkemvm23s-sotorev.vercel.app",
		tech: [
			"Tailwind CSS", "News API", "TypeScript", "Stepzen", "GraphQL", "Next.js"
		]
	}
	
];
export {projectsData};