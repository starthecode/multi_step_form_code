'use client';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { PiDotsThreeOutline } from 'react-icons/pi';

const ProfileDropdown = ({ session }: { session: any }) => {
  const [active, setActive] = React.useState(false);

  return (
    <div className="relative">
      <div className="flex items-center space-x-4">
        <Image
          width={100}
          height={100}
          src={`${session?.user?.image}`}
          alt="User Image"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="text-sm font-semibold text-black">
            {session?.user?.fullName}
          </h3>
          <p className="text-xs text-gray-500">{session?.user?.email}</p>
        </div>
        <button
          className="ml-auto text-gray-500 hover:text-gray-700 relative z-10"
          onClick={() => {
            setActive(!active);
            console.log('Active:', !active);
          }}
        >
          <PiDotsThreeOutline />
        </button>
      </div>
      <div
        className={`${
          active ? 'block' : 'hidden'
        } w-full mx-auto bg-white shadow-md rounded-lg p-4 absolute right-0 top-16 z-30 border`}
      >
        <div className="space-y-2 text-sm">
          <button
            onClick={() => signOut()}
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <CiLogout className="mr-2" />
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
