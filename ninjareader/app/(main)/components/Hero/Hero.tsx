import React from 'react';
import { FaShoppingCart, FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="hero relative bg-cover bg-left pt-[90px]"
      style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
      aria-label="home"
    >
      <div className="container mx-auto px-4 grid gap-5 md:grid-cols-2 items-center">
        {/* Hero Content */}
        <div className="hero-content text-center md:text-left">
          <h1 className="h1 hero-title text-4xl md:text-5xl font-jost font-500 mb-6 relative">
            Get Your New <br />
            <span className="text-maximum-blue-green">Book Collections</span>
            <span
              className="absolute bottom-[-15px] left-0 w-[70px] h-[5px] bg-maximum-blue-green"
              aria-hidden="true"
            ></span>
          </h1>

          <p className="hero-text text-fs-5 text-white-2 my-[40px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>

          <div className="btn-wrapper flex flex-col md:flex-row gap-4">
            <Link
              href="#"
              className="btn bg-maximum-blue-green text-white-1 px-8 py-3 rounded-pill flex items-center gap-2 hover:bg-selective-yellow transition-1"
            >
              <span className="span">Explore More</span>
              <FaShoppingCart className="text-xl" />
            </Link>

            <button
              className="play-btn hidden bg-transparent border border-white-1 text-white-1 px-8 py-3 rounded-pill flex items-center gap-2 hover:bg-white-1 hover:text-xiketic transition-1"
              aria-label="play video"
            >
              <FaPlay className="text-xl" />
            </button>
          </div>
        </div>

        {/* Hero Banner */}
        <figure className="hero-banner max-w-[300px] mx-auto">
          <Image
            src="/assets/images/hero.png"
            width={475}
            height={600}
            alt="hero banner"
            className="w-full"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;