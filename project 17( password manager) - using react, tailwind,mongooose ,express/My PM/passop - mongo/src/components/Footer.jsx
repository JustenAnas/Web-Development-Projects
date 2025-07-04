import React from 'react'

const Footer = () => {
  return (
    <div className=' flex flex-col justify-center items-center sm:pt-["245px"]'>
        <div className='logo font-bold text-xl text-white '>
            <span className='text-lime-700'>&lt;Be </span>
             Creative
            <span className='text-lime-700'> / &gt;</span>
        </div>
    <div className='text-white flex '>
    Created With <img className= "w-6 mx-1 flex" src="/icons/heart-solid.svg" alt="heart" /> by ANAS
    </div>
    </div>
  )
}

export default Footer 