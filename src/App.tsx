import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import ProgressSteps from './components/steps/ProgressSteps';
import ClaimForm from './components/form/ClaimForm';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <Header />
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <ProgressSteps />
          <ClaimForm />
        </main>
      </div>
    </div>
  );
}

export default App;