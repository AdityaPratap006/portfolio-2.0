import type { NextPage } from "next";
import Head from "next/head";
import NextImage from "next/image";
import { Card } from "../components/ui/Card";

const Contact: NextPage = () => {
    return (
        <div className="w-full h-screen -mt-14 sm:-mt-20 flex flex-col justify-center items-center ">
            <Head>
                <title>Aditya Pratap | Contact</title>
                <meta
                    name="description"
                    content="Personal portfolio of Aditya Pratap | ASE @ Lowe's India | NIT Jamshedpur"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-full w-full flex justify-center items-center">
                <Card className="w-11/12 sm:w-3/4 lg:w-1/2">
                    <div className="w-full flex flex-col justify-start items-center gap-4">
                        <h2 className="text-primaryBold welcome-text text-3xl">
                            Connect with me
                        </h2>
                        <div className="w-full flex justify-center items-center gap-8">
                            <a
                                href={`https://www.linkedin.com/in/aditya-pratap-b9a844152/`}
                                target="_blank"
                                rel="noreferrer"
                                className="h-12 w-12 p-2 flex justify-center items-center bg-gray-100 bg-opacity-40 rounded-full"
                            >
                                <div className="relative w-full h-full">
                                    <NextImage
                                        src="/Linkedin_icon.svg"
                                        alt="Linkedin"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </a>
                            <a
                                href={`https://github.com/AdityaPratap006`}
                                target="_blank"
                                rel="noreferrer"
                                className="h-12 w-12 p-2 flex justify-center items-center bg-gray-100 bg-opacity-40 rounded-full"
                            >
                                <div className="relative w-full h-full">
                                    <NextImage
                                        src="/github.svg"
                                        alt="Github"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </a>
                        </div>

                        <h2 className="mt-4 mb-4 text-primaryBold welcome-text text-2xl">
                            OR
                        </h2>

                        <div className="w-full flex flex-col justify-start items-center gap-4">
                            <h2 className="text-primaryBold welcome-text text-3xl">
                                Send a message
                            </h2>
                            <form className="w-10/12 flex flex-col justify-start items-center gap-4">
                                <div className="w-full flex flex-col justify-start items-start gap-2">
                                    <label className="w-full text-onNeutralBg text-xl">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full text-xl bg-transparent border-2 border-onNeutralBg rounded-md outline-none focus:border-primaryBold"
                                    />
                                </div>
                                <div className="w-full flex flex-col justify-start items-start gap-2">
                                    <label className="w-full text-onNeutralBg text-xl">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full text-xl bg-transparent border-2 border-onNeutralBg rounded-md outline-none focus:border-primaryBold"
                                    />
                                </div>
                                <div className="w-full flex flex-col justify-start items-start gap-2">
                                    <label className="w-full text-onNeutralBg text-xl">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        name="message"
                                        className="w-full max-h-40 text-xl bg-transparent border-2 border-onNeutralBg rounded-md outline-none focus:border-primaryBold"
                                    />
                                </div>
                                <div className="w-full flex justify-center items-center p-4">
                                    <button className="bg-primary p-3 pl-6 pr-6 rounded-full">
                                        <span className="text-neutralBg text-md sm:text-xl">
                                            SUBMIT
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Contact;
