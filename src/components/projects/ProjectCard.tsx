import { FC } from "react";
import { Card } from "../ui/Card";
import { ProjectSkillTag } from "./ProjectSkillTag";

interface Props {}

export const ProjectCard: FC<Props> = () => {
    return (
        <Card padding="none" className="overflow-hidden">
            <div className="w-full">
                <img
                    src="/big-sur-mountains-clouds-daylight.jpeg"
                    alt="image"
                    className="w-full h-48"
                />
            </div>
            <div className="p-4 w-full flex justify-start items-center">
                <h5 className="text-onNeutralBg text-2xl">Project Name</h5>
            </div>
            <div className="w-full p-4 pt-0 flex flex-col justify-start items-start">
                <span className="text-onNeutralBg text-lg">Tech Stack</span>
                <div className="w-full pt-4 flex justify-start items-center flex-wrap gap-2">
                    {[
                        {
                            name: "react",
                            bgColor: "#61dbfb",
                            textColor: "#000",
                        },
                        {
                            name: "node",
                            bgColor: "#68a063",
                            textColor: "#fff",
                        },
                    ].map((skillTag) => (
                        <ProjectSkillTag
                            key={skillTag.name}
                            skillTag={skillTag}
                        />
                    ))}
                </div>
            </div>
        </Card>
    );
};
