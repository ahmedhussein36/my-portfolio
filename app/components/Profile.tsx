"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AboutSection from "./About";
import WhatCanDon from "./WhatCanDon";
import MySkills from "./MySkills";
import MyWork from "./MyWork";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import DownloadCVButton from "./DownloadCv";

export default function Profile() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted w-full">
            <section
                id="home"
                className="relative h-screen bg-background flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/cover.jpg"
                        alt="Hero background"
                        className="object-cover w-full h-full"
                        width={1920}
                        height={1080}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center space-y-6 p-4">
                    <h1 className="text-5xl font-bold tracking-tighter sm:text-3xl md:text-7xl text-white">
                        Ahmed Hussein
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-white">
                        Frontend Software Developer | React.js | Next.js
                    </p>
                    <div className=" flex flex-col md:flex-row justify-center items-center gap-5">
                        <Button
                            className="mt-4 bg-slate-50 text-black hover:bg-slate-200"
                            onClick={() => {
                                window.location.href = "/#my-work";
                            }}
                        >
                            View My Work
                        </Button>
                        <DownloadCVButton />
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <AboutSection />

            {/* What I Do Section */}
            <WhatCanDon />
            {/* My Skills Section */}
            <MySkills />

            {/* My Work Section */}
            <MyWork />
            {/* Contact CTA */}
            <section
                id="contact"
                className="container mx-auto px-4 py-24 text-center"
            >
                <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
                <p className="mx-auto mb-8 text-muted-foreground">
                    Ready to work together? Let&apos;s create something amazing
                    for your next digital project
                </p>
                <Button
                    onClick={() => {
                        window.location.href = "https://wa.me/+201121588820";
                    }}
                    className="gap-2 bg-indigo-500 text-white"
                >
                    Contact Me
                    <ArrowRight className="h-4 w-4" />
                </Button>

                <div className="my-5 flex m-auto justify-center items-center gap-5">
                    <Link
                        href={"https://github.com/ahmedhussein36"}
                        aria-label="github"
                        className=" text-background rounded-lg bg-foreground p-2 flex justify-center items-center gap-2"
                    >
                        <FaGithub className=" w-4 h-4" />
                        Github
                    </Link>
                    <Link
                        href={"https://www.linkedin.com/in/ahmed-hussein36"}
                        aria-label="linkedin"
                        className=" text-background rounded-lg bg-foreground p-2 flex justify-center items-center gap-2"
                    >
                        <FaLinkedin className=" w-4 h-4 " />
                        Linkedin
                    </Link>
                </div>
            </section>
        </div>
    );
}
