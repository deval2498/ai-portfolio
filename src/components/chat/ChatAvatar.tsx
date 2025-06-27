import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

interface ChatAvatarProps {
  sender: "user" | "ai";
}

export function ChatAvatar({ sender }: ChatAvatarProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    >
      <Avatar
        className={`w-8 h-8 ${
          sender === "ai"
            ? "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            : "bg-slate-900 dark:bg-slate-100"
        }`}
      >
        <AvatarFallback
          className={
            sender === "ai"
              ? "bg-slate-100 dark:bg-slate-800"
              : "bg-slate-900 dark:bg-slate-100"
          }
        >
          {sender === "ai" ? (
            <Bot className="w-4 h-4 text-slate-600 dark:text-slate-300" />
          ) : (
            <User className="w-4 h-4 text-white dark:text-slate-900" />
          )}
        </AvatarFallback>
      </Avatar>
    </motion.div>
  );
}
