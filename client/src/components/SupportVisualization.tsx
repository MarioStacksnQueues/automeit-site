"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Brain, 
  GitBranch, 
  CheckCircle2,
  ArrowRight,
  Search,
  UserCheck,
  Clock
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    label: "Ticket Arrives",
    description: "Email, chat, or form",
    color: "#06b6d4", // cyan
  },
  {
    icon: Search,
    label: "AI Analyzes",
    description: "Matches to knowledge base",
    color: "#8b5cf6", // purple
  },
  {
    icon: GitBranch,
    label: "Route or Resolve",
    description: "Auto-reply or escalate",
    color: "#f59e0b", // amber
  },
  {
    icon: CheckCircle2,
    label: "Resolved + Logged",
    description: "Response sent, audit trail saved",
    color: "#10b981", // green
  },
];

const chatMessages = [
  {
    type: "customer",
    message: "How do I reset my password?",
    time: "2:34 PM"
  },
  {
    type: "ai",
    message: "I can help with that! Click Settings → Security → Reset Password. You'll receive an email within 60 seconds.",
    time: "2:34 PM",
    tag: "Auto-resolved"
  },
  {
    type: "customer", 
    message: "Thanks! Also, I'm having a billing issue with my invoice.",
    time: "2:35 PM"
  },
  {
    type: "ai",
    message: "I've flagged this for our billing team. Sarah will follow up within 2 hours. Ticket #4821 created.",
    time: "2:35 PM",
    tag: "Escalated"
  },
];

export default function SupportVisualization() {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (steps.length + 1));
    }, 2000);

    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setVisibleMessages((prev) => (prev + 1) % (chatMessages.length + 2));
    }, 2500);

    return () => clearInterval(msgInterval);
  }, []);

  return (
    <div className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              {/* Step Node */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0.4 }}
                animate={{
                  opacity: activeStep >= index ? 1 : 0.4,
                  scale: activeStep === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Icon Circle */}
                <motion.div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
                  style={{
                    backgroundColor: `${step.color}15`,
                    border: `2px solid ${activeStep >= index ? step.color : 'rgba(255,255,255,0.1)'}`,
                  }}
                  animate={{
                    boxShadow: activeStep === index 
                      ? `0 0 30px ${step.color}40, 0 0 60px ${step.color}20`
                      : 'none',
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon 
                    className="w-7 h-7" 
                    style={{ 
                      color: activeStep >= index ? step.color : 'rgba(255,255,255,0.3)' 
                    }} 
                  />
                  
                  {/* Pulse Ring */}
                  {activeStep === index && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{ border: `2px solid ${step.color}` }}
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Label */}
                <motion.span
                  className="text-sm font-semibold text-white mb-1 whitespace-nowrap"
                  animate={{
                    color: activeStep >= index ? '#ffffff' : 'rgba(255,255,255,0.4)',
                  }}
                >
                  {step.label}
                </motion.span>
                
                {/* Description */}
                <motion.span
                  className="text-xs text-gray-500 text-center whitespace-nowrap"
                  animate={{
                    color: activeStep >= index ? 'rgba(156,163,175,1)' : 'rgba(156,163,175,0.4)',
                  }}
                >
                  {step.description}
                </motion.span>
              </motion.div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="flex items-center mx-4 mb-8">
                  <motion.div
                    className="w-12 h-0.5 rounded-full"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: steps[index].color }}
                      initial={{ width: '0%' }}
                      animate={{
                        width: activeStep > index ? '100%' : '0%',
                      }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </motion.div>
                  <motion.div
                    animate={{
                      opacity: activeStep > index ? 1 : 0.3,
                      x: activeStep > index ? [0, 4, 0] : 0,
                    }}
                    transition={{ 
                      x: { duration: 0.8, repeat: activeStep === index + 1 ? Infinity : 0 }
                    }}
                  >
                    <ArrowRight 
                      className="w-4 h-4 ml-1" 
                      style={{ 
                        color: activeStep > index ? steps[index + 1].color : 'rgba(255,255,255,0.2)' 
                      }} 
                    />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile View - Vertical */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              initial={{ opacity: 0.4, x: -10 }}
              animate={{
                opacity: activeStep >= index ? 1 : 0.4,
                x: 0,
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${step.color}15`,
                  border: `2px solid ${activeStep >= index ? step.color : 'rgba(255,255,255,0.1)'}`,
                }}
                animate={{
                  boxShadow: activeStep === index 
                    ? `0 0 20px ${step.color}40`
                    : 'none',
                }}
              >
                <step.icon 
                  className="w-5 h-5" 
                  style={{ 
                    color: activeStep >= index ? step.color : 'rgba(255,255,255,0.3)' 
                  }} 
                />
              </motion.div>

              {/* Text */}
              <div className="flex-1">
                <motion.p
                  className="text-sm font-semibold"
                  animate={{
                    color: activeStep >= index ? '#ffffff' : 'rgba(255,255,255,0.4)',
                  }}
                >
                  {step.label}
                </motion.p>
                <motion.p
                  className="text-xs"
                  animate={{
                    color: activeStep >= index ? 'rgba(156,163,175,1)' : 'rgba(156,163,175,0.4)',
                  }}
                >
                  {step.description}
                </motion.p>
              </div>

              {/* Status Indicator */}
              <motion.div
                animate={{
                  scale: activeStep === index ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: activeStep === index ? Infinity : 0 }}
              >
                {activeStep > index ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : activeStep === index ? (
                  <div 
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: step.color }}
                  />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-gray-700" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Live Chat Simulation */}
        <motion.div
          className="mt-10 mx-auto max-w-md bg-gray-900/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Chat Header */}
          <div className="bg-gray-800/50 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-400 font-medium">Live Support Chat</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>Avg. response: 8s</span>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="p-4 space-y-3 min-h-[180px]">
            {chatMessages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: visibleMessages > index ? 1 : 0,
                  y: visibleMessages > index ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.type === 'customer' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] ${msg.type === 'customer' ? 'order-1' : ''}`}>
                  <div 
                    className={`px-3 py-2 rounded-2xl text-sm ${
                      msg.type === 'customer' 
                        ? 'bg-cyan-600 text-white rounded-br-md' 
                        : 'bg-gray-700 text-gray-200 rounded-bl-md'
                    }`}
                  >
                    {msg.type === 'ai' && (
                      <span className="text-cyan-400 text-xs font-medium block mb-1">🤖 AI Support</span>
                    )}
                    {msg.message}
                  </div>
                  <div className={`flex items-center gap-2 mt-1 ${msg.type === 'customer' ? 'justify-end' : ''}`}>
                    <span className="text-xs text-gray-600">{msg.time}</span>
                    {msg.tag && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        msg.tag === 'Auto-resolved' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {msg.tag}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Typing Indicator */}
            {visibleMessages === chatMessages.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-1 text-gray-500"
              >
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="mt-6 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-cyan-400">60%</p>
            <p className="text-xs text-gray-500">Auto-resolved</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">8s</p>
            <p className="text-xs text-gray-500">Avg. response</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400">24/7</p>
            <p className="text-xs text-gray-500">Availability</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
