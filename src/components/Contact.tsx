"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`${styles.title} text-gradient`}>Have an idea worth building?</h2>
          <p className={styles.subtitle}>
            Whether you need an AI-powered website, a web application, an intelligent product, or a completely new digital experience, let's turn the idea into something real.
          </p>
          
          <div className={styles.actions}>
            <a href="mailto:prakharmishraflp@gmail.com" className={styles.emailBtn}>
              Start a Conversation <MessageSquare size={20} />
            </a>
            
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <Mail size={18} />
                <a href="mailto:prakharmishraflp@gmail.com">prakharmishraflp@gmail.com</a>
              </div>
              <div className={styles.infoItem}>
                <Phone size={18} />
                <a href="tel:+916372843175">+91 6372843175</a>
              </div>
            </div>
          </div>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.closing}>Let's Build the Next Idea.</h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
