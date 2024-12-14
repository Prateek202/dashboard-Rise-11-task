import React from 'react';
import RadioGroup from '../inputs/RadioGroup';

export default function PlaceSelection() {
  return (
    <div>
      <h3 className="font-medium mb-4">Place</h3>
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Select the Place for proceedings
        </p>
        <RadioGroup
          name="place"
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ]}
        />
      </div>
    </div>
  );
}