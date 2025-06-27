// components/sections/Features.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageSquare, Shield, Zap, Code, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Intelligence",
    description:
      "Powered by state-of-the-art language models for natural, intelligent conversations.",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description:
      "Chat naturally with context-aware responses that understand your needs.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant responses with our optimized AI infrastructure.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your conversations are secure and private with end-to-end encryption.",
  },
  {
    icon: Code,
    title: "Code Assistant",
    description:
      "Get help with programming, debugging, and technical problem-solving.",
  },
  {
    icon: Globe,
    title: "Multilingual",
    description:
      "Communicate in multiple languages with accurate translations.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose Our AI Assistant?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover the powerful features that make our AI assistant the
            perfect companion for your daily tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 group"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
