interface Props {}

export const Sidebar = (_props: Props) => {
    return (
        <nav
            className="fixed 
            left-0 bottom-0 
            w-screen h-20 z-50 border-r border-gray-500 sm:top-0 
            sm:h-screen sm:w-20 lg:w-1/6 bg-neutralBgSofter bg-opacity-30 
            backdrop-filter backdrop-blur-lg"
        ></nav>
    );
};
