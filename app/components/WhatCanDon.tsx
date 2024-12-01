/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { mySkils } from "../data/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion"; // Import for animations

const WhatCanDon = () => {
    const [visibleCards, setVisibleCards] = useState<any[]>([]);

    // Observer to track visible elements
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("data-id");
                        setVisibleCards((prev) => [...new Set([...prev, id])]);
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the element is visible
        );

        const elements = document.querySelectorAll(".card");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="what-i-do" className="relative py-16">
            <div className="hidden absolute inset-0 z-0">
                <Image
                    src="/images/cover-33.jpg"
                    alt="Hero background"
                    className="object-cover w-full h-full"
                    width={1920}
                    height={1080}
                    sizes="
                            
                    "
                />
                <div className="absolute inset-0 bg-background/50" />
            </div>
            <div className="container mx-auto px-4">
                <div
                    className="bg-background/40 backdrop-blur-sm rounded-lg p-8 md:p-12 m-auto  xl:w-[1200]
        "
                >
                    <div className="mb-8 max-w-[720px] m-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2 text-center">
                            WHAT CAN I DO ?
                        </h2>
                        <div className="mb-6 bg-indigo-500 w-[100px] h-2 m-auto"></div>
                        <p className=" text-center">
                            As a React frontend developer, I specialize in
                            building responsive, high-performance web
                            applications with clean, reusable code, delivering
                            seamless user experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {mySkils.map((item, index) => (
                            <motion.div
                                key={item.name}
                                data-id={index}
                                className="card"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                    visibleCards.includes(index.toString())
                                        ? { opacity: 1, scale: 1 }
                                        : {}
                                }
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                            >
                                <Card className=" bg-muted h-full">
                                    <CardHeader className="flex flex-col items-center">
                                        <CardTitle className="text-center text-indigo-400 text-xl">
                                            {item.name}
                                        </CardTitle>
                                        <CardContent className="mt-6 text-center">
                                            {item.description}
                                        </CardContent>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatCanDon;
