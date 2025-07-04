"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const PaymentComponent = () => {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate(); // Navigation hook

  const handlePay = () => {
    if (amount.trim() === "") {
      toast.error("Please enter an amount!"); // Toast for validation
      return;
    }
    setAmount(""); // Clear the input field
    toast.success("Thanks for supporting me!"); // Toast message

    setTimeout(() => {
      navigate("/payment-page"); // Redirect to payment page (replace with your route)
    }, 3000);
  };

  return (
    <div className="bg-gray-800 text-white w-1/2 p-3 pt-8 h-52 rounded-lg shadow-lg overflow-y-scroll group relative">
      <div className="makePayment w-[100% ]  bg-slate-900 rounded-lg text-white p-5  ">
        <h2 className="text-xl font-bold my-5">Make a Payment</h2>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-[88%] p-3 rounded-lg  bg-slate-800"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            className="bg-slate-800 p-3 rounded-lg w-[12%]"
            onClick={handlePay}
          >
            Pay
          </button>
        </div>
      </div>
      <h1>Welcome, {Username}!</h1>
      <ToastContainer />
    </div>
  );
};
const Username = () => {
  // Retrieve the username from localStorage
  const Username = localStorage.getItem("Username");
  // const [showToast, setShowToast] = useState(false);
  return (
    <div>
      <div className="cover text-white relative">
        <img
          className="h-[50vh] w-full"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-time=1741046400&token-hash=r2gFXRwEOzQAxawtmgMkAf09Z2hmyyFGLs7r9ACrwT4%3D"
          alt="Cover"
        />
        <div className="pf absolute left-[690px] top-[272px]">
          <img
            className="h-[130px]"
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/400044/8dbfc04f83194a5f850dc61b3e1cf458/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/9.png?token-time=1740096000&token-hash=Tlgci6uWZAS5PLpBGwdggQXwQSJ-1i6c0FPrbd4QApE%3D"
            alt="Profile"
          />
        </div>
        <div className="info flex justify-center items-center gap-2 mt-16 flex-col">
          <div className="text-4xl font-bold">{Username}</div>{" "}
          {/* Render the username */}
          <div className="text-[14px]">Creating Animated art for VTT's</div>
          <div className="text-[14px] text-gray-400">
            <ol className=" flex flex-row gap-4">
              <li className="pl-0">15,143 members</li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-gray-400 before:font-bold">
                92 posts
              </li>
              <li className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-gray-400 before:font-bold">
                $16,800/release
              </li>
            </ol>
          </div>
          <div className="btn">
            <button className="bg-white text-black hover:bg-blue-100 font-bold text-base px-20 py-3 rounded-lg">
              Join for free
            </button>
          </div>
        </div>
      </div>
      <div className="home_about text-white text-base cursor-pointer">
        <ul className="flex justify-center items-center gap-8 mt-14 pb-3">
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
      <div className="min-h-[0.25rem] bg-white opacity-10"></div>
      <div className="membership text-white pt-3 ">
        <h1
          className="text-center text-4xl font-semibold pt-8 py-14
        "
        >
          Choose your membership
        </h1>

        <div className="flex  items-center justify-center bg-[#000] bg-opacity-35 ">
          <div className="mx-auto  max-w-[180%] px-4 py-8 lg:px-6 lg:py-16">
            <div className="space-y-8  lg:grid md:grid-cols-3 lg:space-y-0 lg:gap-10">
              <div className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl border border-gray-200 bg-white p-6 text-gray-900 xl:p-8">
                <h3 className="text-lg font-normal ">Basic</h3>
                <div className="my-8 flex items-baseline justify-center ">
                  <span className="mr-2 text-5xl font-extrabold">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <p className="font-light text-gray-600 sm:text-sm">
                  Best option for personal use & for your next project.
                </p>
                <a className="cursor-pointer bg-gray-900 w-full rounded-md  p-3 text-center text-sm font-semibold text-white shadow-sm  hover:-translate-y-1">
                  Get started
                </a>

                <ul
                  role="list"
                  className="mb-8 space-y-4 text-left text-gray-600  text-sm"
                >
                  <li className="flex items-center space-x-3 ">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>10,000 visitors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited widgets</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>All analytics features</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Lifetime updates</span>
                  </li>
                </ul>
              </div>

              <div className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl  bg-[#D8FA6D] p-6 text-gray-900 xl:p-8">
                <h3 className="text-lg font-normal ">Essential</h3>
                <div className="my-8 flex items-baseline justify-center ">
                  <span className="mr-2 text-5xl font-extrabold">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <p className="font-light text-gray-600 sm:text-sm">
                  Best option for personal use & for your next project.
                </p>
                <a className="cursor-pointer bg-gray-900 w-full rounded-md  p-3 text-center text-sm font-semibold text-white shadow-sm  hover:-translate-y-1">
                  Get started
                </a>

                <ul
                  role="list"
                  className="mb-8 space-y-4 text-left text-gray-600  text-sm"
                >
                  <li className="flex items-center space-x-3 ">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Up to 25,000 visitors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited widgets</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Advanced analytics features</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Lifetime updates</span>
                  </li>
                </ul>
              </div>

              <div className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl  bg-[#DCA6F3] p-6 text-center text-gray-900 xl:p-8">
                <h3 className="text-lg font-normal ">Growth</h3>
                <div className="my-8 flex items-baseline justify-center ">
                  <span className="mr-2 text-5xl font-extrabold">$69</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <p className="font-light text-gray-600 sm:text-sm">
                  Best option for personal use & for your next project.
                </p>
                <a className="cursor-pointer bg-gray-900 w-full rounded-md  p-3  text-sm font-semibold text-white shadow-sm  hover:-translate-y-1">
                  Get started
                </a>

                <ul
                  role="list"
                  className="mb-8 space-y-4 text-left text-gray-600  text-sm"
                >
                  <li className="flex items-center space-x-3 ">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Up to 25,000 visitors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited widgets</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Advanced analytics features</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Lifetime updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[0.25rem] bg-white opacity-10"></div>
      <div className="text-white p-5">
        <div className="flex justify-center items-start gap-4 p-4">
          <PaymentComponent Username={Username} />
          {/* First Box */}
          <div className="bg-gray-800 text-white w-1/2 p-3 pt-8 h-52 rounded-lg shadow-lg overflow-y-scroll group relative">
            <h2 className="text-xl font-bold mb-2 pb-5">Supporters</h2>
            <div className="space-y-2 mx-4">
              <p className="text-sm flex gap-2 items-center">
                <img
                  className="rounded-full"
                  width={33}
                  src="https://i.pinimg.com/736x/49/17/bb/4917bb85614952421f17c2f89e3a18fc.jpg"
                  alt="user avtar"
                />
                Shubham buys a chai of <span className="font-semibold">$2</span>{" "}
                with a message: "Keep it up!"
              </p>
              <p className="text-sm flex gap-2 items-center  ">
                <img
                  className="rounded-full"
                  width={33}
                  src="https://i.pinimg.com/736x/3b/a8/9b/3ba89b3065a1afec8f126aa32ef5a1c0.jpg"
                  alt="user avtar"
                />
                Priya buys a chai of <span className="font-semibold">$5</span>{" "}
                with a message: "Great work!"
              </p>
              <p className="text-sm flex gap-2 items-center  ">
                <img
                  className="rounded-full"
                  width={33}
                  src="https://i.pinimg.com/736x/bd/53/64/bd5364dbb0c0ee3a7bcc9144dba368bd.jpg"
                  alt="user avtar"
                />
                Arjun buys a chai of <span className="font-semibold">$3</span>{" "}
                with a message: "Awesome content!"
              </p>
              <p className="text-sm flex gap-2 items-center  ">
                <img
                  className="rounded-full"
                  width={33}
                  src="https://i.pinimg.com/736x/72/7e/23/727e2377ea0010abbe35773c586e8fb6.jpg"
                  alt="user avtar"
                />
                Sneha buys a chai of <span className="font-semibold">$4</span>{" "}
                with a message: "Inspiring!"
              </p>
              <p className="text-sm flex gap-2 items-center  ">
                <img
                  className="rounded-full"
                  width={33}
                  src="https://i.pinimg.com/736x/80/24/e5/8024e54d31aff9c4e689d65b454614ee.jpg"
                  alt="user avtar"
                />
                Rahul buys a chai of <span className="font-semibold">$6</span>{" "}
                with a message: "Fantastic job!"
              </p>
              <p className="text-sm flex gap-2 items-center  ">
                <img
                  className="rounded-full"
                  width={33}
                  src="https://i.pinimg.com/736x/bf/81/38/bf8138b2940425aff3ce7323b3df7cce.jpg"
                  alt="user avtar"
                />
                Anjali buys a chai of <span className="font-semibold">$7</span>{" "}
                with a message: "You rock!"
              </p>
              <p className="text-sm flex gap-2 items-center  ">
                <img
                  className="rounded-full"
                  width={33}
                  src="https://i.pinimg.com/736x/5c/53/ab/5c53abd911ffdec5815ba6ba7f130c02.jpg"
                  alt="user avtar"
                />
                Vivek buys a chai of <span className="font-semibold">$2</span>{" "}
                with a message: "Keep going!"
              </p>
              <p className="text-sm flex gap-2 items-center  ">
                <img
                  className="rounded-full"
                  width={33}
                  src="https://i.pinimg.com/736x/14/75/f7/1475f755b18c513141e20b0ce10c473b.jpg"
                  alt="user avtar"
                />
                Nisha buys a chai of <span className="font-semibold">$8</span>{" "}
                with a message: "Wonderful effort!"
              </p>
              <p className="text-sm flex gap-2 items-center  ">
                <img
                  className="rounded-full"
                  width={33}
                  src="https://i.pinimg.com/736x/9c/81/e6/9c81e660dfdfc58e64af554fab68c88a.jpg"
                  alt="user avtar"
                />
                Rohit buys a chai of <span className="font-semibold">$3</span>{" "}
                with a message: "Big fan!"
              </p>
              <p className="text-sm flex gap-2 items-center  ">
                <img
                  className="rounded-full"
                  width={33}
                  src="https://i.pinimg.com/736x/20/6c/ea/206cea62a79394a5a57813fc8670ce4f.jpg"
                  alt="user avtar"
                />
                Aditi buys a chai of <span className="font-semibold">$5</span>{" "}
                with a message: "So proud of you!"
              </p>
              <p className="text-sm flex gap-2 items-center  ">
                <img
                  className="rounded-full"
                  width={33}
                  src="https://i.pinimg.com/736x/ce/cb/ba/cecbba0d7909ae0e7d3779b2d8cf3e5a.jpg"
                  alt="user avtar"
                />
                Kartik buys a chai of <span className="font-semibold">$10</span>{" "}
                with a message: "Exceptional work!"
              </p>
              <p className="text-sm flex gap-2 items-center  ">
                <img
                  className="rounded-full"
                  width={33}
                  src="https://i.pinimg.com/736x/d7/36/3a/d7363a76a5237206d767aa3b48213bdc.jpg"
                  alt="user avtar"
                />
                Anas buys a chai of <span className="font-semibold">$28</span>{" "}
                with a message: "LessssGoooooo!!!🔥🔥"
              </p>
            </div>
            <style jsx>{`
              .group:hover::-webkit-scrollbar {
                opacity: 1;
              }
              .group::-webkit-scrollbar {
                width: 8px;
                background-color: transparent;
              }
              .group::-webkit-scrollbar-thumb {
                background-color: gray;
                border-radius: 4px;
              }
              .group::-webkit-scrollbar-track {
                background-color: transparent;
              }
            `}</style>
          </div>
        </div>
        {/* ... */}
      </div>
    </div>
  );
};

// {
//   showToast && (
//     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white p-4 rounded-lg shadow-lg">
//       Thanks for supporting me!
//     </div>
//   );
// }
export default Username;
