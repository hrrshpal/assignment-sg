import React from 'react'
import { features } from '../data/features'

const Features = () => {

  return (
    <section id="features" className="bg-[#F5F5F0] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#A3E635]/20 px-4 py-2 text-sm font-semibold text-[#527A0B]">
            WHAT WE OFFER
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#101827] sm:text-4xl lg:text-5xl">
            Everything you need to
            <span className="text-[#65A30D]"> work smarter.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Powerful tools to organize your work, track your progress, and keep your entire team moving forward.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#A3E635] hover:shadow-xl sm:p-9"
            >

              <div className="mb-7 flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A3E635]/20 text-2xl font-bold text-[#527A0B] transition-colors group-hover:bg-[#A3E635]">
                  {feature.icon}
                </div>

                <span className="text-sm font-bold tracking-widest text-gray-300">
                  {feature.number}
                </span>

              </div>

              <h3 className="mb-6 text-xl font-bold text-[#101827] sm:text-2xl">
                {feature.title}
              </h3>

              {/* Details */}
              <div className="space-y-6">

                {feature.items.map((item) => (
                  <div key={item.heading} className="border-l-2 border-[#A3E635] pl-4">

                    <h4 className="mb-2 font-semibold text-[#101827]">
                      {item.heading}
                    </h4>

                    <p className="text-sm leading-7 text-gray-500 sm:text-base">
                      {item.description}
                    </p>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features;