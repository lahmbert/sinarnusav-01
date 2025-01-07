'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 sm:px-[5rem] md:px-[10rem] px-8 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center gap-8">
          <div className="w-24 flex justify-center items-center">
            <img src="/img/logo_01.png" alt="Logo" />
          </div>
          <div className="sm:flex  hidden capitalize justify-around items-center gap-4">
            <div className="hover:text-blue-500">
              <Link href="/">home</Link>
            </div>
            <div className="group relative">
              {/* Dropdown trigger */}
              <div className="cursor-pointer hover:text-blue-500">
                <span>category</span>
              </div>
              {/* Dropdown menu */}
              <div className="absolute left-0 hidden w-[10rem] justify-center py-2 text-start bg-white shadow-lg group-hover:block">
                <ul className="p-2">
                  <li className="py-1 px-3 hover:text-blue-500">
                    <Link href="/service1">testing machine</Link>
                  </li>
                  <li className="py-1 mt-2 px-3 hover:text-blue-500">
                    <Link href="/service2">life science</Link>
                  </li>
                  <li className="py-1 mt-2 px-3 hover:text-blue-500">
                    <Link href="/service3">measurement</Link>
                  </li>
                  <li className="py-1 mt-2 px-3 hover:text-blue-500">
                    <Link href="/service3">environmental</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hover:text-blue-500 cursor-pointer">
              <Link href="/pages/about">about us</Link>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex">Menu</div>
        <div className="sm:flex hidden items-center">
          <Link
            href="/auth/login"
            className={`${
              isScrolled
                ? 'text-blue-500 border border-blue-500 p-2 px-8 rounded-full hover:bg-blue-500 hover:text-white duration-200'
                : 'text-white bg-blue-500 border-slate-50 p-2 px-8 rounded-full hover:bg-blue-800 hover:text-white duration-200'
            }`}
          >
            Login
          </Link>
        </div>
      </div>

      {/* Placeholder for Navbar Height */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
