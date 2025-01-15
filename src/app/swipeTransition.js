import { motion } from "framer-motion";

export default function SwipeTransition({ children }) {
  return (
    <div className="relative h-screen overflow-hidden bg-bluedefault">
      {/* Swipe Animation */}
      {(
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-bluetextdefault z-50"
          initial={{ y: "-100%" }} // Start above the viewport
          animate={{ y: "100%" }} // Swipe down past the viewport
          exit={{ y: "100%" }} // Exits off-screen at the bottom
          transition={{ duration: 0.8, type: 'spring', damping: 30 }} // Smooth timing and easing
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
