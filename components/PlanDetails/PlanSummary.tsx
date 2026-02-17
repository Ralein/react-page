import styles from './PlanDetails.module.css';

export default function PlanSummary() {
    return (
        <div>
            <div className={styles.header}>
                Quote Reference Number : 90XXXXXXX763
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h2 className={styles.planTitle}>Plan Details</h2>
                <span className={styles.totalPremiumHeader}>Total Premium AED 724.50</span>
            </div>

            <div style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>NSURE</div>

            <h3 className={styles.sectionTitle}>Individual Details</h3>

            <div className={styles.breakdownRow}>
                <span>Premium Without VAT</span>
                <span>AED 690.90</span>
            </div>
            <div className={styles.breakdownRow}>
                <span>VAT Percentage</span>
                <span>5%</span>
            </div>
            <div className={styles.breakdownRow}>
                <span>VAT Amount</span>
                <span>AED 34.50</span>
            </div>
            <div className={styles.breakdownRow}>
                <span>Total Discount Amount</span>
                <span></span>
            </div>
            <div className={`${styles.breakdownRow} ${styles.total}`}>
                <span>Total Premium Amount</span>
                <span>AED 724.50</span>
            </div>
        </div>
    );
}
