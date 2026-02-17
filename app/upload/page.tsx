'use client';

import Link from 'next/link';
import styles from '../../components/Upload/Upload.module.css';
import FileUploader from '../../components/Upload/FileUploader';

const AlertIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
);

export default function UploadPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.supportedFormats}>
                    <AlertIcon />
                    <span>Supported Formats</span>
                </div>
                <div className={styles.formatInfo}>
                    (PDF, JPEG, JPG, PNG)<br />
                    Maximum of 5MB per file and up to 3 documents per category
                </div>
            </div>

            <FileUploader label="Passport copy" required={true} />
            <FileUploader label="Emirates ID" required={true} />
            <FileUploader label="Visa" />

            <div className={styles.footer}>
                <Link href="/thank-you" className={styles.proceedButton}>
                    Proceed
                </Link>
                <button className={styles.cancelButton}>
                    Back
                </button>
            </div>
        </div>
    );
}
