"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Download, Printer, ExternalLink } from 'lucide-react';
import styles from './PdfViewer.module.css';

function ViewerContent() {
  const searchParams = useSearchParams();
  const file = searchParams.get('file') || '/books/fullstack-web-development-masterbook.pdf';
  const title = searchParams.get('title') || 'Technical Masterbook';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.viewerPage}>
      <header className={styles.topBar}>
        <div className={styles.leftGroup}>
          <Link href="/#books" className={styles.backBtn}>
            <ArrowLeft size={16} /> Portfolio
          </Link>
          <span className={styles.bookTitle}>{title}</span>
        </div>

        <div className={styles.actionsGroup}>
          <button onClick={handlePrint} className={styles.actionBtn}>
            <Printer size={15} /> Print
          </button>
          <a 
            href={file} 
            download 
            className={styles.downloadBtn}
          >
            <Download size={15} /> Download PDF
          </a>
          <a 
            href={file} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.actionBtn}
          >
            <ExternalLink size={15} /> Direct File
          </a>
        </div>
      </header>

      <main className={styles.pdfFrameContainer}>
        <object
          data={`${file}#toolbar=1&navpanes=1`}
          type="application/pdf"
          className={styles.pdfFrame}
        >
          <iframe
            src={`${file}#toolbar=1`}
            className={styles.pdfFrame}
            title={title}
          />
          <div className={styles.fallbackNotice}>
            <h3>Previewing: {title}</h3>
            <p>Your browser may not support inline PDF preview. Click below to download or open the PDF directly.</p>
            <a href={file} download className={styles.downloadBtn}>
              <Download size={15} /> Download PDF Now
            </a>
          </div>
        </object>
      </main>
    </div>
  );
}

export default function PdfViewerPage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem', color: '#fff' }}>Loading PDF Document...</div>}>
      <ViewerContent />
    </Suspense>
  );
}
