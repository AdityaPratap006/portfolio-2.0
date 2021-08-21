import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ProjectCard } from "../../components/projects/ProjectCard";
import { getAllProjects } from "../../data/projects";
import { Project } from "../../models/project";

interface Props {
    projects: Project[];
}

const Projects: NextPage<Props> = ({ projects }) => {
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
                md:grid-cols-2 xl:grid-cols-3
                gap-6
                "
            >
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const projects = await getAllProjects();

    return {
        props: {
            projects,
        },
    };
};
