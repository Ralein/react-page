'use client';

import Link from 'next/link';
import styles from '../components/PlanDetails/PlanDetails.module.css';
import Accordion from '../components/PlanDetails/Accordion';
import PlanSummary from '../components/PlanDetails/PlanSummary';

// Simple Icons
const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const GridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

export default function PlanDetailsPage() {
  return (
    <div className={styles.container}>
      <PlanSummary />

      <h3 className={styles.sectionTitle}>Additional Coverage Details</h3>

      <div style={{ borderBottom: '1px solid #eee', marginBottom: '1rem' }}></div>

      <h3 className={styles.sectionTitle}>Additional Information</h3>

      <Accordion title="Policy Details" icon={<CalendarIcon />}>
        <div style={{ padding: '1rem' }}>
          Policy details content goes here.
        </div>
      </Accordion>

      <Accordion title="Your Customer Details" defaultOpen={true} icon={<UserIcon />}>
        <div className={styles.customerDetailsGrid}>
          <div className={styles.customerDetailsRow}>
            <span className={styles.label}>Customer Name</span>
            <span className={styles.value}>JOHN DOE</span>
          </div>
          <div className={styles.customerDetailsRow}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>johndoe@mail.com</span>
          </div>
          <div className={styles.customerDetailsRow}>
            <span className={styles.label}>Mobile Number</span>
            <span className={styles.value}>+501234567</span>
          </div>
        </div>
      </Accordion>

      <Accordion title="Product Information" icon={<GridIcon />}>
        <div style={{ padding: '1rem' }}>
          Product information goes here.
        </div>
      </Accordion>

      <div className={styles.footer}>
        <Link href="/upload" className={styles.proceedButton}>
          Proceed
        </Link>
        <button className={styles.cancelButton}>
          Cancel
        </button>
      </div>
    </div>
  );
}
