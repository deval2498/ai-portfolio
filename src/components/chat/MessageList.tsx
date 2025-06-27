import { AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { Message } from "@/types/chat";

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
  hasStartedChat: boolean;
  scrollRef: React.RefObject<HTMLDivElement>;
}

export function MessageList({
  messages,
  isTyping,
  hasStartedChat,
  scrollRef,
}: MessageListProps) {
  return (
    <ScrollArea className={`flex-1 ${hasStartedChat ? "p-4 sm:p-6" : "p-6"}`}>
      <div className={`space-y-6 ${hasStartedChat ? "max-w-6xl mx-auto" : ""}`}>
        <AnimatePresence mode="popLayout">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </AnimatePresence>

        <AnimatePresence>{isTyping && <TypingIndicator />}</AnimatePresence>

        <div ref={scrollRef} />
      </div>
    </ScrollArea>
  );
}
