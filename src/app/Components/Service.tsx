// 'use client'
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';

import Image from "next/image";

// const Service: React.FC = () => {
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
   
    
// <section className='bg-gray-900 mt-1 h-auto'>
//   <h1 className='text-white mx-4 sm:mx-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-10 py-20 font-thin'>
//     Our <span className='font-bold'>Services</span> & <span className='text-orange-600 font-bold'>Expertise</span>
//   </h1>

//   <div className='flex flex-col items-center min-screen-h'>
//     <p className='text-white text-xs sm:text-sm lg:text-base px-4 sm:px-8 md:px-32 lg:px-64 text-center'>
//       Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of
//       crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached
//       waste highlights game synchronize.
//     </p>

//     <p className='text-white text-2xl sm:text-3xl lg:text-4xl font-sans mt-8 text-center'>
//       <span style={{ fontWeight: 100 }}>What</span> <br />
//       <span className='font-bold'>problem</span> <br /> can we <span className='font-bold text-orange-600'>solve</span> <br />
//       <span className='font-bold text-orange-600'>
//         together<span className='text-white'>?</span>
//       </span>
//     </p>
//   </div>

//   <div className='flex flex-col sm:flex-row justify-center items-center mt-12'>
//     <Image className='w-60 sm:w-80 mb-8 sm:mb-0 sm:mr-4' src='/card2.png' alt='Card 2' width={60} height={100}  />
//     <Image className='w-60 sm:w-80 mb-8 sm:mb-0 sm:mr-4' src='/card.png' alt='Card 1' width={60} height={100} />
//     <Image className='w-60 sm:w-80' src='card3.png' alt='/card 3.png'width={60} height={100} />
//   </div>

//   <img className='w-full mt-12' src='/comp6.png' alt='Comp 6' width={1400} height={500}/>
// </section>

      
    
//   )
// }

// export default Service
// 'use client'
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';

// const Service: React.FC = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <section className='bg-gray-900 h-auto mt-10'>
//       <div className=" flex flex-col gap-4 text-center px-6 ml-10">
//       <h1 className='text-white mx-5 sm:mx-8 text-2xl sm:text-3xl md:text-4xl lg:text-24xl px-10 py-10 font-thin text-center justify-left items-align'>
//         Our <span className='font-bold'>Services</span> & <span className='text-orange-600 font-bold'>Expertise</span>
//       </h1>
//         <p className='text-white text-xs sm:text-sm sm:px-60 md:px-10 lg:px-60 text-left mt-10 '>
//           Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of
//           crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached
//           waste highlights game synchronize.
//         </p>
       
//       </div>
//       <Image src="/rect.png" alt={"line"} width={200} height={2} className='mx-20'/>

//       {/* <div className='flex flex-col  min-screen-h'>
//         <p className='text-white text-xs sm:text-sm lg:text-base px-1 sm:px-60 md:px-10 lg:px-80 text-left '>
//           Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of
//           crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached
//           waste highlights game synchronize.
//         </p>
//         </div> */}
        
//   <div className='px-6 lg:px-20 mt-12 flex flex-col lg:flex-row gap-12 items-center lg:items-start'>
        
//         <p className='text-white text-2xl sm:text-3xl lg:text-4xl font-sans mt-8 text-left items-left ml-20'>
//           <span style={{ fontWeight: 100 }}>What</span> <br />
//           <span className='font-bold'>problem</span> <br /> can we <span className='font-bold text-orange-600'>solve</span> <br />
//           <span className='font-bold text-orange-600'>
//             together<span className='text-white'>?</span>
//           </span>
//         </p>
      

//       <div className='flex flex-col sm:flex-row justify-center items-center mt-12'>
//         <Image className='w-60 sm:w-80 mb-8 sm:mb-0 sm:mr-4' src='/card2.png' alt='Card 2' width={60} height={100} />
//         <Image className='w-60 sm:w-80 mb-8 sm:mb-0 sm:mr-4' src='/card.png' alt='Card 1' width={60} height={100} />
//         <Image className='w-60 sm:w-80' src='/card3.png' alt='Card 3' width={60} height={100} />
//       </div>
//     </div>

//       <Image className='w-full mt-15  mt-10 relative left-1/2 transform -translate-x-1/2 w-full mb-[-10px] animate-moveLeftRight animate-bounce' src='/comp6.png' alt='Comp 6' width={1400} height={500} />
//     </section>
//   );
// }

// export default Service;


// 'use client';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';

// const Service: React.FC = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <section className='bg-gray-900 py-16'>
//       {/* Header Section */}
//       <div className='text-center px-6'>
//         <h1 className='text-white text-3xl sm:text-4xl md:text-5xl font-thin'>
//           Our <span className='font-bold'>Services</span> & <span className='text-orange-600 font-bold'>Expertise</span>
//         </h1>
//         <p className='text-white text-sm sm:text-base max-w-2xl mx-auto mt-6'>
//           Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of
//           crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached
//           waste highlights game synchronize.
//         </p>
//         <div className='w-20 h-1 bg-orange-600 mx-auto my-6'></div>
//       </div>

//       {/* What Problem Section */}
//       <div className='px-6 lg:px-20 mt-12 flex flex-col lg:flex-row gap-12 items-center lg:items-start'>
//         <div className='lg:w-1/3 text-white text-left'>
//           <p className='text-3xl sm:text-4xl font-light'>
//             What <br />
//             <span className='font-bold'>problem</span> <br />
//             can we <span className='font-bold text-orange-600'>solve</span> <br />
//             <span className='font-bold text-orange-600'>
//               together<span className='text-white'>?</span>
//             </span>
//           </p>
//         </div>

//         {/* Cards Section */}
//         <div className='lg:w-2/3 flex flex-col sm:flex-row justify-center items-center gap-6'>
//           <div className='bg-white rounded-lg shadow-md p-6 w-full sm:w-1/3'>
//             <Image src="/card2.png" alt='Card 2' width={80} height={80} className='mx-auto' />
//             <h3 className='font-bold text-lg mt-4 text-center'>Assets Management</h3>
//             <p className='text-sm text-gray-700 mt-2 text-center'>
//               Collaboratively administrate turnkey channels...
//             </p>
//           </div>
//           <div className='bg-white rounded-lg shadow-md p-6 w-full sm:w-1/3'>
//             <Image src="/card.png" alt='Card 1' width={80} height={80} className='mx-auto' />
//             <h3 className='font-bold text-lg mt-4 text-center'>Private Equity & IB</h3>
//             <p className='text-sm text-gray-700 mt-2 text-center'>
//               Collaboratively administrate turnkey channels...
//             </p>
//           </div>
//           <div className='bg-white rounded-lg shadow-md p-6 w-full sm:w-1/3'>
//             <Image src="/card3.png" alt='Card 3' width={80} height={80} className='mx-auto' />
//             <h3 className='font-bold text-lg mt-4 text-center'>Real Estate Investments</h3>
//             <p className='text-sm text-gray-700 mt-2 text-center'>
//               Collaboratively administrate turnkey channels...
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className='relative mt-100'>
//         <Image src='/comp6.png' alt='Footer' width={1400} height={500} className='w-full object-cover' />
//       </div>
//     </section>
//   );
// }

// export default Service;

// const Services = () => {
//   return (
//     <section className="bg-[#10131a] py-12 text-white">
//       <div className="container mx-auto px-6">
//         {/* Title Section */}
//         <h2 className="text-4xl font-semibold text-center mb-8">
//           Our <span className="text-white">Services</span> &{' '}
//           <span className="text-red-500">Expertise</span>
//         </h2>

//         <p className="text-center text-gray-400 mb-12">
//           Office ipsum you must be muted. Conversation banner gave dive
//           investigation chime usability whatever.
//         </p>

//         {/* Card Section */}
//         <div className="flex flex-wrap justify-center gap-8">
//           {/* Card 1 */}
//           <div className="bg-white p-4 rounded-lg shadow-lg w-80 hover:scale-105 transition-transform">
//             <img
//               src="/card2.png"
//               alt="Assets Management"
//               className="rounded-lg"
//             />
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white p-4 rounded-lg shadow-lg w-80 hover:scale-105 transition-transform">
//             <img
//               src="/card3.png"
//               alt="Private Equity"
//               className="rounded-lg"
//             />
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white p-4 rounded-lg shadow-lg w-80 hover:scale-105 transition-transform">
//             <img
//               src="/card.png"
//               alt="Real Estate"
//               className="rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Bottom Tagline */}
//         <div className="text-center mt-12">
//           <h3 className="text-3xl">
//             What <span className="text-gray-300">problem</span> can we{' '}
//             <span className="text-orange-500 font-bold">solve</span>{' '}
//             <span className="text-orange-600 font-bold">together</span>?
//           </h3>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
const Services = () => {
  return (
    <section className="relative bg-[#10131a] text-white overflow-hidden h-screen">
      {/* Container */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        {/* Top Section - Heading and Paragraph */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-0 w-[50%] ">
            Our <span className="text-white">Services</span> &{" "}
            <span className="text-orange-500">Expertise</span>
            <br />
            <hr className="w-36  mt-5"/> 
          </h2>
          <p className="text-gray-400 max--2xl leading-relaxed w-[50%]">
            Office ipsum you must be muted. Conversation banner gave dive
            investigation chime usability whatever. Winning of crystallize
            another container reinvent stands. Left you viral relaxation unlock
            t-shaped.
          </p>
        </div>
        {/* Bottom Section - Second Heading and Cards */}
        <div className="flex gap-10 items-start">
          {/* Second Heading */}
          <h3 className="text-2xl md:text-3xl w-[20%]  font-bold mb-8 text-left justify-left w-28 mt-8">
            What <span className="text-gray-300">problem</span> can we{" "}
            <span className="text-orange-500">solve</span>{" "}
            <span className="text-orange-600">together</span>?
          </h3>

          {/* Cards */}
          <div className="flex w-[80%] flex-wrap">
            {/* Card 1 */}
        
              <Image
                src="/card.png"
                alt="Assets Management"
                className="rounded-lg shadow-lg"
                width={300}
                height={600}
              />
            

            {/* Card 2 */}
            
              <Image
                src="/card3.png"
                alt="Private Equity & IB"
                className="rounded-lg shadow-lg"
                width={300}
                height={600}
              />
            

            {/* Card 3 */}
            
              <Image
                src="/card2.png"
                alt="Real Estate Investments"
                className="rounded-lg shadow-lg"
                width={300}
                height={600} />
            
          </div>
        </div>
      </div>

      {/* Bottom Left Section with Vector */}
      <div className="absolute left-0 bottom-0 mt-100 w-full">
        <div className="relative">
          {/* Vector Image with Animation */}
          <Image
            src="/comp6.png"
            alt="Vector Design"
            className="w-full h-auto object-cover animate-moveUpDown"
            width={1350}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

        