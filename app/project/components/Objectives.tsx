import { Project } from "@/types/project";

export default function Objectives({ project }: { project: Project }) {
    return (
        <section className="mb-8">
            <h2 className=" project-title text-2xl font-semibold mb-4">Objectives</h2>
            <ul className="list-disc pl-5">
                {project.showcase.objectives.map((objective, index) => (
                    <li key={index} className=" p-2">
                        {objective}
                    </li>
                ))}
            </ul>
        </section>
    );
}
