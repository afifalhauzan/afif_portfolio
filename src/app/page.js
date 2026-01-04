"use client";

import { useEffect, useMemo, useState } from "react";
import { useMouseMove, useValue, animate, withEase } from "react-ui-animate";
import { motion } from "framer-motion";
import Socials from '@/app/components/Socials';
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import useClientSideLocalStorage from "./useClientSideLocalStorage";

import Navbar from '@/app/components/Navbar';
import SwipeTransition from './swipeTransition';

const CURSOR_SIZE = 100;
const DELAY_TIME = 300;

const fadeInUp = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 } },
};

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false); // Track the overlay state
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to dark mode
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);


  if (typeof window !== 'undefined' && window.localStorage) {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === null) {
      // Default to dark mode if no preference exists
      localStorage.setItem("darkMode", "true");
      document.documentElement.classList.add("dark");
    } else {
      const isDark = savedMode === "true";
      document.documentElement.classList.toggle("dark", isDark);
    }
  }

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
    <div className="relative min-h-screen">
      {/* SwipeTransition and other content */}
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
              }}s
              className="absolute pointer-events-none z-50 blur-3xl"
            />
          )}
          {/* <div className="top-0 z-50 bg-blue-800 overflow-hidden h-10">
            <div className="whitespace-nowrap animate-marquee text-blue-200 text-sm py-2 px-4">
              <strong>Happy Eid al-Fitr 1446 H! </strong>Wishing you joy, blessings, and peace always. Please forgive my mistakes🌙✨🙏
            </div>
          </div> */}

          <div className="min-h-screen flex flex-col font-jakarta bg-backgroundlight dark:bg-bluedefault items-center justify-normal overflow-auto px-6 md:px-10 space-y-14 pt-8 transition-all duration-500 ease-in-out">
            <Navbar />
            <div className="w-full max-w-4xl mx-auto px-2 md:px-4 m-2">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className=""
              >
                <div className="flex items-center space-x-4 ">
                  <h1 className="text-5xl xl:text-6xl font-bold text-left text-blue-900 dark:text-white">
                    I'm
                  </h1>
                  <h1 className="text-5xl xl:text-6xl font-bold text-left w-full text-gray-600 bg-gradient-to-r from-cyan-700 via-blue-600 to-green-600 dark:from-gray-50 dark:via-blue-300 dark:to-yellow-200 text-transparent bg-clip-text bg-300% animate-gradient transition-all duration-800">
                    Afiif,
                  </h1>
                </div>

                <p className="text-lg mt-4 text-left w-full md:text-xl text-slate-700 dark:text-bluetextdefault">
                 A <strong className="font-bold">front-end developer</strong> <RiGlobalLine className="inline mx-[5px] ml-[2px] mb-[3px]" />
                 and <strong className="font-bold">UI/UX Designer</strong> <FaPenNib className="inline mx-[5px] ml-1 mb-[3px]" />
                 who bridges the gap between design and code.
                </p>
              </motion.div>

              {/* Add delay to make these elements appear after the previous ones */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="mt-8 flex flex-col gap-2 items-start w-full"
              >
                <p className="text-base md:text-lg text-justify w-full text-slate-600 dark:text-bluetextdefault">
                  With a background in IT Education, I build functional, user-centric interfaces that prioritize clarity and usability. Experienced in building and deploying responsive web products, I work across the stack using <strong className="font-bold">Next.js, React, and Laravel</strong> to create functional digital experiences
                  <BsStars className="inline ml-[6px] mb-[3px]" />
                </p>

              </motion.div>

              {/* Add another delay to the button */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="mt-8 space-y-[10px] md:space-y-0 md:space-x-0 flex flex-row justify-between md:items-center"
              >
                <motion.a
                  href="https://drive.google.com/file/d/1fv24-kh7zmmF1YjMEnpwp8bEicG9tqCv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="order-1 md:order-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="mx-auto flex md:items-center md:justify-center">
                    <div className="relative z-10 flex cursor-pointer items-center overflow-hidden rounded-xl border-slate-300 dark:border-slate-800 p-[1.5px]">
                      <div className="absolute inset-0 h-full w-full animate-rotate rounded-full bg-[conic-gradient(#0e6cc5_20deg,transparent_120deg)] dark:bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)] blur-sm"></div>
                      <div className="relative z-20 flex w-full rounded-[0.60rem] bg-slate-200 dark:bg-slate-800 transition-color duration-500 p-2">
                        <span className="relative z-50 font-bold px-2 md:px-8 block rounded-lg text-center text-md md:text-lg text-slate-600 dark:text-slate-300 after:bg-slate-900"> My Resume </span>
                      </div>
                    </div>
                  </div>
                </motion.a>

                <Link href="/about" className="flex justify-center items-start order-2 mr-3 md:order-1 gap-1 space-x-2 text-blue-500 text-md md:text-lg font-bold">
                  <span>More about me</span>
                  <motion.span
                    className="text-xl"
                    animate={{
                      x: [0, 8, 0], // Moves the arrow from 0px to 10px to 0px
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity, // Loops infinitely
                      repeatDelay: 0.2, // Adds a small delay before the animation repeats
                    }}
                  >
                    <FaArrowRightLong className="mt-[4px] md:mt-[5px]" />
                  </motion.span>
                </Link>
              </motion.div>


              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <Socials />
              </motion.div>
            </div>
          </div>
        </div>
      </SwipeTransition>
    </div>
  );
}
