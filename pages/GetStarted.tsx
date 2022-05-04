import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GetStarted = () => {
  return (
    <div className='GetStarted'>
      <div className='flex flex-col pt-[1em] pb-[5em] md:px-20 px-4 container'>
        <div className='text-center'>
          <Image src='/Flip Cbt.png' alt='Flip Cbt Logo' width='100px' height='50px' />
        </div>
        <div className='mt-7 text-center mb-[4em]'>
          <h1 className='text-[45px] mobile:text-[35px] font-bold'>Get Started</h1>
          <p className='text-[22px] mobile:text-[20px]'>What do you want to use flip for?</p>
        </div>

        <div className='grid grid-cols-3 mobile:grid-cols-1 mobile:gap-y-5 gap-x-5 mx-auto'>
          <div className='flex flex-col items-center bg-white py-8 px-[3em] rounded-[30px] hover:border-2 hover:border-[#0075FF] shadow-[0px_4px_50px_rgba(0,0,0,0.1)]'>
            <Image src='/school.png' alt='Flip Cbt Logo' width='120px' height='120px' />
            <h2 className='text-[30px] mobile:text-[25px] font-bold mt-5'>School</h2>
            <p className='text-[20px] md:text-[18px] text-center mobile:text-[18px] mt-3'>I want Flip for my school</p>
          </div>
          <div className='flex flex-col items-center bg-white py-8 px-[3em] rounded-[30px] hover:border-2 hover:border-[#0075FF] shadow-[0px_4px_50px_rgba(0,0,0,0.1)]'>
            <Image src='/organisation.png' alt='Flip Cbt Logo' width='120px' height='120px' />
            <h2 className='text-[30px] mobile:text-[25px] font-bold mt-5'>Organisation</h2>
            <p className='text-[20px] md:text-[18px] text-center mobile:text-[18px] mt-3'>I want Flip for my school</p>
          </div>
          <div className='flex flex-col items-center bg-white py-8 px-[3em] rounded-[30px] hover:border-2 hover:border-[#0075FF] shadow-[0px_4px_50px_rgba(0,0,0,0.1)]'>
            <Image src='/market.png' alt='Flip Cbt Logo' width='120px' height='120px' />
            <h2 className='text-[30px] mobile:text-[25px] font-bold mt-5'>Marketers</h2>
            <p className='text-[20px] md:text-[18px] text-center mobile:text-[18px] mt-3'>I want to do marketing for Flip</p>
          </div>
        </div>

        <div className='mt-[7em] flex flex-col items-start mobile:items-center mobile:text-center'>
          <div>
            <Link href="/Register">
              <a className='py-3 text-base text-white bg-[#0075FF] btn-border px-[12em] md:px-[9em] mobile:px-[6em] md:py-5'>Register</a>
            </Link>
          </div>
          <div className='mt-8 md:ml-[3em] text-center mobile:w-full'>
            <p>Alreadly have an account? <span className='text-[#0075FF] font-bold'>Sign in</span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted