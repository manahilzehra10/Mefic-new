// "use client";
// import { useEffect, useState } from 'react';
// import Image from 'next/image';

// const Comps = () => {
//   const [isBouncing, setIsBouncing] = useState(false);

//   useEffect(() => {
//     setIsBouncing(true);
//   }, []);

//   return (
//     <div className="flex justify-center items-center space-x-4">
//       <div className={`transition-transform duration-1000 ${isBouncing ? 'animate-bounce' : ''}`}>
//         <Image src="/meras.png" alt="Logo 1" width={100} height={100} />
//       </div>
//       <div className={`transition-transform duration-1000 ${isBouncing ? 'animate-bounce' : ''}`}>
//         <Image src="/newlogo1.png" alt="Logo 2" width={100} height={100} />
//       </div>
//       <div className={`transition-transform duration-1000 ${isBouncing ? 'animate-bounce' : ''}`}>
//         <Image src="/karam.png" alt="Logo 3" width={100} height={100} />
//       </div>
//       <div className={`transition-transform duration-1000 ${isBouncing ? 'animate-bounce' : ''}`}>
//         <Image src="/logoimage.png" alt="Logo 4" width={100} height={100} />
//       </div>
//       <div className={`transition-transform duration-1000 ${isBouncing ? 'animate-bounce' : ''}`}>
//         <Image src="/Group 25.png" alt="Logo 5" width={100} height={100} />
//       </div>
//       <div className={`transition-transform duration-1000 ${isBouncing ? 'animate-bounce' : ''}`}>
//         <Image src="/Group 26.png" alt="Logo 6" width={100} height={100} />
//       </div>
//     </div>
//   );
// };

// export default Comps;

"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Comps = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 1}
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center items-center space-x-4">
      <div className={`transition-filter duration-1000 ${isVisible ? 'filter-none' : 'blur-sm'}`}>
        <Image src="/meras.png" alt="Logo 1" width={100} height={100} />
      </div>
      <div className={`transition-filter duration-1000 ${isVisible ? 'filter-none' : 'blur-sm'}`}>
        <Image src="/newlogo1.png" alt="Logo 2" width={100} height={100} />
      </div>
      <div className={`transition-filter duration-1000 ${isVisible ? 'filter-none' : 'blur-sm'}`}>
        <Image src="/karam.png" alt="Logo 3" width={100} height={100} />
      </div>
      <div className={`transition-filter duration-1000 ${isVisible ? 'filter-none' : 'blur-sm'}`}>
        <Image src="/983861_721819601272849_4606720288899839424_n 1.png" alt="Logo 4" width={100} height={100} />
      </div>
      <div className={`transition-filter duration-1000 ${isVisible ? 'filter-none' : 'blur-sm'}`}>
        <Image src="/Group 25.png" alt="Logo 5" width={100} height={100} />
      </div>
      <div className={`transition-filter duration-1000 ${isVisible ? 'filter-none' : 'blur-sm'}`}>
        <Image src="/Group 26.png" alt="Logo 6" width={100} height={100} />
      </div>
    </div>
  );
};

export default Comps;

