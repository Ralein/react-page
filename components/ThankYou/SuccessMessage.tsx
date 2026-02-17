'use client';

import styles from './ThankYou.module.css';

const SuccessIcon = () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
        {/* Starburst shape */}
        <path d="M12 2L14.4 7.2L20 7.6L16.2 11.8L17.5 17.2L12 14.8L6.5 17.2L7.8 11.8L4 7.6L9.6 7.2L12 2Z" fill="#00c853" />
        {/* Checkmark - using white stroke on top */}
        <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
);

// Better custom SVG to match the image exactly (Star badge with check)
const VerifiedBadge = () => (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L61.2 15.6L80 12.4L83.2 31.2L100 40L92.4 57.6L100 75.2L81.6 81.6L76.4 100L50 88L23.6 100L18.4 81.6L0 75.2L7.6 57.6L0 40L16.8 31.2L20 12.4L38.8 15.6L50 0Z" fill="#00C853" />
        <path d="M30 50L45 65L70 35" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function SuccessMessage() {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <VerifiedBadge />
            </div>

            <h2 className={styles.thankYouText}>Thank You</h2>

            <div className={styles.messageContent}>
                <div className={styles.quotationId}>Quotation ID : 90XXXXXXX763</div>
                <p className={styles.messageBody}>
                    Thank you for choosing xxxx as your insurance partner.
                    <br />
                    Our team will review your details and get back to you shortly.
                </p>
            </div>
        </div>
    );
}
