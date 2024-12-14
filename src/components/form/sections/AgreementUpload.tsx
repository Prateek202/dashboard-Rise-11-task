import React from 'react';
import UploadBox from '../inputs/UploadBox';

export default function AgreementUpload() {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h3 className="font-medium mb-4">Agreement under Disputes</h3>
      <div className="grid grid-cols-2 gap-4">
        <UploadBox
          title="Upload the Contract"
          subtitle="Max 2MB, PDF"
          compact
        />
        <UploadBox
          title="Arbitration Agreement"
          subtitle="Max 2MB, PDF"
          compact
        />
      </div>
    </div>
  );
}