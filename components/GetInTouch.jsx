import React from 'react'

const GetInTouch = () => {
  return (
    <section id="contact" className="bg-[#101827] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#A3E635]/30 bg-[#A3E635]/10 px-4 py-2 text-sm font-medium text-[#A3E635]">
            GET IN TOUCH
          </span>

          <h2 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let's start a <span className="text-[#A3E635]">conversation.</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            We'd love to hear from you. Whether you have a question about
            features, pricing, enterprise deployment, or need a hand setting
            up your workspace, our team is ready to help.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-4 text-2xl font-semibold sm:text-3xl">
                Other Ways to Reach Us
              </h3>

              <p className="mb-10 max-w-md leading-7 text-gray-400">
                Prefer reaching out directly? Get in touch with the right
                team using the contact details below.
              </p>

              <div className="space-y-8">

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#A3E635]/10 text-xl text-[#A3E635]">
                    ✉
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Support & Help Desk</h4>
                    <a
                      href="mailto:support@workmaxxxing.com"
                      className="text-gray-400 transition hover:text-[#A3E635]"
                    >
                      support@workmaxxxing.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#A3E635]/10 text-xl text-[#A3E635]">
                    ↗
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Sales & Enterprise</h4>
                    <a
                      href="mailto:sales@workmaxxxing.com"
                      className="text-gray-400 transition hover:text-[#A3E635]"
                    >
                      sales@workmaxxxing.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#A3E635]/10 text-xl text-[#A3E635]">
                    📍
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Office Location</h4>
                    <p className="max-w-sm leading-7 text-gray-400">
                      Workmaxxxing Technologies Inc., Cyber City, DLF Phase 2,
                      Gurugram, Haryana 122002, India
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/3 p-6">
              <p className="text-lg font-semibold">
                Have a big idea?
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Let's work together to make your team's workflow more
                productive and efficient.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-white/4 p-6 shadow-xl sm:p-8">
            <h3 className="mb-2 text-2xl font-semibold">
              Send us a message
            </h3>

            <p className="mb-8 text-sm text-gray-400">
              Fill out the form below and we'll get back to you.
            </p>

            <form action="#" className="space-y-6">

              <div>
                <label htmlFor="fullname" className="mb-2 block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-white/10 bg-[#101827] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#A3E635] focus:ring-2 focus:ring-[#A3E635]/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your work email"
                  className="w-full rounded-lg border border-white/10 bg-[#101827] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#A3E635] focus:ring-2 focus:ring-[#A3E635]/20"
                />
              </div>

              <div>
                <label htmlFor="size" className="mb-2 block text-sm font-medium">
                  Company Size
                </label>
                <select
                  name="size"
                  id="size"
                  defaultValue="1-10"
                  className="w-full rounded-lg border border-white/10 bg-[#101827] px-4 py-3 text-white outline-none transition focus:border-[#A3E635] focus:ring-2 focus:ring-[#A3E635]/20"
                >
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
              </div>

              <div>
                <label htmlFor="msg" className="mb-2 block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  name="msg"
                  id="msg"
                  rows={5}
                  placeholder="Tell us how we can help your team maximize output..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#101827] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#A3E635] focus:ring-2 focus:ring-[#A3E635]/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#A3E635] px-6 py-3.5 font-semibold text-[#101827] transition hover:bg-[#B7F45A] hover:shadow-lg hover:shadow-[#A3E635]/10"
              >
                Send Message →
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default GetInTouch
