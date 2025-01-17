"use client";

import { useState, useEffect } from "react";
import { useMouseMove, useValue, animate, withEase } from "react-ui-animate";
import { motion } from "framer-motion";
import Socials from '@/app/components/Socials';
import Link from "next/link";

import Navbar from '@/app/components/Navbar';
import SwipeTransition from './swipeTransition';

const CURSOR_SIZE = 100;
const DELAY_TIME = 300;

const fadeInUp = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 } },
};

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);

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
        <div className="min-h-screen flex flex-col font-jakarta bg-backgroundlight dark:bg-bluedefault items-center justify-normal overflow-auto px-8 md:px-10 space-y-14 pt-8 transition-all duration-500 ease-in-out">
          <Navbar />
          <div className="w-full max-w-4xl mx-auto px-4 m-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className=""
            >
              <div className="flex items-center space-x-4">
                <h1 className="text-5xl xl:text-6xl font-bold text-left text-blue-900 dark:text-white">
                  I'm
                </h1>
                <h1 className="text-5xl xl:text-6xl font-bold text-left w-full text-gray-600 bg-gradient-to-r from-cyan-700 via-blue-600 to-green-600 dark:from-gray-50 dark:via-blue-300 dark:to-yellow-200 text-transparent bg-clip-text bg-300% animate-gradient transition-all duration-800">
                  Afiif,
                </h1>
              </div>

              <p className="text-lg mt-4 text-left w-full md:text-xl text-bluetextdefault">
                IT Education Student at Brawijaya University
              </p>
            </motion.div>

            {/* Add delay to make these elements appear after the previous ones */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mt-8 flex flex-col gap-2 items-start w-full"
            >
              <p className="text-base md:text-lg text-left w-full text-bluetextdefault">
                Passionate about <strong className="font-bold">graphic design, videography, and creating visually engaging user experiences</strong>. By blending technical IT expertise with creativity, I craft impactful and meaningful designs.
              </p>
              <p className="text-base md:text-lg text-left w-full text-bluetextdefault">
                Currently, I'm sharpening my skills in <strong className="font-bold">UI/UX design </strong> and exploring <strong className="font-bold">front-end development</strong> to bring ideas to life.
              </p>
            </motion.div>

            {/* Add another delay to the button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mt-8 flex items-center"
            >
              <Link href="/about" className="flex items-center gap-2 space-x-2 text-blue-500 text-lg font-medium">
                <span>More about me</span>
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
                  →
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
  );
}
