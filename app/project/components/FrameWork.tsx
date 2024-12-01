import { Project } from "@/types/project";
import Image from "next/image";

export default function FrameWork({ project }: { project: Project }) {
    return (
        <section className="mb-8">
            <h2 className=" project-title text-2xl font-semibold mb-4">
                Framework and technology
            </h2>
            <ul className=" flex justify-start gap-6 items-center flex-wrap">
                {project.showcase.framework.map((item, index) => (
                    <li key={index}>
                        <div className="flex justify-center items-center bg-accent p-1 w-16 h-16 rounded-lg">
                            <Image src={item.logo} alt={item.name} width={40} height={40} />
                        </div>
                        <div>{item.name}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
