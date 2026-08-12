import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>Prakhar Mishra</h3>
          <p>AI Full-Stack Web Developer</p>
          <p className={styles.tagline}>
            Building intelligent digital products where AI meets modern web development.
          </p>
        </div>
        
        <div className={styles.links}>
          <div className={styles.col}>
            <h4>Navigation</h4>
            <ul>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#skills">Skills</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.col}>
            <h4>Socials</h4>
            <ul>
              <li><a href="https://github.com/prakharmishra00000-cell/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/prakhar-mishra-8aa426423" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Prakhar Mishra. All rights reserved.</p>
      </div>
    </footer>
  );
}
