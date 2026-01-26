"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
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
    color: "#3b82f6",
  },
  {
    icon: MessageSquare,
    label: "AI Greets & Listens",
    description: "Natural conversation",
    color: "#8b5cf6",
  },
  {
    icon: ShoppingCart,
    label: "Captures Order",
    description: "Details & preferences",
    color: "#f59e0b",
  },
  {
    icon: Send,
    label: "Confirms & Routes",
    description: "SMS + system update",
    color: "#10b981",
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
    <div className="w-full py-6">
      <div className="max-w-2xl mx-auto px-2">
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
                  className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-2"
                  style={{
                    backgroundColor: `${step.color}15`,
                    border: `2px solid ${activeStep >= index ? step.color : 'rgba(255,255,255,0.1)'}`,
                  }}
                  animate={{
                    boxShadow: activeStep === index 
                      ? `0 0 20px ${step.color}40, 0 0 40px ${step.color}20`
                      : 'none',
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon 
                    className="w-4 h-4" 
                    style={{ 
                      color: activeStep >= index ? step.color : 'rgba(255,255,255,0.3)' 
                    }} 
                  />
                  
                  {/* Pulse Ring */}
                  {activeStep === index && (
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{ border: `2px solid ${step.color}` }}
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Label */}
                <motion.span
                  className="text-xs font-semibold text-white mb-0.5 whitespace-nowrap text-center"
                  animate={{
                    color: activeStep >= index ? '#ffffff' : 'rgba(255,255,255,0.4)',
                  }}
                >
                  {step.label}
                </motion.span>
                
                {/* Description */}
                <motion.span
                  className="text-[10px] text-gray-500 text-center whitespace-nowrap"
                  animate={{
                    color: activeStep >= index ? 'rgba(156,163,175,1)' : 'rgba(156,163,175,0.4)',
                  }}
                >
                  {step.description}
                </motion.span>
              </motion.div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="flex items-center mx-2 mb-6">
                  <motion.div
                    className="w-8 h-0.5 rounded-full"
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
                      x: activeStep > index ? [0, 2, 0] : 0,
                    }}
                    transition={{ 
                      x: { duration: 0.8, repeat: activeStep === index + 1 ? Infinity : 0 }
                    }}
                  >
                    <ArrowRight 
                      className="w-3 h-3 ml-0.5" 
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
        <div className="md:hidden space-y-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              initial={{ opacity: 0.4, x: -10 }}
              animate={{
                opacity: activeStep >= index ? 1 : 0.4,
                x: 0,
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${step.color}15`,
                  border: `2px solid ${activeStep >= index ? step.color : 'rgba(255,255,255,0.1)'}`,
                }}
                animate={{
                  boxShadow: activeStep === index 
                    ? `0 0 15px ${step.color}40`
                    : 'none',
                }}
              >
                <step.icon 
                  className="w-3 h-3" 
                  style={{ 
                    color: activeStep >= index ? step.color : 'rgba(255,255,255,0.3)' 
                  }} 
                />
              </motion.div>

              <div className="flex-1">
                <motion.p
                  className="text-xs font-semibold"
                  animate={{
                    color: activeStep >= index ? '#ffffff' : 'rgba(255,255,255,0.4)',
                  }}
                >
                  {step.label}
                </motion.p>
                <motion.p
                  className="text-[10px]"
                  animate={{
                    color: activeStep >= index ? 'rgba(156,163,175,1)' : 'rgba(156,163,175,0.4)',
                  }}
                >
                  {step.description}
                </motion.p>
              </div>

              <motion.div
                animate={{
                  scale: activeStep === index ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: activeStep === index ? Infinity : 0 }}
              >
                {activeStep > index ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : activeStep === index ? (
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: step.color }}
                  />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-gray-700" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Live Call Simulation */}
        <motion.div
          className="mt-6 mx-auto max-w-sm bg-gray-900/50 border border-white/10 rounded-xl p-3 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-gray-400 font-medium">Live Call Simulation</span>
          </div>
          
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xs"
          >
            {activeStep === 0 && (
              <p className="text-gray-300">
                <span className="text-blue-400">📞</span> "Hi, I'd like to place an order..."
              </p>
            )}
            {activeStep === 1 && (
              <p className="text-gray-300">
                <span className="text-purple-400">🤖</span> "Of course! What can I get for you?"
              </p>
            )}
            {activeStep === 2 && (
              <p className="text-gray-300">
                <span className="text-amber-400">📋</span> 2x Large Pizza, extra cheese...
              </p>
            )}
            {activeStep === 3 && (
              <p className="text-gray-300">
                <span className="text-green-400">✓</span> "Order confirmed! Text on the way."
              </p>
            )}
            {activeStep >= steps.length && (
              <p className="text-green-400 font-medium">
                ✓ Done — 47 seconds, zero staff time
              </p>
            )}
          </motion.div>
        </motion.div>

        {/* Status Message */}
        <motion.div
          className="mt-4 text-center"
          key={`status-${activeStep}`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeStep < steps.length ? (
            <p className="text-xs text-gray-400">
              <span 
                className="font-semibold"
                style={{ color: steps[activeStep]?.color }}
              >
                {steps[activeStep]?.label}
              </span>
              {" "}— {steps[activeStep]?.description}
            </p>
          ) : (
            <p className="text-xs font-semibold text-green-400">
              ✓ Complete — Order captured in under 1 minute
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
