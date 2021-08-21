import { FC, useEffect, useState } from "react";
import { Project, SkillTag } from "../../models/project";
import { Card } from "../ui/Card";
import { ProjectSkillTag } from "./ProjectSkillTag";

interface Props {
    project: Project;
}

export const ProjectCard: FC<Props> = ({ project }) => {
    const [skillTags, setSkillTags] = useState<SkillTag[]>([]);

    useEffect(() => {
        const fetchSkillTags = async () => {
            try {
                const url = `/api/skillTags?keys=${project.skillTagKeys}`;

                const response = await fetch(url);
                const data: SkillTag[] = await response.json();
                setSkillTags(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchSkillTags();
    }, [project.skillTagKeys]);

    return (
        <Card padding="none" className="overflow-hidden">
            <div className="w-full">
                <img
                    src="/big-sur-mountains-clouds-daylight.jpeg"
                    alt="image"
                    className="w-full h-54"
                />
            </div>
            <div className="p-4 w-full flex-1 flex flex-col justify-start items-start">
                <h5 className="text-onNeutralBg text-2xl">{project.title}</h5>
                <p className="pt-4 text-onNeutralBg text-sm">
                    {project.description}
                </p>
            </div>
            <div className="w-full p-4 pt-0 flex flex-col justify-start items-start">
                <span className="text-onNeutralBg text-lg">Tech Stack</span>
                <div className="w-full pt-4 flex justify-start items-center flex-wrap gap-2">
                    {skillTags.map((skillTag) => {
                        return (
                            <ProjectSkillTag
                                key={skillTag.name}
                                skillTag={skillTag}
                            />
                        );
                    })}
                </div>
            </div>
        </Card>
    );
};
