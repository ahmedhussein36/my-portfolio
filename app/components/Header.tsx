"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ModeToggel from "./ModeToggel";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme } = useTheme();

    return (
        <>
            <header className="- top-0 left-0 right-0 z-50 bg-muted backdrop-blur-sm">
                <div className="container mx-auto px-4 py-1 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold">
                        {theme === "dark" ? (
                            <Image
                                src={"/images/logo.png"}
                                alt="logo"
                                height={10}
                                width={120}
                                className="w-auto h-auto"
                            />
                        ) : (
                            <Image
                                src={"/images/logo-b.png"}
                                alt="logo"
                                height={10}
                                width={110}
                                className="w-auto h-auto"
                            />
                        )}
                    </Link>
                    <nav className="hidden md:flex space-x-6">
                        <Link
                            href="/"
                            className=" hover:bg-muted-foreground/50 py-1 px-3 rounded-md"
                        >
                            Home
                        </Link>
                        <Link
                            href="/#about"
                            className=" hover:bg-muted-foreground/50 py-1 px-3 rounded-md"
                        >
                            About
                        </Link>
                        <Link
                            href="/#my-work"
                            className=" hover:bg-muted-foreground/50 py-1 px-3 rounded-md"
                        >
                            My Work
                        </Link>
                        <Link
                            href="/#skills"
                            className=" hover:bg-muted-foreground/50 py-1 px-3 rounded-md"
                        >
                            Skills
                        </Link>
                        <Link
                            href="/#contact"
                            className=" text-white hover:bg-indigo-600 py-1 px-3 rounded-md bg-indigo-500"
                        >
                            Get in Touch
                        </Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <ModeToggel />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle mobile menu</span>
                        </Button>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <nav className="md:hidden bg-background/95 backdrop-blur-sm">
                        <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
                            <Link
                                href="/"
                                className=" hover:text-primary py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/#about"
                                className=" hover:text-primary py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/#my-work"
                                className=" hover:text-primary py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                My Work
                            </Link>
                            <Link
                                href="/#contact"
                                className=" hover:text-primary py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </nav>
                )}
            </header>
        </>
    );
};

export default Header;
