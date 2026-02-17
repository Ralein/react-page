'use client';

import styles from './Upload.module.css';

interface FileUploaderProps {
    label: string;
    required?: boolean;
}

const UploadIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
);

export default function FileUploader({ label, required = false }: FileUploaderProps) {
    return (
        <div>
            <h3 className={styles.uploadSectionTitle}>
                {label}
                {required && <span className={styles.required}>*</span>}
            </h3>

            <div className={styles.dropzone}>
                <div className={styles.uploadIcon}>
                    <UploadIcon />
                </div>
                <div className={styles.uploadTextMain}>Choose a File to Upload</div>
                <div className={styles.uploadTextSub}>
                    Drag and drop your file here, or click the button below to browse from your device.
                </div>
                <button className={styles.selectFileButton}>
                    Select File
                </button>
            </div>
        </div>
    );
}
