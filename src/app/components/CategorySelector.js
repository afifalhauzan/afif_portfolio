import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Project card data (hardcoded for simplicity)
const projectData = {
    "UI/UX": [
        {
            id: 1,
            title: "Greventure",
            description: "Description for UI/UX project 1.",
            video: "/greventure.mp4", // Image source for the project
        },
        {
            id: 2,
            title: "Mentorify",
            description: "Description for UI/UX project 2.",
            image: "/uiux2.jpg",
        },
        {
            id: 3,
            title: "EchoSleep",
            description: "Description for UI/UX project 1.",
            image: "/uiux1.jpg", // Image source for the project
            video: "/greventure.mp4", // Image source for the project
        },
        {
            id: 4,
            title: "PetCare",
            description: "Description for UI/UX project 2.",
            image: "/uiux2.jpg",
        },
    ],
    "Graphic Design": [
        {
            id: 5,
            title: "HOLOGY 7.0 Poster",
            description: "Description for Graphic Design project 1.",
            image: "/graphicdesign1.jpg",
        },
        {
            id: 6,
            title: "MPLS",
            description: "Description for Graphic Design project 2.",
            image: "/graphicdesign2.jpg",
        },
        {
            id: 6,
            title: "Rantau Ngalam Kuy",
            description: "Description for Graphic Design project 2.",
            image: "/graphicdesign2.jpg",
        },
        {
            id: 6,
            title: "Rantau Ngalam Kuy",
            description: "Description for Graphic Design project 2.",
            image: "/graphicdesign2.jpg",
        },
    ],
    "Websites": [
        {
            id: 7,
            title: "Xhiexplore",
            description: "Description for Website project 1.",
            image: "/website1.jpg",
        },
        {
            id: 8,
            title: "Past Portofolio",
            description: "Description for Website project 2.",
            image: "/website2.jpg",
        },
        {
            id: 9,
            title: "PortalMABA",
            description: "Description for Website project 2.",
            image: "/website2.jpg",
        },
    ],
    "Videography": [
        {
            id: 10,
            title: "Eftychia",
            description: "Description for Videography project 1.",
            image: "/videography1.jpg",
        },
        {
            id: 10,
            title: "HOLOGY 7.0 Trailer",
            description: "Description for Videography project 1.",
            image: "/videography1.jpg",
        },
        {
            id: 11,
            title: "Makrab PTI 23",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
        },
        {
            id: 11,
            title: "Schotival",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
        },
        {
            id: 11,
            title: "Pusoko",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
        },
        {
            id: 11,
            title: "Synergy of Symphony",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
        },
        {
            id: 11,
            title: "Sebelah Mata",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
        },
    ],
};

const transition = {
    duration: 0.6,
    ease: [0, 0.2, 0.5, 1.01],
}

const CategorySelector = () => {
    const [selectedCategory, setSelectedCategory] = useState("UI/UX");

    // Function to handle category selection
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="flex flex-col justify-center md:items-center mt-4 overflow-x-auto overflow-y-hidden">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 mt-6 p-2 rounded-2xl md:rounded-3xl overflow-x-auto">
                <ul className="flex whitespace-nowrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {["UI/UX", "Graphic Design", "Websites", "Videography"].map((category) => (
                        <li className="me-2" key={category}>
                            <button
                                className={`inline-block px-4 py-3 rounded-full transition-all duration-300 ${selectedCategory === category
                                    ? "text-white bg-blue-600"
                                    : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                                    }`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
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
                            className="w-full bg-white rounded-xl shadow-xl mb-4 md:mb-8"
                        >
                            <div className="relative">
                                {project.video ? (
                                    <video
                                        width="350"
                                        height="350"
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
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-600 to-50% rounded-xl flex flex-col justify-end p-4">
                                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                    <p className="text-md text-gray-300">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default CategorySelector;
