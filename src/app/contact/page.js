"use client";

import React, { useRef, useState, useEffect } from "react";
import { FC } from 'react';
import Image from "next/image";
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import { useMouseMove, useValue, animate, withEase } from "react-ui-animate";
import { motion } from "framer-motion";
import { ThreeDot } from 'react-loading-indicators'
import toast, { Toaster } from 'react-hot-toast';
import Socials from '@/app/components/Socials';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from "next/link";
import Navbar from '../components/Navbar';
import SwipeTransition from "../swipeTransition";
import ReCAPTCHA from "react-google-recaptcha";

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

    const recaptchaRef = useRef(null);
    const [isVerified, setIsVerified] = useState(false);

    async function handleCaptchaSubmission(token) {
        try {
            if (token) {
                await fetch("/api/captcha/", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                });
                setIsVerified(true);
            }
        } catch (e) {
            setIsVerified(false);
        }
    }

    const handleChange = (token) => {
        handleCaptchaSubmission(token);
    };

    function handleExpired() {
        setIsVerified(false);
    }

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
                    <div className="fixed inset-0  text-white bg-black bg-opacity-50 z-50 flex flex-col space-y-6 items-center justify-center backdrop-blur-sm">
                        <div className="animate-pulse flex flex-col space-y-6 items-center justify-center">
                            <ThreeDot color="#e4e6ff" size="medium" text="" textColor="" />
                            <a className="text-[#e4e6ff]">Sending message...</a>
                        </div>
                    </div>
                )}

                <Toaster />

                <div className="flex flex-col font-jakarta bg-backgroundlight dark:bg-bluedefault items-center justify-normal px-6 md:px-10 space-y-14 pt-8 transition-all duration-800 ease-in-out">
                    <Navbar />
                    <div className="w-full max-w-4xl mx-auto px-2 md:px-4 m-2">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className=""
                        >
                            <h1 className="text-5xl xl:text-6xl font-bold text-left w-full text-slate-700 dark:text-white">
                                Contact
                            </h1>
                            <div className="flex flex-col md:flex-row justify-between">
                                <div>
                                    <div className="max-w-md justify-normal mx-auto my-8 md:mx-0 md:text-left mb-4 md:mb-0 p-6 pb-2 bg-slate-100 dark:bg-gray-800 rounded-lg shadow-lg">
                                        <div className="flex flex-col items-center mb-6">
                                            <h2 className="text-2xl font-bold text-slate-700 dark:text-white mb-6">Let's get in touch!</h2>
                                            {/* Contact Icon */}
                                            <div className="w-[370px] h-[180px] md:w-full md:h-full justify-center items-center mb-2">
                                                <DotLottieReact
                                                    src="/contact.lottie"
                                                    loop
                                                    autoplay
                                                />
                                            </div>

                                            {/* Text Content */}

                                            <h2 className="text-md mt-2 text-slate-600 dark:text-white text-center">Whether you're up for a collaboration, have a project in mind, or just want to say hi, feel free to reach out!</h2>
                                            <Socials className="pb-0 mb-0 justify-center" />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 max-w-5xl mx-auto mt-2 md:mt-8 md:ml-8 mb-12 bg-slate-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                        {/* Full Name */}
                                        <div className="group focus-within:text-blue-600 transition duration-300">
                                            <label
                                                htmlFor="name"
                                                className="block text-md font-medium pb-1 text-gray-800 dark:text-white group-focus-within:text-blue-600 dark:group-focus-within:text-blue-300 transition duration-300"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="text-sm mt-2 w-full bg-slate-100 dark:bg-gray-800 border-b-2 pb-2 border-gray-300 focus:outline-none focus:border-blue-600 dark:focus:border-blue-300 focus:text-blue-600 dark:focus:text-blue-300 transition duration-300"
                                                placeholder="What's your name?"
                                                {...register('name', { required: true })}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="group focus-within:text-blue-600 transition duration-300">
                                            <label
                                                htmlFor="email"
                                                className="block text-md font-medium pb-1 text-gray-800 dark:text-white group-focus-within:text-blue-600 dark:group-focus-within:text-blue-300 transition duration-300"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="text-sm mt-2 w-full bg-slate-100 dark:bg-gray-800 border-b-2 pb-2 border-gray-300 focus:outline-none focus:border-blue-600 dark:focus:border-blue-300 focus:text-blue-600 dark:focus:text-blue-300 transition duration-300"
                                                placeholder="Enter your email"
                                                {...register('email', { required: true })}
                                            />
                                        </div>

                                        {/* Message */}
                                        <div className="group focus-within:text-blue-600 transition duration-300">
                                            <label
                                                htmlFor="message"
                                                className="block text-md font-medium pb-1 text-gray-800 dark:text-white group-focus-within:text-blue-600 dark:group-focus-within:text-blue-300 transition duration-300"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                rows="5"
                                                className="text-sm mt-2 w-full bg-slate-100 dark:bg-gray-800 border-b-2 pb-2 border-gray-300 focus:outline-none focus:border-blue-600 dark:focus:border-blue-300 focus:text-blue-600 dark:focus:text-blue-300 transition duration-300"
                                                placeholder="Enter your message"
                                                {...register('message', { required: true })}
                                            ></textarea>
                                        </div>

                                        <ReCAPTCHA
                                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                                            ref={recaptchaRef}
                                            onChange={handleChange}
                                            onExpired={handleExpired}
                                        >
                                        </ReCAPTCHA>

                                        {/* Submit Button */}
                                        <div>
                                            <button
                                                type="submit"
                                                className="w-full bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 disabled:bg-slate-700 disabled:text-slate-400 transition duration-300"
                                                disabled={!isVerified}
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </SwipeTransition>
    );
}
