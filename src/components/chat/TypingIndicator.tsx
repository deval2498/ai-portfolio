import { motion } from "framer-motion";
import { ChatAvatar } from "./ChatAvatar";
import { typingVariants, bounceVariants } from "@/constants/animation";

export function TypingIndicator() {
  return (
    <motion.div
      className="flex gap-4 justify-start"
      variants={typingVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ChatAvatar sender="ai" />
      <motion.div
        className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-4 py-3"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full"
              variants={bounceVariants}
              animate="bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
