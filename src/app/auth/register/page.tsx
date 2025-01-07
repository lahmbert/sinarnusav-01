'use client';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(0);
  const [isClient, setIsClient] = useState(false); // Track client rendering
  const router = useRouter();

  useEffect(() => {
    // Mark the component as client-side rendered
    setIsClient(true);
  }, []);

  const handleLogin = () => {
    router.push('/auth/login');
  };

  const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/auth/login');
    // Handle login logic here
  };

  // Only render content when on the client
  if (!isClient) {
    return null;
  }

  return (
    <div className="bg-slate-100">
      <div className="sm:h-screen sm:pb-0 pb-10">
        <Navbar />
        <div className="sm:my-28 my-10 flex items-center justify-center">
          <div className="flex justify-center text-center">
            <div className="bg-slate-50 shadow-lg rounded-md sm:mx-0 mx-4 sm:w-[50rem]">
              <div className="sm:flex justify-between w-full">
                <div className="w-full p-8 bg-gradient-to-tl from-blue-500 flex sm:hidden items-center justify-center flex-col gap-4 text-white to-cyan-500">
                  <div className="text-3xl font-bold">Welcome to Sign Up</div>
                  <span>Have an account?</span>
                  <button
                    onClick={handleLogin}
                    className="capitalize p-2 px-6 rounded-full border bg-transparent border-white hover:text-black hover:bg-white"
                  >
                    sign in
                  </button>
                </div>
                <div className="w-full p-8">
                  <div className="text-2xl capitalize">sign up</div>
                  <form onSubmit={handleSubmitRegister} className="pt-4">
                    <div className="text-xs font-semibold text-start flex flex-col">
                      <label htmlFor="username" className="uppercase py-4">
                        Username
                      </label>
                      <input
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="rounded-full focus:outline-none text-sm font-medium p-2 bg-slate-200"
                      />
                    </div>
                    <div className="text-xs pt-2 font-semibold text-start flex flex-col">
                      <label htmlFor="password" className="uppercase py-4">
                        Password
                      </label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="rounded-full focus:outline-none text-sm font-medium p-2 bg-slate-200"
                      />
                    </div>
                    <div className="flex gap-1 pl-2 my-6 items-center">
                      <div className="gap-1 flex">
                        <input
                          checked={remember === 1}
                          onChange={() => setRemember(remember === 1 ? 0 : 1)}
                          type="checkbox"
                          id="agree"
                          className="w-[0.9rem]"
                          name="agree"
                        />
                        <label htmlFor="agree" className="flex gap-1">
                          Agree with
                          <p className="cursor-pointer text-blue-500">
                            term of service.
                          </p>
                        </label>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full rounded-full p-2 text-white capitalize mt-4 bg-blue-500 hover:bg-blue-700 duration-300"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="w-full p-8 bg-gradient-to-tl from-blue-500 sm:flex hidden items-center justify-center flex-col gap-4 text-white to-cyan-500">
                  <div className="text-3xl font-bold">Welcome to Sign In</div>
                  <span>Don't have an account?</span>
                  <button
                    onClick={handleLogin}
                    className="capitalize p-2 px-6 rounded-full border bg-transparent border-white hover:text-black hover:bg-white"
                  >
                    sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
