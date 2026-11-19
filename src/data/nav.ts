export type NavItem = {
	label: string;
	href: string;
	external?: boolean;
	aliases: string[];
};

export type ContactLink = {
	label: string;
	href: string;
	icon: string;
	external?: boolean;
	aliases: string[];
};

export const navItems: NavItem[] = [
	{ label: 'Homepage', href: '/', aliases: ['home', '~', ''] },
	{ label: 'Resume', href: '/resume', aliases: ['resume'] },
	{ label: 'About', href: '/about', aliases: ['about', 'whoami'] },
	{ label: 'Projects', href: '/projects', aliases: ['projects'] },
	{
		label: 'Game reviews',
		href: '=',
		external: true,
		aliases: ['game-reviews', 'game reviews', 'reviews'],
	},
];

export const contactLinks: ContactLink[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/ElTac0',
		aliases: ['github', 'git', 'hub'],
		external: true,
		icon: 'github',
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/izakpz/',
		aliases: ['linkedin'],
		external: true,
		icon: 'linkedin',
	},
];
