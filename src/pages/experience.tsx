import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import NextImage from "next/image";
import { Card } from "../components/ui/Card";
import { getAllExperiences } from "../data/experiences";
import { Experience as IExperience } from "../models/experience";

interface Props {
    experiences: IExperience[];
}

const Experience: NextPage<Props> = ({ experiences }) => {
    return (
        <div className="w-full min-h-screen -mt-14 sm:-mt-20 pt-14 sm:pt-20 flex flex-col justify-start items-center ">
            <Head>
                <title>Aditya Pratap | Experience</title>
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
                {experiences.map((exp) => (
                    <Card key={exp.company + " " + exp.profile}>
                        <div className="w-full flex flex-col justify-start items-center gap-4">
                            <a
                                className="w-3/4 h-36 relative"
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <NextImage
                                    src={exp.companyLogo}
                                    alt={`${exp.company} Logo`}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </a>
                            <div className="sm:mt-6 w-full flex flex-col justify-start items-center gap-2 text-center">
                                <h2 className="text-onNeutralBg text-2xl md:text-3xl">
                                    {exp.company}
                                </h2>
                                <h3 className="text-onNeutralBg text-xl">
                                    {exp.profile}
                                </h3>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <small className="w-full flex justify-center items-center gap-2 text-onNeutralBg text-base">
                                    <span>{exp.from}</span>
                                    <span>{`-`}</span>
                                    <span>{exp.to}</span>
                                </small>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Experience;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const experiences = await getAllExperiences();

    return {
        props: {
            experiences,
        },
    };
};
