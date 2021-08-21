export interface Project {
    title: string;
    description?: string;
    skillTagKeys: string[];
    githubRepo: string;
    demoUrl?: string;
    photos: string[];
}

export interface SkillTag {
    name: string;
    bgColor: string;
    textColor: string;
}
