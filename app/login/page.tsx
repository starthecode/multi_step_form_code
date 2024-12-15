import LoginForm from '@/components/LoginForm';
import React from 'react';

export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-sm w-full max-w-xl pt-10 pb-6 border">
        <LoginForm />
      </div>
    </div>
  );
}
