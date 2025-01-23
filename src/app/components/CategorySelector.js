import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import { Transition } from "react-transition-group";
import ReactDOM from "react-dom";

// Project card data (hardcoded for simplicity)
const projectData = {
    "UI/UX": [
        {
            id: 1,
            title: "Greventure",
            description: "Description for UI/UX project 1.",
            video: "/greventure.mp4", // Image source for the project
            story: true
        },
        {
            id: 2,
            title: "EcoWardrobe",
            description: "Description for UI/UX project 2.",
            image: "/uiux2.jpg",
            figma: "",
            tags: "",
        },
        {
            id: 3,
            title: "Mentorify",
            description: "Description for UI/UX project 2.",
            image: "/uiux2.jpg",
            figma: "",
            tags: "",
        },
        {
            id: 4,
            title: "EchoSleep",
            description: "Description for UI/UX project 1.",
            image: "/uiux1.jpg", // Image source for the project
            video: "/greventure.mp4", // Image source for the project
        },
        {
            id: 5,
            title: "PetCare",
            description: "Description for UI/UX project 2.",
            image: "/uiux2.jpg",
            story: true
        },
    ],
    "Graphic Design": [
        {
            id: 6,
            title: "HOLOGY 7.0 Poster",
            description: "Description for Graphic Design project 1.",
            image: "/graphicdesign1.jpg",
        },
        {
            id: 7,
            title: "Rantau Ngalam Kuy",
            description: "Description for Graphic Design project 2.",
            image: "/graphicdesign2.jpg",
        },
        {
            id: 8,
            title: "Infographic",
            description: "Description for Graphic Design project 2.",
            image: "/graphicdesign2.jpg",
        },
        {
            id: 9,
            title: "MPLS",
            description: "Description for Graphic Design project 2.",
            image: "/graphicdesign2.jpg",
        },
    ],
    "Websites": [
        {
            id: 10,
            title: "Xhiexplore",
            description: "Description for Website project 1.",
            image: "/website1.jpg",
        },
        {
            id: 11,
            title: "Past Portofolio",
            description: "Description for Website project 2.",
            image: "/website2.jpg",
        },
        {
            id: 12,
            title: "PortalMABA",
            description: "Description for Website project 2.",
            image: "/website2.jpg",
        },
    ],
    "Videography": [
        {
            id: 13,
            title: "Eftychia",
            description: "Description for Videography project 1.",
            image: "/videography1.jpg",
        },
        {
            id: 14,
            title: "HOLOGY 7.0 Trailer",
            description: "Description for Videography project 1.",
            image: "/videography1.jpg",
        },
        {
            id: 15,
            title: "Makrab PTI 23",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
        },
        {
            id: 16,
            title: "Schotival",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
        },
        {
            id: 17,
            title: "Pusoko",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
        },
        {
            id: 18,
            title: "Synergy of Symphony",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
        },
        {
            id: 19,
            title: "Sebelah Mata",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
        },
    ],
};

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
    const nodeRef = useRef([]); // Create a unique ref for each project

    const duration = 400; // Animation duration in ms

    const defaultStyle = {
        transition: `transform ${duration}ms ease-in-out`,
        transform: "translateX(100%)",
    };

    const transitionStyles = {
        entering: { transform: "translateX(0)" },
        entered: { transform: "translateX(0)" },
        exiting: { transform: "translateX(100%)" },
        exited: { transform: "translateX(100%)" },
    };

    const handleOpen = (id) => setMoreOpenId(id);
    const handleClose = () => setMoreOpenId(null);

    // Function to handle category selection
    const handleCategoryClick = (category, index) => {
        setSelectedCategory(category);

        const currentTab = tabsRef.current[index];
        setUnderlineLeft(currentTab?.offsetLeft ?? 0);
        setUnderlineWidth(currentTab?.clientWidth ?? 0);
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
                                onClick={() => handleCategoryClick(category, index)}
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

            {/* Content area displaying the project cards */}
            <div className="mt-4">
                <motion.div
                    key={selectedCategory} // Triggers reanimation when category changes
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }} // Initial state: hidden and slightly down
                    animate={{ opacity: 1, y: 0, scale: 1 }} // Final state: fully visible and in normal position
                    exit={{ opacity: 0, y: -50 }} // Exit state: hidden and slightly up
                    transition={transition}
                >
                    {projectData[selectedCategory].map((project) => (
                        <div
                            key={project.id}
                            className="w-full h-full bg-white rounded-xl shadow-xl md:mb-0"
                        >
                            <div className="relative">
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
                                        src={project.image} // Dynamic image source based on project
                                        width={300}
                                        height={250}
                                        alt={project.title} // Alt text from project title
                                        className="rounded-xl"
                                    />
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-700 to-50% rounded-xl flex flex-col justify-end p-4">
                                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                    <p className="text-md text-gray-300 mb-2">{project.description}</p>
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

                            <Transition in={moreOpenId === project.id} timeout={duration} key={project.id} nodeRef={nodeRef}>
                                {(state) => (
                                    <>
                                        {moreOpenId === project.id && (
                                            <div
                                                className="fixed inset-0 bg-black/10 z-30"
                                                onClick={handleClose} // Close when clicking outside
                                            ></div>
                                        )}
                                        <div
                                            ref={nodeRef} // Attach the nodeRef here
                                            className="fixed top-0 right-0 h-full bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col items-start w-full sm:w-1/2 md:w-1/3 z-40"
                                            style={{
                                                ...defaultStyle,
                                                ...transitionStyles[state], // Apply dynamic styles based on animation state
                                            }}
                                        >
                                            <h3 className="text-2xl font-bold mb-4">More About {project.title}</h3>
                                            <p>{project.description}</p>
                                            <button
                                                className="mt-4 text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
                                                onClick={handleClose}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </>
                                )}
                            </Transition>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default CategorySelector;
