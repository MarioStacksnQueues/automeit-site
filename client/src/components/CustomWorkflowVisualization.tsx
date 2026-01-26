"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2,
  Database,
  Zap,
  Slack,
  Mail,
  Calendar,
  FileSpreadsheet,
  Cloud,
  CheckCircle2
} from "lucide-react";

const integrations = [
  { icon: Slack, label: "Slack", color: "#E01E5A" },
  { icon: Mail, label: "Gmail", color: "#EA4335" },
  { icon: Calendar, label: "Calendar", color: "#4285F4" },
  { icon: FileSpreadsheet, label: "Sheets", color: "#0F9D58" },
  { icon: Database, label: "Database", color: "#8b5cf6" },
  { icon: Cloud, label: "CRM", color: "#06b6d4" },
];

const workflowExamples = [
  {
    trigger: "New employee added to HR",
    actions: ["Create email", "Add to Slack", "Schedule onboarding", "Request equipment"],
    result: "Onboarded in 2 minutes"
  },
  {
    trigger: "Monthly report deadline",
    actions: ["Pull data", "Generate charts", "Format PDF", "Email stakeholders"],
    result: "Report delivered"
  },
  {
    trigger: "Deal closed in CRM",
    actions: ["Create project", "Notify team", "Generate invoice", "Update dashboard"],
    result: "Handoff complete"
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
    <div className="w-full py-6">
      <div className="max-w-2xl mx-auto px-2">
        
        {/* Integration Hub - Desktop */}
        <div className="hidden md:block relative h-[160px] mb-4">
          {/* Central Hub */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-500/50 flex items-center justify-center z-10"
            animate={{
              boxShadow: [
                "0 0 20px rgba(236,72,153,0.3)",
                "0 0 35px rgba(236,72,153,0.5)",
                "0 0 20px rgba(236,72,153,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-center">
              <Code2 className="w-5 h-5 text-pink-400 mx-auto" />
              <span className="text-[8px] text-pink-300 font-medium">AutoMeit</span>
            </div>
          </motion.div>

          {/* Orbiting Integrations */}
          {integrations.map((integration, index) => {
            const angle = (index * 360) / integrations.length - 90;
            const radius = 65;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  x: x - 16,
                  y: y - 16,
                }}
              >
                {/* Connection Line */}
                <motion.div
                  className="absolute w-[65px] h-0.5 origin-left"
                  style={{
                    left: 16,
                    top: 16,
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
                  className="w-8 h-8 rounded-lg flex items-center justify-center relative"
                  style={{
                    backgroundColor: `${integration.color}15`,
                    border: `1.5px solid ${activeIntegration === index ? integration.color : 'rgba(255,255,255,0.1)'}`,
                  }}
                  animate={{
                    scale: activeIntegration === index ? 1.15 : 1,
                    boxShadow: activeIntegration === index 
                      ? `0 0 15px ${integration.color}50`
                      : 'none',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <integration.icon 
                    className="w-3.5 h-3.5" 
                    style={{ color: integration.color }} 
                  />
                  
                  {activeIntegration === index && (
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{ border: `1.5px solid ${integration.color}` }}
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Integration Grid */}
        <div className="md:hidden mb-4">
          <div className="grid grid-cols-6 gap-1.5 mb-3">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-1.5 rounded-lg"
                style={{
                  backgroundColor: `${integration.color}10`,
                  border: `1px solid ${activeIntegration === index ? integration.color : 'rgba(255,255,255,0.1)'}`,
                }}
                animate={{
                  scale: activeIntegration === index ? 1.05 : 1,
                }}
              >
                <integration.icon 
                  className="w-4 h-4" 
                  style={{ color: integration.color }} 
                />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="px-2 py-1 rounded-lg bg-pink-500/20 border border-pink-500/50">
              <Code2 className="w-3 h-3 text-pink-400 inline mr-1" />
              <span className="text-[10px] text-pink-300">AutoMeit Hub</span>
            </div>
          </div>
        </div>

        {/* Live Workflow Example */}
        <motion.div
          className="mx-auto max-w-sm bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Header */}
          <div className="bg-gray-800/50 px-3 py-2 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-pink-400" />
              <span className="text-[10px] text-gray-400 font-medium">Workflow Running</span>
            </div>
            <motion.span 
              className="text-[8px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Live
            </motion.span>
          </div>

          {/* Workflow Content */}
          <div className="p-3">
            {/* Trigger */}
            <motion.div
              key={`trigger-${activeWorkflow}`}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-3"
            >
              <span className="text-[8px] text-gray-500 uppercase tracking-wide">Trigger</span>
              <p className="text-[10px] text-cyan-400 font-medium mt-0.5">
                ⚡ {currentWorkflow.trigger}
              </p>
            </motion.div>

            {/* Actions */}
            <div className="space-y-1.5 mb-3">
              <span className="text-[8px] text-gray-500 uppercase tracking-wide">Actions</span>
              {currentWorkflow.actions.map((action, index) => (
                <motion.div
                  key={`${activeWorkflow}-${index}`}
                  className="flex items-center gap-1.5"
                  initial={{ opacity: 0.3 }}
                  animate={{ 
                    opacity: actionStep > index ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {actionStep > index ? (
                    <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0" />
                  ) : actionStep === index ? (
                    <motion.div 
                      className="w-3 h-3 rounded-full border-2 border-pink-400 border-t-transparent flex-shrink-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <div className="w-3 h-3 rounded-full border border-gray-600 flex-shrink-0" />
                  )}
                  <span className={`text-[10px] ${actionStep > index ? 'text-gray-300' : 'text-gray-600'}`}>
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
              className="pt-2 border-t border-white/10"
            >
              <p className="text-[10px] text-green-400 font-medium">
                ✓ {currentWorkflow.result}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-4 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center">
            <p className="text-lg font-bold text-pink-400">500+</p>
            <p className="text-[10px] text-gray-500">Integrations</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-purple-400">∞</p>
            <p className="text-[10px] text-gray-500">Custom Logic</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-cyan-400">100%</p>
            <p className="text-[10px] text-gray-500">Custom Built</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
