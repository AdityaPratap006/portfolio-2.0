import { useEmblaCarousel } from "embla-carousel/react";
import NextImage from "next/image";
import { FC, useCallback, useEffect, useState } from "react";
import { useRecursiveTimeout } from "../../hooks/recursiveTimeout.hook";
import { Project, SkillTag } from "../../models/project";
import { Card } from "../ui/Card";
import { ProjectSkillTag } from "./ProjectSkillTag";

interface Props {
    project: Project;
}

const AUTOPLAY_INTERVAL = 4000;

export const ProjectCard: FC<Props> = ({ project }) => {
    const [skillTags, setSkillTags] = useState<SkillTag[]>([]);
    const [carouselRef, embla] = useEmblaCarousel({
        skipSnaps: false,
        loop: true,
    });

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

    const autoplay = useCallback(() => {
        if (!embla) return;
        if (embla.canScrollNext()) {
            embla.scrollNext();
        } else {
            embla.scrollTo(0);
        }
    }, [embla]);

    const { play } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

    useEffect(() => {
        play();
    }, [play]);

    return (
        <Card padding="none" className="overflow-hidden">
            <div className="w-full relative">
                <div
                    ref={carouselRef}
                    className="h-auto w-full overflow-hidden"
                >
                    <div className="w-full h-full flex ">
                        {project.photos.map((photo, index) => (
                            <div
                                key={photo}
                                className="w-full h-full relative"
                                style={{ flex: "0 0 100%" }}
                            >
                                <NextImage
                                    src={photo}
                                    alt={`project image ${index + 1}`}
                                    height={300}
                                    width={550}
                                    layout="responsive"
                                />
                            </div>
                        ))}
                    </div>
                </div>
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
