/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ObserverProps {
    id: number;
    children: React.ReactNode;
}
const Observer = ({ id, children }: ObserverProps) => {
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
        <motion.div
            key={id}
            data-id={id}
            className="card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
                visibleCards.includes(id.toString())
                    ? { opacity: 1, scale: 1 }
                    : {}
            }
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
};

export default Observer;
