import React from 'react';

const Footer = () => {
  return (
    <div className="bg-slate-700">
      <div className="md:flex grid grid-cols-2 text-center  md:flex-row justify-between gap-10 pt-10 px-5 md:px-20">
        {/* Categories Section */}
        <div className="text-start flex flex-col w-full">
          <div className="py-4 text-white uppercase font-bold">Categories</div>
          <div className="flex flex-col gap-2">
            {['Link 1', 'Link 2', 'Link 3', 'Link 4'].map((link, index) => (
              <div
                key={index}
                className="text-sm pt-2 text-gray-400 hover:text-blue-500 capitalize duration-300 cursor-pointer"
              >
                {link}
              </div>
            ))}
          </div>
        </div>
        {/* Help Section */}
        <div className="text-start flex flex-col w-full">
          <div className="py-4 text-white uppercase font-bold">Help</div>
          <div className="flex flex-col gap-2">
            {['track order', 'returns', 'shipping', 'FAQs'].map(
              (item, index) => (
                <div
                  key={index}
                  className="text-sm pt-2 text-gray-400 hover:text-blue-500 capitalize duration-300 cursor-pointer"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
        {/* Address Section */}
        <div className="text-start flex flex-col w-full">
          <div className="py-4 text-white uppercase font-bold">Address</div>
          <div className="flex flex-col gap-2">
            <div className="text-sm pt-4 text-gray-300">
              <p>
                Jl. Piagam II, BTP. BLOK AE 817, Kel. Katimbang, Kec.
                Biringkanaya, Kota Makassar, Sulawesi Selatan 90241
              </p>
            </div>
            <div className="text-sm pt-4 text-gray-300">
              <div className="pb-4">Phone</div>
              <div>Email</div>
            </div>
          </div>
        </div>
        {/* Newsletter Section */}
        <div className="text-start flex flex-col w-full">
          <div className="py-4 text-white uppercase font-bold">Newsletter</div>
          <div className="flex w-full h-full justify-end flex-col gap-4">
            <div className="text-sm w-full text-gray-400">
              <input
                placeholder="user@email.com"
                type="email"
                className="bg-slate-700 w-full border-b border-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <button className="p-2 px-8 bg-blue-500 text-white hover:bg-blue-800 duration-300 uppercase font-semibold text-sm rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="px-5 md:px-20 py-10 flex flex-col items-center text-center">
        <div className="py-8 text-white">Social Media</div>
        <div className="text-slate-400">
          Copyright &copy;{new Date().getFullYear()} PT Sinar Dagang Nusantara
        </div>
      </div>
    </div>
  );
};

export default Footer;
