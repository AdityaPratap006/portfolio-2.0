import type { NextPage } from "next";
import Head from "next/head";
import NextImage from "next/image";
import { Card } from "../components/ui/Card";

const Home: NextPage = () => {
    return (
        <div className="w-full min-h-screen -mt-14 sm:-mt-20 flex flex-col justify-start items-center  pb-20 xl:pb-0">
            <Head>
                <title>Aditya Pratap | Home</title>
                <meta
                    name="description"
                    content="Personal portfolio of Aditya Pratap | ASE @ Lowe's India | NIT Jamshedpur"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full min-h-screen pt-52 sm:pt-96 xl:pt-24 pl-4 pr-4 grid grid-cols-1 xl:grid-cols-2 gap-6 justify-center items-center">
                <Card>
                    <div className="relative w-full p-4 flex flex-col justify-start items-center">
                        <div className="absolute h-52 w-52 -top-40 sm:h-80 sm:w-80 sm:-top-60 left-1/2 transform -translate-x-1/2">
                            <div className="relative h-full w-full border-4 border-primary rounded-full overflow-hidden">
                                <NextImage
                                    src={"/stickers/welcome.png"}
                                    alt="Profile Sticker"
                                    layout="fill"
                                />
                            </div>
                        </div>
                        <div className="w-full p-4 mt-24 flex flex-col justify-start items-start gap-4 ">
                            <h2 className="welcome-text name text-5xl sm:text-6xl">
                                Hey There!
                            </h2>
                            <h1 className="welcome-text name text-7xl sm:text-8xl mt-4">
                                {`I'm Aditya`}
                            </h1>
                            <p className="mt-4 text-3xl text-onNeutralBg font-bold">
                                {`Associate Software Engineer @ Lowe's India`}
                            </p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="w-full p-4 flex flex-col justify-start items-start gap-4">
                        <h3 className="welcome-text name text-4xl sm:text-5xl">
                            About Me
                        </h3>
                        <p className="mt-4 text-onNeutralBg text-lg">
                            {`An avid Full Stack Developer looking for an opportunity to use my skills for solving challenging real-world problems. Skilled in Javascript, Typescript, React, React Native, GraphQL, Node.js. Currently an Associate Software Engineer at Lowe's India and did my Bachelor of Technology (Hons) focused on Computer Science and Engineering from National Institute of Technology Jamshedpur.`}
                        </p>
                        <p className=" text-onNeutralBg text-lg">
                            {`Since my school days, I was always fascinated by all those web and mobile apps out there (which have revolutionized our lives) and wondered how  they are built. I was determined to make Software Engineering as my career.`}
                        </p>
                        <p className="text-onNeutralBg text-lg">
                            {`Apart from my work, I love building interactive web and mobile applications as personal projects. While building any application, my prime focus is on writing clean, reusable and robust code.`}
                        </p>
                        <p className="text-onNeutralBg text-lg">
                            {`When I am not coding, I am busy reading travel blogs, watching espionage thrillers or gaming!`}
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Home;
