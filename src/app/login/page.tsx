'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const correctPassword = 'famous'; // Replace with your desired password

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === correctPassword) {
      router.push('/dashboard'); // Replace with your desired page
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[rgb(219,13,13)] text-white rounded-sm hover:bg-[rgb(219,13,13)] transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
