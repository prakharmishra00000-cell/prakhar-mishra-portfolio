"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Sparkles, Bot, CornerDownLeft, CheckCircle2 } from 'lucide-react';
import styles from './AgentTerminal.module.css';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const PRESET_KNOWLEDGE: { [key: string]: string } = {
  "What is your core tech stack?":
    "I build with Next.js (App Router, Turbopack/Webpack), React 19, TypeScript, Tailwind CSS, and Node.js. For AI, I specialize in Gemini 1.5, Claude 3.5 Sonnet, prompt chaining, vector embeddings, and autonomous agent systems.",
  
  "Why hire you over a traditional CS graduate?":
    "As a final-year Mechanical Engineering student from MMMUT, I bring first-principles systems engineering and rigorous discipline to software. I don't stop at theoretical exercises—I have shipped 6+ production AI web applications with real-world users, live data indexing, and zero mockups.",

  "Tell me about CareerHub AI":
    "CareerHub AI is my flagship job aggregation engine. It indexes 50,000+ live opportunities across 9+ platforms (LinkedIn, Indeed, Glassdoor, ZipRecruiter, etc.) with 0% mock data and direct apply links across 40+ engineering disciplines.",

  "What is your Masterbook?":
    "I authored the 'Full Stack Web Development Complete Masterbook' (400+ pages), covering end-to-end full-stack engineering, React internals, backend design patterns, and AI tool integrations. It is free to view directly in the top navigation!",

  "Are you open for full-time roles or freelance?":
    "Yes! I am graduating in 2026 from MMMUT Gorakhpur and am actively interviewing for AI Engineer, Full-Stack Developer, and Software Engineering positions, as well as select contract builds. Email me at prakharmishraflp@gmail.com."
};

const SUGGESTIONS = [
  "Why hire you over a traditional CS graduate?",
  "Tell me about CareerHub AI",
  "What is your core tech stack?",
  "What is your Masterbook?",
  "Are you open for full-time roles or freelance?"
];

export default function AgentTerminal() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "System initialized: Prakhar Digital Twin v2.4 online. Ask me anything regarding Prakhar's engineering philosophy, projects, or background."
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (queryText?: string) => {
    const q = (queryText || input).trim();
    if (!q) return;

    const newMsgs: Message[] = [...messages, { sender: 'user', text: q }];
    setMessages(newMsgs);
    setInput("");

    // Simulate intelligent response lookup
    setTimeout(() => {
      let matchedResponse = PRESET_KNOWLEDGE[q];
      if (!matchedResponse) {
        // Fallback fuzzy search
        const lower = q.toLowerCase();
        if (lower.includes("hire") || lower.includes("why") || lower.includes("background")) {
          matchedResponse = PRESET_KNOWLEDGE["Why hire you over a traditional CS graduate?"];
        } else if (lower.includes("stack") || lower.includes("tech") || lower.includes("skills")) {
          matchedResponse = PRESET_KNOWLEDGE["What is your core tech stack?"];
        } else if (lower.includes("careerhub") || lower.includes("project")) {
          matchedResponse = PRESET_KNOWLEDGE["Tell me about CareerHub AI"];
        } else if (lower.includes("book") || lower.includes("masterbook")) {
          matchedResponse = PRESET_KNOWLEDGE["What is your Masterbook?"];
        } else if (lower.includes("job") || lower.includes("role") || lower.includes("hire") || lower.includes("contact")) {
          matchedResponse = PRESET_KNOWLEDGE["Are you open for full-time roles or freelance?"];
        } else {
          matchedResponse = `Prakhar is an AI Full-Stack Developer specializing in Next.js, Gemini API, autonomous agents, and real-time platforms. He is a final-year Mechanical Engineering student at MMMUT Gorakhpur. Reach him directly at prakharmishraflp@gmail.com.`;
        }
      }

      setMessages(prev => [...prev, { sender: 'bot', text: matchedResponse }]);
    }, 400);
  };

  return (
    <section id="agent-terminal" className={styles.terminalSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.eyebrow}>
            <Terminal size={14} /> Interactive Experience
          </div>
          <h2 className={`${styles.title} text-gradient`}>Ask Prakhar&apos;s AI Digital Twin</h2>
          <p className={styles.subtitle}>
            Test an interactive console powered by Prakhar&apos;s portfolio knowledge graph. Ask about his architecture, projects, or background.
          </p>
        </motion.div>

        <div className={styles.terminalWindow}>
          <div className={styles.terminalBar}>
            <div className={styles.macButtons}>
              <span className={`${styles.macDot} ${styles.red}`} />
              <span className={`${styles.macDot} ${styles.yellow}`} />
              <span className={`${styles.macDot} ${styles.green}`} />
            </div>
            <div className={styles.terminalTitle}>
              <Terminal size={13} /> bash &mdash; prakhar@twin-node: ~/portfolio
            </div>
            <div className={styles.terminalStatus}>
              <span className="pulse-dot" />
              <span>Online</span>
            </div>
          </div>

          <div className={styles.terminalBody}>
            {messages.map((msg, index) => (
              <div key={index} className={styles.msgRow}>
                <div className={`${styles.msgAvatar} ${msg.sender === 'bot' ? styles.botAvatar : styles.userAvatar}`}>
                  {msg.sender === 'bot' ? <Bot size={16} /> : 'YOU'}
                </div>
                <div className={styles.msgContent}>
                  <div className={styles.msgSender}>{msg.sender === 'bot' ? 'Prakhar AI Twin' : 'Visitor'}</div>
                  <div className={msg.sender === 'bot' ? styles.botText : styles.userText}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Clickable Prompts */}
          <div className={styles.quickPrompts}>
            {SUGGESTIONS.map((item, idx) => (
              <button 
                key={idx} 
                className={styles.promptPill}
                onClick={() => handleSend(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Input field */}
          <form 
            className={styles.terminalInputRow}
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <Terminal size={16} className={styles.inputIcon} />
            <input 
              type="text" 
              className={styles.inputField} 
              placeholder="Ask a technical or career question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className={styles.sendBtn}>
              Ask <Send size={13} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
