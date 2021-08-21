import { FC } from "react";
import { SkillTag } from "../../models/project";

interface Props {
    skillTag: SkillTag;
}

export const ProjectSkillTag: FC<Props> = ({ skillTag }) => {
    return (
        <div
            key={skillTag.name}
            className="p-1 pl-2 pr-2 rounded-xl"
            style={{
                backgroundColor: skillTag.bgColor,
            }}
        >
            <span
                className="text-md"
                style={{
                    color: skillTag.textColor,
                }}
            >
                {skillTag.name}
            </span>
        </div>
    );
};
