import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function SwipeTransition({ children }) {
  const pathname = usePathname()
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [isSwipeVisible, setIsSwipeVisible] = useState(true);

  useEffect(() => {
    // Show transition only if going to the Projects page
    if ((pathname == '/projects/1') || (pathname == '/')) {
      setIsSwipeVisible(false)
    } else {
      setIsSwipeVisible(true)
    }
  }, [pathname])

  useEffect(() => {
    const animationDuration = 1600; // Duration in milliseconds (same as transition)
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === null) {
      // Default to dark mode if no preference exists
      localStorage.setItem("darkMode", "true");
      document.documentElement.classList.add("dark");
    } else {
      const isDark = savedMode === "true";
      document.documentElement.classList.toggle("dark", isDark);
    }

    // Disable scrolling when the animation is active
    document.body.style.overflow = "hidden";

    // Set a timeout to remove the swipe element after the animation finishes
    const timeout = setTimeout(() => {
      setIsSwipeVisible(false);
      document.body.style.overflow = "auto"; // Re-enable scrolling after the animation finishes
    }, animationDuration);

    return () => {
      clearTimeout(timeout); // Cleanup timeout on component unmount
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled on cleanup
    };
  }, []); // Run only once after the initial render

  return (
    <div className="relative h-screen bg-gray-50 dark:bg-bluedefault">
      {/* Swipe Animation */}
      {isSwipeVisible && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-bluetextdefault z-50"
          initial={{ y: "-100%" }} // Start above the viewport
          animate={{ y: "100%" }} // Swipe down past the viewport
          exit={{ y: "100%" }} // Exits off-screen at the bottom
          transition={{ duration: 0.8, type: "spring", damping: 30 }} // Smooth timing and easing
        />
      )}

      {/* Main Content */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }} // Start hidden
        animate={{ opacity: 1 }} // Fade in after swipe completes
        transition={{ delay: 0.5, duration: 0.5 }} // Delay to sync with swipe animation
      >
        {children}
      </motion.div>
    </div>
  );
}
