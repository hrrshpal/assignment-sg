import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-black text-white'>
        
        <div className='flex gap-4'>
            <p className='text-5xl font-[.montserrat-heading] text-[#005B6B]'>W<span className='text-white'>.</span></p>
            <span>Workmaxxxing</span>
        </div>

        <div>
            <ul>
                <li>Features</li>
                <li>How it works</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>

            <div>
                <button>Sign up</button>
                <button>Sign in</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar
