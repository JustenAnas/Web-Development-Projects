"use client";
import React, { useState } from "react";
import Link from "next/link";

const shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState();

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="mx-auto max-w-lg bg-purple-200 my-16 p-8 rounded-lg">
      <h1 className="font-bold text-2xl py-2">Generate your short URLs</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={url}
          className="p-4 focus:outline-purple-700"
          placeholder="Enter your URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <input
          type="text"
          value={shorturl}
          className="p-4 focus:outline-purple-700"
          placeholder="Enter your prefered text"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />
        <button
          // onKeyDown={(e) => e.key === "Enter" && generate()}
          onClick={generate}
          className="px-1 py-2 rounded-lg bg-purple-500 shadow-lg  hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg text-white"
        >
          Generate
        </button>
      </div>
      {generated && (
        <>
          <div className="pt-5">
            <span className="font-bold text-lg">Your Link - </span>
            <br />
            <code>
              <Link target="_blank" href={generated}>
                {generated}
              </Link>
            </code>
          </div>
        </>
      )}
    </div>
  );
};

export default shorten;
