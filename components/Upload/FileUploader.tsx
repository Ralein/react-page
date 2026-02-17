'use client';

import { useState, useRef } from 'react';
import { MdOutlineFileUpload, MdCheckCircle, MdDelete } from 'react-icons/md';

interface FileUploaderProps {
    label: string;
    required?: boolean;
}

export default function FileUploader({ label, required = false }: FileUploaderProps) {
    const [file, setFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleClick = () => {
        inputRef.current?.click();
    };

    const removeFile = (e: React.MouseEvent) => {
        e.stopPropagation();
        setFile(null);
        if (inputRef.current) inputRef.current.value = '';
    };

    return (
        <div>
            <h3 className="text-base font-semibold text-slate-800 mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </h3>

            <div
                className="border-2 border-dashed border-blue-200 rounded-lg py-10 px-8 text-center bg-slate-50 transition-all duration-200 cursor-pointer hover:border-[#00c6ff] hover:bg-blue-50 mb-8 min-h-[200px] flex flex-col justify-center items-center max-w-md"
                onClick={handleClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <input
                    type="file"
                    ref={inputRef}
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                />

                {file ? (
                    <div className="flex flex-col items-center animate-pulse">
                        <div className="text-green-500 mb-3">
                            <MdCheckCircle size={40} />
                        </div>
                        <div className="font-semibold text-slate-700 mb-1">{file.name}</div>
                        <div className="text-xs text-gray-500 mb-4">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                        </div>
                        <button
                            onClick={removeFile}
                            className="flex items-center gap-2 text-red-500 hover:text-red-700 text-sm font-medium px-4 py-2 rounded hover:bg-red-50 transition-colors z-10"
                        >
                            <MdDelete size={16} /> Remove
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="text-[#00c6ff] mb-3 flex justify-center">
                            <MdOutlineFileUpload size={40} />
                        </div>
                        <div className="font-semibold text-slate-700 mb-2">Choose a File to Upload</div>
                        <div className="text-xs text-gray-500 mb-6 max-w-[250px] mx-auto leading-relaxed">
                            Drag and drop your file here, or click the button below to browse from your device.
                        </div>
                        <button className="bg-white border border-gray-200 py-2 px-6 rounded text-sm font-medium text-slate-600 shadow-[0_4px_0_0_#e2e8f0] transition-all hover:bg-gray-50 hover:border-gray-300 hover:text-slate-800 active:translate-y-[2px] active:shadow-none uppercase tracking-wide">
                            Select File
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
