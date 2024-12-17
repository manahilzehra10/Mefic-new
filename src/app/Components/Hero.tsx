

// 'use client'
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

// const Hero: React.FC = () =>  {
//   // Track if the component is mounted
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     // Mark the component as mounted on the client side
//     setMounted(true);
//   }, []);

//   // If not mounted yet, don't render the component to avoid SSR mismatch
//   if (!mounted) {
//     return null;
//   }

//   return  (
//         <div className='bg-gray-900 text-white h-auto margin-0'>
//             <button className="mx-10 translate-x-0.5 ml-right bg-gray-500 flex right-3 text-white px-4 py-2 rounded ">
//                 We believe that every client is a partner
//             </button>

//             <br />
//             <p className='mx-10 text-5xl'>
//                 <span className='font-light'> Your future financial </span>
//                 <br />
//                 <span className='font-bold'>Investment made</span> easier
//                 <br />
//                 <p>with <span className='text-orange-600 font-bold'>MEFIC</span></p>
//             </p>
//             <br />

//             <p className='mx-10'>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 <br />
//                 Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s,
//             </p>
//             <br />

//             <button className="mx-8 translate-x-0.5 ml-right bg-orange-600 flex right-3 text-white px-4 py-2 rounded">
//                 book a consultant
//             </button>

//             {/* Move the Login button up using transform */}
//             <button className="bg-transparent  ml-52 translate-y-[-40px] hover:bg-blue-700 text-white font-bold px-3 py-2  border border-red-700 rounded-lg ">
//                 Login
//             </button>

// {/* 

//             <img className='min-w-0 h-20 mx-auto mt-10' src="line2.png" alt="" />
//             <img src="weblogo4.png" alt="" /> 

//             <Image src="/comp5.png" width={1300} height={1300} alt='image'/> */}
//  <Image src="/comp5.png" alt="Vector Image" className="relative left-1/2 transform -translate-x-1/2 w-full mb-[-10px] animate-moveLeftRight animate-bounce" />

//         </div>






// //         <div className='bg-gray-900 text-white'>
// //   {/* Responsive button */}
// //   <button className="mx-4 sm:mx-10 bg-gray-500 flex right-3 text-white px-4 py-2 rounded ">
// //     We believe that every client is a partner
// //   </button>

// //   <br />
  
// //   {/* Responsive text */}
// //   <p className='mx-4 sm:mx-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
// //     <span className='font-light'> Your future financial </span>
// //     <br />
// //     <span className='font-bold'>Investment made</span> easier
// //     <br />
// //     <span>with <span className='text-red-600 font-bold'>MEFIC</span></span>
// //   </p>

// //   <br />

// //   {/* Responsive paragraph */}
// //   <p className='mx-4 sm:mx-10 text-sm sm:text-base'>
// //     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
// //     <br />
// //     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
// //   </p>
  
// //   <br />

// //   {/* Responsive buttons */}
// //   <button className="mx-4 sm:mx-8 bg-red-600 flex text-white px-4 py-2 rounded">
// //     Book a consultant
// //   </button>

// //   {/* Login button */}
// //   <button className="bg-transparent mt-4 sm:mt-0 sm:ml-20 lg:ml-52 translate-y-0 sm:translate-y-[-40px] hover:bg-blue-700 text-white font-bold px-3 py-2 border border-red-700 rounded-lg">
// //     Login
// //   </button>

// //   {/* Responsive image */}
// //   <img className='w-full h-20 mx-auto mt-10' src="line2.png" alt="" />
  
// //   <img className='mx-auto my-4 w-32 sm:w-40 md:w-48 lg:w-56' src="weblogo4.png" alt="Logo" />

// //   <div className='flex justify-center'>
// //     <Image src="/comp5.png" width={1300} height={1300} alt='image' className='w-full sm:w-[600px] lg:w-[800px]' />
// //   </div>
// // </div>


       
//     )
// }



// export default Hero
'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero: React.FC = () =>  {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    
     <div className='bg-gray-900 text-white px-4 '>
    
      <button className="mx-10 translate-x-0.5 ml-right bg-gray-500 flex right-3 text-white px-4 py-2 rounded ">
        We believe that every client is a partner
      </button>

      <br />
      <div className='mx-10 text-5xl'>
        <span className='font-light'> Your future financial </span>
        <br />
        <span className='font-bold'>Investment made</span> easier
        <br />
        <span>with <span className='text-orange-600 font-bold'>MEFIC</span></span>
      </div>
      <br />

      <p className='mx-10'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <br />
        Lorem Ipsum has been the industry&apos standard dummy text ever since the 1500s.
      </p>
      <br />

      <button className="mx-8 translate-x-0.5 ml-right bg-orange-600 flex right-3 text-white px-4 py-2 rounded">
        Book a consultant
      </button>

      <button className="bg-transparent ml-52 translate-y-[-40px] hover:bg-blue-700 text-white font-bold px-3 py-2 border border-red-700 rounded-lg">
        Login
      </button>

      <Image src="/comp5.png" alt="Vector Image" className=" relative left-1/2 transform -translate-x-1/2 w-full mb-[-10px] animate-moveLeftRight animate-bounce" width={1400} height={400} />
    </div>
  );
}

export default Hero;
