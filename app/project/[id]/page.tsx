"use client";
import Overview from "../components/Overview";
import Challenges from "../components/Challenges";
import Objectives from "../components/Objectives";
import SolutionApproach from "../components/SolutionApproach";
import { MyWorks } from "@/app/data/data";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";
import { useParams } from "next/navigation";
import FrameWork from "../components/FrameWork";
import Responsablity from "../components/Responsablity";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectPage() {
    const { id } = useParams<{ id: string }>(); // Destructure 'id' from route params
    const [project, setProject] = useState<Project>();

    useEffect(() => {
        if (id) {
            const foundProject = MyWorks.find((item) => item.id === Number(id));
            setProject(foundProject);
        }
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }
    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className=" w-full flex justify-between items-center">
                <h1 className="text-3xl font-bold mb-8 b">{project?.name}</h1>

                {project.url && (
                    <Link
                        href={project.url}
                        className=" bg-foreground text-background py-1 px-3 
                        flex justify-between items-center
                        rounded-lg hover:bg-muted-foreground"
                    >
                        Visit website
                        <ArrowRight size={16} />
                    </Link>
                )}
            </div>

            <div>
                <Image
                    src={project.image}
                    width={1200}
                    height={100}
                    alt={project.name}
                />
            </div>
            <Overview overview={project.showcase.overview} />
            <Challenges project={project} />
            <Objectives project={project} />
            <SolutionApproach project={project} />
            <FrameWork project={project} />
            <Responsablity project={project} />
        </div>
    );
}
