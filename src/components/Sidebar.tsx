import React from 'react';
import { LayoutDashboard, Briefcase, Activity, Calendar, FileText, Scale } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, text: 'Dashboard', active: true },
  { icon: Briefcase, text: 'My Cases' },
  { icon: Activity, text: 'Activities' },
  { icon: Calendar, text: 'Calendar' },
  { icon: FileText, text: 'Files' },
  { icon: Scale, text: 'Open a Dispute' },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen p-6 flex flex-col border-r">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
        <span className="text-xl font-bold">Jur</span>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon size={20} />
                <span>{item.text}</span>
              </a>
            </li>
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