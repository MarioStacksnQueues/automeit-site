"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Bot, 
  ClipboardList, 
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ShoppingCart,
  Send
} from "lucide-react";

const steps = [
  {
    icon: Phone,
    label: "Call Comes In",
    description: "24/7 instant answer",
    color: "#3b82f6", // blue
  },
  {
    icon: MessageSquare,
    label: "AI Greets & Listens",
    description: "Natural conversation",
    color: "#8b5cf6", // purple
  },
  {
    icon: ShoppingCart,
    label: "Captures Order",
    description: "Details, preferences, notes",
    color: "#f59e0b", // amber
  },
  {
    icon: Send,
    label: "Confirms & Routes",
    description: "SMS receipt + system update",
    color: "#10b981", // green
  },
];

export default function ReceptionistVisualization() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (steps.length + 1));
    }, 2000);

    return () => clearInterval(interval);
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

        {/* Live Call Simulation */}
        <motion.div
          className="mt-10 mx-auto max-w-md bg-gray-900/50 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-gray-400 font-medium">Live Call Simulation</span>
          </div>
          
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm"
          >
            {activeStep === 0 && (
              <p className="text-gray-300">
                <span className="text-blue-400">📞 Incoming:</span> "Hi, I'd like to place an order for delivery..."
              </p>
            )}
            {activeStep === 1 && (
              <p className="text-gray-300">
                <span className="text-purple-400">🤖 AI:</span> "Of course! I'd be happy to help. What can I get started for you today?"
              </p>
            )}
            {activeStep === 2 && (
              <p className="text-gray-300">
                <span className="text-amber-400">📋 Capturing:</span> 2x Large Pizza, extra cheese, delivery to 123 Main St...
              </p>
            )}
            {activeStep === 3 && (
              <p className="text-gray-300">
                <span className="text-green-400">✓ Confirmed:</span> "Your order is in! You'll receive a text confirmation shortly."
              </p>
            )}
            {activeStep >= steps.length && (
              <p className="text-green-400 font-medium">
                ✓ Order complete — 47 seconds, zero staff time
              </p>
            )}
          </motion.div>
        </motion.div>

        {/* Status Message */}
        <motion.div
          className="mt-6 text-center"
          key={`status-${activeStep}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeStep < steps.length ? (
            <p className="text-sm text-gray-400">
              <span 
                className="font-semibold"
                style={{ color: steps[activeStep]?.color }}
              >
                {steps[activeStep]?.label}
              </span>
              {" "}— {steps[activeStep]?.description}
            </p>
          ) : (
            <p className="text-sm font-semibold text-green-400">
              ✓ Complete — Order captured and confirmed in under 1 minute
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
