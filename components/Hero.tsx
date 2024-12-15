import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

export const Hero = () => {
  return (
    <div className="w-full flex justify-center relative z-20">
      <div
        className="relative max-w-7xl w-full text-center pt-20 pb-28 z-10"
        style={{
          backgroundImage: 'url("/dark-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2 className="text-[2.5rem] font-light">
          Tether <strong className="font-bold">Token</strong> The <br />
          Worlds <strong className="font-bold">First Stablecoin.</strong>
        </h2>
        <div className="pt-16 flex gap-10 w-full justify-center items-center text-center">
          <div className="flex max-w-md">
            <Link
              className="flex px-8 py-2 bg-[#24abff] text-white font-bold"
              href="/login"
            >
              Join Us
            </Link>
            <Link className="flex px-8 py-2 text-white font-bold" href="/login">
              View More <BsArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
