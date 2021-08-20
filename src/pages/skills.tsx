import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { SkillCard } from "../components/skills/SkillCard";
import { getAllSkills } from "../data/skills";
import { Skill } from "../models/skill";

interface Props {
    skills: Skill[];
}

const Skills: NextPage<Props> = ({ skills }) => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center ">
            <Head>
                <title>Aditya Pratap | Skills</title>
                <meta
                    name="description"
                    content="Personal portfolio of Aditya Pratap | ASE @ Lowe's India | NIT Jamshedpur"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className="w-full p-4 pb-20 sm:pb-4 grid grid-cols-2 
                md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4
                gap-6
                "
            >
                {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
    );
};

export default Skills;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const skills = await getAllSkills();

    return {
        props: {
            skills,
        },
    };
};
