import { SkillTag } from "../models/project";

interface SkillTagMap {
    [key: string]: SkillTag;
}

export const skillTagMap: SkillTagMap = {
    react: {
        name: "react",
        bgColor: "#61dbfb",
        textColor: "#000",
    },
    "react-native": {
        name: "react-native",
        bgColor: "#61dbfb",
        textColor: "#000",
    },
    nodejs: {
        name: "nodejs",
        bgColor: "#68a063",
        textColor: "#000",
    },
    typescript: {
        name: "typescript",
        bgColor: "#007acc",
        textColor: "#fff",
    },
    javascript: {
        name: "javascript",
        bgColor: "#f0db4f",
        textColor: "#000",
    },
    express: {
        name: "express",
        bgColor: "#000",
        textColor: "#68a063",
    },
    graphql: {
        name: "graphql",
        bgColor: "#f4447c",
        textColor: "#fff",
    },
    webrtc: {
        name: "webrtc",
        bgColor: "#ff7b00",
        textColor: "#000",
    },
    firebase: {
        name: "firebase",
        bgColor: "#FFCA28",
        textColor: "#000",
    },
    mongodb: {
        name: "mongodb",
        bgColor: "#4db33d",
        textColor: "#000",
    },
    postgresql: {
        name: "postgresql",
        bgColor: "#336791",
        textColor: "#fff",
    },
};
