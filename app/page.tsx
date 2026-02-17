'use client';

import Link from 'next/link';
import { MdCalendarToday, MdPerson, MdOutlineWidgets } from 'react-icons/md';
import Accordion from '../components/PlanDetails/Accordion';
import PlanSummary from '../components/PlanDetails/PlanSummary';

export default function PlanDetailsPage() {
  return (
    <div className="max-w-5xl mx-auto my-8 bg-white rounded-xl shadow-md p-8">
      <PlanSummary />

      <h3 className="text-base font-semibold text-slate-800 mt-6 mb-2">Additional Coverage Details</h3>

      <div className="border-b border-gray-200 mb-4"></div>

      <h3 className="text-base font-semibold text-slate-800 mt-6 mb-2">Additional Information</h3>

      <Accordion title="Policy Details" icon={<MdCalendarToday size={20} />}>
        <div className="p-4 text-gray-600  border-[#000000] border-[2px]">
          Policy details content goes here.
        </div>
      </Accordion>

      <Accordion title="Your Customer Details" defaultOpen={true} icon={<MdPerson size={20} />}>
        <div className="grid grid-cols-1 gap-2 text-right ">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500 block mb-1">Customer Name</span>
            <span className="font-medium text-slate-800">JOHN DOE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500 block mb-1">Email</span>
            <span className="font-medium text-slate-800">johndoe@mail.com</span>
          </div>
          <div className="flex justify-between ">
            <span className="text-sm text-gray-500 block mb-1">Mobile Number</span>
            <span className="font-medium text-slate-800">+501234567</span>
          </div>
        </div>
      </Accordion>

      <Accordion title="Product Information" icon={<MdOutlineWidgets size={20} />}>
        <div className="p-4 text-gray-600  border-[#000000] border-[2px]">
          Product information goes here.
        </div>
      </Accordion>

      <div className="flex gap-4 mt-8">
        <Link
          href="/upload"
          className="flex-1 bg-gradient-to-r from-[#00c6ff] to-[#000000] text-white py-3 rounded-md font-semibold text-center flex justify-center items-center hover:shadow-lg transition-shadow border-[#000000] border-[2px]"
        >
          Proceed
        </Link>
        <button className="flex-1 bg-white border border-gray-300 text-slate-700 py-3 rounded-md font-medium text-center hover:bg-gray-50 transition-colors border-[#000000] border-[2px]">
          Cancel
        </button>
      </div>
    </div>
  );
}