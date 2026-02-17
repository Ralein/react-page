'use client';

import Link from 'next/link';
import { MdErrorOutline } from 'react-icons/md';
import FileUploader from '../../components/Upload/FileUploader';

export default function UploadPage() {
    return (
        <div className="max-w-4xl mx-auto my-8 bg-white rounded-xl shadow-md p-8">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-2 text-red-500 font-medium">
                    <MdErrorOutline size={20} />
                    <span>Supported Formats</span>
                </div>
                <div className="text-right text-sm text-gray-500">
                    (PDF, JPEG, JPG, PNG)<br />
                    Maximum of 5MB per file and up to 3 documents per category
                </div>
            </div>

            <FileUploader label="Passport copy" required={true} />
            <FileUploader label="Emirates ID" required={true} />
            <FileUploader label="Visa" />

            <div className="flex gap-4 mt-8">
                <Link
                    href="/thank-you"
                    className="flex-1 bg-gradient-to-r from-[#00c6ff] to-[#004e92] text-white py-3 rounded-md font-semibold text-center flex justify-center items-center hover:shadow-lg transition-shadow"
                >
                    Proceed
                </Link>
                <button className="flex-1 bg-white border border-gray-300 text-slate-700 py-3 rounded-md font-medium text-center hover:bg-gray-50 transition-colors">
                    Back
                </button>
            </div>
        </div>
    );
}
