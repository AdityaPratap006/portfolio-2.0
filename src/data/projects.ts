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
        photos: [
            "https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629557096/portfolio/projects/familia/Screenshot_2021-08-21_at_8.10.43_PM.png",
            "https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629557105/portfolio/projects/familia/Screenshot_2021-08-21_at_8.09.01_PM.png",
            "https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629557128/portfolio/projects/familia/Screenshot_2021-08-21_at_8.08.37_PM.png",
            "https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629557111/portfolio/projects/familia/Screenshot_2021-08-21_at_8.08.09_PM.png",
            "https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629557099/portfolio/projects/familia/Screenshot_2021-08-21_at_8.07.06_PM.png",
            "https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629557119/portfolio/projects/familia/Screenshot_2021-08-21_at_8.06.06_PM.png",
        ],
    },
];

export const getAllProjects = async () => {
    return projects;
};
