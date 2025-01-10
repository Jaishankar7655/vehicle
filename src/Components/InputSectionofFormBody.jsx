import React from 'react';

function InputSectionFormBody() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Customer Requirements */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div className="space-y-6">
            <div>
              <label className="block text-xl font-semibold text-gray-800 mb-3">
                Customer Requirements
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 min-h-[150px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter customer requirements..."
                rows="6"
              />
            </div>

            <div>
              <label className="block text-xl font-semibold text-gray-800 mb-3">
                RM/SA/QA Requirements
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 min-h-[150px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter RM/SA/QA requirements..."
                rows="6"
              />
            </div>
          </div>
        </div>

        {/* Parts and Labor */}
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
          <label className="block text-xl font-semibold text-gray-800 mb-3">
            Parts, Oil, and Labor
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 min-h-[150px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter parts, oil, and labor details..."
            rows="6"
          />
        </div>
      </div>

      {/* Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: 'Executive Name', type: 'text' },
          { label: 'Mobile', type: 'tel' },
          { label: 'Total Parts, Oil & Labor', type: 'number' },
          { label: 'Total Cost', type: 'number' },
          { label: 'Estimated Time', type: 'text' }
        ].map(({ label, type }) => (
          <div key={label} className="bg-white rounded-lg shadow-sm p-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {label}
            </label>
            <input
              type={type}
              className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={`Enter ${label.toLowerCase()}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InputSectionFormBody;