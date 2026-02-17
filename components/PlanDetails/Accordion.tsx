'use client';

import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    icon?: React.ReactNode;
}

export default function Accordion({ title, children, defaultOpen = false, icon }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-gray-200 ">
            <div
                className="flex justify-between items-center py-4 cursor-pointer font-medium text-slate-800"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-2">
                    {icon && <span className="text-gray-500">{icon}</span>}
                    <span>{title}</span>
                </div>
                <span className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <MdKeyboardArrowDown size={24} />
                </span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                {children}
            </div>
        </div>
    );
}
