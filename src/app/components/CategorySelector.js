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

// Project card data (hardcoded for simplicity)
const projectData = {
    "UI/UX": [
        {
            id: 1,
            title: "Greventure",
            description: "A map-based social media platform designed to reconnect people with their surroundings. It helps users discover local places and activities, especially those related to urban sustainability. Greventure encourages young people to bring their cities to life digitally while fostering connections with the environment and promoting efforts to care for it",
            video: "/greventure.mp4",
            figma: "https://www.figma.com/proto/ww5UapdbwQnvEVFzYDkgUC/Ada-hackjam-coy?page-id=28%3A277&node-id=88-5212&p=f&viewport=-1517%2C-568%2C0.14&t=cLRxyw3YDLlOFzkW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=88%3A5203&show-proto-sidebar=1",
            tags: ["SDGs 11", "UI/UX"]
        },
        {
            id: 2,
            title: "EcoWardrobe",
            description: "An app for tackling fast fashion waste by enabling users to sell, buy, and donate pre-loved clothes, while promoting sustainable fashion through innovative features like a camera scanning tool to personalize shopping experiences",
            image: "/uiux2.jpg",
            figma: "https://www.figma.com/proto/45cnPOFNzEJimDPg5cOMfY/The-Ace-Undip---Semoga-Ga-NT?page-id=1%3A2&node-id=486-1301&p=f&viewport=321%2C175%2C0.06&t=MmtC3HoBqNWuuBxq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=486%3A1289&show-proto-sidebar=1",
            tags: ["SDGs 12", "UI/UX"]
        },
        {
            id: 3,
            title: "Mentorify",
            description: "Mentorify is a mobile-based application that provides essential information about tutors and additional resources in the education field. With Mentorify, users can find tutors that match their specific needs and learning styles, making the learning process more effective and enjoyable. The app also offers features that make it easier to search for and access details about tutor schedules and experience, helping users select the best match for their educational goals.",
            image: "/uiux2.jpg",
            figma: "https://www.figma.com/proto/ArGcCKH35t6GndJnMZvmrc/kelompok-les-lesgooooooooo?page-id=0%3A1&node-id=21-64&p=f&viewport=20%2C264%2C0.05&t=phPHRzuSl9ksaj7Q-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=21%3A64&show-proto-sidebar=1",
            tags: ["SDGs 4", "UI/UX"]
        },
        {
            id: 4,
            title: "EchoSleep",
            description: "An app designed to enhance your sleep quality by providing real-time sleep monitoring, personalized tips, and insightful statistics. EchoSleep helps track your sleep patterns, identifies disturbances, and offers tailored recommendations for a more restful night. Whether you're dealing with sleep apnea or simply struggling to get better rest, the app connects you with sleep specialists for consultations. With EchoSleep, you can take control of your sleep health, improve your overall well-being, and wake up refreshed every day.",
            image: "/uiux1.jpg", // Image source for the project
            video: "/greventure.mp4", // Image source for the project
            figma: "https://www.figma.com/proto/TXwj2drey3LphUHEepd4L4/EchoSleep?page-id=25%3A3822&node-id=150-11929&p=f&viewport=62%2C-5670%2C0.24&t=PT4MrPsii8SRYYKy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=150%3A11970&show-proto-sidebar=1",
            tags: ["SDGs 3", "UI/UX"]
        },
        {
            id: 5,
            title: "PetCare",
            description: "An app designed to help pet owners, particularly those with dogs and cats, manage the health and well-being of their pets. It provides comprehensive solutions, including information on pet care and online consultations with veterinarians at affordable prices. Users can share experiences and receive support, fostering a community that cares for animal health. With PetCare, pet owners can easily maintain the health of their pets while ensuring their safety, addressing issues such as rabies, infections, parasites, and metabolic disorders.",
            image: "/uiux2.jpg",
            figma: "https://www.figma.com/proto/mpqfDaaHlyY9r00eHOREhO/PetCare?page-id=5%3A92&node-id=174-2311&p=f&viewport=356%2C230%2C0.09&t=dhdw33BseK85QWNN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=174%3A2311&show-proto-sidebar=1",
            tags: ["SDGs 3", "UI/UX"]
        },
    ],
    "Graphic Design": [
        {
            id: 6,
            title: "HOLOGY 7.0",
            description: "Description for Graphic Design project 1.",
            image: "/graphicdesign1.jpg",
            tags: ["Technology", "Poster", "Designs"],
            design: "https://www.instagram.com/hology_ub/",
        },
        {
            id: 7,
            title: "Rantau Ngalam Kuy",
            description: "Description for Graphic Design project 2.",
            image: "/graphicdesign2.jpg",
            tags: ["Campus Expo", "Designs"],
            design: "",
        },
        {
            id: 8,
            title: "Mobile JKN",
            description: "Description for Graphic Design project 2.",
            image: "/graphicdesign2.jpg",
            tags: ["Infographic", "Health", "Designs"],
            design: "",
        },
        {
            id: 9,
            title: "MPLS",
            description: "Description for Graphic Design project 2.",
            image: "/graphicdesign2.jpg",
            tags: ["Poster", "Designs"],
            design: "",
        },
    ],
    "Websites": [
        {
            id: 10,
            title: "Xhiexplore",
            description: "Description for Website project 1.",
            image: "/website1.jpg",
            tags: ["3D Museum", "Bootstrap", "Unity"],
            website: "https://afifalhauzan.github.io/xhiexplore-site/",
        },
        {
            id: 11,
            title: "Past Portofolio",
            description: "Description for Website project 2.",
            image: "/website2.jpg",
            tags: ["Framer", "Website"],
            website: "https://afifalhauzan.framer.website/",
        },
        {
            id: 12,
            title: "PortalMABA",
            description: "Description for Website project 2.",
            image: "/website2.jpg",
            tags: ["Lavavel", "MySQL", "Tailwind"],
            github: "https://github.com/afifalhauzan/pkkmb_admin_pweb",
        },
        {
            id: 13,
            title: "Simple Blog Site",
            description: "Description for Website project 2.",
            image: "/website2.jpg",
            tags: ["Lavavel", "MySQL", "Tailwind"],
            github: "https://github.com/afifalhauzan/Blog-Beginner-group-7",
        },
    ],
    "Videography": [
        {
            id: 14,
            title: "Eftychia",
            description: "Description for Videography project 1.",
            image: "/videography1.jpg",
            tags: ["School", "Aftermovie"],
            videoLink: "https://www.instagram.com/p/C81OsVYsLfu/",
        },
        {
            id: 15,
            title: "HOLOGY 7.0 Trailer",
            description: "Description for Videography project 1.",
            image: "/videography1.jpg",
            tags: ["Technology", "Visual Effects"],
            videoLink: "https://www.instagram.com/reel/C99lsqzyDS-/",
        },
        {
            id: 16,
            title: "Makrab PTI 23",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
            tags: ["Aftermovie"],
            videoLink: "https://www.instagram.com/reel/C58SGYlSDS-/",
        },
        {
            id: 17,
            title: "Schotival",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
            tags: ["Motion Graphics", "Aftermovie"],
            videoLink: "https://www.instagram.com/reel/DECg9FSyb8w/",
        },
        {
            id: 18,
            title: "Pusoko",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
            tags: ["Short Film", "Theatre", "Visual Effects"],
            videoLink: "https://www.instagram.com/p/CSs6HZ_h7Yu/",
        },
        {
            id: 19,
            title: "Synergy of Symphony",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
            tags: ["Aftermovie"],
            videoLink: "https://www.instagram.com/p/DDd9cPLprQi/",
        },
        {
            id: 20,
            title: "Sebelah Mata",
            description: "Description for Videography project 2.",
            image: "/videography2.jpg",
            tags: ["Short Film"],
            videoLink: "https://youtu.be/8ZS_ld4OwLY?si=IIym9qrw3XhNa7pD",
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

    const [activeProjectId, setActiveProjectId] = useState(null); // Tracks which project is active
    const activeProject = projectData[selectedCategory].find((p) => p.id === activeProjectId);

    const handleOpen = (id) => setActiveProjectId(id); // Open sliding tab
    const handleClose = () => setActiveProjectId(null); // Close sliding tab

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
                className={`fixed top-0 right-0 w-full sm:w-2/3 md:w-1/3 h-full bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ${activeProjectId ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {activeProjectId && (
                    <div className="p-10 pt-16 md:pt-12 transition-all duration-300">
                        <div
                            className="flex items-center pb-6 space-x-4 text-md font-medium text-gray-300 hover:text-white transition-all duration-300"
                            onClick={handleClose}
                        >
                            <FaArrowLeftLong />
                            <a>Back to Project</a>
                        </div>
                        <h3 className="text-3xl font-bold mb-3">
                            {activeProject.title}
                        </h3>

                        {activeProjectId && activeProject.tags ? (
                            <div className="flex flex-wrap justify-start gap-2 mb-4">
                                {projectData[selectedCategory].find((p) => p.id === activeProjectId)?.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-2 text-sm font-semibold text-white bg-gray-700 rounded-xl">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        ) : null}

                        <p>
                            {activeProject.description}
                        </p>

                        {activeProjectId && activeProject.figma ? (
                            <a href={activeProject.figma}
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className="flex flex-row justify-center items-center p-2 mt-6 font-bold w-full bg-slate-700 rounded-xl border-2 border-slate-500 hover:bg-bluedefault transition-all duration-200 space-x-4">
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
                                <div className="flex flex-row justify-center items-center p-3 mt-6 font-bold w-full bg-slate-700 rounded-xl border-2 border-slate-500 hover:bg-bluedefault transition-all duration-200 space-x-4">
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
                                <div className="flex flex-row justify-center items-center p-3 mt-6 font-bold w-full bg-slate-700 rounded-xl border-2 border-slate-500 hover:bg-bluedefault transition-all duration-200 space-x-4">
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
                                <div className="flex flex-row justify-center items-center p-3 mt-6 font-bold w-full bg-slate-700 rounded-xl border-2 border-slate-500 hover:bg-bluedefault transition-all duration-200 space-x-4">
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
                                <div className="flex flex-row justify-center items-center p-3 mt-6 font-bold w-full bg-slate-700 rounded-xl border-2 border-slate-500 hover:bg-bluedefault transition-all duration-200 space-x-4">
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
                </motion.div>
            </div>
        </div>
    );
};

export default CategorySelector;
