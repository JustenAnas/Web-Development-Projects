"use client";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="  flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-bold">
            The best URL shortner in the market
          </p>
          <p className="text-md pl-36 pr-24 leading-relaxed">
            <Typewriter
              words={[
                "Create your own custom short URL and share it with your friends in just seconds! No more long, messy links—make your URLs clean, professional, and easy to remember. Whether you're sharing on social media, in messages, or emails, a short link makes everything simple. Plus, track your link's performance and see how many people clicked on it. Start shortening your links today and make sharing effortless!.....",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </p>
          <ul className="flex justify-between gap-3 font-medium text-xl cursor-pointer">
            <li>
              <Link href="/shorten">
                <button className="px-1 rounded-lg text-white bg-purple-500 shadow-lg  hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-100">
                  Try now
                </button>
              </Link>
            </li>
            <li>
              <Link href="/github">
                <button className="px-1 rounded-lg text-white bg-purple-500 shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-100">
                  Github
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="  flex justify-start relative ">
          <Image
            className="mix-blend-darken"
            alt="an img of vector"
            src={"/vector.jpg"}
            fill={true}
          />
        </div>
      </section>
      <div className="flex  h-[50vh] w-full items-center justify-center">
        <span className="absolute mx-auto flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
          Keep Shortnin your URL's
        </span>
        <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
          Keep Shortnin your URL's
        </h1>
      </div>
    </main>
  );
}
