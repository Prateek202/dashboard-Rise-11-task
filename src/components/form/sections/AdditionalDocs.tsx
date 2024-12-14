import React from 'react';
import UploadBox from '../inputs/UploadBox';
import { Plus } from 'lucide-react';

export default function AdditionalDocs() {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h3 className="font-medium mb-4">Additional Documentation</h3>
      <div className="grid grid-cols-2 gap-4">
        <UploadBox
          title="Upload the Contract"
          subtitle="Max 2MB, PDF"
          compact
        />
        <div className="flex items-center justify-center">
          <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}