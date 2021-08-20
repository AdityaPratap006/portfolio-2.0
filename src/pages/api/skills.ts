// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllSkills } from "../../data/skills";
import { Skill } from "../../models/skill";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Skill[]>
) {
    const skills = await getAllSkills();
    res.status(200).json(skills);
}
