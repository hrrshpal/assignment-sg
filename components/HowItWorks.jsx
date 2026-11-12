import React from 'react'
import { steps } from '../data/steps'

const HowItWorks = () => {

  return (
    <section
      id="how-it-works"
      className="bg-[#101827] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
    >

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <span className="mb-4 inline-block rounded-full border border-[#A3E635]/30 bg-[#A3E635]/10 px-4 py-2 text-sm font-semibold text-[#A3E635]">
            SIMPLE PROCESS
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            How it <span className="text-[#A3E635]">works.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Getting your productivity on track doesn't have to be complicated.
            Three simple steps are all it takes.
          </p>

        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">

          {steps.map((step, index) => (

            <div key={step.number} className="relative">

              {/* Connecting Line - Desktop */}
              {index !== 2 && (
                <div className="absolute left-[calc(5%+35px)] top-7 hidden h-px w-[calc(100%-30px)] bg-[#A3E635]/30 md:block"></div>
              )}

              {/* Step Number */}
              <div className="relative z-10 mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#A3E635]/40 bg-[#A3E635]/10 text-xl font-extrabold text-[#A3E635]">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#A3E635]/40 hover:bg-white/[0.07] sm:p-7">

                <h3 className="mb-5 text-xl font-bold leading-snug sm:text-2xl">
                  {step.title}
                </h3>

                <div className="space-y-4">

                  {step.description.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm leading-7 text-gray-400 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default HowItWorks