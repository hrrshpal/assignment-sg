
import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#101827] text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#A3E635]/10 blur-[120px]"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <button className="mb-7 rounded-full border border-[#A3E635]/30 bg-[#A3E635]/10 px-5 py-2 text-sm font-medium text-[#A3E635]">
            ✦ Your Time, Your Rules
          </button>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Do more. Focus harder.
            <span className="block text-[#A3E635]">
              Work smarter.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Take control of your workload, build better habits, and turn your ambitious goals into everyday progress.
          </p>

          <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <button className="rounded-xl bg-[#A3E635] px-8 py-4 font-bold text-[#101827] shadow-lg shadow-[#A3E635]/10 transition-all hover:-translate-y-1 hover:bg-[#B7F45A] active:scale-95">
              Start Workmaxxing →
            </button>
            <button className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition-all hover:border-[#A3E635] hover:text-[#A3E635]">
              Request a demo
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            ✓ Free to get started &nbsp; ✓ No credit card required
          </p>

        </div>

        {/* Hero Image */}
        <div className="relative mx-auto w-full max-w-2xl">
          <div className="absolute inset-0 rounded-3xl bg-[#A3E635]/10 blur-3xl"></div>
          <img
            src="/src/assets/workmaxxing.jpg"
            alt="Workmaxxing productivity dashboard preview"
            className="relative w-full rounded-2xl border border-white/10 object-cover shadow-2xl shadow-black/40 transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

      </div>
    </section>
  )
}
export default Hero