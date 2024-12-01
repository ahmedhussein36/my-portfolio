import { Project } from "@/types/project";

export default function SolutionApproach({ project }: { project: Project }) {
    return (
        <section className="mb-8">
            <h2 className="project-title text-2xl font-semibold mb-4">Solution Approach</h2>
            <ul className="list-disc pl-5 mb-4">
                {project.showcase.solutions.map((tech, index) => (
                    <li key={index} className=" p-2">
                        <strong>{tech.name}</strong>: {tech.description}
                    </li>
                ))}
            </ul>
        </section>
    );
}
