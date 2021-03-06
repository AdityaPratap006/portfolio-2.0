import NextImage from "next/image";
import { useRouter } from "next/router";
import { navRoutes } from "../../utils/navRoutes";
import { ThemeSwitch } from "./ThemeSwitch";

interface Props {}

export const Appbar = (_props: Props) => {
    const router = useRouter();

    const activeRoute = navRoutes.find(({ href }) => href === router.asPath);

    return (
        <nav
            className="sticky top-0 
            left-0
            w-full h-14 sm:h-20 
            z-40 bg-neutralBg
            border-b border-gray-600
            bg-opacity-40 backdrop-filter backdrop-blur-xl 
            flex  justify-start items-center gap-2 sm:gap-4
            pl-4 pr-4"
        >
            <h4 className=" text-primaryBold font-extrabold text-2xl sm:text-4xl p-0 m-0 capitalize">
                {activeRoute?.title || "Not Found"}
            </h4>
            <div className="ml-auto">
                <ThemeSwitch />
            </div>
            <div className="flex justify-center items-center p-1 bg-gray-100 rounded-full">
                <a
                    href={`https://github.com/AdityaPratap006`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8  relative"
                >
                    <NextImage
                        src={"/github.svg"}
                        alt="Github Icon"
                        layout="fill"
                    />
                </a>
            </div>
        </nav>
    );
};
