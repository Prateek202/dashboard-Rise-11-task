import React from 'react';
import { LayoutDashboard, Briefcase, Activity, Calendar, FileText, Scale } from 'lucide-react';
import { useSidebar } from '../../hooks/useSidebar';
import NavItem from './NavItem';
import Logo from './Logo';

const menuItems = [
  { icon: LayoutDashboard, text: 'Dashboard', active: true },
  { icon: Briefcase, text: 'My Cases' },
  { icon: Activity, text: 'Activities' },
  { icon: Calendar, text: 'Calendar' },
  { icon: FileText, text: 'Files' },
  { icon: Scale, text: 'Open a Dispute' },
];

export default function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white h-screen p-6 flex flex-col border-r transform transition-transform duration-200 ease-in-out`}
    >
      <Logo />
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </ul>
      </nav>

      <div className="mt-auto bg-blue-50 p-4 rounded-xl">
        <h3 className="font-semibold text-sm mb-2">Get Justice on every Claims</h3>
        <div className="w-full h-32 bg-blue-100 rounded-lg"></div>
      </div>
    </div>
  );
}