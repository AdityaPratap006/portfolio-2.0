import { Experience } from "../models/experience";

const experiences: Experience[] = [
    {
        company: `Lowe's India`,
        companyUrl: `https://lowes.co.in/`,
        companyLogo: `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629613743/portfolio/company/Lowes_Companies_Logo.svg`,
        profile: `Associate Software Engineer`,
        from: `Jun 2021`,
        to: `Present`,
    },
    {
        company: `BuyHatke`,
        companyUrl: `https://compare.buyhatke.com/giftcards-wallet`,
        companyLogo: `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629618178/portfolio/company/1566110436837.png`,
        profile: `Frontend Engineer (Intern)`,
        from: `May 2020`,
        to: `Jul 2020`,
    },
    {
        company: `PCON NIT Jamshedpur`,
        companyUrl: `https://pcon.in`,
        companyLogo: `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629614147/portfolio/company/pcon_logo.svg`,
        profile: `Technical Secretary`,
        from: `Jul 2020`,
        to: `May 2021`,
    },
    {
        company: `WebdExpert`,
        companyLogo: `https://res.cloudinary.com/nit-jamshedpur/image/upload/v1629618029/portfolio/company/1558814062037.png`,
        companyUrl: `https://www.linkedin.com/company/webdexpert/about/`,
        profile: `Frontend Intern`,
        from: `Jun 2019`,
        to: `Jul 2019`,
    },
];

export const getAllExperiences = async () => {
    return experiences;
};
