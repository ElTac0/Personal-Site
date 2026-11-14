export type NavItems = {
    label: string;
    href: string;
    external?: boolean;
    aliases?: string[];
};

export const navItems: NavItems[] = [
    { label: "homepage", href: "/", 
        aliases: ["home","~","","cd home"] },
    { label: "resume", href: "/resume",
        aliases: ["resume","cd resume"] },
    { label: "about", href: "/about", 
        aliases: ["about","whoami","cd about"] },
    { label: "projects", href: "/projects", 
        aliases: ["projects","cd projects"] },
    { label: "game-reviews", href: "=", external: true, 
        aliases: ["game-reviews","cd game-reviews"] },
];