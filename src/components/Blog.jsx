import React from "react"

const Blog = () => {

    return(
        <div className='flex flex-row h-screen '>
            <div className='flex flex-col h-screen justify-start justify-items-start pt-12 pr-10 pb-12 pl-10 w-1/2 '> 
                <div className='justify-start justify-items-start text-left'>
                    <h1 className='text-6xl font-extrabold '>Make</h1>
                    <h1 className='text-6xl font-extrabold '>remote work</h1>
                </div>  
                <div className='justify-start justify-items-start text-left'>
                    <p className='pt-12 pb-12'> Get your team in sync, no matter your location.<br></br>
                    Streamline processes, create team rituals, and <br></br> watch productivity soar.
                </p>
                </div>
                <div className='pt-8 pb-12 text-left'>
                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Learn More
                    </button>
                </div>  
                <div className="container p-4 pt-12 pr-6  ">
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 text-left">
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
            <div className='h-screen w-1/2 '> 
                <div className='mt-0 mb-30 ml-20 mr-20 pb-10 pt-4'>  
                <img className='' src="/image-hero-desktop.png"/>
                </div>  
            </div>
        </div>
    )

}

export default Blog