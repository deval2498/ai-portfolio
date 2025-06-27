import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
  isTyping: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

export function ChatInput({
  input,
  setInput,
  handleSend,
  isTyping,
  inputRef,
}: ChatInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex gap-3 justify-center">
      <motion.div
        className="flex-1"
        whileFocus={{ scale: 1.01 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <Input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="w-full backdrop-blur-md bg-white/30 dark:bg-black/20 border border-white/20 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-500 focus:outline-none rounded-2xl transition-colors shadow-md"
          disabled={isTyping}
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
      >
        <Button
          onClick={handleSend}
          disabled={!input.trim() || isTyping}
          className="bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 px-4 rounded-2xl transition-colors disabled:opacity-50"
        >
          <motion.div
            animate={isTyping ? { rotate: 360 } : { rotate: 0 }}
            transition={{
              duration: 1,
              repeat: isTyping ? Infinity : 0,
              ease: "linear",
            }}
          >
            <Send className="w-4 h-4" />
          </motion.div>
        </Button>
      </motion.div>
    </div>
  );
}
