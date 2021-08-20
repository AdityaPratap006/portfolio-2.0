import {
    BeakerIcon,
    BriefcaseIcon,
    HomeIcon,
    LightningBoltIcon,
    MailIcon,
} from "@heroicons/react/outline";
import { MenuLink } from "./MenuLink";

const navLinks = [
    {
        name: "home",
        href: "/",
        icon: HomeIcon,
    },
    {
        name: "skills",
        href: "/skills",
        icon: LightningBoltIcon,
    },
    {
        name: "projects",
        href: "/projects",
        icon: BeakerIcon,
    },
    {
        name: "experience",
        href: "/experience",
        icon: BriefcaseIcon,
    },
    {
        name: "contact",
        href: "/contact",
        icon: MailIcon,
    },
];

interface Props {}

export const Sidebar = (_props: Props) => {
    return (
        <nav
            className="fixed 
            left-0 bottom-0 
            w-screen h-16 z-50 border-r border-gray-500 sm:top-0 
            sm:h-screen sm:w-20 lg:w-60  bg-neutralBg bg-opacity-20 
            backdrop-filter backdrop-blur-lg flex sm:flex-col"
        >
            <ul className="w-full flex sm:flex-col justify-around jsm:ustify-start items-center gap-3 sm:gap-8 sm:pt-40">
                {navLinks.map(({ name, href, icon }) => (
                    <li
                        key={name}
                        className="h-full sm:h-auto sm:w-full flex justify-center items-center"
                    >
                        <MenuLink href={href} name={name} icon={icon} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};
