import {
    BeakerIcon,
    BriefcaseIcon,
    HomeIcon,
    LightningBoltIcon,
    MailIcon,
} from "@heroicons/react/outline";

export const navRoutes = [
    {
        name: "home",
        href: "/",
        icon: HomeIcon,
        title: "About me",
    },
    {
        name: "skills",
        href: "/skills",
        icon: LightningBoltIcon,
        title: "Skills I have",
    },
    {
        name: "projects",
        href: "/projects",
        icon: BeakerIcon,
        title: "Projects I've done",
    },
    {
        name: "experience",
        href: "/experience",
        icon: BriefcaseIcon,
        title: "My Work experience",
    },
    {
        name: "contact",
        href: "/contact",
        icon: MailIcon,
        title: "Contact me",
    },
];
