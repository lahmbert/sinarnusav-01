import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="sm:-translate-y-[4rem] -translate-y-[6rem]">
        {/* Banner Section */}
        <section>
          <div
            className="h-screen flex items-center justify-center bg-center"
            style={{
              backgroundImage: "url('/img/banner_1723421074.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain', // Pastikan seluruh gambar termuat
            }}
          >
            <div className="h-screen translate-y-10 w-full">
              <div className="text-black h-[89vh] flex justify-center sm:justify-start px-4 sm:px-[5rem] lg:px-[10rem] items-center text-center sm:text-start">
                <div className="flex flex-col gap-4">
                  {/* Judul */}
                  <span className="text-3xl sm:text-[5rem] font-bold text-black leading-tight">
                    Testing Equipment
                  </span>

                  {/* Tombol */}
                  <div className="flex justify-center sm:justify-start">
                    <button className="py-2 px-6 capitalize bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-800 duration-300 text-sm sm:text-base">
                      lihat sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Categories Section */}
        <section className="h-auto py-10 px-4 sm:px-[5rem] lg:px-[10rem]">
          <div className="flex justify-center text-center flex-col items-center relative w-full">
            {/* Garis Horizontal */}
            <div className="absolute top-1/2 w-full border-b-2 border-slate-400"></div>

            {/* Title */}
            <div className="bg-white w-3/5 sm:w-2/5 lg:w-1/4 p-2 px-4 relative z-10">
              <div className="text-xl sm:text-3xl font-extrabold capitalize pb-2">
                our categories
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview Section */}
        <section className="h-auto py-10 px-4 sm:px-[5rem] lg:px-[10rem]">
          <div className="flex justify-center text-center flex-col items-center relative w-full">
            {/* Garis Horizontal */}
            <div className="absolute top-1/2 w-full border-b-2 border-slate-400"></div>

            {/* Title */}
            <div className="bg-white w-11/12 sm:w-4/5 lg:w-3/5 p-2 px-4 relative z-10">
              <div className="text-xl sm:text-3xl font-extrabold capitalize pb-2">
                Product Overview
              </div>
              <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae esse veniam delectus eius cum, placeat temporibus
                commodi natus.
              </span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
