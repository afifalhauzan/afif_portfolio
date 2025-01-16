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

                {/* Loading Overlay */}
                {loading && (
                    <div className="fixed inset-0 text-white bg-black bg-opacity-50 z-50 flex flex-col space-y-6 items-center justify-center backdrop-blur-sm">
                        <ThreeDot color="#e4e6ff" size="medium" text="" textColor="" />
                        <a className="text-[#e4e6ff]">Sending message...</a>
                    </div>
                )}

                <Toaster />

                <div className="flex flex-col font-jakarta bg-gray-50 dark:bg-bluedefault items-center justify-normal px-10 space-y-14 pt-8 transition-all duration-800 ease-in-out">
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
                        </motion.div>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div>
                                <div className="max-w-md justify-normal mx-auto my-8 md:mx-0 md:text-left mb-4 md:mb-0 p-6 pb-2 bg-gray-800 rounded-lg shadow-lg">
                                    <div className="flex flex-col items-center mb-6">
                                        <h2 className="text-2xl font-bold text-white mb-6">Let's get in touch!</h2>
                                        {/* Contact Icon */}
                                        <div className="w-full h-full md:w-3/4 md:h-3/4 justify-center items-center mb-4">
                                            <Image
                                                src="/contact.svg" // Path to your SVG
                                                alt="Contact Icon"
                                                width={300}
                                                height={300}
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* Text Content */}

                                        <h2 className="text-md mt-2 text-white text-center">Whether it's collaborating, work, or just wanna contact me, hit me up!</h2>
                                        <Socials className="pb-0 mb-0 justify-center" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 max-w-5xl mx-auto mt-2 md:mt-8 md:ml-8 mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
                                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                    {/* Full Name */}
                                    <div className="group focus-within:text-blue-200 transition duration-300">
                                        <label
                                            htmlFor="name"
                                            className="block text-md font-medium pb-1 text-gray-800 dark:text-white group-focus-within:text-blue-200 transition duration-300"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="text-sm mt-2 w-full bg-gray-800 border-b-2 pb-2 border-gray-300 focus:outline-none focus:border-blue-200 text-white focus:text-blue-200 transition duration-300"
                                            placeholder="What's your name?"
                                            {...register('name', { required: true })}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="group focus-within:text-blue-200 transition duration-300">
                                        <label
                                            htmlFor="email"
                                            className="block text-md font-medium pb-1 text-gray-800 dark:text-white group-focus-within:text-blue-200 focus:text-blue-200 transition duration-300"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="text-sm mt-2 w-full bg-gray-800 border-b-2 pb-2 border-gray-300 focus:outline-none focus:border-blue-200 text-white focus:text-blue-200 transition duration-300"
                                            placeholder="Enter your email"
                                            {...register('email', { required: true })}
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="group focus-within:text-blue-200 transition duration-300">
                                        <label
                                            htmlFor="message"
                                            className="block text-md font-medium pb-1 text-gray-800 dark:text-white group-focus-within:text-blue-200 focus:text-blue-200 transition duration-300"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            className="text-sm mt-2 w-full bg-gray-800 border-b-2 pb-2 border-gray-300 focus:outline-none focus:border-blue-200 text-white focus:text-blue-200 transition duration-300"
                                            placeholder="Enter your message"
                                            {...register('message', { required: true })}
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwipeTransition>
    );
}
