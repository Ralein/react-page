'use client';

import { useState } from 'react';
import styles from './PlanDetails.module.css';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    icon?: React.ReactNode;
}

export default function Accordion({ title, children, defaultOpen = false, icon }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={styles.accordionItem}>
            <div
                className={styles.accordionHeader}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {icon && <span>{icon}</span>}
                    <span>{title}</span>
                </div>
                <span className={`${styles.accordionIcon} ${isOpen ? styles.open : ''}`}>
                    ▼
                </span>
            </div>
            <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>
                {children}
            </div>
        </div>
    );
}
