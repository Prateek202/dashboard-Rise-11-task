import React from 'react';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  onChange?: (value: string) => void;
}

export default function RadioGroup({ name, options, onChange }: RadioGroupProps) {
  return (
    <div className="space-x-4">
      {options.map((option) => (
        <label key={option.value} className="inline-flex items-center">
          <input
            type="radio"
            name={name}
            value={option.value}
            className="form-radio text-blue-600"
            onChange={(e) => onChange?.(e.target.value)}
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
}