import { FC } from "react";

interface Props {
    className?: string;
    padding?: "none" | "small" | "medium";
}

export const Card: FC<Props> = ({ children, className, padding = "small" }) => {
    let paddingClass = "p-2";

    if (padding === "none") {
        paddingClass = "p-0";
    } else if (padding === "medium") {
        paddingClass = "p-4";
    }

    return (
        <div
            className={`${paddingClass} rounded-3xl
             bg-neutralBgSofter bg-opacity-30 backdrop-filter backdrop-blur-md
             flex flex-col justify-start items-center
             border border-gray-600 ${className}`}
        >
            {children}
        </div>
    );
};
