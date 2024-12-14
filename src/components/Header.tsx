import React from 'react';
import { Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white p-4 flex justify-end items-center gap-4 border-b">
      <button className="p-2 hover:bg-gray-50 rounded-lg">
        <Bell size={20} className="text-gray-600" />
      </button>
      <button className="p-2 hover:bg-gray-50 rounded-lg">
        <User size={20} className="text-gray-600" />
      </button>
    </header>
  );
}