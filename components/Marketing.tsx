import React from 'react';
import Link from 'next/link';

const Marketing = () => {
  return (
    <section className="md:px-20 mobile:px-3 py-[6em] bg-[url('/FlipCbtBg2.png')] bg-contain bg-[#0075FF] bg-opacity-90">
      <div className='container flex flex-col justify-center items-center text-center'>
        <h2 className='font-semibold text-[40px] mobile:text-[28px] text-white mb-[15px]'>Want to do martketing with Flip?</h2>
        <p className='text-white md:mb-[30px] mobile:hidden'>Are you a marketer? Would you like to market the FLIP app, turning <br /> prospects to clients?</p>
        <p className='md:hidden text-white mb-[20px]'>Marketing is the activity, institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value.</p>
        <Link href="#">
          <a className='text-base text-white bg-black btn-border px-12 py-4 text-[14px]'>
            CLICK HERE
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Marketing