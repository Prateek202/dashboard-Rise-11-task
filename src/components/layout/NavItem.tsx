import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  text: string;
  active?: boolean;
}

export default function NavItem({ icon: Icon, text, active }: NavItemProps) {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
          active
            ? 'bg-blue-50 text-blue-600'
            : 'text-gray-600 hover:bg-gray-50'
        }`}
      >
        <Icon size={20} />
        <span>{text}</span>
      </a>
    </li>
  );
}