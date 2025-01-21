"use client";

import { useState, useEffect } from 'react';
import { FC } from 'react';
import Image from "next/image";
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import { useMouseMove, useValue, animate, withEase } from "react-ui-animate";
import { motion } from "framer-motion";
import { ThreeDot } from 'react-loading-indicators'
import toast, { Toaster } from 'react-hot-toast';
import Socials from '@/app/components/Socials';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from "next/link";
import Navbar from '@/app/components/Navbar';
import SwipeTransition from "@/app/swipeTransition";

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

    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true); // Show loading overlay
        try {
            await sendEmail(data);
            toast.success('Successfully sent a message!');
        } catch (error) {
            toast.error('Cannot send email right now.');
        } finally {
            setLoading(false); // Hide loading overlay
        }
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

            <div className="flex flex-col font-jakarta bg-backgroundlight dark:bg-bluedefault items-center justify-normal px-10 space-y-14 pt-8 transition-all duration-800 ease-in-out">
                <Navbar />
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
                        <div className="flex flex-col md:flex-row justify-between">
                            <div>
                                <div className="max-w-md justify-normal mx-auto my-8 md:mx-0 md:text-left mb-4 md:mb-0 p-6 pb-2">
                                    <div className="flex flex-col items-center mb-6">
                                        <h2 className="text-2xl font-bold text-white mb-6">Let's get in touch!</h2>

                                        <h2 className="text-md mt-2 text-white text-center">Whether it's collaborating, work, or just wanna contact me, hit me up!</h2>
                                        <Socials className="pb-0 mb-0 justify-center" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
