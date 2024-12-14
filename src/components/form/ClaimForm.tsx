import React from 'react';
import ClaimValue from './sections/ClaimValue';
import PlaceSelection from './sections/PlaceSelection';
import LanguageSelection from './sections/LanguageSelection';
import StatementUpload from './sections/StatementUpload';
import AgreementUpload from './sections/AgreementUpload';
import AdditionalDocs from './sections/AdditionalDocs';

export default function ClaimForm() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">File your Claim</h2>
        <p className="text-gray-500 mb-6">(Approx 5 Minutes)</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ClaimValue />
          <PlaceSelection />
          <LanguageSelection />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatementUpload />
        <AgreementUpload />
        <AdditionalDocs />
      </div>
    </div>
  );
}