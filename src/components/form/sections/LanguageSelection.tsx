import React from 'react';
import RadioGroup from '../inputs/RadioGroup';

export default function LanguageSelection() {
  return (
    <div>
      <h3 className="font-medium mb-4">Language</h3>
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Select the language for proceedings
        </p>
        <RadioGroup
          name="language"
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ]}
        />
      </div>
    </div>
  );
}