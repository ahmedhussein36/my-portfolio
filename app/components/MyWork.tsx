/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MyWorks } from "../data/data";
import { motion } from "framer-motion"; // Import for animations

const MyWork = () => {
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

        const elements = document.querySelectorAll(".card2");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="my-work"
            className="container mx-auto px-12 py-12 text-center"
        >
            <div className="mb-8 max-w-[720px] m-auto">
                <h2 className="mb-2 text-3xl font-bold tracking-tighter sm:text-4xl">
                    My Work
                </h2>
                <div className="mb-6 bg-indigo-500 w-[100px] h-2 m-auto"></div>

                <p className="text-center">
                    Constantly pushing ourselves to create new and innovative
                    wep applications that exceed our client&apos;s expectations.
                    Here are just a few examples of our latest work.
                </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {MyWorks.map((item, index) => (
                    <motion.div
                        key={item.name}
                        data-id={index}
                        className="card2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                            visibleCards.includes(index.toString())
                                ? { opacity: 1, scale: 1 }
                                : {}
                        }
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <Link href={`/project/${item.id}`}>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-start justify-between">
                                        {item.name}
                                        {item.url && (
                                            <Link
                                                href={item.url}
                                                className="text-muted-foreground hover:text-primary"
                                            >
                                                <ExternalLink className="h-5 w-5" />
                                            </Link>
                                        )}
                                    </CardTitle>
                                    <CardDescription className=" flex gap-4">
                                        {item.description}{" "}
                                        <span>
                                            {item.id >= 5 ? "2023" : "2024"}
                                        </span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid md:grid-cols-1">
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            className="object-cover"
                                            fill
                                        />
                                    </div>
                                    {/* <div className="space-y-4 text-start">
                        <h3 className="font-semibold">
                            Key Responsibilities:
                        </h3>
                        <ul className="ml-4 list-disc space-y-2 text-muted-foreground">
                            {item.showcase.resposability.map(
                                (res, index) => (
                                    <li key={index}>{res}</li>
                                )
                            )}
                        </ul>
                    </div> */}
                                </CardContent>
                                <CardFooter>
                                    {item.showcase.framework.map(
                                        (item, index) => (
                                            <div
                                                key={index}
                                                className="bg-muted rounded p-1 mx-1 w-7 h-7"
                                            >
                                                <Image
                                                    src={item.logo}
                                                    alt={item.name}
                                                    width={20}
                                                    height={40}
                                                    className="text-white"
                                                />
                                            </div>
                                        )
                                    )}
                                </CardFooter>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MyWork;
