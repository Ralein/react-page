'use client';

import { MdCloudUpload } from 'react-icons/md';

interface FileUploaderProps {
    label: string;
    required?: boolean;
}

export default function FileUploader({ label, required = false }: FileUploaderProps) {
    return (
        <div>
            <h3 className="text-base font-semibold text-slate-800 mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </h3>

            <div className="border-2 border-dashed border-gray-300 rounded-lg py-12 px-8 text-center bg-gray-50 transition-all duration-200 cursor-pointer hover:border-[#00c6ff] hover:bg-blue-50 mb-8">
                <div className="text-[#00c6ff] mb-4 flex justify-center">
                    <MdCloudUpload size={32} />
                </div>
                <div className="font-semibold text-gray-700 mb-2">Choose a File to Upload</div>
                <div className="text-sm text-gray-500 mb-6">
                    Drag and drop your file here, or click the button below to browse from your device.
                </div>
                <button className="bg-white border border-gray-300 py-2 px-6 rounded-md font-medium text-gray-700 transition-all hover:bg-gray-100 hover:border-gray-400">
                    Select File
                </button>
            </div>
        </div>
    );
}
