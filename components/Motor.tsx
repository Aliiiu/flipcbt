import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Motor = () => {
  return (
    <section className='flex flex-col py-20 mobile:px-5 text-center md:px-20'>
      <div className="container">
        <div className='mb-[4rem]'>
          <h2 className='font-bold text-[40px] mb-4 mobile:text-[28px]'>Great for Schools,<br />Loved By Organizations.</h2>
          <p className='text-sm'>
            Essential in secondary schools, universities and even organizations for assessment of all kinds.  
          </p>
        </div>
        <div>
          <div className='flex justify-between lg:mx-auto md:w-full lg:w-9/12 mobile:flex-col mobile:space-y-5'>
            <div className='flex flex-col items-center text-center bg-[#00BE7E] bg-opacity-20 rounded-3xl overflow-hidden md:mr-5'>
              <div className='flex flex-col items-center py-10  md:px-[4rem] lg:px-[6rem]'>
                <Image src='/students.png' alt='students illustration' width='150px' height='150px' />
                <h2 className='text-xl font-bold mt-3'>Students</h2>
                <p className='my-5'>Business and organisation of all size.</p>
                <Link href="#">
                  <a className='text-white text-base py-3 px-9 bg-[#00BE7E] btn-border'>LEARN MORE</a>
                </Link>
              </div>
              <div className='bg-[#00BE7E] h-1 w-full'></div>
            </div>
            <div className='flex flex-col items-center text-center bg-[#FFAD4A] bg-opacity-20 rounded-3xl overflow-hidden'>
              <div className='flex flex-col items-center py-10 md:px-[4rem] lg:px-[6rem]'>
                <Image src='/organizations.png' alt='Organisation Illustration' width='150px' height='150px' />
                <h2 className='text-xl font-bold mt-3'>Organizations</h2>
                <p className='my-5'>It is economical, fast and accurate.</p>
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