"use client";
import Hero from "./components/Hero";
import FeaturedCocktails from "./components/FeaturedCocktails.jsx";

export default function Home() {
  return (
    <main className="container-xl h-screen">
      <Hero />
      <div className="about bg-[#FFF3E0]">
        <div className="container mx-auto">About</div>
      </div>
      <FeaturedCocktails />
    </main>
  );
}
