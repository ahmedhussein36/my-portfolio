import { Project } from "@/types/project";

export default function Responsablity({ project }: { project: Project }) {
    return (
        <section className="mb-8">
            <h2 className="project-title text-2xl font-semibold mb-4">
                Key Resposability
            </h2>
            <ul className="list-disc pl-5">
                {project.showcase.resposability.map((item, index) => (
                    <li key={index} className=" p-2">
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
}