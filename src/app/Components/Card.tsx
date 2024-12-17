// import React from 'react';

// function Card() {
//   return (

// <div className="flex justify-center space-x-8 py-8">
      
// {/* First Card */}
// <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-6">
//   <div className="flex justify-center mb-4">
//     <img src="new1.png" alt="Image 1 Description" className="w-48 h-48 rounded-md object-cover" />
//   </div>
//   <h2 className="text-lg font-bold text-gray-800 mb-2">
//     MEFIC Saudi Riyal Murabaha Fund for the period ending on 2023-12-31
//   </h2>
//   <p className="text-gray-600 text-sm mb-4">
//     Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.
//   </p>
//   <div className="text-right">
//     <a href="#" className="text-orange-500 font-semibold hover:underline">
//       Learn More...
//     </a>
//   </div>
// </div>

// {/* Second Card */}
// <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-6">
//   <div className="flex justify-center mb-4">
//     <img src="new2.png" alt="Image 2 Description" className="w-48 h-48 rounded-md object-cover" />
//   </div>
//   <h2 className="text-lg font-bold text-gray-800 mb-2">
//     MEFIC signs a MOU for 300 rooms with Boudl Hotels and Resorts Group
//   </h2>
//   <p className="text-gray-600 text-sm mb-4">
//     Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.
//   </p>
//   <div className="text-right">
//     <a href="#" className="text-orange-500 font-semibold hover:underline">
//       Learn More...
//     </a>
//   </div>
// </div>

// {/* Third Card */}
// <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-6">
//   <div className="flex justify-center mb-4">
//     <img src="pic.png" alt="Image 3 Description" className="w-48 h-48 rounded-md object-cover" />
//   </div>
//   <h2 className="text-lg font-bold text-gray-800 mb-2">
//     Partnership to establish the first Saudi investment fund to finance film
//   </h2>
//   <p className="text-gray-600 text-sm mb-4">
//     Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.
//   </p>
//   <div className="text-right">
//     <a href="#" className="text-orange-500 font-semibold hover:underline">
//       Learn More...
//     </a>
//   </div>
// </div>

// </div>
// );
// }

// export default Card;
"use client";
import React, { useEffect, useState } from 'react';

const Card: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex justify-center space-x-8 py-8 overflow-hidden">
      
      {/* First Card */}
      <div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-6 transform transition-transform duration-3000 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-center mb-4">
          <img src="new1.png" alt="Image 1 Description" className="w-48 h-48 rounded-md object-cover" />
        </div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          MEFIC Saudi Riyal Murabaha Fund for the period ending on 2023-12-31
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.
        </p>
        <div className="text-right">
          <a href="#" className="text-orange-500 font-semibold hover:underline">
            Learn More...
          </a>
        </div>
      </div>

      {/* Second Card */}
      <div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-6 transform transition-transform duration-3000 delay-500 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-center mb-4">
          <img src="new2.png" alt="Image 2 Description" className="w-48 h-48 rounded-md object-cover" />
        </div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          MEFIC signs a MOU for 300 rooms with Boudl Hotels and Resorts Group
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.
        </p>
        <div className="text-right">
          <a href="#" className="text-orange-500 font-semibold hover:underline">
            Learn More...
          </a>
        </div>
      </div>

      {/* Third Card */}
      <div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-6 transform transition-transform duration-3000 delay-1000 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-center mb-4">
          <img src="pic.png" alt="Image 3 Description" className="w-48 h-48 rounded-md object-cover" />
        </div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          Partnership to establish the first Saudi investment fund to finance film
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.
        </p>
        <div className="text-right">
          <a href="#" className="text-orange-500 font-semibold hover:underline">
            Learn More...
          </a>
        </div>
      </div>

    </div>
  );
}

export default Card;
