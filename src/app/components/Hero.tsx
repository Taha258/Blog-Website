'use client'

import Carousel from "./Carousel";

export default function Hero() {
  return (
    <section>
      {/* Container*/}
      <div className="container mx-auto bg-[#e9eff7] p-5">
        {/* For Flex Div */}
        <div className="flex flex-col justify-between mt-5 md:flex-row md:mt-0">
          {/* Left Div */}
          <div className="basis-[40%] py-3 px-10 flex flex-col items-start justify-center">
            <h1 className="text-5xl font-bold text-[#283b60] mb-6">
              Browse & <br /> Select E-Books
            </h1>
            <p className="text-gray-600 mb-6 text-[20px]">
              Find the best e-books from your favorite writers, explore hundreds
              of books with all possible categories, take advantage of the 50%
              discount and much more.
            </p>
            <button className="bg-[#283b60] text-white font-semibold shadow-xl px-4 py-2 rounded-sm hover:bg-blue-600 transition duration-500">
              Explore Now
            </button>
          </div>
          {/* End Left Div */}
          {/* Right Div */}
          <div className="basis-[60%] bg-pink flex justify-center items-center">
              <Carousel/>
            {/* <Image src={"/book-10.png"} alt="book" width={200} height={200} /> */}
        
          </div>{/* End Right Div */}
          
        </div>{/*End For Flex Div */}
        
      </div>
    </section>
  );
}
