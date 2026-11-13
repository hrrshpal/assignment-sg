import React from 'react'
import {plans} from "../data/plans"

const Pricing = () => {

  return (
    <section
      id="pricing"
      className="bg-[#F5F5F0] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <span className="mb-4 inline-block rounded-full bg-[#A3E635]/20 px-4 py-2 text-sm font-semibold text-[#527A0B]">
            PRICING PLANS
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#101827] sm:text-4xl lg:text-5xl">
            Simple, Transparent <span className="text-[#65A30D]">Pricing.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Choose the plan that fits your workflow. Upgrade or downgrade anytime.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8
                ${plan.popular
                  ? 'border-[#A3E635] bg-white shadow-lg shadow-[#A3E635]/10 ring-2 ring-[#A3E635]/30'
                  : plan.dark
                    ? 'border-[#101827] bg-[#101827] text-white'
                    : 'border-gray-200 bg-white'
                }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#A3E635] px-5 py-2 text-xs font-extrabold tracking-wide text-[#101827]">
                  {plan.label}
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-6">

                <span className={`text-xs font-bold tracking-widest ${
                  plan.dark ? 'text-[#A3E635]' : 'text-[#65A30D]'
                }`}>
                  {plan.popular ? 'PRO PLAN' : plan.label}
                </span>

                <h3 className={`mt-3 text-2xl font-extrabold ${
                  plan.dark ? 'text-white' : 'text-[#101827]'
                }`}>
                  {plan.name}
                </h3>

                <p className={`mt-3 min-h-18 text-sm leading-6 ${
                  plan.dark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {plan.description}
                </p>

              </div>

              {/* Price */}
              <div className="mb-7 border-b border-gray-200/20 pb-7">

                <div className="flex flex-wrap items-baseline gap-2">

                  <span className={`text-4xl font-extrabold tracking-tight ${
                    plan.dark ? 'text-white' : 'text-[#101827]'
                  }`}>
                    {plan.price}
                  </span>

                  <span className={`text-sm ${
                    plan.dark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {plan.period}
                  </span>

                </div>

                {plan.originalPrice && (
                  <p className="mt-2 text-sm text-gray-400">
                    <span className="line-through">{plan.originalPrice}</span>
                    <span className="ml-2 font-semibold text-[#65A30D]">
                      Billed annually
                    </span>
                  </p>
                )}

              </div>

              {/* Features */}
              <div className="grow">

                <p className={`mb-5 text-sm font-bold ${
                  plan.dark ? 'text-white' : 'text-[#101827]'
                }`}>
                  What's included:
                </p>

                <ul className="space-y-4">

                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 text-sm leading-6 ${
                        plan.dark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >

                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A3E635]/20 text-xs font-bold text-[#527A0B]">
                        ✓
                      </span>

                      {feature}

                    </li>
                  ))}

                </ul>

              </div>

              {/* CTA */}
              <button
                className={`mt-9 w-full rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-300 active:scale-95
                  ${plan.popular
                    ? 'bg-[#A3E635] text-[#101827] hover:bg-[#B7F45A] hover:shadow-lg hover:shadow-[#A3E635]/20'
                    : plan.dark
                      ? 'border border-[#A3E635]/40 bg-[#A3E635] text-[#101827] hover:bg-[#B7F45A]'
                      : 'border border-gray-300 bg-white text-[#101827] hover:border-[#A3E635] hover:bg-[#A3E635]/10'
                  }`}
              >
                {plan.button} →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Pricing
