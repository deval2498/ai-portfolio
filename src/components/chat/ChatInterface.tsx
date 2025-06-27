"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChatInput } from "./ChatInput";
import { ChatSuggestions } from "./ChatSuggestions";
import { MessageList } from "./MessageList";
import { ChatInterfaceProps, Message } from "@/types/chat";

const suggestions = ["Projects", "Skills", "Contact", "Me"];

export function ChatInterface({
  hasStartedChat,
  setHasStartedChat,
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const generateAIResponse = (userInput: string): string => {
    const responses = [
      "That's an interesting question! Let me help you with that. Based on what you've asked, I can provide some insights and suggestions.",
      "I understand what you're looking for. Here's my perspective on this topic, along with some practical recommendations.",
      "Great question! This is something I can definitely help with. Let me break this down for you in a clear and helpful way.",
      "I'm excited to help you with this! Based on the information you've provided, here are some thoughts and suggestions.",
      "Thank you for that question. I can offer some valuable insights and practical advice on this topic.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = async (content: string = input) => {
    if (!content.trim()) return;
    if (!hasStartedChat) setHasStartedChat(true);

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(content),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <motion.section
      className={`flex flex-col h-full transition-all duration-500 ${
        hasStartedChat ? "px-0" : "px-4 sm:px-6 lg:px-8"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div
        className={`flex flex-col h-full ${
          hasStartedChat ? "max-w-none" : "max-w-6xl mx-auto"
        }`}
      >
        <motion.div
          className="flex-1 flex flex-col min-h-0"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="bg-transparent border-0 shadow-none rounded-2xl flex-1 flex flex-col transition-colors duration-300">
            <CardContent className="p-0 flex-1 flex flex-col min-h-0">
              <MessageList
                messages={messages}
                isTyping={isTyping}
                hasStartedChat={hasStartedChat}
                scrollRef={scrollRef}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Input and Suggestions Container - Sticky when chat started */}
        <motion.div
          className={`${
            hasStartedChat
              ? "fixed bottom-0 left-0 right-0 backdrop-blur-lg border-t border-slate-100 dark:border-slate-700"
              : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Input */}
          <div
            className={`${
              hasStartedChat
                ? "px-4 sm:px-6 py-4"
                : "border-t border-slate-100 dark:border-slate-700 p-4 sm:p-6"
            }`}
          >
            <div className={`max-w-xl mx-auto w-full`}>
              <ChatInput
                input={input}
                setInput={setInput}
                handleSend={() => handleSend()}
                isTyping={isTyping}
                inputRef={inputRef}
              />
            </div>
          </div>

          {/* Suggestions */}
          <AnimatePresence>
            {showSuggestions && (
              <ChatSuggestions
                suggestions={suggestions}
                onSuggestionClick={handleSend}
                hasStartedChat={hasStartedChat}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Spacer for fixed input when chat has started */}
        {hasStartedChat && (
          <div style={{ height: showSuggestions ? "180px" : "88px" }} />
        )}
      </div>
    </motion.section>
  );
}
