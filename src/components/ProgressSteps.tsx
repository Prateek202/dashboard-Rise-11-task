import React from 'react';
import { Check } from 'lucide-react';

const steps = [
  { number: '01', label: 'Preliminary', completed: true },
  { number: '02', label: 'Your Details', completed: true },
  { number: '03', label: 'KYC', completed: true },
  { number: '04', label: 'Parties', completed: false },
  { number: '05', label: 'Claim', completed: false },
  { number: '06', label: 'Review', completed: false },
  { number: '07', label: 'Payment', completed: false },
];

export default function ProgressSteps() {
  return (
    <div className="w-full bg-white p-4 rounded-lg mb-6">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className="flex items-center w-full">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step.completed
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {step.completed ? <Check size={16} /> : step.number}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-[2px] flex-1 ${
                    step.completed ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                ></div>
              )}
            </div>
            <span className="text-xs mt-2 text-gray-600">{step.label}</span>
            <span className="text-xs text-gray-400">(Approx 5 Min)</span>
          </div>
        ))}
      </div>
    </div>
  );
}