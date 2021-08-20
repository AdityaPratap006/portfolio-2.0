import { navRoutes } from "../../utils/navRoutes";
import { MenuLink } from "./MenuLink";

interface Props {}

export const Sidebar = (_props: Props) => {
    return (
        <nav
            className="fixed 
            left-0 bottom-0 
            w-screen h-16 z-50 border-r border-gray-600 sm:top-0 
            sm:h-screen sm:w-20 lg:w-60  bg-neutralBg bg-opacity-40 
            backdrop-filter backdrop-blur-lg flex sm:flex-col"
        >
            <ul className="w-full flex sm:flex-col justify-around jsm:ustify-start items-center gap-3 sm:gap-8 sm:pt-40">
                {navRoutes.map(({ name, href, icon }) => (
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
