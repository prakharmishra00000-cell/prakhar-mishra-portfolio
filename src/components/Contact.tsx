"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = "prakharmishraflp@gmail.com";
  const phone = "+91-6372843175";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
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
            <Mail size={14} /> Direct Channel
          </div>
          <h2 className={`${styles.title} text-gradient`}>Let&apos;s Build Something Remarkable</h2>
          <p className={styles.subtitle}>
            Have an open full-time position, a contract build, or a product idea requiring AI and full-stack speed? Reach out directly.
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
            <h3 className={styles.formTitle}>Send a Quick Dispatch</h3>
            <p className={styles.formSubtitle}>Send your project parameters or interview inquiry.</p>

            {submitted ? (
              <div className={styles.successBox}>
                <Check size={20} />
                <span>Message recorded! You can also email directly at <strong>{email}</strong>.</span>
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
                  <label className={styles.label}>Project Scope or Role Details</label>
                  <textarea 
                    required 
                    className={styles.textarea} 
                    placeholder="Tell me about what you're building, timeline, or position requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Transmit Message <Send size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
