"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Bot, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import styles from './AgentTerminal.module.css';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  source?: string;
}

const SUGGESTIONS = [
  "Why hire you over a traditional CS graduate?",
  "Tell me about CareerHub AI and its 50K opportunities",
  "What is your core tech stack and AI tools?",
  "Show me your authored technical Masterbooks",
  "Are you open for full-time roles or freelance contracts?"
];

export default function AgentTerminal() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Prakhar Mishra AI Twin live. I am connected to Prakhar's complete systems knowledge graph. Ask any technical, architectural, or career question for an immediate, real-time response."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (queryText?: string) => {
    const q = (queryText || input).trim();
    if (!q || loading) return;

    const userMessage: Message = { sender: 'user', text: q };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch('/api/ai-twin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: q })
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const botReply: Message = {
        sender: 'bot',
        text: data.answer || "I received your question. As an AI Full-Stack Developer from MMMUT Gorakhpur, feel free to explore my deployed projects or reach out directly at prakharmishraflp@gmail.com.",
        source: data.source
      };
      setMessages(prev => [...prev, botReply]);
    } catch (err) {
      console.error("AI Twin live fetch error:", err);
      // Fallback response with live context
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: `Regarding "${q}": I am Prakhar Mishra, an AI Full-Stack Developer and final-year student at MMMUT Gorakhpur. I specialize in Next.js 16, React 19, TypeScript, and Generative AI APIs (Gemini 1.5, Claude 3.5). Reach me directly at prakharmishraflp@gmail.com (+91-6372843175).`
        }
      ]);
    } finally {
      setLoading(false);
    }
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
            <Terminal size={14} /> Live AI Architecture
          </div>
          <h2 className={`${styles.title} text-gradient`}>Ask Prakhar&apos;s Live AI Digital Twin</h2>
          <p className={styles.subtitle}>
            100% live real-time responses powered by server-side AI reasoning and portfolio knowledge graph.
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
              <Terminal size={13} /> bash &mdash; prakhar@twin-node: ~/realtime-ai
            </div>
            <div className={styles.terminalStatus}>
              <span className="pulse-dot" />
              <span>Real-Time Live</span>
            </div>
          </div>

          <div className={styles.terminalBody}>
            {messages.map((msg, index) => (
              <div key={index} className={styles.msgRow}>
                <div className={`${styles.msgAvatar} ${msg.sender === 'bot' ? styles.botAvatar : styles.userAvatar}`}>
                  {msg.sender === 'bot' ? <Bot size={16} /> : 'YOU'}
                </div>
                <div className={styles.msgContent}>
                  <div className={styles.msgSender}>
                    {msg.sender === 'bot' ? 'Prakhar AI Twin (Real-Time)' : 'Visitor'}
                  </div>
                  <div className={msg.sender === 'bot' ? styles.botText : styles.userText}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className={styles.msgRow}>
                <div className={`${styles.msgAvatar} ${styles.botAvatar}`}>
                  <Loader2 size={16} className="animate-spin" />
                </div>
                <div className={styles.msgContent}>
                  <div className={styles.msgSender}>Prakhar AI Twin</div>
                  <div className={styles.botText}>Synthesizing live response...</div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div className={styles.quickPrompts}>
            {SUGGESTIONS.map((item, idx) => (
              <button 
                key={idx} 
                className={styles.promptPill}
                onClick={() => handleSend(item)}
                disabled={loading}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Real-Time Form */}
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
              placeholder="Ask anything about Prakhar's projects, stack, or experience..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <button type="submit" className={styles.sendBtn} disabled={loading}>
              {loading ? 'Processing...' : 'Send'} <Send size={13} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
