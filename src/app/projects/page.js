"use client";

import { useState, useEffect } from "react";
import { useMouseMove, useValue, animate, withEase } from "react-ui-animate";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Link from "next/link";
import SwipeTransition from "../swipeTransition";
import CategorySelector from '@/app/components/CategorySelector';
import { FaArrowRightLong } from "react-icons/fa6";

const CURSOR_SIZE = 100;
const DELAY_TIME = 300;

const fadeInUp = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
    const [cursorVisible, setCursorVisible] = useState(false);
    const [selected, setSelected] = useState("UI/UX");

    const x = useValue(0);
    const y = useValue(0);

    const handleSelect = (category) => {
        setSelected(category);
    };

    useMouseMove(({ mouseX, mouseY }) => {
        const scrollY = window.scrollY || 0; // Get the vertical scroll offset

        // Adjust mouse position by subtracting scroll offset
        x.value = withEase(mouseX - CURSOR_SIZE / 2);
        y.value = withEase(mouseY - CURSOR_SIZE / 2 + scrollY);

        if (!cursorVisible) {
            setTimeout(() => {
                setCursorVisible(true);
            }, DELAY_TIME); // Delay to show the cursor
        }
    });
    return (
        <SwipeTransition>
            <div className="relative">
                {/* Only show the cursor when it starts moving */}
                {cursorVisible && (
                    <animate.div
                        style={{
                            width: CURSOR_SIZE,
                            height: CURSOR_SIZE,
                            borderRadius: "50%",
                            translateX: x.value,
                            translateY: y.value,
                            opacity: "45%",
                        }}
                        className="absolute pointer-events-none bg-gray-200 dark:bg-white z-50 blur-xl dark:blur-3xl"
                    />
                )}
                <div className="min-h-screen flex flex-col font-jakarta bg-backgroundlight dark:bg-bluedefault items-center justify-normal overflow-auto px-6 md:px-10 space-y-14 pt-8  transition-all duration-500 ease-in-out">
                    <Navbar />
                    <div className="w-full max-w-4xl mx-auto px-4 m-2">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className=""
                        >
                            <h1 className="text-5xl xl:text-6xl font-bold text-left w-full text-gray-600 dark:text-white">
                                Projects
                            </h1>
                            <div className="flex flex-col justify-center overflow-x-auto">
                                <CategorySelector />
                            </div>

                            <Link href="/contact" className="flex items-center gap-2 p-6 pl-0 pb-12 space-x-2 text-blue-500 text-lg font-medium">
                                <span>Contact me</span>
                                <motion.span
                                    className="text-2xl"
                                    animate={{
                                        x: [0, 10, 0], // Moves the arrow from 0px to 10px to 0px
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        repeat: Infinity, // Loops infinitely
                                        repeatDelay: 0.2, // Adds a small delay before the animation repeats
                                    }}
                                >
                                    <FaArrowRightLong />
                                </motion.span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </SwipeTransition >
    );
}
