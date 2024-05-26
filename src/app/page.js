"use client";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";

export default function Home() {
  return (
    <main className="container-xl h-screen">
      <Hero />
      <Cocktails />
    </main>
  );
}
