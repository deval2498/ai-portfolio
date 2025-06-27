import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { suggestionVariants } from "@/constants/animation";

interface ChatSuggestionsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
  hasStartedChat: boolean;
}

export function ChatSuggestions({
  suggestions,
  onSuggestionClick,
  hasStartedChat,
}: ChatSuggestionsProps) {
  return (
    <motion.div
      className={`${hasStartedChat ? "px-4 pb-4" : "mt-6"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <motion.p
        className="text-sm text-slate-500 dark:text-slate-400 mb-3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Try asking:
      </motion.p>
      <div className="flex gap-3 justify-center flex-wrap">
        {suggestions.map((suggestion, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={suggestionVariants}
            initial="hidden"
            animate="visible"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => onSuggestionClick(suggestion)}
              className="backdrop-blur-md bg-white/30 dark:bg-black/20 border border-white/20 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-white/40 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors text-left justify-start h-auto py-3 px-4 text-sm font-normal rounded-xl shadow-md"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >
              {suggestion}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
