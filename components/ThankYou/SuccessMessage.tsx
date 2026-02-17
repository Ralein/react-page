'use client';

import { MdVerified } from 'react-icons/md';

export default function SuccessMessage() {
    return (
        <div className="max-w-4xl mx-auto my-16 bg-white rounded-xl shadow-md p-12 text-center">
            <div className="mb-6 text-[#00c853] flex justify-center">
                <MdVerified size={80} />
            </div>

            <h2 className="text-2xl font-semibold text-slate-800 mb-8">Thank You</h2>

            <div className="text-left max-w-lg mx-auto">
                <div className="font-semibold text-slate-800 mb-2">Quotation ID : 90XXXXXXX763</div>
                <p className="text-gray-600 leading-relaxed">
                    Thank you for choosing xxxx as your insurance partner.
                    <br />
                    Our team will review your details and get back to you shortly.
                </p>
            </div>
        </div>
    );
}
