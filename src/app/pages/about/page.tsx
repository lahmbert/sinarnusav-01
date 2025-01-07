import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Homepage = () => {
  return (
    <div>
      <div className="">
        {/* Banner Section */}
        <Navbar />
        <section className="">
          <div className="">
            <img
              className="-translate-y-16 h-[15rem] w-full"
              src="/img/baner-02.jpg"
            />
          </div>
          <div className="text-white capitalize text-[3rem] flex justify-center -translate-y-[13rem] font-extrabold">
            About us
          </div>
        </section>

        {/* Our Categories Section */}
        <section className="-translate-y-10 pb-[8rem] flex flex-col sm:flex-row sm:justify-between px-4 sm:px-[5rem] lg:px-[10rem]">
          <div className="sm:hidden flex justify-center w-[80%] text-center mx-auto mb-10 border-4 border-slate-400 sm:mx-10 sm:mt-10 h-[30%]">
            <img
              className="translate-x-3 hover:translate-x-8 hover:-translate-y-8 duration-500 -translate-y-3"
              src="/img/about-01.jpg"
            />
          </div>
          <div>
            <span className="text-[2rem] flex sm:justify-start justify-center font-extrabold text-gray-800">
              Our Story
            </span>
            <p className="py-8 text-slate-600">
              Hello! We welcome you with warmth and friendliness, our commitment
              is to serve all our clients quickly and with a sense of
              responsibility. We are PT. SINAR DAGANG NUSANTARA, is a company
              that was launched on July 15 2024 in Makassar City. Focus Our
              company is engaged in trading laboratory equipment and several
              other fields of work. And we declare that we are ready to be the
              best choice as your partner.
            </p>
            <p className=" text-slate-600">
              Any questions? Jl. Piagam II, BTP. BLOK AE 817, Kel. Katimbang,
              Kec. Biringkanaya, Kota Makassar, Sulawesi Selatan 90241,
              sinarnusa.id@gmail.com
            </p>
          </div>
          <div className="sm:flex hidden justify-center w-[150%] border-4 border-slate-400 sm:mx-10 sm:mt-10 h-[30%]">
            <img
              className="translate-x-3 hover:translate-x-8 hover:-translate-y-8 duration-500 -translate-y-3"
              src="/img/about-01.jpg"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
