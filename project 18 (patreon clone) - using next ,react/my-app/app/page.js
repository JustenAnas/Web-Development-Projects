"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const GDPRBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const acceptedCookies = localStorage.getItem("gdprAccepted");
    if (!acceptedCookies) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
    setShowBanner(false);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprAccepted", "true");
    setShowBanner(false);
    localStorage.removeItem("gdprAccepted", "true");
  };

  if (!showBanner) return null;

  return (
    <div className="bg-white fixed z-50 p-2 rounded-full drop-shadow-2xl bottom-12 left-1/2 -translate-x-1/2 max-sm:w-11/12">
      <div className="flex items-center justify-between gap-6 text-sm">
        <div className="content-left pl-4">
          This website uses cookies to improve your web experience.
        </div>
        <div className="content-right text-end">
          <button
            className="bg-black text-white px-4 py-2 cursor-pointer rounded-full"
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  const router = useRouter();
  const [startTimer, setStartTimer] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleLoginRedirect = () => {
    setStartTimer(true);
  };

  useEffect(() => {
    if (startTimer) {
      const timer = setTimeout(() => {
        setShowMessage(true);
        router.push("/signup");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [startTimer, router]);

  const handleNavigation = () => {
    router.push("/read_info");
  };

  return (
    <>
      <GDPRBanner />
      <div className="flex justify-center flex-col items-center gap-8 h-96 text-white pt-6 pb-10">
        <div className="font-bold text-6xl flex justify-center items-center gap-3 pb-50">
          Buy me a CHai!
          <span>
            <img src="/tea.gif" width={65} alt="tea icon" />
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          ipsum quos unde nam. Dicta, obcaecati similique.
        </p>
        <div>
          {showMessage && (
            <div className="h-screen flex items-center justify-center bg-gray-100">
              <p className="text-xl font-semibold text-gray-700">
                Make your first account on CHai!!
              </p>
            </div>
          )}
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:text-lg"
            onClick={handleLoginRedirect}
          >
            Start Now!
          </button>

          <button
            onClick={handleNavigation}
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:text-lg"
          >
            Read info
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white mx-auto text-center container mt-7 mb-10">
        <h1 className="text-3xl font-bold my-4 pb-8">
          Your fans can buy you a CHai!!
        </h1>
        <div className="flex gap-5 justify-around mb-7">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-3"
              src="/man.gif"
              width={85}
              alt="man"
            />
            <p className="font-bold">Fund Yourself!</p>
            <p className="text-center">
              Your fans are available here to help you{" "}
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-3"
              src="/coin.gif"
              width={85}
              alt="coin"
            />
            <p className="font-bold">Fund Yourself!</p>
            <p className="text-center">
              Your fans are available here to help you{" "}
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-3"
              src="/group.gif"
              width={85}
              alt="group"
            />
            <p className="font-bold">Fans want to help you</p>
            <p className="text-center">
              Your fans are available here to help you{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div
        id="about"
        className="text-white mx-auto text-center container pb-10 pt-5 flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl font-bold my-4 pb-8">Learn more about us</h1>
        <iframe
          width="760"
          height="415"
          src="https://www.youtube.com/embed/M7xMmX95GPc?si=teaeim03ueWd8es5"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};
export default page;
