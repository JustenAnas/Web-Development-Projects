import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-500 text-yellow-300 flex justify-between items-center px-4 h-16">
      <div className="logo font-black text-[24px] flex flex-col justify-center items-center">
        <span>Bitlinks</span>
      </div>
      <ul className="flex justify-between gap-4 font-bold text-lg cursor-pointer">
        <li className="hover:scale-105 transition-transform">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:scale-105 transition-transform">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:scale-105 transition-transform">
          <Link href="/shorten">Shorten</Link>
        </li>
        <li className="hover:scale-105 transition-transform">
          <Link href="/Contact">Contact </Link>
        </li>
        <li>
          <Link href="/shorten">
            <button className="px-1 rounded-lg bg-purple-500 shadow-lg  hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-100">
              Try now
            </button>
          </Link>
        </li>
        <li>
          <Link href="/github">
            <button className="px-1 rounded-lg bg-purple-500 shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-100">
              Github
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
