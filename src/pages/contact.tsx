import type { NextPage } from "next";
import Head from "next/head";
import NextImage from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { Card } from "../components/ui/Card";

interface FormState {
    name: string;
    email: string;
    message: string;
}

const Contact: NextPage = () => {
    const { register, handleSubmit, formState } = useForm<FormState>({
        mode: "all",
    });

    const onSubmit: SubmitHandler<FormState> = async (data) => {
        try {
            await new Promise((res) => setTimeout(res, 2000));
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

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
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="w-10/12 flex flex-col justify-start items-center gap-4"
                            >
                                <div className="w-full flex flex-col justify-start items-start gap-2">
                                    <label className="w-full text-onNeutralBg text-xl">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: "Required",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: `Name is too long.`,
                                            },
                                            minLength: {
                                                value: 3,
                                                message: `Name is too short.`,
                                            },
                                        })}
                                        className="w-full p-2 text-onNeutralBg text-xl bg-transparent border-2 border-onNeutralBg rounded-md outline-none focus:border-primaryBold"
                                    />
                                    {formState.errors.name && (
                                        <p className="p-1 pl-2 pr-2 text-md text-red-600 bg-red-200 bg-opacity-20 rounded-full">
                                            {formState.errors.name?.message}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full flex flex-col justify-start items-start gap-2">
                                    <label className="w-full text-onNeutralBg text-xl">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Required",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: `Email is too long.`,
                                            },
                                            minLength: {
                                                value: 3,
                                                message: `Email is too short.`,
                                            },
                                            validate: validateEmail,
                                        })}
                                        className="w-full p-2 text-xl text-onNeutralBg bg-transparent border-2 border-onNeutralBg rounded-md outline-none focus:border-primaryBold"
                                    />
                                    {formState.errors.email &&
                                        formState.errors.email.type !==
                                            "validate" && (
                                            <p className="p-1 pl-2 pr-2 text-md text-red-600 bg-red-200 bg-opacity-20 rounded-full">
                                                {
                                                    formState.errors.email
                                                        ?.message
                                                }
                                            </p>
                                        )}
                                    {formState.errors.email &&
                                        formState.errors.email.type ===
                                            "validate" && (
                                            <p className="p-1 pl-2 pr-2 text-md text-red-600 bg-red-200 bg-opacity-20 rounded-full">
                                                Invalid email.
                                            </p>
                                        )}
                                </div>
                                <div className="w-full flex flex-col justify-start items-start gap-2">
                                    <label className="w-full text-onNeutralBg text-xl">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        {...register("message", {
                                            required: {
                                                value: true,
                                                message: "Required",
                                            },
                                            maxLength: {
                                                value: 4000,
                                                message: `Message is too long.`,
                                            },
                                            minLength: {
                                                value: 5,
                                                message: `Message is too short.`,
                                            },
                                        })}
                                        className="w-full p-2 text-onNeutralBg max-h-40 text-xl bg-transparent border-2 border-onNeutralBg rounded-md outline-none focus:border-primaryBold"
                                    />
                                    {formState.errors.message && (
                                        <p className="p-1 pl-2 pr-2 text-md text-red-600 bg-red-200 bg-opacity-20 rounded-full">
                                            {formState.errors.message?.message}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full flex justify-center items-center p-4">
                                    {!formState.isSubmitting && (
                                        <button
                                            className="bg-primary p-3 pl-6 pr-6 rounded-full"
                                            disabled={!formState.isValid}
                                        >
                                            <span className="text-neutralBg text-md sm:text-xl">
                                                SUBMIT
                                            </span>
                                        </button>
                                    )}
                                    {formState.isSubmitting && (
                                        <div className="animate-spin w-12 h-12 rounded-full border-t-2 border-b-2 border-primaryBgSofter"></div>
                                    )}
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

function validateEmail(email: string) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
