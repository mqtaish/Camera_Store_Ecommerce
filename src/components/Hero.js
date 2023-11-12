import React from 'react';


// components
import CategoryNav from './CategoryNav'
import MainSlider from './MainSlider'

// images
import PromoImg1 from '../img/promo_img1.png'
import PromoImg2 from '../img/promo_img2.png'



const Hero = () => {

  return (<section className='mb-[30px] pt-36 lg:pt-0'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]'>
        {/* sidebar */}
        <div>
          <CategoryNav />
        </div>
        {/* main & slider */}
        <div className='w-full max-w-lg  lg:max-w-[734px] mx-auto'>
          <MainSlider />
        </div>

        {/* promo */}
        <div className='flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px] bg-pink-50/10'>
          {/* promo 1 */}
          <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
            {/* text */}
            <div className='flex flex-col max-w-[144px] h-full justify-center'>
              <div className='text-[20px] uppercase font-medium leading-tight mb-4'>Save 35% all dslr cameras</div>
              <a href="#" className='uppercase text-accent'>Shop Now </a>
            </div>
            {/* img */}
            <img className='absolute z-20 top-[-30px] right-0' src={PromoImg1} alt='' />
          </div>
          {/* promo 2 */}
          <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
            {/* text */}
            <div className='flex flex-col max-w-[144px] h-full justify-center'>
              <div className='text-[20px] uppercase font-medium leading-tight mb-4'>Save 45% of mirrorless cameras</div>
              <a href="#" className='uppercase text-accent'>Shop Now </a>
            </div>
            {/* img */}
            <img className='absolute z-20 top-4 right-0' src={PromoImg2} alt='' />
          </div>
        </div>
      </div>

    </div>

  </section>)

};

export default Hero;
