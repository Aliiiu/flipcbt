import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Motor = () => {
  return (
    <section className='flex flex-col py-20 mobile:px-5 text-center md:px-20'>
      <div className="container">
        <div className='mb-[4rem]'>
          <div className='flex justify-center'>
            <div className='relative'>
              <h2 className='inline-block z-10 font-bold text-[40px] mb-4 mobile:text-[25px]'>Great for Schools,<br />Loved By Organizations.</h2>
              <span className='inline-block absolute top-[14px] md:top-[25px] right-[54px] md:right-[75px] bg-[rgba(0,117,255,0.5)] rounded-[8px] w-[80px] md:w-[145px] mobile:h-[14px] md:h-[20px]'></span>
              <span className='inline-block absolute top-[52px] md:top-[85px] right-[13px] md:right-[13px] bg-[rgba(0,117,255,0.5)] rounded-[8px] w-[160px] md:w-[270px] mobile:h-[14px] md:h-[20px]'></span>
            </div>
          </div>
          <p className='text-sm'>
            Essential in secondary schools, universities and even organizations for assessment of all kinds.  
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 mobile:grid-cols-1 md:gap-x-[1em] lg:gap-x-[4em] mobile:gap-y-5 md:mx-auto md:w-full lg:w-10/12'>
            <div className='flex flex-col items-center text-center bg-[#00BE7E] bg-opacity-20 rounded-3xl overflow-hidden'>
              <div className='py-10 '>
                <div className='mobile:hidden'>
                  <Image src='/students.png' alt='students illustration' width='300px' height='300px'/>
                </div>
                <div className='md:hidden'>
                  <Image src='/students.png' alt='students illustration' width='200px' height='200px'/>
                </div>
                <h2 className='text-xl font-bold mt-3'>Students</h2>
                <p className='my-5'>It is economical, fast and accurate.</p>
                <Link href="#">
                  <a className='text-white text-base py-3 px-9 bg-[#00BE7E] btn-border'>LEARN MORE</a>
                </Link>
              </div>
              <div className='bg-[#00BE7E] h-1 w-full'></div>
            </div>
            <div className='flex flex-col items-center text-center bg-[#FFAD4A] bg-opacity-20 rounded-3xl overflow-hidden'>
              <div className='py-10'>
                <div className='mobile:hidden'>
                  <Image src='/organizations.png' alt='Organisation Illustration' width='300px' height='300px' />
                </div>
                <div className='md:hidden'>
                  <Image src='/organizations.png' alt='Organisation Illustration' width='200px' height='200px' />
                </div>
                <h2 className='text-xl font-bold mt-3'>Organisations</h2>
                <p className='my-5'>Guaranteed benefits for your organisation.</p>
                <Link href="#">
                  <a className='text-white text-base py-3 px-9 bg-[#FFAD4A] btn-border'>LEARN MORE</a>
                </Link>
              </div>
              <div className='bg-[#FFAD4A] h-1 w-full'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Motor