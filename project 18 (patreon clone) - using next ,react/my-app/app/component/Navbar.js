"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: Session } = useSession();
  // if (Session) {
  //   return (
  //     <>
  //       Signed in as {Session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  return (
    <nav className="bg-purple-500 text-yellow-300 flex justify-between items-center px-4 h-18">
      <div className="logo font-black text-[24px] flex flex-col justify-center items-center">
        <img src="patreon.gif" width={50} alt="pp" />
        <span>GetMeaCHai!!</span>
      </div>
      <ul className="flex justify-between gap-4 font-bold text-lg cursor-pointer">
        <li className="hover:scale-105 transition-transform">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:scale-105 transition-transform">
          <Link href="/#about">About</Link>
        </li>

        <li className="hover:scale-105 transition-transform">Projects</li>
        {/* <div>
          {Session && 
            <Link href={"/dashbord"}>
              <button className="px-1 rounded-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-100">
                 Dashbord
              </button>
            </Link>
          } */}
        <Link href={"/signup"}>
          <button className="px-1 rounded-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-100">
            Sign Up
          </button>
        </Link>
        <div>
          {Session && (
            <div className="relative">
              <button
                id="dropdownHoverButton"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
                type="button"
                onClick={() => {
                  const dropdown = document.getElementById("dropdownHover");
                  dropdown.classList.toggle("hidden");
                }}
              >
                Dropdown hover
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              <div
                id="dropdownHover"
                className="hidden z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
              >
                <ul
                  className="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {Session && (
            <Link href={"/dashbord"}>
              <button className="px-1 rounded-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-100">
                Dashbord
              </button>
            </Link>
          )}
          {Session && (
            <button
              className="px-1 rounded-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-100"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </button>
          )}
          {!Session && (
            <Link href={"/login"}>
              <button className="px-1 rounded-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-100">
                Login
              </button>
            </Link>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
