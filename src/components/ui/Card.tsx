import { FC } from "react";

interface Props {
    className?: string;
}

export const Card: FC<Props> = ({ children, className }) => {
    return (
        <div
            className={`p-4 rounded-3xl
             bg-neutralBgSofter bg-opacity-30 backdrop-filter backdrop-blur-md
             flex flex-col justify-start items-center
             border border-gray-600 ${className}`}
        >
            {children}
        </div>
    );
};
