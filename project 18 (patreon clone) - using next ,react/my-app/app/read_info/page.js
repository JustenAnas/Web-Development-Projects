"use client";
import React from "react";
import Link from "next/link";

export default function ReadMore() {
  return (
    <div className="bg-[url('https://i.pinimg.com/originals/9e/39/13/9e391385059f552058d9db2c0caf4e16.png')] bg-cover bg-center">
      <h1 className="text-white text-4xl text-center py-5 font-semibold">
        Read More Page
      </h1>

      <div className="bg-[#cecefa] bg-opacity-70 px-6 mx-auto max-w-[75rem]  py-[33px]">
        <p className="text-lg text-gray-500 font-[Yatra One] leading-relaxed mb-6 text-justify">
          At CHai, we believe that creativity is the key to unlocking a better
          future. But it’s not just about making art – it’s about giving
          creators the freedom to follow their passion, without the distractions
          of the corporate world or the chaos of everyday life. We’ve built a
          platform that connects creators with the people who value their work
          most – the fans who support them every step of the way.
        </p>
        <p className="text-lg text-gray-500 font-[Yatra One] leading-relaxed mb-6 text-justify">
          Imagine a world where creators don’t have to compromise their art just
          to make a living. That’s the world we’re building. Whether it’s a
          musician, a writer, a visual artist, or a game developer, Patreon
          provides the space and tools for these creatives to thrive. Through
          direct subscriptions from their most dedicated fans, creators are
          empowered to work without the stress of corporate sponsorships or the
          unpredictable nature of traditional advertising.
        </p>
        <p className="text-lg text-gray-500 font-[Yatra One] leading-relaxed mb-6 text-justify">
          But it doesn’t stop there. Patreon is designed to be more than just a
          platform – it’s a community, a place where creators can share their
          journeys and engage with their audience on a personal level. It’s
          about creating a deeper connection, where every post, video, and piece
          of content feels more meaningful. The feedback loop between creator
          and fan is stronger than ever, allowing for real-time support and
          interaction.
        </p>
        <p className="text-lg text-gray-500 font-[Yatra One] leading-relaxed mb-6 text-justify">
          For creators, Patreon is not just a way to make a living – it’s a
          chance to build something bigger. It’s about taking control of your
          career, finding your niche, and being rewarded for the value you bring
          to the world. For fans, it’s an opportunity to support the creators
          they love in a way that feels more direct and impactful. By
          subscribing, fans aren’t just supporting the work – they’re investing
          in the creative process itself.
        </p>
        <p className="text-lg text-gray-500 font-[Yatra One] leading-relaxed mb-6 text-justify">
          And as our platform grows, so does the potential for every creator who
          joins the community. Patreon is more than a place to monetize – it’s
          the future of creative independence, a new era where artists, writers,
          and creators aren’t just surviving, they’re thriving. So, what are you
          waiting for? Join us, and let’s build something extraordinary
          together.
        </p>
        <Link
          href="/"
          className="text-blue-600 underline mt-3 inline-block hover:font-semibold hover:text-blue-700"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
