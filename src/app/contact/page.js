"use client";

import { useState, useEffect } from "react";
import { useMouseMove, useValue, animate, withEase } from "react-ui-animate";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from '../components/Navbar';
import SwipeTransition from "../swipeTransition";

const CURSOR_SIZE = 100;
const DELAY_TIME = 300;

const fadeInUp = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
    const [cursorVisible, setCursorVisible] = useState(false);
    const x = useValue(0);
    const y = useValue(0);

    useMouseMove(({ mouseX, mouseY }) => {
        x.value = withEase(mouseX - CURSOR_SIZE / 2);
        y.value = withEase(mouseY - CURSOR_SIZE / 2);

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
                            backgroundColor: "white",
                            borderRadius: "50%",
                            translateX: x.value,
                            translateY: y.value,
                            opacity: "45%",
                        }}
                        className="absolute pointer-events-none z-50 blur-3xl"
                    />
                )}
                <div className="min-h-screen flex flex-col font-jakarta bg-gray-50 dark:bg-bluedefault items-center justify-normal overflow-auto px-10 space-y-14 pt-8  transition-all duration-500 ease-in-out">
                    <Navbar/>
                    <div className="w-full max-w-4xl mx-auto px-4 m-2">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className=""
                        >
                            <h1 className="text-5xl xl:text-6xl font-bold text-left w-full text-white">
                                Contact
                            </h1>
                        </motion.div>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
        </SwipeTransition>
    );
}
