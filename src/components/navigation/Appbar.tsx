interface Props {}

export const Appbar = (_props: Props) => {
    return (
        <nav className="absolute top-0 left-0 w-full h-16 z-40 bg-neutralBg border-b border-onNeutralBg bg-opacity-30 backdrop-filter backdrop-blur-lg">
            <h4 className=" text-primaryBold text-3xl p-0 m-0">Aditya</h4>
        </nav>
    );
};
