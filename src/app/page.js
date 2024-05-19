"use client";

import Image from "next/image";
import heroImage from "../../public/americano.png";

const imageLoader = () => {
  return `https://www.thecocktaildb.com/images/media/drink/r9cz3q1504519844.jpg`;
};

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between px-60 py-5">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div> */}

      {/* Nav Section */}

      {/* Hero Section */}
      <div className="hero h-screen grid grid-cols-2 justify-items-stretch">
        <div className="text-white flex justify-self-end items-center">
          <div className="text-[#e5e5e5] space-y-4 place-self-center">
            <h1 className="hero-heading text-7xl w-11/12">
              From <span className="highlight">Cocktails</span> to
              <span className="highlight"> Code</span>
            </h1>
            <h2 className="sub-heading text-3xl">A Fusion of Artistry</h2>
            <button className="bg-[#ff0033] rounded-tl-lg rounded-br-lg text-xl px-8 py-2 cursor-pointer shadow-lg shadow-gray-900">
              Explore
            </button>
          </div>
        </div>
        <div className="justify-self-start">
          <Image className="size-full" src={heroImage} alt="hero image"></Image>
        </div>
      </div>
    </main>
  );
}
