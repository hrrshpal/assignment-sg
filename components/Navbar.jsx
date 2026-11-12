import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#101827]/95 backdrop-blur-md text-white">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#" className="text-2xl sm:text-3xl font-bold tracking-tight">Workmaxxxing<span className="text-[#A3E635]">.</span></a>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-300">
            <li><a href="#features" className="transition-colors hover:text-[#A3E635]">Features</a></li>
            <li><a href="#how-it-works" className="transition-colors hover:text-[#A3E635]">How it works</a></li>
            <li><a href="#pricing" className="transition-colors hover:text-[#A3E635]">Pricing</a></li>
            <li><a href="#contact" className="transition-colors hover:text-[#A3E635]">Contact</a></li>
          </ul>

          <div className="flex items-center gap-4">
            <button className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold transition-all hover:border-[#A3E635] hover:text-[#A3E635]">Sign in</button>
            <button className="rounded-lg bg-[#A3E635] px-6 py-2.5 text-sm font-bold text-[#101827] transition-all hover:bg-[#b7f45a] active:scale-95">Sign up ↗</button>
          </div>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-2xl hover:bg-white/10"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#101827] px-5 py-6 sm:px-8">

          <ul className="flex flex-col gap-5 text-sm font-medium text-gray-300">
            <li><a href="#features" onClick={closeMenu} className="block hover:text-[#A3E635]">Features</a></li>
            <li><a href="#how-it-works" onClick={closeMenu} className="block hover:text-[#A3E635]">How it works</a></li>
            <li><a href="#pricing" onClick={closeMenu} className="block hover:text-[#A3E635]">Pricing</a></li>
            <li><a href="#contact" onClick={closeMenu} className="block hover:text-[#A3E635]">Contact</a></li>
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <button className="w-full rounded-lg border border-white/20 py-3 text-sm font-semibold hover:border-[#A3E635] hover:text-[#A3E635]">Sign in</button>
            <button className="w-full rounded-lg bg-[#A3E635] py-3 text-sm font-bold text-[#101827] hover:bg-[#b7f45a]">Sign up ↗</button>
          </div>

        </div>
      )}
    </nav>
  )
}

export default Navbar