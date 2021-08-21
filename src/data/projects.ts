import { Project } from "../models/project";

const projects: Project[] = [
    {
        title: "Familia: The Social Media App for Families!",
        description: `Familia is just like slack/discord but for families, users can create many families 
        (similar to slack workspaces). Within the family they can share posts and pictures, 
        like each other's posts, can have one-to-one chat as well as Video Calls!`,
        githubRepo: `https://github.com/AdityaPratap006/familia_web_app`,
        demoUrl: `https://familia-web.netlify.app/`,
        skillTagKeys: [
            "react",
            "typescript",
            "graphql",
            "nodejs",
            "express",
            "webrtc",
            "mongodb",
        ],
    },
];

export const getAllProjects = async () => {
    return projects;
};
