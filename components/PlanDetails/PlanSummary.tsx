export default function PlanSummary() {
    return (
        <div>
            <div className="text-lg font-bold mb-6 text-slate-700">
                Quote Reference Number : 90XXXXXXX763
            </div>

            <div className="flex justify-between items-baseline mb-4">
                <h2 className="text-xl font-semibold text-slate-800">Plan Details</h2>
                <span className="font-semibold text-slate-800">Total Premium AED 724.50</span>
            </div>

            <div className="mb-6 font-bold text-slate-800">NSURE</div>

            <h3 className="text-base font-semibold text-slate-800 mt-6 mb-2">Individual Details</h3>

            <div className="flex justify-between mb-2 text-sm text-gray-600">
                <span>Premium Without VAT</span>
                <span>AED 690.90</span>
            </div>
            <div className="flex justify-between mb-2 text-sm text-gray-600">
                <span>VAT Percentage</span>
                <span>5%</span>
            </div>
            <div className="flex justify-between mb-2 text-sm text-gray-600">
                <span>VAT Amount</span>
                <span>AED 34.50</span>
            </div>
            <div className="flex justify-between mb-2 text-sm text-gray-600">
                <span>Total Discount Amount</span>
                <span></span>
            </div>
            <div className="flex justify-between mt-2 pt-2 border-t border-gray-200 font-bold text-slate-800 text-sm">
                <span>Total Premium Amount</span>
                <span>AED 724.50</span>
            </div>
        </div>
    );
}
