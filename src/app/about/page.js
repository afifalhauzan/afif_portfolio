"use client";

import { useState, useEffect, useRef } from "react";
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
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

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
    const reactSwipeEl1 = useRef(null);
    const reactSwipeEl2 = useRef(null);
    const reactSwipeEl3 = useRef(null);

    useEffect(() => {
        // Delayed start for each carousel
        const delay1 = setTimeout(() => {
            const interval1 = setInterval(() => {
                if (reactSwipeEl1.current) {
                    reactSwipeEl1.current.next();
                }
            }, 5500);
            // Store interval for cleanup
            reactSwipeEl1.current.interval = interval1;
        }, 0); // Delay for the first carousel

        const delay2 = setTimeout(() => {
            const interval2 = setInterval(() => {
                if (reactSwipeEl2.current) {
                    reactSwipeEl2.current.next();
                }
            }, 7000);
            reactSwipeEl2.current.interval = interval2;
        }, 500); // Delay for the second carousel

        const delay3 = setTimeout(() => {
            const interval3 = setInterval(() => {
                if (reactSwipeEl3.current) {
                    reactSwipeEl3.current.next();
                }
            }, 5000);
            reactSwipeEl3.current.interval = interval3;
        }, 3000); // Delay for the third carousel

        // Cleanup timeouts and intervals on component unmount
        return () => {
            clearTimeout(delay1);
            clearTimeout(delay2);
            clearTimeout(delay3);
            if (reactSwipeEl1.current?.interval) clearInterval(reactSwipeEl1.current.interval);
            if (reactSwipeEl2.current?.interval) clearInterval(reactSwipeEl2.current.interval);
            if (reactSwipeEl3.current?.interval) clearInterval(reactSwipeEl3.current.interval);
        };
    }, []);


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
                <div className="flex flex-col font-jakarta z-20 bg-backgroundlight dark:bg-bluedefault items-center justify-normal overflow-auto px-6 md:px-10 space-y-14 pt-8  transition-all duration-500 ease-in-out">
                    <Navbar />
                    <div className="w-full max-w-4xl mx-auto px-2 md:px-4 m-2">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className=""
                        >
                            <h1 className="text-5xl
                             xl:text-6xl font-bold text-left w-full text-slate-700 dark:text-white ">
                                About me
                            </h1>
                            

                            <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-0 items-center">
                                <div className="p-8">
                                    <Image
                                        src="/profile.jpg"
                                        width={300}
                                        height={300}
                                        alt="Picture of the author"
                                        className="rounded-3xl"
                                        priority
                                    />
                                </div>
                                <div>
                                    <div className="max-w-lg justify-normal mx-auto md:mx-0 md:text-left mb-6 md:mb-0 p-6 bg-slate-100 dark:bg-gray-800 rounded-lg shadow-md shadow-slate-200 dark:shadow-lg">
                                        <h2 className="text-2xl font-bold text-slate-700 dark:text-white mb-1">Afiif Al Hauzaan Alfian</h2>
                                        <h2 className="text-lg italic text-slate-600 dark:text-slate-300 mb-4">/pip/</h2>
                                        <h2 className="text-md text-slate-700 dark:text-white text-justify">
                                            I've been interested at Visual, Multimedia, and IT field for the past 4 years
                                        </h2>
                                        <h2 className="text-md text-slate-700 dark:text-white text-justify">
                                            I believe that great products are built on the foundation of thoughtful design, where user experience meets innovation. Through my work, I aim to bring ideas to life with clarity, creativity, and impact.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible" // Animation triggers when the component is in view
                            viewport={{ amount: 0.2 }}
                            variants={fadeInUpV2}
                            className=""
                        >
                            <div className="flex flex-col md:flex-row justify-between my-6 md:my-4 space-y-4 md:space-y-0 md:space-x-12">
                                <div className="w-full bg-gradient-to-r from-blue-300 to-cyan-800 bg-opacity-50 rounded-full p-4 text-center text-white mt-16">
                                    <h3 className="text-2xl font-bold">Experiences</h3>
                                </div>
                            </div>

                            <div className="space-y-6 mt-4 md:mt-0 md:space-x-0">
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:space-y-0 ">
                                    {/* Image Section */}
                                    <div className="w-full h-auto md:h-auto overflow-x-hidden text-left text-slate-200 relative order-1 ml-0 md:order-2">
                                        {/* ReactSwipe Carousel */}
                                        <ReactSwipe
                                            className="carousel "
                                            swipeOptions={{ continuous: true }}
                                            ref={reactSwipeEl1}
                                        >
                                            {/* First Image */}
                                            <div className="flex justify-center py-2">
                                                <div className="flex-shrink-0 shadow-lg">
                                                    <Image
                                                        src="/raion1.jpg"
                                                        width={230}
                                                        height={230}
                                                        quality={100}
                                                        alt="Picture of the author"
                                                        className="rounded-xl"
                                                    />
                                                </div>
                                            </div>

                                            {/* Second Image */}
                                            <div className="flex justify-center py-2">
                                                <div className="flex-shrink-0 shadow-lg">
                                                    <Image
                                                        src="/raion2.jpg"
                                                        quality={100}
                                                        width={280}
                                                        height={250}
                                                        alt="Picture of the author"
                                                        className="rounded-xl mt-4"
                                                    />
                                                </div>
                                            </div>

                                            {/* Third Image */}
                                            <div className="flex justify-center py-2">
                                                <div className="flex-shrink-0 shadow-lg">
                                                    <Image
                                                        src="/raion3.jpg"
                                                        quality={100}
                                                        width={260}
                                                        height={250}
                                                        alt="Picture of the author"
                                                        className="rounded-xl mt-4"
                                                    />
                                                </div>
                                            </div>
                                        </ReactSwipe>
                                    </div>


                                    {/* Text Section */}
                                    <div className="flex items-center justify-center max-w-lg order-2 md:order-1">
                                        <div className="w-full p-4 text-left text-slate-700 dark:text-slate-200 md:mr-16">
                                            <h3 className="text-2xl font-bold">Raion Community</h3>
                                            <div className="flex space-x-3 mb-2">
                                                <h3 className="text-lg">Co Lead of UI/UX Designer Apps</h3>
                                                <h3 className="text-lg text-slate-400 mb-2">(2025)</h3>
                                            </div>

                                            <p className="text-md text-slate-600 dark:text-slate-300 text-justify">
                                                Developed a UI/UX curriculum focusing on design principles, systems, and thinking. Contributed to workshops and fostered a collaborative learning environment.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        

                        <motion.div
                            initial="hidden"
                            whileInView="visible" // Animation triggers when the component is in view
                            viewport={{ amount: 0.2 }}
                            variants={fadeInUpV2}
                            className=""
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:space-y-0 mt-8 md:mt-2">
                                {/* Image Section */}
                                <div className="w-full h-auto md:h-auto overflow-x-hidden text-left text-slate-200 relative order-1 ml-0 md:order-2">
                                    {/* ReactSwipe Carousel */}
                                    <ReactSwipe
                                        className="carousel"
                                        swipeOptions={{ continuous: true }}
                                        ref={reactSwipeEl2}
                                    >
                                        {/* First Image */}
                                        <div className="flex justify-center py-2">
                                            <div className="flex-shrink-0 shadow-lg">
                                                <Image
                                                    src="/ddmhologi.jpg"
                                                    width={250}
                                                    height={230}
                                                    alt="Picture of the author"
                                                    className="rounded-xl"
                                                />
                                            </div>
                                        </div>

                                        {/* Second Image */}
                                        <div className="flex justify-center py-2 items-center">
                                            <div className="flex-shrink-0 shadow-lg">
                                                <Image
                                                    src="/ddmhologi2.jpg"
                                                    width={280}
                                                    height={300}
                                                    alt="Picture of the author"
                                                    className="rounded-xl mt-2"
                                                />
                                            </div>
                                        </div>

                                        {/* Third Image */}
                                        <div className="flex justify-center py-2 items-center">
                                            <div className="flex-shrink-0 shadow-lg">
                                                <Image
                                                    src="/ddmhol3.jpg"
                                                    width={280}
                                                    height={300}
                                                    alt="Picture of the author"
                                                    className="rounded-xl mt-2"
                                                />
                                            </div>
                                        </div>
                                    </ReactSwipe>
                                </div>


                                {/* Text Section */}
                                <div className="flex items-center justify-center max-w-lg order-2 md:order-1">
                                    <div className="w-full p-4 text-left text-slate-700 dark:text-slate-200 md:mr-16">
                                        <h3 className="text-2xl font-bold">HOLOGY 7.0</h3>
                                        <div className="flex space-x-3 mb-2">
                                            <h3 className="text-lg">Head of Creative Media</h3>
                                            <h3 className="text-lg text-slate-400 mb-2">(2024)</h3>
                                        </div>

                                        <p className="text-md text-slate-600 dark:text-slate-300 text-justify">
                                        Led a 13-member team to create design and videography content, ensuring all visuals matched the IT seminar and competition’s branding and enhanced its overall aesthetic.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial="hidden"
                            whileInView="visible" // Animation triggers when the component is in view
                            viewport={{ amount: 0.2 }}
                            variants={fadeInUpV2}
                            className=""
                        >
                            <div className="space-y-6 mt-4 md:mt-0 md:space-x-0">
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:space-y-0 ">
                                    {/* Image Section */}
                                    <div className="w-full h-auto md:h-auto overflow-x-hidden text-left text-slate-200 relative order-1 ml-4 md:order-2">
                                        {/* ReactSwipe Carousel */}
                                        <ReactSwipe
                                            className="carousel "
                                            swipeOptions={{ continuous: true }}
                                            ref={reactSwipeEl1}
                                        >
                                            {/* First Image */}
                                            <div className="flex justify-center py-2">
                                                <div className="flex-shrink-0 shadow-lg">
                                                    <Image
                                                        src="/kbm1.jpeg"
                                                        width={230}
                                                        height={230}
                                                        quality={100}
                                                        alt="Picture of the author"
                                                        className="rounded-xl"
                                                    />
                                                </div>
                                            </div>
                                        </ReactSwipe>
                                    </div>


                                    {/* Text Section */}
                                    <div className="flex items-center justify-center max-w-lg order-2 md:order-1">
                                        <div className="w-full p-4 text-left text-slate-700 dark:text-slate-200 md:mr-8">
                                            <h3 className="text-2xl font-bold">KBMDSI UB</h3>
                                            <div className="flex space-x-3 mb-2">
                                                <h3 className="text-lg">Information Technology Staff</h3>
                                                <h3 className="text-lg text-slate-400 mb-2">(2025)</h3>
                                            </div>

                                            <p className="text-md text-slate-600 dark:text-slate-300 text-justify"> 
                                                As part of the Front-End & UI/UX team, i collaborated with front-end, back-end and admin to maintain and develop projects within KBMDSI
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible" // Animation triggers when the component is in view
                            viewport={{ amount: 0.2 }}
                            variants={fadeInUpV2}
                            className=""
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:space-y-0 mt-8 md:mt-2">
                                {/* Image Section */}
                                <div className="w-full h-auto md:h-auto overflow-x-hidden text-left text-slate-200 relative order-1 ml-0 md:order-2">
                                    {/* ReactSwipe Carousel */}
                                    <ReactSwipe
                                        className="carousel"
                                        swipeOptions={{ continuous: true }}
                                        ref={reactSwipeEl3}
                                    >
                                        {/* First Image */}
                                        <div className="flex justify-center py-2">
                                            <div className="flex-shrink-0 shadow-lg">
                                                <Image
                                                    src="/asprak.png"
                                                    width={280}
                                                    height={250}
                                                    alt="Picture of the author"
                                                    className="rounded-xl"
                                                />
                                            </div>
                                        </div>

                                        {/* Second Image */}
                                        <div className="flex justify-center py-2">
                                            <div className="flex-shrink-0 shadow-lg">
                                                <Image
                                                    src="/asprak2.png"
                                                    width={260}
                                                    height={230}
                                                    alt="Picture of the author"
                                                    className="rounded-xl"
                                                />
                                            </div>
                                        </div>
                                    </ReactSwipe>
                                </div>


                                {/* Text Section */}
                                <div className="flex items-center justify-center max-w-lg order-2 md:order-1">
                                    <div className="w-full p-4 text-left text-slate-700 dark:text-slate-200 md:mr-16">
                                        <h3 className="text-2xl font-bold">FILKOM UB</h3>
                                        <div className="flex space-x-3 mb-2">
                                            <h3 className="text-lg">Practicum Assistant</h3>
                                            <h3 className="text-lg text-slate-400 mb-2">(2024)</h3>
                                        </div>

                                        <p className="text-md text-slate-600 dark:text-slate-300 text-justify">
                                            Guided 29 students in Java programming, covering topics such as Basic I/O, Conditions, Loops, Methods, and Arrays in one semester. Created interactive quizzes on HackerRank to enhance hands-on learning.</p>
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
                            <div className="flex flex-col md:flex-row justify-between">
                                <div className="w-full bg-gradient-to-r from-cyan-700 to-blue-400 bg-opacity-50 rounded-full p-4 text-center text-white mt-20 mb-2 md:mb-6">
                                    <h3 className="text-2xl font-bold">The Tools</h3>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-12">
                                <div>
                                    <div className="flex max-w-md h-full justify-center text-center items-center mx-auto mb-0 md:mx-0 p-6 md:p-4">
                                        <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Tech Stack</h2>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:flex md:space-x-4">
                                    <div className="flex w-10/12 flex-col items-center justify-center text-center mx-auto my-2 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-blue-100 dark:bg-gray-800 border-2 animate-border-pulse rounded-lg shadow-lg"
                                        style={{ animationDelay: '0s' }}
                                    >
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <FaReact className="text-6xl md:text-5xl text-center text-blue-400" />
                                        </div>
                                        <h2 className="text-lg md:text-md font-bold text-slate-700 dark:text-white">React</h2>
                                    </div>
                                    <div className="flex w-10/12 flex-col items-center justify-center max-w-md text-center mx-auto my-2 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-blue-100 dark:bg-gray-800 border-2 animate-border-pulse rounded-lg shadow-lg"
                                        style={{ animationDelay: '0.4s' }}
                                    >
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <RiTailwindCssFill className="text-6xl md:text-5xl text-center text-blue-300" />
                                        </div>
                                        <h2 className="text-lg md:text-md font-bold text-slate-700 dark:text-white">Tailwind</h2>
                                    </div>
                                    <div className="flex w-10/12 flex-col items-center justify-center max-w-md text-center mx-auto my-2 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-blue-100 dark:bg-gray-800 border-2 animate-border-pulse rounded-lg shadow-lg"
                                        style={{ animationDelay: '0.8s' }}
                                    >
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <RiNextjsFill className="text-6xl md:text-5xl text-center text-slate-800 dark:text-gray-200" />
                                        </div>
                                        <h2 className="text-lg md:text-md font-bold text-slate-700 dark:text-white">Next.js</h2>
                                    </div>
                                    <div className="flex w-10/12 flex-col items-center justify-center max-w-md text-center mx-auto my-2 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-blue-100 dark:bg-gray-800 border-2 animate-border-pulse rounded-lg shadow-lg"
                                        style={{ animationDelay: '1.2s' }}
                                    >
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <FaLaravel className="text-6xl md:text-5xl text-center text-red-500" />
                                        </div>
                                        <h2 className="text-lg md:text-md font-bold text-slate-700 dark:text-white">Laravel</h2>
                                    </div>
                                    <div className="flex w-10/12 flex-col items-center justify-center max-w-md text-center mx-auto my-2 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-blue-100 dark:bg-gray-800 border-2 animate-border-pulse rounded-lg shadow-lg"
                                        style={{ animationDelay: '1.6s' }}
                                    >
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <GrMysql className="text-6xl md:text-5xl text-center text-blue-600" />
                                        </div>
                                        <h2 className="text-lg md:text-md font-bold text-slate-700 dark:text-white">MySQL</h2>
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
                            <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-6 md:space-y-0 md:space-x-12">
                                {/* Visual Stack */}
                                <div className="order-1 md:order-2">
                                    <div className="flex max-w-md h-full justify-center text-center items-center mx-auto mb-4 md:mx-0 p-6 md:p-4">
                                        <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Visual Stack</h2>
                                    </div>
                                </div>

                                {/* Icons */}
                                <div className="grid grid-cols-2 md:flex md:space-x-4 order-2 md:order-1">
                                    <div className="flex w-10/12 flex-col items-center justify-center max-w-md text-center mx-auto my-0 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-blue-100 dark:bg-gray-800 border-2 animate-border-pulse rounded-lg shadow-lg"
                                        style={{ animationDelay: '1.6s' }}
                                    >
                                        <div className="flex justify-center items-center w-full mb-2 px-1">
                                            <Image
                                                src="/sigma.svg"
                                                alt="Contact Icon"
                                                width={70}
                                                height={70}
                                                className="object-contain sm:w-20 sm:h-20 md:w-12 md:h-12"
                                            />
                                        </div>
                                        <h2 className="text-lg md:text-md font-bold text-slate-800 dark:text-gray-200">Figma</h2>
                                    </div>
                                    <div className="flex w-10/12 flex-col items-center justify-center max-w-md text-center mx-auto my-0 md:mx-0 md:text-left md:mb-0 p-8 md:p-6 bg-blue-100 dark:bg-gray-800 border-2 animate-border-pulse rounded-lg shadow-lg"
                                        style={{ animationDelay: '1.2s' }}
                                    >
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <SiAdobeillustrator className="text-6xl md:text-5xl text-center text-orange-400" />
                                        </div>
                                        <h2 className="text-lg md:text-md font-bold text-slate-800 dark:text-gray-200">Illustrator</h2>
                                    </div>
                                    <div className="flex w-10/12 flex-col items-center justify-center max-w-md text-center mx-auto my-4 md:my-0 md:mx-0 md:text-left md:mb-0 p-4 py-10 md:py-4 bg-blue-100 dark:bg-gray-800 border-2 animate-border-pulse rounded-lg shadow-lg"
                                        style={{ animationDelay: '0.8s' }}
                                    >
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <SiAdobepremierepro className="text-6xl md:text-5xl text-center text-indigo-600" />
                                        </div>
                                        <h2 className="text-lg md:text-md font-bold text-center text-slate-800 dark:text-gray-200">Premiere Pro</h2>
                                    </div>
                                    <div className="flex w-10/12 flex-col items-center justify-center max-w-md text-center mx-auto my-4 md:my-0 md:mx-0 md:text-left md:mb-0 p-4 py-10 md:py-4 bg-blue-100 dark:bg-gray-800 border-2 animate-border-pulse rounded-lg shadow-lg"
                                        style={{ animationDelay: '0.4s' }}
                                    >
                                        <div className="flex justify-center items-center w-full mb-2">
                                            <SiAdobeaftereffects className="text-6xl md:text-5xl text-center text-indigo-400" />
                                        </div>
                                        <h2 className="text-lg md:text-md font-bold text-center text-slate-800 dark:text-gray-200">After Effects</h2>
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
                            <div className="flex flex-col md:flex-row justify-between">
                                <div className="w-full bg-gradient-to-r from-cyan-400 to-teal-800 bg-opacity-50 rounded-full p-4 text-center text-white mt-20 mb-6">
                                    <h3 className="text-2xl font-bold">What I like</h3>
                                </div>
                            </div>
                            <div className="flex flex-col md:space-y-4">
                                <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full mx-auto md:mx-0 md:text-left mb-6 md:mb-0 p-6 bg-slate-100 dark:bg-gray-800 rounded-lg shadow-lg">
                                    <img
                                        src="/instagram.svg"
                                        alt="Instagram"
                                        className="w-24 h-24 md:w-20 md:h-20 mb-2 order-1 md:order-2"
                                    />
                                    <div className="flex flex-col pr-4 md:pr-8 order-2 md:order-1">
                                        <h2 className="text-2xl font-bold text-slate-700 dark:text-white mb-1">Photography</h2>
                                        <h2 className="text-md text-slate-600 dark:text-white text-justify mb-2">
                                            A collection of my favorite places and photos
                                        </h2>
                                        <a href="https://www.instagram.com/stories/highlights/18076888111202035/" target="_blank" rel="noopener noreferrer">
                                            <h3 className="text-md text-blue-400 font-bold text-justify hover:underline " >
                                                Here
                                            </h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full mx-auto md:mx-0 md:text-left mb-6 md:mb-0 p-6 bg-slate-100 dark:bg-gray-800 rounded-lg shadow-lg">
                                    <img
                                        src="/spotify.svg"
                                        alt="Spotify"
                                        className="w-24 h-24 md:w-20 md:h-20 mb-2 order-1 md:order-2"
                                    />
                                    <div className="flex flex-col pr-4 md:pr-8 order-2 md:order-1">
                                        <h2 className="text-2xl font-bold text-slate-700 dark:text-white mb-1">My Spotify playlist</h2>
                                        <h2 className="text-md text-slate-600 dark:text-white text-justify mb-2">
                                            Curated playlist for testing headphones
                                        </h2>
                                        <a href="https://open.spotify.com/playlist/2m5NoKl0x1pJmfFkzZ3UNt?si=58c79403e5bd4324" target="_blank" rel="noopener noreferrer">
                                            <h3 className="text-md text-blue-400 font-bold text-justify hover:underline">
                                                Here
                                            </h3>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                        <Link href="/projects" className="flex items-center gap-2 p-6 pl-0 pb-0 space-x-2 text-blue-500 text-lg font-bold">
                            <span>Check out my projects</span>
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
                                <FaArrowRightLong className="mt-[4px]" />
                            </motion.span>
                        </Link>

                        <div className="mb-20">
                            <Socials className="" />
                        </div>
                    </div>
                </div>
            </div>
        </SwipeTransition >
    );
}
