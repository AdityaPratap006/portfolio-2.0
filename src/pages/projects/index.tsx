import type { NextPage } from "next";
import Head from "next/head";
import { ProjectCard } from "../../components/projects/ProjectCard";

const Projects: NextPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center pt-8 pb-20 sm:p-8">
            <Head>
                <title>Aditya Pratap</title>
                <meta
                    name="description"
                    content="Personal portfolio of Aditya Pratap | ASE @ Lowe's India | NIT Jamshedpur"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className="w-full p-4 pb-20 sm:pb-4 grid grid-cols-1
                md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4
                gap-6
                "
            >
                {[1, 2, 3, 4, 5, 6].map((val) => (
                    <ProjectCard key={val} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
