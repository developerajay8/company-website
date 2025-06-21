"use client";
import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
const ProductSuiteCarousel = () => {
  return (
    <div className="md:py-[80px] py-[48px] bg-black ">
      <div className="xl:px-0 px-[16px] max-w-[1240px] mx-auto pb-[48px] ">
        <h1 className='text-[#F6F6F6] text-[48px] font-medium text-center'>
          Our Product Suite
        </h1>
      </div>
      <div className="xl:px-0 px-[16px]  max-w-[1240px] relative flex gap-[41px] mx-auto  ">
        <div className="w-[15%] ">

          <div className="absolute left-[-6%] top-1/2 transform -translate-y-1/2 rotate-[-90deg] text-7xl tracking-widest font-bold text-gray-400">
            GEN AI
          </div>
          <div className="flex absolute bottom-0 items-center gap-6 justify-center py-8">
            {/* Left Arrow */}
            <div className="w-[60px] h-[60px] rounded-full border-[2px] cursor-pointer border-[#FFFF00] flex items-center justify-center hover:scale-110 transition">
              <ChevronLeft size={32} className="text-[#FFFF00]" />
            </div>

            {/* Right Arrow */}
            <div className="w-[60px] h-[60px] rounded-full border-[2px] cursor-pointer border-[#FFFF00] flex items-center justify-center hover:scale-110 transition">
              <ChevronRight size={32} className="text-[#FFFF00]" />
            </div>
          </div>

        </div>
        <div className="w-[85%] md:flex flex-wrap gap-4">
          <div className="w-[48%] relative">
            <img src="/images/image (34).png" alt="" className='relative' />
            <div className='absolute top-40 left-6'>
              <button className="rounded-[10px] text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
                Read More
              </button>
            </div>
          </div>
          <div className="w-[48%]">
            <img src="/images/image (34).png" alt="" />
          </div>
          <div className="w-[48%]">
            <img src="/images/image (34).png" alt="" />
          </div>
          <div className="w-[48%]">
            <img src="/images/image (34).png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSuiteCarousel;
