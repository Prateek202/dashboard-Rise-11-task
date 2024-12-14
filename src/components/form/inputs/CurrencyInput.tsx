import React from 'react';

interface CurrencyInputProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function CurrencyInput({ defaultValue, onChange }: CurrencyInputProps) {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full p-2 border rounded-lg"
        placeholder="0.00"
        defaultValue={defaultValue}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <select className="absolute right-2 top-2 border-l pl-2 bg-transparent">
        <option>USD</option>
      </select>
    </div>
  );
}