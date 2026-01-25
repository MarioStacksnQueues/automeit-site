"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2,
  Database,
  BarChart3,
  Users,
  Zap,
  ArrowRight,
  Slack,
  Mail,
  Calendar,
  FileSpreadsheet,
  Cloud,
  CheckCircle2
} from "lucide-react";

// Integration icons that orbit around the central hub
const integrations = [
  { icon: Slack, label: "Slack", color: "#E01E5A" },
  { icon: Mail, label: "Gmail", color: "#EA4335" },
  { icon: Calendar, label: "Calendar", color: "#4285F4" },
  { icon: FileSpreadsheet, label: "Sheets", color: "#0F9D58" },
  { icon: Database, label: "Database", color: "#8b5cf6" },
  { icon: Cloud, label: "CRM", color: "#06b6d4" },
];

// Workflow examples that cycle through
const workflowExamples = [
  {
    trigger: "New employee added to HR system",
    actions: [
      "Create email account",
      "Add to Slack channels", 
      "Schedule onboarding meetings",
      "Generate equipment request"
    ],
    result: "Employee fully onboarded in 2 minutes"
  },
  {
    trigger: "Monthly report deadline",
    actions: [
      "Pull data from 5 sources",
      "Generate charts & insights",
      "Format into PDF report",
      "Email to stakeholders"
    ],
    result: "Report delivered automatically"
  },
  {
    trigger: "New deal closed in CRM",
    actions: [
      "Create project in PM tool",
      "Notify team in Slack",
      "Generate invoice draft",
      "Update revenue dashboard"
    ],
    result: "Handoff completed instantly"
  },
];

export default function CustomWorkflowVisualization() {
  const [activeIntegration, setActiveIntegration] = useState(0);
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [actionStep, setActionStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIntegration((prev) => (prev + 1) % integrations.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActionStep((prev) => {
        const currentWorkflow = workflowExamples[activeWorkflow];
        if (prev >= currentWorkflow.actions.length) {
          // Move to next workflow
          setActiveWorkflow((w) => (w + 1) % workflowExamples.length);
          return 0;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [activeWorkflow]);

  const currentWorkflow = workflowExamples[activeWorkflow];

  return (
    <div className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Integration Hub - Desktop */}
        <div className="hidden md:block relative h-[280px] mb-8">
          {/* Central Hub */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-500/50 flex items-center justify-center z-10"
            animate={{
              boxShadow: [
                "0 0 30px rgba(236,72,153,0.3)",
                "0 0 50px rgba(236,72,153,0.5)",
                "0 0 30px rgba(236,72,153,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-center">
              <Code2 className="w-8 h-8 text-pink-400 mx-auto mb-1" />
              <span className="text-xs text-pink-300 font-medium">AutoMeit</span>
            </div>
          </motion.div>

          {/* Orbiting Integrations */}
          {integrations.map((integration, index) => {
            const angle = (index * 360) / integrations.length - 90;
            const radius = 110;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  x: x - 24,
                  y: y - 24,
                }}
              >
                {/* Connection Line */}
                <motion.div
                  className="absolute w-[110px] h-0.5 origin-left"
                  style={{
                    left: 24,
                    top: 24,
                    rotate: angle + 180,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  }}
                >
                  <motion.div
                    className="h-full"
                    style={{ backgroundColor: integration.color }}
                    animate={{
                      width: activeIntegration === index ? ['0%', '100%'] : '0%',
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                {/* Integration Icon */}
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center relative"
                  style={{
                    backgroundColor: `${integration.color}15`,
                    border: `2px solid ${activeIntegration === index ? integration.color : 'rgba(255,255,255,0.1)'}`,
                  }}
                  animate={{
                    scale: activeIntegration === index ? 1.15 : 1,
                    boxShadow: activeIntegration === index 
                      ? `0 0 25px ${integration.color}50`
                      : 'none',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <integration.icon 
                    className="w-5 h-5" 
                    style={{ color: integration.color }} 
                  />
                  
                  {/* Pulse */}
                  {activeIntegration === index && (
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{ border: `2px solid ${integration.color}` }}
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Label */}
                <motion.span
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap"
                  animate={{
                    color: activeIntegration === index ? '#ffffff' : 'rgba(156,163,175,0.6)',
                  }}
                >
                  {integration.label}
                </motion.span>
              </motion.div>
            );
          })}

          {/* Data particles flowing to center */}
          {activeIntegration !== null && (
            <motion.div
              key={`particle-${activeIntegration}`}
              className="absolute w-2 h-2 rounded-full"
              style={{ 
                backgroundColor: integrations[activeIntegration].color,
                left: '50%',
                top: '50%',
              }}
              initial={{ 
                x: Math.cos(((activeIntegration * 360) / integrations.length - 90) * Math.PI / 180) * 110 - 4,
                y: Math.sin(((activeIntegration * 360) / integrations.length - 90) * Math.PI / 180) * 110 - 4,
                opacity: 1,
              }}
              animate={{ 
                x: -4,
                y: -4,
                opacity: 0,
              }}
              transition={{ duration: 0.6, ease: "easeIn" }}
            />
          )}
        </div>

        {/* Mobile Integration Grid */}
        <div className="md:hidden mb-8">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-3 rounded-xl"
                style={{
                  backgroundColor: `${integration.color}10`,
                  border: `1px solid ${activeIntegration === index ? integration.color : 'rgba(255,255,255,0.1)'}`,
                }}
                animate={{
                  scale: activeIntegration === index ? 1.05 : 1,
                }}
              >
                <integration.icon 
                  className="w-6 h-6 mb-1" 
                  style={{ color: integration.color }} 
                />
                <span className="text-xs text-gray-400">{integration.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="px-4 py-2 rounded-xl bg-pink-500/20 border border-pink-500/50">
              <Code2 className="w-5 h-5 text-pink-400 inline mr-2" />
              <span className="text-sm text-pink-300">AutoMeit Hub</span>
            </div>
          </div>
        </div>

        {/* Live Workflow Example */}
        <motion.div
          className="mx-auto max-w-lg bg-gray-900/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Header */}
          <div className="bg-gray-800/50 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-pink-400" />
              <span className="text-xs text-gray-400 font-medium">Workflow Running</span>
            </div>
            <motion.span 
              className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Live
            </motion.span>
          </div>

          {/* Workflow Content */}
          <div className="p-4">
            {/* Trigger */}
            <motion.div
              key={`trigger-${activeWorkflow}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-4"
            >
              <span className="text-xs text-gray-500 uppercase tracking-wide">Trigger</span>
              <p className="text-sm text-cyan-400 font-medium mt-1">
                ⚡ {currentWorkflow.trigger}
              </p>
            </motion.div>

            {/* Actions */}
            <div className="space-y-2 mb-4">
              <span className="text-xs text-gray-500 uppercase tracking-wide">Actions</span>
              {currentWorkflow.actions.map((action, index) => (
                <motion.div
                  key={`${activeWorkflow}-${index}`}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0.3 }}
                  animate={{ 
                    opacity: actionStep > index ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {actionStep > index ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  ) : actionStep === index ? (
                    <motion.div 
                      className="w-4 h-4 rounded-full border-2 border-pink-400 border-t-transparent flex-shrink-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-gray-600 flex-shrink-0" />
                  )}
                  <span className={`text-sm ${actionStep > index ? 'text-gray-300' : 'text-gray-600'}`}>
                    {action}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Result */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: actionStep >= currentWorkflow.actions.length ? 1 : 0 
              }}
              className="pt-3 border-t border-white/10"
            >
              <p className="text-sm text-green-400 font-medium">
                ✓ {currentWorkflow.result}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-6 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-pink-400">500+</p>
            <p className="text-xs text-gray-500">API Integrations</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">∞</p>
            <p className="text-xs text-gray-500">Custom Logic</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-cyan-400">100%</p>
            <p className="text-xs text-gray-500">Custom Built</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
