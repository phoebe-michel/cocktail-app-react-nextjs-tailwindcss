"use client";

import Image from "next/image";
import heroImage from "../../public/lemon-drop.jpg";

export default function Home() {
  return (
    <main className="container-xl h-screen relative">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div> */}

      {/* Nav Section */}

      {/* Hero Section */}
      <div className="container-xl hero h-screen flex justify-center items-center">
        {/* Background image for hero */}
        <div className="">
          <Image
            src={heroImage}
            alt="hero image"
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              backgroundPosition: "right center",
              objectFit: "cover",
            }}
          ></Image>
        </div>

        <div className="relative top-0 bg-[#000]/[.4] w-full h-screen shadow-2xl flex flex-col justify-center items-center text-center space-y-5">
          {/* Heading Text */}
          <div className="">
            <h1 className="hero-heading text-7xl mb-4 text-white">
              Sip & Code: <br />
              Mixology Meets Technology
            </h1>
            <h2 className="sub-heading text-xl mb-6 text-[#e5e5e5]">
              A Fusion of Artistry and Technology to Craft Your Perfect Drink
            </h2>
          </div>

          {/* Search */}
          <div className="flex justify-center">
            <input
              className="w-96 rounded-l-full px-8 py-2"
              placeholder="Enter a cocktail name..."
            />
            <button className="bg-[#ff0033] text-[#e5e5e5] hover:text-white rounded-r-full text-xl px-8 py-2 cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
