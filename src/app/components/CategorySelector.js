import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import ReactDOM from "react-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { FaPenNib } from "react-icons/fa6";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { projectData } from "@/app/components/projectData";

const transition = {
    duration: 0.4,
    ease: [0, 0.5, 0.8, 1.01],
}

const CategorySelector = () => {
    const [selectedCategory, setSelectedCategory] = useState("UI/UX");
    const [underlineWidth, setUnderlineWidth] = useState(0);
    const [underlineLeft, setUnderlineLeft] = useState(0);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [moreOpenId, setMoreOpenId] = useState(null);
    const tabsRef = useRef([]);

    const [activeProjectId, setActiveProjectId] = useState(null); // Tracks which project is active
    const activeProject = projectData[selectedCategory].find((p) => p.id === activeProjectId);

    const handleClose = () => setActiveProjectId(null); // Close sliding tab
    const handleOpen = (id) => setActiveProjectId(id); // Open sliding tab

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Set loading when category changes
        // Randomly choose a loading delay from the array [150, 200, 300]
        const randomDelay = [100, 200, 300, 350][Math.floor(Math.random() * 4)];
        const timeout = setTimeout(() => setLoading(false), randomDelay); // Simulate loading delay with random value

        return () => clearTimeout(timeout);
    }, [selectedCategory]); // Runs whenever selectedCategory changes

    // Function to handle category selection
    const handleCategoryClick = (category, index) => {
        handleClose(); // Call the second function

        setTimeout(() => {
            setSelectedCategory(category);

            const currentTab = tabsRef.current[index];
            setUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setUnderlineWidth(currentTab?.clientWidth ?? 0);
        }, 0); // Delay ensures state changes propagate properly
    };

    useEffect(() => {
        // Initialize underline position for the default category
        const defaultIndex = ["UI/UX", "Graphic Design", "Websites", "Videography"].indexOf(selectedCategory);
        if (tabsRef.current[defaultIndex]) {
            const currentTab = tabsRef.current[defaultIndex];
            setUnderlineLeft(currentTab.offsetLeft);
            setUnderlineWidth(currentTab.clientWidth);
        }
    }, []);

    return (
        <div className="flex flex-col justify-center md:items-center mt-4 overflow-x-auto overflow-y-hidden">
            <div className="relative flex flex-col md:flex-row space-y-4 md:space-y-0 mt-6 p-2 rounded-2xl md:rounded-3xl overflow-x-auto">
                <ul className="flex z-10 whitespace-nowrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {["UI/UX", "Graphic Design", "Websites", "Videography"].map((category, index) => (
                        <li className="me-2" key={category}>
                            <button
                                ref={(el) => (tabsRef.current[index] = el)}
                                className={`inline-block px-4 py-3 rounded-full transition-all duration-300 ${selectedCategory === category
                                    ? "text-white"
                                    : "hover:text-gray-900 dark:hover:text-white"
                                    }`}
                                onClick={() => {
                                    handleCategoryClick(category, index); // Call the first function
                                }}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
                <span
                    className="absolute left-0 h-[45px] transform -translate-y-[17px] md:translate-y-[0px] bg-blue-600 rounded-full transition-all duration-300"
                    style={{ width: underlineWidth, left: underlineLeft }}
                />
            </div>

            {/* Sliding Tab */}
            <div
                className={`fixed top-0 right-0 w-full sm:w-2/3 md:w-1/3 h-full bg-slate-100 dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ${activeProjectId ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {activeProjectId && (
                    <div className="p-10 pt-16 md:pt-12 transition-all duration-300">
                        <div
                            className="flex items-center pb-6 space-x-4 text-md font-medium text-slate-700 dark:text-gray-300 hover:text-slate-400 dark:hover:text-white transition-all duration-300"
                            onClick={handleClose}
                        >
                            <FaArrowLeftLong />
                            <a>Back to Project</a>
                        </div>
                        <h3 className="text-3xl text-slate-800 dark:text-white font-bold mb-3">
                            {activeProject.title}
                        </h3>

                        {activeProjectId && activeProject.tags ? (
                            <div className="flex flex-wrap justify-start gap-2 mb-4">
                                {activeProject.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-[4px] text-sm font-semibold text-slate-500 dark:text-white bg-slate-200 dark:bg-gray-700 rounded-xl">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        ) : null}

                        <p className="text-sm text-slate-800 dark:text-white text-justify">
                            {activeProject.description}
                        </p>

                        {activeProjectId && activeProject.team ? (
                            <div>
                                <div className="border border-slate-300 dark:border-gray-600 mt-4">
                                </div>
                                <h3 className="text-xl font-bold mt-4 mb-2">The Team</h3>
                                <p className="text-sm text-slate-700 dark:text-white rounded-xl">
                                    {activeProject.team.join(", ")}
                                </p>
                            </div>
                        ) : null}

                        {activeProjectId && activeProject.figma ? (
                            <a href={activeProject.figma}
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className="flex flex-row justify-center items-center p-2 mt-6 font-bold w-full bg-slate-200 dark:bg-slate-700 rounded-xl border-2 border-slate-400 dark:border-slate-500 hover:bg-slate-300 dark:hover:bg-bluedefault transition-all duration-200 space-x-4">
                                    <div className="flex w-1/8 justify-center items-center">
                                        <Image
                                            src="/sigma.svg"
                                            alt="Figma Logo"
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    </div>
                                    <p
                                        className="flex items-center justify-center text-center text-md md:text-lg">
                                        Check out the Prototype!
                                    </p>
                                </div>
                            </a>
                        ) : null}

                        {activeProjectId && activeProject.videoLink ? (
                            <a href={activeProject.videoLink}
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className="flex flex-row justify-center items-center p-3 mt-6 font-bold w-full bg-slate-200 dark:bg-slate-700 rounded-xl border-2 border-slate-400 dark:border-slate-500 hover:bg-slate-300 dark:hover:bg-bluedefault transition-all duration-200 space-x-4">
                                    <div className="flex w-1/7 justify-center items-center ">
                                        <FaYoutube className="text-3xl" />
                                    </div>
                                    <p
                                        className="flex items-center justify-start text-left text-md md:text-lg">
                                        Watch the video!
                                    </p>
                                </div>
                            </a>
                        ) : null}

                        {activeProjectId && activeProject.website ? (
                            <a href={activeProject.website}
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className="flex flex-row justify-center items-center p-3 mt-6 font-bold w-full bg-slate-200 dark:bg-slate-700 rounded-xl border-2 border-slate-400 dark:border-slate-500 hover:bg-slate-300 dark:hover:bg-bluedefault transition-all duration-200 space-x-4">
                                    <div className="flex w-1/8 justify-center items-center">
                                        <RiGlobalLine className="text-3xl" />
                                    </div>
                                    <p
                                        className="flex items-center justify-center text-center text-md md:text-lg">
                                        Visit the website!
                                    </p>
                                </div>
                            </a>
                        ) : null}

                        {activeProjectId && activeProject.github ? (
                            <a href={activeProject.github}
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className="flex flex-row justify-center items-center p-3 mt-6 font-bold w-full bg-slate-200 dark:bg-slate-700 rounded-xl border-2 border-slate-400 dark:border-slate-500 hover:bg-slate-300 dark:hover:bg-bluedefault transition-all duration-200 space-x-4">
                                    <div className="flex w-1/8 justify-center items-center">
                                        <FaGithub className="text-3xl" />
                                    </div>
                                    <p
                                        className="flex items-center justify-center text-center text-md md:text-lg">
                                        The Repository
                                    </p>
                                </div>
                            </a>
                        ) : null}

                        {activeProjectId && activeProject.design ? (
                            <a href={activeProject.design}
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className="flex flex-row justify-center items-center p-3 mt-6 font-bold w-full bg-slate-200 dark:bg-slate-700 rounded-xl border-2 border-slate-400 dark:border-slate-500 hover:bg-slate-300 dark:hover:bg-bluedefault transition-all duration-200 space-x-4">
                                    <div className="flex w-1/8 justify-center items-center">
                                        <FaPenNib className="text-3xl" />
                                    </div>
                                    <p
                                        className="flex items-center justify-center text-center text-md md:text-lg">
                                        Check out the Designs!
                                    </p>
                                </div>
                            </a>
                        ) : null}
                    </div>
                )}
            </div>

            {/* Content area displaying the project cards */}
            <div className="mt-4">
                {loading ? (
                    <div className="flex justify-center items-center h-60">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-slate-400"></div>
                    </div>
                ) : (
                    <motion.div
                        key={selectedCategory} // Triggers reanimation when category changes
                        initial={{ opacity: 0, y: 40, scale: 0.95 }} // Initial state: hidden and slightly down
                        animate={{ opacity: 1, y: 0, scale: 1 }} // Final state: fully visible and in normal position
                        exit={{ opacity: 0, y: -50 }} // Exit state: hidden and slightly up
                        transition={transition}
                    >
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 750: 2 }}
                        >
                            <Masonry gutter="10px">
                                {projectData[selectedCategory].map((project) => (
                                    <div
                                        key={project.id}
                                        className="relative"
                                        onClick={() => handleOpen(project.id)}
                                    >
                                        <div className="relative flex-1">
                                            {project.video ? (
                                                <video
                                                    width="400"
                                                    height="400"
                                                    preload="auto"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    className="rounded-xl"
                                                >
                                                    <source src={`/videos/${project.video}`} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            ) : (
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    quality={20}
                                                    priority={project.isFeatured}
                                                    layout="responsive" // Makes the image responsive to container width
                                                    width={1000} // Adjust this to fit the general size you want
                                                    height={300} // Adjust this based on the aspect ratio of your images
                                                    className="rounded-xl object-cover" // Ensures the image covers the area without distortion
                                                />
                                            )}

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-700 to-50% rounded-xl flex flex-col justify-end p-4">
                                                <h3 className="text-2xl font-semibold text-white pb-1">{project.title}</h3>
                                                {/* <p className="text-md text-gray-300 mb-2">{project.description}</p> */}
                                                {project.story ? (
                                                    <Link href={`/projects/${project.id}`} className="flex items-center gap-2 space-x-1 text-blue-300 text-md font-bold">
                                                        <span>The Story</span>
                                                        <FaArrowRightLong className="mt-[3px]" />
                                                    </Link>
                                                ) : (
                                                    <div
                                                        className="flex items-center gap-2 space-x-1 text-blue-300 text-md font-bold cursor-pointer"
                                                        onClick={() => handleOpen(project.id)}
                                                    >
                                                        <p>More</p>
                                                        <FaArrowRightLong className="mt-[3px]" />
                                                    </div>
                                                )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>

                        {projectData[selectedCategory].map((project) => (
                            <div
                                key={project.id}
                                className="w-[750px] bg-white rounded-xl shadow-xl md:mb-0 flex flex-col"
                            >
                                <div className="relative flex-1">

                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}

            </div>
        </div>
    );
};

export default CategorySelector;
