/// <reference path="../assets.d.ts" />
import React from "react";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import issue38Image from "../assets/Issue 38 Cover.png";
import issue37Image from "../assets/3a65369d66fe6224eaf77a1489e5abc3ec8e8465.png";
import issue36Image from "../assets/056b8123b92300f92a2480242360ca7863e63814.png";
import issue35Image from "../assets/18b4296711f6db3fe8c776c3a7902a9e5f4d42ca.png";
import issue34Image from "../assets/280b44385328271f8d41a268227e177bc19a4880.png";
import issue33Image from "../assets/9e914152fa07a7b2ba370c37d04d0f70102465ab.png";

function App() {
  const products = [
    {
      id: 5,
      title: "Issue 38",
      image: issue38Image,
      url: "https://www.epistemeengine.com/p/around-the-web-38",
    },
    {
      id: 6,
      title: "Issue 37",
      image: issue37Image,
      url: "https://www.epistemeengine.com/p/around-the-web-37",
    },
    {
      id: 7,
      title: "Issue 36",
      image: issue36Image,
      url: "https://www.epistemeengine.com/p/around-the-web-36",
    },
    {
      id: 8,
      title: "Issue 35",
      image: issue35Image,
      url: "https://www.epistemeengine.com/p/around-the-web-35",
    },
    {
      id: 9,
      title: "Issue 34",
      image: issue34Image,
      url: "https://www.epistemeengine.com/p/around-the-web-34",
    },
    {
      id: 10,
      title: "Issue 33",
      image: issue33Image,
      url: "https://www.epistemeengine.com/p/around-the-web-33",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Introduction Section */}
        <section className="mb-20 md:mb-32">
          <div className="max-w-3xl">
            <p className="font-['Inter'] font-light text-lg md:text-xl leading-relaxed mb-8">
              Sub-blog by{" "}
              <a
                href="https://www.bifarin.me"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                Olatomiwa Bifarin
              </a>
              , featuring a curated collection of readings and
              watchlists from across the internet.
            </p>
            <a
              href="https://www.epistemeengine.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-black px-8 py-4 font-['Inter'] font-normal uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors duration-200"
            >
              Check Blog
            </a>
          </div>
        </section>

        {/* Product Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                imagePlaceholder={!product.image}
                imageSrc={product.image}
                url={product.url}
              />
            ))}
          </div>

          {/* Find More Button */}
          <div className="mt-12 flex justify-start lg:justify-start lg:ml-0">
            <a
              href="https://www.epistemeengine.com/s/around-the-web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-black px-8 py-4 font-['Inter'] font-normal uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors duration-200"
            >
              Find More
            </a>
          </div>
        </section>

        {/* Also By Section */}
        <section className="mt-20 md:mt-32">
          <h2 className="font-['Inter'] uppercase tracking-[0.2em] text-lg md:text-xl mb-12">
            Also by Olatomiwa Bifarin
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Epsilon */}
            <div className="border border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-['Inter'] font-bold text-lg mb-2">
                The Epsilon
              </h3>
              <p className="font-['Inter'] font-light text-sm opacity-70 mb-6">
                Guide to AI.
              </p>
              <a
                href="https://theepsilon.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black px-6 py-3 font-['Inter'] font-normal uppercase tracking-[0.15em] text-sm hover:bg-black hover:text-white transition-colors duration-200"
              >
                Visit
              </a>
            </div>

            {/* Wander Book */}
            <div className="border border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-['Inter'] font-bold text-lg mb-2">
                Wander: Plans Are Overrated
              </h3>
              <p className="font-['Inter'] font-light text-sm opacity-70 mb-6">
                A memoir-essay.
              </p>
              <a
                href="https://epistemeengine.gumroad.com/l/wander"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black px-6 py-3 font-['Inter'] font-normal uppercase tracking-[0.15em] text-sm hover:bg-black hover:text-white transition-colors duration-200"
              >
                Get Book
              </a>
            </div>

            {/* eE Instagram */}
            <div className="border border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-['Inter'] font-bold text-lg mb-2">
                eE Instagram
              </h3>
              <p className="font-['Inter'] font-light text-sm opacity-70 mb-6">
                Books and bite-sized ideas.
              </p>
              <a
                href="https://www.instagram.com/epistemeengine/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black px-6 py-3 font-['Inter'] font-normal uppercase tracking-[0.15em] text-sm hover:bg-black hover:text-white transition-colors duration-200"
              >
                Follow
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-black">
        <div>
          <h4 className="font-['Inter'] uppercase tracking-wider mb-4">
            Social
          </h4>
          <div className="space-y-2 text-sm opacity-60">
            <p>
              <a
                href="https://www.instagram.com/epistemeengine/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                Instagram
              </a>
            </p>
            <p>
              <a
                href="https://x.com/BifarinTheFifth"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                Twitter
              </a>
            </p>
            <p>
              <a
                href="https://substack.com/@bifarin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                Substack
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;