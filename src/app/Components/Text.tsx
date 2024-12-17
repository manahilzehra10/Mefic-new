import React from 'react'

function text() {
  return (
  

    <div>
  {/* Responsive heading */}
  <p className='text-xl sm:text-2xl md:text-3xl mt-16 sm:mt-24 md:mt-32 flex justify-center text-center'>
    <span className='font-thin'>MEFIC&nbsp;</span>
    <span className='font-thin'>Capital</span>
    &nbsp;
    <span className='text-orange-600 font-extrabold font-sans'>Portfolio</span>
  </p> 

  {/* Responsive line image */}
  <img className='mx-auto mt-6 sm:mt-8 md:mt-11 h-2 w-30' src="line.png" alt="line" />

  {/* Responsive paragraph */}
  <p className='mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm  leading-5 sm:leading-6 md:leading-7 flex justify-center'>
    Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. 
    Winning of crystallize another container reinvent stands.
  </p>

  {/* Responsive footer text */}
  <p className='flex justify-center text-xs sm:text-sm mt-6 sm:mt-7'>
    <span className='text-orange-600'>All</span> &nbsp; RealEstate &nbsp; EquityFunds
  </p>
</div>

  )
}

export default text