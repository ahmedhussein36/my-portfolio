"use client";
import { Star, StarHalf } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { skillsData } from "../data/data";
import Image from "next/image";

const MySkills = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-skills");
                    } else {
                        entry.target.classList.remove("animate-skills");
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Select each skill item to be observed
        const skillElements = document.querySelectorAll(".skill-item");
        skillElements.forEach((el) => observer.observe(el));

        // Cleanup
        return () => {
            skillElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const renderSkillLevel = (level: string) => {
        switch (level) {
            case "Expert":
                return (
                    <div className="flex">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400" />
                    </div>
                );
            case "Intermediate":
                return (
                    <div className="flex">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400" />
                        <StarHalf className="w-4 h-4 text-yellow-400" />
                    </div>
                );
            case "Beginner":
                return (
                    <div className="flex">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <StarHalf className="w-4 h-4 text-yellow-400" />
                        <Star className="w-4 h-4 text-gray-300" />
                    </div>
                );
            default:
                return null;
        }
    };
    return (
        <section
            id="skills"
            className="skills py-16 max-w-[1200px] m-auto"
            ref={skillsRef}
        >
            <div className="container mx-auto px-4">
                <div className="mb-8 max-w-[760px] m-auto">
                    <h2 className="skill-itemtext-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
                        My Skills
                    </h2>
                    <div className="mb-6 bg-indigo-500 w-[100px] h-2 m-auto"></div>

                    <p className="text-center">
                        Skilled in React.js and Next.js, with expertise in
                        building dynamic, scalable web applications. Proficient
                        in HTML, CSS, JavaScript (ES6+), and TypeScript, with
                        solid experience in state management tools like Redux
                        and GraphQL. Adept at writing efficient, maintainable
                        code and collaborating using Git for version control,
                        ensuring seamless project workflows and high-quality
                        deliverables.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skillsData.map((skill, index) => (
                        <div key={skill.name}>
                            <div
                                className="skill-item flex flex-col items-center space-y-2 opacity-0 transform translate-y-4 transition-all duration-500 ease-out cursor-pointer"
                                style={{
                                    transitionDelay: `${index * 300}ms`,
                                }}
                            >
                                <div className="relative w-20 h-20 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={skill.logo}
                                        alt={`${skill.name} logo`}
                                        width={80}
                                        height={80}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-medium">
                                    {skill.name}
                                </span>
                                {renderSkillLevel(skill.level)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MySkills;
