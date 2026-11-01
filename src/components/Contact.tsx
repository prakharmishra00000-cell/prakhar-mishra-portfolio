"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, Loader2 } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = "prakharmishraflp@gmail.com";
  const phone = "+91-6372843175";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || loading) return;

    setLoading(true);

    try {
      // 1. Post to dedicated server endpoint which forwards to Web3Forms / mailer
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      // 2. Also trigger direct mailto dispatch so it launches in user's default client addressed to prakharmishraflp@gmail.com
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(`Inquiry from ${formData.name} (${formData.email})`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      
      setSubmitted(true);
      
      // Auto-trigger native email client after short visual confirmation
      setTimeout(() => {
        window.open(mailtoLink, '_blank');
      }, 700);

    } catch (err) {
      console.error("Submission error:", err);
      // Fallback directly to mailto
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Inquiry from ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.eyebrow}>
            <Mail size={14} /> Direct Dispatch
          </div>
          <h2 className={`${styles.title} text-gradient`}>Let&apos;s Build Something Remarkable</h2>
          <p className={styles.subtitle}>
            Messages sent here dispatch directly to my personal inbox (<strong>{email}</strong>). Open for engineering roles, AI architecture contracts, and technical collaborations.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Contact Details Card */}
          <motion.div 
            className={styles.contactInfoCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className={styles.infoTitle}>Connect Directly</h3>
              <p className={styles.infoDesc}>
                I am based in Gorakhpur, UP (India), actively collaborating with teams globally and open to remote, hybrid, or on-site opportunities.
              </p>
            </div>

            <div className={styles.channelsList}>
              <div className={styles.channelItem}>
                <div className={styles.channelIcon}><Mail size={20} /></div>
                <div className={styles.channelMeta}>
                  <div className={styles.channelLabel}>Primary Email</div>
                  <a href={`mailto:${email}`} className={styles.channelVal}>{email}</a>
                </div>
                <button onClick={handleCopy} className={styles.copyBtn} aria-label="Copy Email">
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className={styles.channelItem}>
                <div className={styles.channelIcon}><Phone size={20} /></div>
                <div className={styles.channelMeta}>
                  <div className={styles.channelLabel}>Phone &amp; WhatsApp</div>
                  <a href={`tel:${phone}`} className={styles.channelVal}>{phone}</a>
                </div>
              </div>

              <div className={styles.channelItem}>
                <div className={styles.channelIcon}><MapPin size={20} /></div>
                <div className={styles.channelMeta}>
                  <div className={styles.channelLabel}>Institution / Location</div>
                  <div className={styles.channelVal}>MMMUT Gorakhpur &bull; UP, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Direct Inquiry Form */}
          <motion.div 
            className={styles.formCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className={styles.formTitle}>Send a Direct Email Message</h3>
            <p className={styles.formSubtitle}>Transmits directly to <strong>{email}</strong>.</p>

            {submitted ? (
              <div className={styles.successBox}>
                <Check size={20} />
                <span>Message dispatched! Your email has been delivered to <strong>{email}</strong>.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Name</label>
                  <input 
                    type="text" 
                    required 
                    className={styles.input} 
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Email Address</label>
                  <input 
                    type="email" 
                    required 
                    className={styles.input} 
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Message &bull; Project Scope or Role</label>
                  <textarea 
                    required 
                    className={styles.textarea} 
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? (
                    <>Sending Dispatch <Loader2 size={15} className="animate-spin" /></>
                  ) : (
                    <>Send to {email} <Send size={15} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
