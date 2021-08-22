import type { NextPage } from "next";
import Head from "next/head";
import NextImage from "next/image";
import NextLink from "next/link";

const NotFound404: NextPage = () => {
    return (
        <div className="w-full h-screen -mt-14 sm:-mt-20 flex flex-col justify-center items-center ">
            <Head>
                <title>Aditya Pratap | Error</title>
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
                    <div className="relative w-full h-20">
                        <div className="absolute -top-28 sm:-top-40 left-1/2 transform -translate-x-1/2">
                            <div className="relative w-40 sm:w-60 md:w-64 lg:w-72 ">
                                <NextImage
                                    src="/stickers/sweating-smile.png"
                                    height={200}
                                    width={200}
                                    layout="responsive"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-mt-12 sm:mt-4 w-full flex">
                        <p className=" w-full text-onNeutralBg text-3xl sm:text-4xl md:text-5xl text-center">{`Looks like you're lost :(`}</p>
                    </div>
                    <button className="mt-8 bg-primary p-4 rounded-full">
                        <NextLink href="/">
                            <span className=" text-neutralBg text-md sm:text-xl ">
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
