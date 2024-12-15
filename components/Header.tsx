'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { LuBadgeHelp } from 'react-icons/lu';
import { SiBasicattentiontoken } from 'react-icons/si';
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-8">
      <nav className="max-w-7xl w-full mx-auto sm:flex sm:items-center sm:justify-between">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-16">
            <div>
              <Link
                className="flex text-xl text-black font-semibold items-center gap-2 focus:outline-none focus:opacity-80"
                href="#"
              >
                <SiBasicattentiontoken className="fill-black" />
                Token
              </Link>
            </div>
            <div className="w-full col-span-2 flex gap-8 sm:items-center sm:justify-end">
              <Link
                className="font-medium text-blue-500 focus:outline-none"
                href="#"
                aria-current="page"
              >
                Feature
              </Link>
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                href="#"
              >
                Services{' '}
                <span className="bg-pink-400 px-1 py-0 text-white uppercase text-[0.8em]">
                  New
                </span>
              </Link>
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                href="#"
              >
                App Review
              </Link>
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                href="#"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex items-center max-w-xl">
            <Link className="flex px-8 py-2" href="/help">
              <LuBadgeHelp size={25} color="gray" />
            </Link>
            {session ? (
              <ProfileDropdown session={session} />
            ) : (
              <Link
                className="flex max-w-lg px-5 py-2 bg-[#24abff] text-white font-bold"
                href="/login"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
