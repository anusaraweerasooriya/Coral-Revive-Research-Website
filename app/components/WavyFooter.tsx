import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Wave Effect at the Top */}
      <div className="absolute inset-x-0 top-0 -translate-y-1/2">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L30,133.3C60,171,120,245,180,266.7C240,288,300,256,360,213.3C420,171,480,117,540,90.7C600,64,660,64,720,69.3C780,75,840,85,900,85.3C960,85,1020,75,1080,96C1140,117,1200,171,1260,192C1320,213,1380,203,1410,197.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>
      {/* Background Image */}
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/image.jpg')" }}>
        <div className="flex flex-col items-center justify-center h-full text-center text-white space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            Embark on a journey of discovery with Coral Wall Diving and Research Center. Book your adventure now
          </h2>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
