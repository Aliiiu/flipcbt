import React from 'react';
import Image from 'next/image';

const Motor = () => {
  return (
    <section className='flex flex-col py-20 mx-5 text-center md:px-20'>
      <div className="container">
        <div className='mb-[5rem]'>
          <h1 className='mb-[1rem] mobile:text-[32px] text-[55px] font-bold'>Great for School,<br />Loved By Organizations </h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam rem sunt quaerat sapiente. Quam cum maxime!</p>
        </div>
        <div>
          <div className='flex justify-between md:mx-auto md:w-11/12 lg:w-9/12 mobile:flex-col mobile:space-y-5'>
            <div className='flex flex-col items-center text-center bg-[#00BE7E] bg-opacity-20 rounded-3xl overflow-hidden'>
              <div className='pt-5 md:px-[4rem] lg:px-[6rem]'>
                <Image src='/students.png' alt='students illustration' width='150px' height='150px' />
                <h1 className='text-lg font-bold'>Students</h1>
                <p className='my-5 text-sm'>Business and organisation of all size.</p>
                <button className='text-white text-base py-4 px-10 mb-10 bg-[#00BE7E] rounded-md'>
                  LEARN MORE
                </button>
              </div>
              <div className='bg-[#00BE7E] w-full h-2'></div>
            </div>
            <div className='flex flex-col items-center text-center bg-[#FFAD4A] bg-opacity-20 rounded-3xl overflow-hidden'>
              <div className='pt-5 md:px-[4rem] lg:px-[6rem]'>
                <Image src='/organizations.png' alt='Organisation Illustration' width='150px' height='150px' />
                <h1 className='text-lg font-bold'>Organisation</h1>
                <h4 className='my-5 text-sm'>Business and organisation of all size.</h4>
                <button className='text-white text-base py-4 px-10 mb-10 bg-[#FFAD4A] rounded-md'>
                  LEARN MORE
                </button>
              </div>
              <div className='bg-[#FFAD4A] h-2 w-full'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Motor