import type { NextPage } from "next";
import Head from "next/head";
import NextImage from "next/image";
import NextLink from "next/link";

const NotFound404: NextPage = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center ">
            <Head>
                <title>Aditya Pratap | 404</title>
                <meta
                    name="description"
                    content="Personal portfolio of Aditya Pratap | ASE @ Lowe's India | NIT Jamshedpur"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-full w-full flex justify-center items-center">
                <div
                    className=" w-4/5 max-w-3xl p-8 
                    rounded-xl  
                    bg-neutralBgSofter border-1/2 border-gray-600 bg-opacity-25 backdrop-filter backdrop-blur
                    flex flex-col justify-start items-center"
                >
                    <div className="relative w-full h-20 sm:h-28">
                        <div className="absolute -top-40 sm:-top-56 left-1/2 transform -translate-x-1/2">
                            <div className="relative h-72 w-72 sm:h-96 sm:w-96 ">
                                <NextImage
                                    src="/stickers/sweating-smile.png"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:mt-4 w-full flex">
                        <p className=" w-full text-onNeutralBg text-5xl text-center">{`Looks like you're lost :(`}</p>
                    </div>
                    <button className="mt-10 bg-primary p-4 rounded-full">
                        <NextLink href="/">
                            <span className=" text-neutralBg text-xl ">
                                Go to Home
                            </span>
                        </NextLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound404;
