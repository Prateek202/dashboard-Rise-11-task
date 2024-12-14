import React from 'react';
import { Upload, Plus } from 'lucide-react';

export default function ClaimForm() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">File your Claim</h2>
        <p className="text-gray-500 mb-6">(Approx 5 Minutes)</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium">Claim Value</h3>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Contract Value</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="10,000"
                />
                <select className="absolute right-2 top-2 border-l pl-2 bg-transparent">
                  <option>USD</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Claim Value</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="15,000"
                />
                <select className="absolute right-2 top-2 border-l pl-2 bg-transparent">
                  <option>USD</option>
                </select>
              </div>
              <p className="text-sm text-orange-500 mt-1">150% of Contract Value</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Place</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Select the Place for proceedings
              </p>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="place" className="form-radio text-blue-600" />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="place" className="form-radio text-blue-600" />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Language</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Select the language for proceedings
              </p>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="language" className="form-radio text-blue-600" />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="language" className="form-radio text-blue-600" />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg">
          <h3 className="font-medium mb-4">Statement</h3>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
            <Upload className="mx-auto mb-2 text-blue-600" />
            <p className="text-sm text-gray-600 mb-2">Write your Statement Here</p>
            <p className="text-sm text-gray-400">or</p>
            <button className="text-blue-600 text-sm mt-2">Upload a Pdf</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h3 className="font-medium mb-4">Agreement under Disputes</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
              <Upload className="mx-auto mb-2 text-blue-600" />
              <p className="text-xs text-gray-600">Upload the Contract</p>
              <p className="text-xs text-gray-400">Max 2MB, PDF</p>
            </div>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
              <Upload className="mx-auto mb-2 text-blue-600" />
              <p className="text-xs text-gray-600">Arbitration Agreement</p>
              <p className="text-xs text-gray-400">Max 2MB, PDF</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h3 className="font-medium mb-4">Additional Documentation</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
              <Upload className="mx-auto mb-2 text-blue-600" />
              <p className="text-xs text-gray-600">Upload the Contract</p>
              <p className="text-xs text-gray-400">Max 2MB, PDF</p>
            </div>
            <div className="flex items-center justify-center">
              <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <Plus size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}