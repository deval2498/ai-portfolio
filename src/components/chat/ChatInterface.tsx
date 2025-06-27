// components/chat/ChatInterface.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const suggestions = ["Projects", "Skills", "Contact", "Me"];

// Animation variants
const messageVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const suggestionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  }),
};

const typingVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

const bounceVariants = {
  bounce: {
    y: [-2, -6, -2],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function ChatInterface() {
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

  const handleSend = async (content: string = input) => {
    if (!content.trim()) return;

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.section
      className="flex flex-col h-full px-4 sm:px-6 lg:px-8 pb-6 pt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col h-full">
        {/* Chat Interface */}
        <motion.div
          className="flex-1 flex flex-col min-h-0"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/20 dark:border-gray-600 shadow-lg rounded-2xl flex-1 flex flex-col transition-colors duration-300">
            <CardContent className="p-0 flex-1 flex flex-col min-h-0">
              {/* Messages */}
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-6">
                  <AnimatePresence mode="popLayout">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        variants={messageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layout
                        className={`flex gap-4 ${
                          message.sender === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        {message.sender === "ai" && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          >
                            <Avatar className="w-8 h-8 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                              <AvatarFallback className="bg-slate-100 dark:bg-slate-800">
                                <Bot className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                              </AvatarFallback>
                            </Avatar>
                          </motion.div>
                        )}

                        <motion.div
                          className={`max-w-[75%] rounded-2xl px-4 py-3 transition-colors ${
                            message.sender === "user"
                              ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                              : "bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-100 dark:border-slate-700"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </p>
                        </motion.div>

                        {message.sender === "user" && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          >
                            <Avatar className="w-8 h-8 bg-slate-900 dark:bg-slate-100">
                              <AvatarFallback className="bg-slate-900 dark:bg-slate-100">
                                <User className="w-4 h-4 text-white dark:text-slate-900" />
                              </AvatarFallback>
                            </Avatar>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing indicator */}
                  <AnimatePresence>
                    {isTyping && (
                      <motion.div
                        className="flex gap-4 justify-start"
                        variants={typingVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        >
                          <Avatar className="w-8 h-8 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <AvatarFallback className="bg-slate-100 dark:bg-slate-800">
                              <Bot className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                            </AvatarFallback>
                          </Avatar>
                        </motion.div>
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
                    )}
                  </AnimatePresence>

                  <div ref={scrollRef} />
                </div>
              </ScrollArea>

              {/* Input */}
              <motion.div
                className="border-t border-slate-100 dark:border-slate-700 p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex gap-3">
                  <motion.div
                    className="flex-1"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-slate-400 dark:focus:border-slate-500 focus:ring-slate-400 dark:focus:ring-slate-500 rounded-xl transition-colors"
                      disabled={isTyping}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Button
                      onClick={() => handleSend()}
                      disabled={!input.trim() || isTyping}
                      className="bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 px-4 rounded-xl transition-colors disabled:opacity-50"
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
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Suggestions - Only show initially */}
        <AnimatePresence>
          {showSuggestions && (
            <motion.div
              className="mt-6"
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
              <div className="flex gap-3 justify-center">
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
                      onClick={() => handleSend(suggestion)}
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
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
