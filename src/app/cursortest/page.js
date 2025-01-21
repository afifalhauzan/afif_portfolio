"use client";

import { useState } from 'react';
import { useMouseMove, useValue, animate, withEase } from "react-ui-animate";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

const CURSOR_SIZE = 100;
const DELAY_TIME = 300;

export default function Home() {
    const [cursorVisible, setCursorVisible] = useState(false);
    const x = useValue(0);
    const y = useValue(0);

    // Track hovered element's position
    const [hoveredElement, setHoveredElement] = useState(null);

    useMouseMove(({ mouseX, mouseY }) => {
        const scrollY = window.scrollY || 0; // Get the vertical scroll offset

        // Adjust mouse position by subtracting scroll offset
        x.value = withEase(mouseX);
        y.value = withEase(mouseY + scrollY);

        if (!cursorVisible) {
            setTimeout(() => {
                setCursorVisible(true);
            }, DELAY_TIME); // Delay to show the cursor
        }

        // Update hovered element
        if (hoveredElement) {
            const rect = hoveredElement.getBoundingClientRect();
            const hoverX = mouseX - rect.left;
            const hoverY = mouseY - rect.top;

            // Apply dynamic border glow
            hoveredElement.style.setProperty('--hover-x', `${hoverX}px`);
            hoveredElement.style.setProperty('--hover-y', `${hoverY}px`);
        }
    });

    return (
            <div className="relative">
                {/* Custom cursor */}
                {cursorVisible && (
                    <animate.div
                        style={{
                            width: CURSOR_SIZE,
                            height: CURSOR_SIZE,
                            backgroundColor: "white",
                            borderRadius: "50%",
                            translateX: x.value - CURSOR_SIZE / 2,
                            translateY: y.value - CURSOR_SIZE / 2,
                            opacity: "45%",
                        }}
                        className="absolute pointer-events-none z-50 blur-3xl"
                    />
                )}
                {/* Icons with dynamic border */}
                <div
                    className="grid grid-cols-2 md:flex md:space-x-4"
                    onMouseEnter={(e) => setHoveredElement(e.target)}
                    onMouseLeave={() => setHoveredElement(null)}
                >
                    <div
                        className="relative flex w-3/4 flex-col items-center justify-center p-8 md:p-6 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300"
                        style={{
                            border: '8px solid transparent',
                            backgroundClip: 'padding-box',
                            backgroundImage: `radial-gradient(circle at var(--hover-x, 50%) var(--hover-y, 50%), rgba(255, 255, 255, 0.5), transparent)`,
                        }}
                    >
                        <FaReact className="text-6xl md:text-5xl text-center text-blue-400" />
                        <h2 className="text-lg md:text-md font-bold text-white">React</h2>
                    </div>
                    {/* Repeat other items */}
                </div>
            </div>
    );
}
