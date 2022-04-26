import React from 'react';
import Link from 'next/link';

const Marketing = () => {
  return (
    <section className="md:px-20 mobile:px-4 py-20 bg-[url('/FlipCbtBg2.png')] bg-contain bg-[#0075FF] bg-opacity-90">
      <div className='container flex flex-col justify-center items-center space-y-7 text-center'>
        <h2 className='font-bold text-[40px] mb-4 mobile:text-[28px] text-white'>Are you a marketer?</h2>
        <p className='text-white'>Marketing is the activity, institutions, and processes for creating, communicating,
          delivering, and exchanging, offerings that have value.</p>
        <Link href="#">
          <a className='text-base text-white bg-black btn-border px-12 py-4 text-[14px]'>
            APPLY NOW
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Marketing