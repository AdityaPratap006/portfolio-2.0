import { FC, useEffect, useRef } from "react";
import { Skill } from "../../models/skill";
import { Card } from "../ui/Card";

interface Props {
    skill: Skill;
}

export const SkillCard: FC<Props> = ({ skill }) => {
    const svgWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (svgWrapperRef.current) {
            svgWrapperRef.current.innerHTML = skill.svg;
        }
    }, [skill.svg]);

    return (
        <Card padding="medium">
            <div className="w-full h-auto flex flex-col items-center justify-around gap-6">
                <div className="min-w-max w-3/4 sm:w-2/5 md:w-3/5 h-auto relative">
                    <div ref={svgWrapperRef}></div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <span className=" text-onNeutralBg text-2xl sm:text-3xl md:text-4xl capitalize">
                        {skill.name}
                    </span>
                </div>
            </div>
        </Card>
    );
};
