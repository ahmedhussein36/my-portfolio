import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutInfo } from "../data/data";

type CursorPosition = {
    x: number;
    y: number;
};

const AboutSection: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const ulRef = useRef<HTMLUListElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isUlVisible, setIsUlVisible] = useState(false);
    const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const titleElement = titleRef.current;
        const descriptionElement = descriptionRef.current;

        if (titleElement) observer.observe(titleElement);
        if (descriptionElement) observer.observe(descriptionElement);

        return () => {
            if (titleElement) observer.unobserve(titleElement);
            if (descriptionElement) observer.unobserve(descriptionElement);
        };
    }, []);

    // Observer for the ul list with delay
    useEffect(() => {
        const ulObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsUlVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const ulElement = ulRef.current;
        if (ulElement) ulObserver.observe(ulElement);

        return () => {
            if (ulElement) ulObserver.unobserve(ulElement);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            setCursorPosition({ x, y });
        }
    };

    return (
        <section
            id="about"
            ref={containerRef}
            className="container mx-auto px-12 py-6 pt-10 relative max-w-[1200px]"
            onMouseMove={handleMouseMove}
        >
            <div className=" m-auto max-w-[750px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2 text-center">
                    About Me
                </h2>
                <div className="mb-6 bg-indigo-500 w-[100px] h-2 m-auto"></div>
                <p
                    ref={descriptionRef}
                    className={`transition-opacity
                        text-center
                        duration-700 ${
                            isVisible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    I am a Frontend Developer with more than 4 years
                    professional experience in web development , develop, test,
                    and debug responsive applications. I leverage React,
                    JavaScript, HTML, and CSS to transform user and business
                    requirements into dynamic, functional frontend designs.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 justify-items-stretch ">
                <div className="space-y-4 py-6">
                    <ul
                        ref={ulRef}
                        className="list-inside space-y-2 text-muted-foreground"
                    >
                        {aboutInfo.map((item, index) => (
                            <li
                                key={index}
                                className={`p-1 transition-opacity duration-700 ${
                                    isUlVisible ? "opacity-100" : "opacity-0"
                                }`}
                                style={{
                                    transitionDelay: `${index * 300}ms`,
                                }}
                            >
                                <strong className=" text-foreground">
                                    {item.name}:{" "}
                                </strong>
                                <p className="">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                    <motion.div
                        style={{
                            x: cursorPosition.x / 40,
                            y: cursorPosition.y / 40,
                        }}
                        className="relative w-full h-full flex justify-end items-start"
                    >
                        <Image
                            src="/images/profile-image-b-w.png"
                            alt="Ahmed Hussein"
                            className="object-cover"
                            width={450}
                            height={100}
                            priority
                            sizes=" "
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
