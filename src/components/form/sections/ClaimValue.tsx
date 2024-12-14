import React from 'react';
import CurrencyInput from '../inputs/CurrencyInput';

export default function ClaimValue() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Claim Value</h3>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Contract Value</label>
        <CurrencyInput defaultValue="10,000" />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Claim Value</label>
        <CurrencyInput defaultValue="15,000" />
        <p className="text-sm text-orange-500 mt-1">150% of Contract Value</p>
      </div>
    </div>
  );
}