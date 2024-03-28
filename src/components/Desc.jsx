import React from 'react';

const ResponsiveLayout = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap justify-center">
        {/* Right Column (Image First in Mobile) */}
        <div className="md:w-1/2 px-4 order-first md:order-last">
          <div className="bg-white rounded-lg mt-0 mb-10 ml-10 mr-10">
            {/* Image for PC */}
            <img
              src="/image-hero-desktop.png"
              alt="Desktop Image"
              className="w-5/6 rounded-md md:block hidden"
            />
            {/* Image for mobile */}
            <img
              src="/image-hero-mobile.png"
              alt="Mobile Image"
              className="w-full rounded-md block md:hidden"
            />
          </div>
        </div>

        {/* Left Column (Text Last in Mobile) */}
        <div className="w-full md:w-1/2 px-4 order-last md:order-first">
          <div className="bg-white rounded-lg p-6 text-left">
              <h1 className='text-6xl font-extrabold '>Make</h1>
              <h1 className='text-6xl font-extrabold '>remote work</h1>
              <br/> <br/> <br/>
              <p className=''> Get your team in sync, no matter your location.<br></br>
                Streamline processes, create team rituals, and <br></br> watch productivity soar.
              </p>
              <br/><br/> <br/>
              <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Learn More
              </button>

              <br/> <br/> <br/> <br/>
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                <div className="mb-6 lg:mb-0">
                  <img
                    src="/client-databiz.svg"
                    className="w-full rounded-md " />
                </div>
                <div className="mb-6 lg:mb-0">
                  <img
                    src="/client-audiophile.svg"
                    className="w-full rounded-md " />
                </div>
                <div className="mb-6 lg:mb-0">
                  <img
                    src="/client-meet.svg"
                    className="w-full rounded-md " />
                </div>
                <div className="mb-6 lg:mb-0">
                  <img
                    src="/client-maker.svg"
                    className="w-full rounded-md " />
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;
