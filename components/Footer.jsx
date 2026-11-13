import React from 'react'
import {footerLinks} from "../data/footerlinks"

const Contact = () => {

  return (
    <footer className="bg-[#0B1220] px-5 py-12 text-white sm:px-8 lg:px-12">

      <div className="mx-auto max-w-7xl">
        {/* Links */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-base font-semibold text-white">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === 'Pricing Plans' ? '#pricing' :
                        link === 'Contact Us' ? '#contact' :
                        '#'
                      }
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#A3E635]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Copyright */}
        <div className="mt-14 flex flex-col items-center gap-5 border-t border-white/10 pt-7 text-center md:flex-row md:justify-between">
          <p className="text-sm text-gray-500">© 2026 Workmaxxxing Technologies Inc. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-500">
            <a href="#" className="transition hover:text-[#A3E635]">Privacy Policy</a>
            <a href="#" className="transition hover:text-[#A3E635]">Terms of Service</a>
            <a href="#" className="transition hover:text-[#A3E635]">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact
