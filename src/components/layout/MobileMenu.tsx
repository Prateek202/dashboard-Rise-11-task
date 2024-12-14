import React from 'react';
import { Menu, X } from 'lucide-react';
import { useSidebar } from '../../hooks/useSidebar';

export default function MobileMenu() {
  const { isOpen, toggle } = useSidebar();

  return (
    <button
      onClick={toggle}
      className="lg:hidden p-2 hover:bg-gray-50 rounded-lg"
      aria-label="Toggle menu"
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
}