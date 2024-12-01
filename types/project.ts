export interface Showcase {
    overview: string;
    objectives: string[];
    challenges: string[];
    solutions: Array<{
        name: string;
        description: string;
    }>;
    framework: Array<{
        name: string;
        logo: string;
    }>;
    resposability: string[];
}

export interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    url: string | null;
    showcase: Showcase;
}
