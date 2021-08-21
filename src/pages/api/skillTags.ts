// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { skillTagMap } from "../../data/skillTags";
import { SkillTag } from "../../models/project";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SkillTag[]>
) {
    const {
        query: { keys },
    } = req;

    const skillTags = (keys as string)
        .split(",")
        .filter((key) => !!skillTagMap[key])
        .map((key) => skillTagMap[key]);

    res.status(200).json(skillTags);
}
