// app/rotate/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RotatePage() {
  const [rotation, setRotation] = useState(0);

  const rotateLeft = () => {
    setRotation((prev) => prev + 90);
  };

  const rotateRight = () => {
    setRotation((prev) => prev - 90);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex items-center gap-8">
        <button
          onClick={rotateLeft}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Left
        </button>

        <motion.div
          className="w-[1000px] h-[1000px] absolute bottom-[400px] left-0 flex justify-center"
          animate={{ rotate: rotation }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Image
            src="/card.png"
            alt="Card"
            fill
            className=""
            priority
          />
        </motion.div>

        <button
          onClick={rotateRight}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Right
        </button>
      </div>
    </div>
  );
}
