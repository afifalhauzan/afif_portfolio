"use client";

import { useState, useEffect } from "react";
import { useMouseMove, useValue, animate, withEase } from "react-ui-animate";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image'
import Navbar from '../components/Navbar';
import SwipeTransition from "../swipeTransition";
import { RiBootstrapFill, RiNextjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import Socials from "../components/Socials";

const CURSOR_SIZE = 100;
const DELAY_TIME = 300;

const fadeInUp = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInUpV2 = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

export default function Home() {
    const [cursorVisible, setCursorVisible] = useState(false);
    const x = useValue(0);
    const y = useValue(0);

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
                <div className="flex flex-col font-jakarta z-20 bg-backgroundlight dark:bg-bluedefault items-center justify-normal overflow-auto px-10 space-y-14 pt-8  transition-all duration-500 ease-in-out">
                    <Navbar />
                    <div className="w-full max-w-4xl mx-auto px-4 m-2">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className=""
                        >
                            <h1 className="text-5xl xl:text-6xl font-bold text-left w-full text-white ">
                                About me
                            </h1>

                            <div className="flex flex-col md:flex-row justify-between mt-2 md:mt-0 items-center">
                                <div className="p-8">
                                    <Image
                                        src="/profile.jpg"
                                        width={300}
                                        height={300}
                                        alt="Picture of the author"
                                        className="rounded-3xl"
                                    />
                                </div>
                                <div>
                                    <div className="max-w-md justify-normal mx-auto md:mx-0 md:text-left mb-6 md:mb-0 p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <h2 className="text-2xl font-bold text-white mb-1">Afiif Al Hauzaan Alfian</h2>
                                        <h2 className="text-lg italic text-slate-300 mb-4">/pip/</h2>
                                        <h2 className="text-md text-white text-justify">
                                            I've been interested at Visual, Multimedia, and IT field for the past 4 years
                                        </h2>
                                        <h2 className="text-md text-white text-justify">
                                            I believe that great products are built on the foundation of thoughtful design, where user experience meets innovation. Through my work, I aim to bring ideas to life with clarity, creativity, and impact.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible" // Animation triggers when the component is in view
                            viewport={{ amount: 0.5 }}
                            variants={fadeInUpV2}
                            className=""
                        >
                            <div className="flex flex-col md:flex-row justify-between mt-4 space-y-4 md:space-y-0 md:space-x-12">
                                <div className="w-full bg-blue-200 bg-opacity-50 rounded-full p-4 text-center text-slate-200 mt-16">
                                    <h3 className="text-2xl font-bold">Experiences</h3>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible" // Animation triggers when the component is in view
                            viewport={{ amount: 0.3 }}
                            variants={fadeInUpV2}
                            className=""
                        >
                            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 ">
                                {/* Image Section */}
                                <div className="w-full h-[260px] text-left text-slate-200 relative order-1 ml-5 md:ml-0 md:order-2">
                                    {/* First Image */}
                                    <div className="absolute top-0 transform translate-y-10 shadow-lg">
                                        <Image
                                            src="/ddmhologi.jpg"
                                            width={230}
                                            height={230}
                                            alt="Picture of the author"
                                            className="rounded-xl"
                                        />
                                    </div>
                                    {/* Second Image */}
                                    <div className="absolute top-8 left-8 transform translate-x-24 md:translate-x-24 translate-y-16 shadow-lg">
                                        <Image
                                            src="/ddmhologi.jpg"
                                            width={200}
                                            height={200}
                                            alt="Picture of the author"
                                            className="rounded-xl"
                                        />
                                    </div>
                                </div>

                                {/* Text Section */}
                                <div className="flex items-center justify-center max-w-lg order-2 md:order-1">
                                    <div className="w-full p-4 text-left text-slate-200 md:mr-16">
                                        <h3 className="text-2xl font-bold">Raion Community</h3>
                                        <div className="flex space-x-3">
                                            <h3 className="text-lg">Vice Head UI/UX Designer</h3>
                                            <h3 className="text-lg text-slate-400 mb-2">(2025)</h3>
                                        </div>

                                        <p className="text-md text-slate-300">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>

                            </div>


                            <div className="flex flex-col md:flex-row justify-between space-y-4 mt-6 md:mt:0 md:space-y-0 md:space-x-20">
                                <div className="w-full p-4 text-left text-slate-200 mt-6">
                                    <h3 className="text-2xl font-bold">HOLOGY 7.0</h3>
                                    <div className="flex space-x-3">
                                        <h3 className="text-lg">Head of Creative Media</h3>
                                        <h3 className="text-lg text-slate-400 mb-2">(2024)</h3>
                                    </div>
                                    <p className="text-md text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="w-full h-[250px] text-left text-slate-200 mt-0 md:mt-6 relative">
                                    {/* First Image */}
                                    <div className="absolute top-0 transform translate-y-10 shadow-lg">
                                        <Image
                                            src="/ddmhologi.jpg"
                                            width={230}
                                            height={230}
                                            alt="Picture of the author"
                                            className="rounded-xl"
                                        />
                                    </div>
                                    {/* Second Image */}
                                    <div className="absolute top-8 left-8 transform translate-x-12 md:translate-x-24 translate-y-16 shadow-lg">
                                        <Image
                                            src="/ddmhologi.jpg"
                                            width={200}
                                            height={200}
                                            alt="Picture of the author"
                                            className="rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between space-y-4 mt-6 md:mt:0 md:space-y-0 md:space-x-20">
                                <div className="w-full p-4 text-left text-slate-200 mt-6">
                                    <h3 className="text-2xl font-bold">Practicum Assistant</h3>
                                    <div className="flex space-x-3">
                                        <h3 className="text-lg">FILKOM UB</h3>
                                        <h3 className="text-lg text-slate-400 mb-2">(2024)</h3>
                                    </div>
                                    <p className="text-md text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="w-full h-[250px] text-left text-slate-200 mt-0 md:mt-6 relative">
                                    {/* First Image */}
                                    <div className="absolute top-0 transform translate-y-10 shadow-lg">
                                        <Image
                                            src="/ddmhologi.jpg"
                                            width={230}
                                            height={230}
                                            alt="Picture of the author"
                                            className="rounded-xl"
                                        />
                                    </div>
                                    {/* Second Image */}
                                    <div className="absolute top-8 left-8 transform translate-x-12 md:translate-x-24 translate-y-16 shadow-lg">
                                        <Image
                                            src="/ddmhologi.jpg"
                                            width={200}
                                            height={200}
                                            alt="Picture of the author"
                                            className="rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>


                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible" // Animation triggers when the component is in view
                            viewport={{ amount: 0.3 }}
                            variants={fadeInUpV2}
                            className=""
                        >
                            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-12">
                                <div className="w-full bg-blue-200 bg-opacity-50 rounded-full p-4 text-center text-slate-200 mt-20 mb-6">
                                    <h3 className="text-2xl font-bold">The Tools</h3>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible" // Animation triggers when the component is in view
                            viewport={{ amount: 0.3 }}
                            variants={fadeInUpV2}
                            className=""
                        >
                            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-12">
                                <div>
                                    <div className="flex max-w-md h-full justify-center text-center items-center mx-auto mb-0 md:mx-0 p-6 md:p-4">
                                        <h2 className="text-3xl font-semibold text-white">Tech Stack</h2>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:flex md:space-x-4">
                                    <div className="flex flex-col items-center justify-center text-center mx-auto my-4 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <FaReact className="text-5xl text-center text-blue-400" />
                                        </div>
                                        <h2 className="text-md font-bold text-white">React</h2>
                                    </div>
                                    <div className="flex flex-col items-center justify-center max-w-md text-center mx-auto my-4 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <RiTailwindCssFill className="text-5xl text-center text-blue-300" />
                                        </div>
                                        <h2 className="text-md font-bold text-white">Tailwind</h2>
                                    </div>
                                    <div className="flex flex-col items-center justify-center max-w-md text-center mx-auto my-4 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <RiNextjsFill className="text-5xl text-center text-gray-200" />
                                        </div>
                                        <h2 className="text-md font-bold text-white">Next.js</h2>
                                    </div>
                                    <div className="flex flex-col items-center justify-center max-w-md text-center mx-auto my-4 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <FaLaravel className="text-5xl text-center text-red-500" />
                                        </div>
                                        <h2 className="text-md font-bold text-white">Laravel</h2>
                                    </div>
                                    <div className="flex flex-col items-center justify-center max-w-md text-center mx-auto my-4 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <GrMysql className="text-5xl text-center text-blue-600" />
                                        </div>
                                        <h2 className="text-md font-bold text-white">MySQL</h2>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible" // Animation triggers when the component is in view
                            viewport={{ amount: 0.3 }}
                            variants={fadeInUpV2}
                            className=""
                        >
                            <div className="flex flex-col md:flex-row justify-between space-y-4 mt-2 md:mt-6 md:space-y-0 md:space-x-12">
                                {/* Visual Stack */}
                                <div className="order-1 md:order-2">
                                    <div className="flex max-w-md h-full justify-center text-center items-center mx-auto mb-0 md:mx-0 p-6 md:p-4">
                                        <h2 className="text-3xl font-semibold text-white">Visual Stack</h2>
                                    </div>
                                </div>

                                {/* Icons */}
                                <div className="grid grid-cols-2 md:flex md:space-x-4 order-2 md:order-1">
                                    <div className="flex flex-col items-center justify-center max-w-md text-center mx-auto my-4 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <div className="flex justify-center items-center w-full mb-2 px-2">
                                            <Image
                                                src="/sigma.svg"
                                                alt="Contact Icon"
                                                width={52}
                                                height={52}
                                                className="object-contain"
                                            />
                                        </div>
                                        <h2 className="text-md font-bold text-white">Sigma</h2>
                                    </div>
                                    <div className="flex flex-col items-center justify-center max-w-md text-center mx-auto my-4 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <SiAdobeillustrator className="text-5xl text-center text-orange-400" />
                                        </div>
                                        <h2 className="text-md font-bold text-white">Illustrator</h2>
                                    </div>
                                    <div className="flex flex-col items-center justify-center max-w-md text-center mx-auto my-4 md:mx-0 md:text-left md:mb-0 p-4 bg-gray-800 rounded-lg shadow-lg">
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <SiAdobepremierepro className="text-5xl text-center text-indigo-600" />
                                        </div>
                                        <h2 className="text-md font-bold text-white">Premiere Pro</h2>
                                    </div>
                                    <div className="flex flex-col items-center justify-center max-w-md text-center mx-auto my-4 md:mx-0 md:text-left md:mb-0 p-4 bg-gray-800 rounded-lg shadow-lg">
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <SiAdobeaftereffects className="text-5xl text-center text-indigo-400" />
                                        </div>
                                        <h2 className="text-md font-bold text-white">After Effects</h2>
                                    </div>
                                </div>
                            </div>
                        </motion.div>


                        <Link href="/projects" className="flex items-center gap-2 p-6 pl-0 pb-0 space-x-2 text-blue-500 text-lg font-bold">
                            <span>My projects</span>
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

                        <div className="mb-20">
                            <Socials className="" />
                        </div>

                    </div>
                </div>
            </div>
        </SwipeTransition>
    );
}
