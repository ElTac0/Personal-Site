export type NavItems = {
	label: string;
	href: string;
	external?: boolean;
	aliases: string[];
};

export const navItems: NavItems[] = [
	{ label: 'homepage', href: '/', aliases: ['home', '~', ''] },
	{ label: 'resume', href: '/resume', aliases: ['resume'] },
	{ label: 'about', href: '/about', aliases: ['about', 'whoami'] },
	{ label: 'projects', href: '/projects', aliases: ['projects'] },
	{
		label: 'game-reviews',
		href: '=',
		external: true,
		aliases: ['game-reviews'],
	},
];
