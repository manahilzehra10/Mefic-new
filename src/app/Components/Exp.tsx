'use client'
import React, { useEffect, useState } from 'react';

const Exp: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='bg-slate-50 max-h-screen'>
      <p className='mx-10 text-4xl mt-24 ml-10'>
        <span className='font-thin'>Our </span> 
        <span className='font-bold text-blue-900'>Experience, Skills</span> & 
        <br /> 
        <span className='font-thin'>Expertise</span>, 
        <span className='font-bold text-orange-600'>Your Profit.</span>
      </p>

      <img className='mx-10 mt-6' src="image.jpg" alt="Description" />

      <p className='mx-10 mt-6'>
        Office ipsum you must be muted. Conversation banner gave dive investigation chime usability
        <br /> whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation
        <br /> unlock t-shaped. Ideal deck support attached waste highlights game synchronise.
      </p>

      <div className='mt-16 grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-10 ml-6 mr-6 gap-4'>
        <div className='flex flex-col justify-between p-4 bg-white shadow-lg rounded-lg'>
          <div>
            <h6 className='text-red-700 text-sm'>FIRST</h6>  
            <h4 className='text-3xl'>
              <span className='font-bold text-blue-900'>Dramatically</span>
              <br /> maintain solutions
            </h4> 
            <p className='font-sans mt-4 text-gray-700'>
              Collaboratively administrate turnkey channels whereas virtual e-tailers.
              <br /> Objectively seize scalable metrics whereas proactive e-services.
              <br /> Seamlessly empower growth.
            </p>
          </div>
          <p className='text-orange-700 mt-4'>Learn More ...</p>
        </div>

        <div className='flex flex-col justify-between p-4 bg-white shadow-lg rounded-lg'>
          <div>
            <h6 className='text-red-700 text-sm'>SECOND</h6>  
            <h4 className='text-3xl'>
              <span className='font-bold text-blue-900'>Efficiently unleash</span>
              <br /> media information
            </h4> 
            <p className='font-sans mt-4 text-gray-700'>
              Collaboratively administrate turnkey channels whereas virtual e-tailers.
              <br /> Objectively seize scalable metrics whereas proactive e-services.
              <br /> Seamlessly empower growth.
            </p>
          </div>
          <p className='text-orange-700 mt-4'>Learn More ...</p>
        </div>

        <div className='flex flex-col justify-between p-4 bg-white shadow-lg rounded-lg'>
          <div>
            <h6 className='text-red-700 text-sm'>THIRD</h6>  
            <h4 className='text-3xl'>
              <span className='font-bold text-blue-900'>Quickly maximize</span>
              <br /> timely deliverables
            </h4> 
            <p className='font-sans mt-4 text-gray-700'>
              Collaboratively administrate turnkey channels whereas virtual e-tailers.
              <br /> Objectively seize scalable metrics whereas proactive e-services.
              <br /> Seamlessly empower growth.
            </p>
          </div>
          <p className='text-orange-700 mt-4'>Learn More ...</p>
        </div>
      </div>
    </div>
  );
}

export default Exp;