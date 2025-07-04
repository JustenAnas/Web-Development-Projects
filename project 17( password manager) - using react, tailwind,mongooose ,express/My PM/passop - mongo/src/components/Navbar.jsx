import React from 'react'
 
 
const Navbar = () => {
  return (
    <nav className='[background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#63e_100%)] text-white '>
        <div className="myContainer flex justify-between  
     items-center h-8 px-14 py-5 ">

        <div className='logo font-bold text-xl italic hover:text-[21px]'>
            <span className='text-lime-700 '>&lt;Be </span>
             Creative
            <span className='text-lime-700  '> / &gt;</span>
            </div>
        {/* <ul>
            <li className='flex gap-5'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>
            </li>
           
        // </ul> */}
        <a href="https://github.com/JustenAnas" target="_blank" rel="noopener noreferrer">
        <button className="flex items-center gap-2 bg-green-900 text-white rounded-md p-[5px] ring-white ring-1 hover:bg-green-950 hover:--[6px ]">GitHub
            <img className="invert w-6 h-6 hover:w-7 hover:h-8" src="/icons/github-brands-solid.svg" alt="github " />
        </button>
        </a>
        </div>
    </nav>
  )
}

export default Navbar