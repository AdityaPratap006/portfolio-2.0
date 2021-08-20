import NextLink, { LinkProps } from "next/link";
import { ComponentProps } from "react";

interface Props extends LinkProps {
    name: string;
    icon: (_p: ComponentProps<"svg">) => JSX.Element;
}

export const MenuLink = ({ href, name, icon: Icon }: Props) => {
    return (
        <NextLink href={href}>
            <div className="group cursor-pointer sm:w-full flex justify-start items-center sm:pl-2 lg:pl-4">
                <div
                    className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-5
                    group-hover:bg-primaryBgSofter group-hover:bg-opacity-20
                    p-2 sm:p-4 lg:pr-5 rounded-xl lg:rounded-full
                    "
                >
                    <span>
                        <Icon className="h-8 text-onNeutralBg group-hover:animate-bounce" />
                    </span>
                    <span className="text-onNeutralBg text-2xl font-light capitalize hidden lg:flex">
                        {name}
                    </span>
                </div>
            </div>
        </NextLink>
    );
};
