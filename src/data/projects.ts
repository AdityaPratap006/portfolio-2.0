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
            "styled-components",
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
    {
        title: "Meals To Go: A Restaurant Search Mobile App",
        description: `A native mobile app where users can search for restaurants in any place around the world.
            Users can view restaurants on a map and make reservations. Checkout and payment feature also there.`,
        githubRepo: `https://github.com/AdityaPratap006/MealsToGo`,
        skillTagKeys: [
            "react-native",
            "typescript",
            "styled-components",
            "firebase",
        ],
        photos: [
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629580653/portfolio/projects/meals_to_go/Screenshot_2021-08-22_at_2.35.38_AM.png`,
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629580610/portfolio/projects/meals_to_go/Screenshot_2021-08-22_at_2.35.46_AM.png`,
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629581080/portfolio/projects/meals_to_go/Screenshot_2021-08-22_at_2.54.33_AM.png`,
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629580609/portfolio/projects/meals_to_go/Screenshot_2021-08-22_at_2.35.19_AM.png`,
        ],
    },
    {
        title: "SmartKart: A chatbot based e-commerce web app",
        description: `A chat-bot based progressive web app (PWA) which assists you in purchasing items online.
The chat-bot categorizes the products for you, (just like menu in a restaurant).`,
        githubRepo: `https://github.com/AdityaPratap006/smart-shop`,
        demoUrl: `https://smartkart.netlify.app/home`,
        skillTagKeys: ["react", "javascript", "nodejs", "express", "mongodb"],
        photos: [
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629583796/portfolio/projects/smartkart/Screenshot_2021-08-22_at_3.37.37_AM.png`,
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629583796/portfolio/projects/smartkart/Screenshot_2021-08-22_at_3.38.07_AM.png`,
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629583798/portfolio/projects/smartkart/Screenshot_2021-08-22_at_3.38.30_AM.png`,
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629583796/portfolio/projects/smartkart/Screenshot_2021-08-22_at_3.38.57_AM.png`,
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629583797/portfolio/projects/smartkart/Screenshot_2021-08-22_at_3.39.05_AM.png`,
        ],
    },
    {
        title: "COVID Radar: A map-based app for covid19 hotspots detection",
        description: `This is a native mobile app which shows users the location of covid hotspots in India.
        Users can also view safe routes from point A to point B. They can also view stats and daily updates.`,
        githubRepo: `https://github.com/AdityaPratap006/covid_app_client`,
        demoUrl: `http://www.youtube.com/watch?v=duEfP_mRZTU`,
        skillTagKeys: [
            "flutter",
            "dart",
            "nodejs",
            "express",
            "typescript",
            "firebase",
        ],
        photos: [
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629582429/portfolio/projects/covid_radar/Screenshot_2021-08-22_at_3.12.54_AM.png`,
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629582430/portfolio/projects/covid_radar/Screenshot_2021-08-22_at_3.13.08_AM.png`,
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629582429/portfolio/projects/covid_radar/Screenshot_2021-08-22_at_3.13.39_AM.png`,
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629582430/portfolio/projects/covid_radar/Screenshot_2021-08-22_at_3.14.01_AM.png`,
            `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629582429/portfolio/projects/covid_radar/Screenshot_2021-08-22_at_3.14.21_AM.png`,
        ],
    },
];

export const getAllProjects = async () => {
    return projects;
};
