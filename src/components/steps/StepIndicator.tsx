import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  number: string;
  label: string;
  completed: boolean;
  isLast: boolean;
}

export default function StepIndicator({ number, label, completed, isLast }: StepIndicatorProps) {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="flex items-center w-full">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            completed ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'
          }`}
        >
          {completed ? <Check size={16} /> : number}
        </div>
        {!isLast && (
          <div
            className={`h-[2px] flex-1 ${
              completed ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          ></div>
        )}
      </div>
      <span className="text-xs mt-2 text-gray-600">{label}</span>
      <span className="text-xs text-gray-400">(Approx 5 Min)</span>
    </div>
  );
}