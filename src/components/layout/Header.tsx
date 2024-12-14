import React from 'react';
import { Bell, User } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="bg-white px-4 py-3 flex items-center justify-between border-b">
      <MobileMenu />
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-50 rounded-lg">
          <Bell size={20} className="text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-50 rounded-lg">
          <User size={20} className="text-gray-600" />
        </button>
      </div>
    </header>
  );
}