import React from 'react';
import { Check } from 'lucide-react';
import StepIndicator from './StepIndicator';

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
    <div className="w-full bg-white p-4 rounded-lg mb-6 overflow-x-auto">
      <div className="flex justify-between items-center min-w-[768px]">
        {steps.map((step, index) => (
          <StepIndicator
            key={index}
            {...step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}