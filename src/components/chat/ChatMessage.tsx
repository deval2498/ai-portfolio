import { motion } from "framer-motion";
import { ChatAvatar } from "./ChatAvatar";
import { Message } from "@/types/chat";
import { messageVariants, userMessageVariants } from "@/constants/animation";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user";

  return (
    <motion.div
      variants={messageVariants} // keeps fade / slide on list insert
      initial="hidden"
      animate="visible"
      exit="exit"
      layout="position" // stays smooth on scroll
      className={`flex gap-4 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser && <ChatAvatar sender="ai" />}

      <motion.div
        /* 👇 apply special pop-up only to the user bubble */
        variants={isUser ? userMessageVariants : undefined}
        initial={isUser ? "hidden" : false}
        animate={isUser ? "visible" : false}
        className={`max-w-[75%] rounded-2xl px-4 py-3 transition-colors ${
          isUser
            ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
            : "bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-100 dark:border-slate-700"
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>
      </motion.div>

      {isUser && <ChatAvatar sender="user" />}
    </motion.div>
  );
}
