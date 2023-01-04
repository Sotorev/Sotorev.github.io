import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';
import GithubIcon from '../icons/github';
import LinkedinIcon from '../icons/linkedin';

type Social = {
	name: string;
	url: string;
	icon: () => JSX.Element;
};
const Socials: Social[] = [
	{
		name: 'Twitter',
		icon: TwitterIcon,
		url: 'https://twitter.com/sotoj7_',
	},
	{
		name: 'Instagram',
		icon: InstagramIcon,
		url: 'https://www.instagram.com/sotoj7_/',
	},
	{
		name: 'Github',
		icon: GithubIcon,
		url: 'https://www.github.com/Sotorev',
	},

]

export default Socials;