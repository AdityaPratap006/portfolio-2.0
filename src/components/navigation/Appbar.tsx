import { ThemeSwitch } from "./ThemeSwitch";

interface Props {}

export const Appbar = (_props: Props) => {
    return (
        <nav
            className="sticky top-0 
            left-0
            w-full h-14 
            z-40 bg-neutralBg
            border-b border-onNeutralBg 
            bg-opacity-60 backdrop-filter backdrop-blur-xl 
            flex  justify-start items-center 
            pl-4 pr-4"
        >
            <h4 className=" text-primaryBold text-3xl p-0 m-0">Aditya</h4>
            <div className="ml-auto">
                <ThemeSwitch />
            </div>
        </nav>
    );
};
