"use client";
import "/app/globals.css";
// import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  // const router = useRouter(); // ✅ useRouter inside Home

  // const handleClick = () => {
  // console.log("Lessgo");
  // router.push("/generate"); // ✅ Navigates to /generate
  // };

  return (
    <main className="bg-white">
      <section className="bg-[rgba(37,79,26,1)] text-white min-h-[150vh]  grid grid-cols-2">
        <div className="text-black flex flex-col items-center justify-center ml-[7vw] gap-5 ">
          <p className=" text-[rgb(210,232,35)] text-6xl font-black  ">
            Everything you are. In one, simple link in bio.
          </p>
          <p className=" text-[rgb(210,232,35)] text-xl">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex gap-8 text-xl w-full justify-start items-center pt-5 ">
            <input
              className="rounded-md p-4 placeholder-gray-500"
              placeholder="linktr.ee/yourname"
              type="text"
            />
            {/* <Link
              href="/generate"
              className="text-black bg-[rgba(233,192,233,1)] p-4 rounded-full font-normal hover:bg-[#e3b6e3] block text-center p-4 rounded-lg"
            >
              Claim your Linktree */}
            {/* </Link> */}
            <Link
              href="/generate"
              className="text-black bg-[rgba(233,192,233,1)] p-4 rounded-full font-normal hover:bg-[#e3b6e3]"
            >
              Claim your Linktree
            </Link>
          </div>
        </div>
        <div className="text-white flex flex-col items-center justify-center mr-[6vw] pt-[70px] ">
          <img className="h-[38rem]" src="/home.png.png " alt="homepage img" />
        </div>
      </section>
      <section className="bg-[rgba(233,192,233,1)] text-white min-h-[150vh] grid grid-cols-2">
        <div className="text-white flex flex-col items-center justify-center mr-[6vw] pt-[160px] ">
          <img className="h-[32rem]" src="/home.png.png " alt="homepage img" />
        </div>
        <div className="text-black flex flex-col items-center justify-center ml-[7vw] gap-5 ">
          <p className=" text-[rgb(80,34,116)] text-6xl font-black  ">
            Create and customize your Linktree in minutes
          </p>
          <p className=" text-[rgb(80,34,116)] text-xl">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
          </p>
          <div className="flex gap-8 text-xl w-full justify-start items-center pt-5 ">
            <Link href="/generate">
              <button className="text-white bg-[rgb(80,34,116)] p-4 rounded-full font-normal hover:bg-[rgb(73,28,107)]">
                Get started for free
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#780016] text-white min-h-[150vh] grid grid-cols-2">
        <div className="text-black flex flex-col items-center justify-center ml-[7vw] gap-5 ">
          <p className=" text-[rgba(233,192,233,1)] text-6xl font-black  ">
            Share your Linktree from your Instagram, TikTok, Twitter and other
            bios
          </p>
          <p className=" text-[rgba(233,192,233,1)] text-xl">
            Add your unique Linktree URL to all the platforms and places you
            find your audience. Then use your QR code to drive your offline
            traffic online.
          </p>
          <div className="flex gap-8 text-xl w-full justify-start items-center pt-5 ">
            <Link
              href="/generate"
              className="text-black bg-[rgba(233,192,233,1)] p-4 rounded-full font-normal hover:bg-[#e1b2e1]"
            >
              Get started for free
            </Link>
          </div>
        </div>
        <div className="text-white flex flex-col items-center justify-center mr-[6vw] pt-[160px] ">
          <img className="h-[32rem]" src="/home.png.png " alt="homepage img" />
        </div>
      </section>
      <section className="bg-[#f3f3f1] text-white min-h-[150vh] grid grid-cols-2">
        <div className="text-white flex flex-col items-center justify-center mr-[6vw] pt-[160px] ">
          <img className="h-[32rem]" src="/home.png.png " alt="homepage img" />
        </div>
        <div className="text-black flex flex-col items-center justify-center ml-[7vw] gap-5 ">
          <p className=" text-black text-6xl font-black  ">
            Analyze your audience and keep your followers engaged
          </p>
          <p className=" text-black text-xl">
            Track your engagement over time, monitor revenue and learn what’s
            converting your audience. Make informed updates on the fly to keep
            them coming back.
          </p>
          <div className="flex gap-8 text-xl w-full justify-start items-center pt-5 ">
            <Link
              href="/generate"
              className="text-black bg-[rgba(233,192,233,1)] p-4 rounded-full font-normal hover:bg-[#e1b2e1]"
            >
              Get started for free
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
