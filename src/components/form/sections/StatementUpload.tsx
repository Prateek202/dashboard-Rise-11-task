import React from 'react';
import UploadBox from '../inputs/UploadBox';

export default function StatementUpload() {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h3 className="font-medium mb-4">Statement</h3>
      <UploadBox
        title="Write your Statement Here"
        subtitle="or"
        actionText="Upload a Pdf"
        fullHeight
      />
    </div>
  );
}