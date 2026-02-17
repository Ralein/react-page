'use client';

import { HiBadgeCheck } from "react-icons/hi";

export default function SuccessMessage() {
    return (
        <div className="max-w-4xl mx-auto my-16 bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex items-start gap-8 justify-center">
            <div className="flex flex-col items-center min-w-[100px] pt-1">
                <div className="text-[#58a77e] mb-2">
                    <HiBadgeCheck size={100} />
                </div>
                <h2 className="font-bold text-slate-800 text-sm">Thank You</h2>
            </div>

            <div className="text-left max-w-md pt-5 pl-8">
                <div className="font-semibold text-slate-800 text-sm mb-2">Quotation ID : 90XXXXXXX763</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Thank you for choosing xxxx as your insurance partner.
                    <br />
                    Our team will review your details and get back to you
                    shortly.
                </p>
            </div>
        </div>
    );
}
