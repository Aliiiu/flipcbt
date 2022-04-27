import React, { Fragment } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import profile from '../public/profile.svg'
import profile2 from '../public/profile2.svg'
import FeatureOrganisation from '../components/FeatureOrganisation';
import BenefitOrganisation from '../components/BenefitOrganisation';
import Guarantee from '../components/Guarantee';

const ForOrganisation = () => {
  return (
    <Fragment>
      <div className='homePage'>
        <section className="relative w-full h-screen px-5 md:px-20 mobile:text-center ForOrganisation">
            <div className='container flex flex-row mobile:w-auto pt-[5em]'>
              <div className='flex flex-col space-y-10 md:w-6/12 mobile:w-full'>
                <h1 className='lg:text-[50px] md:text-[35px] font-extrabold mobile:text-[32px]'>
                  We Design and Implement an online computer-based test system.
                </h1>
                <p>
                  Flip is a CBT software as a source to provide tests, examination management and
                  quick grading system and collation of results instead of the use of pen and paper.
                </p>
                <div className='flex mobile:justify-center'>
                  <Link href="/">
                    <a className='py-3 text-base text-white bg-[#0075FF] btn-border px-[4rem] md:py-5'>GET STARTED</a>
                  </Link>
                </div>
              </div>
              <div className='w-6/12 lg:block md:hidden mobile:hidden'>
                {/* <Image src='/bg.png' className="img" alt='logo' width='650px' height='550px' /> */}
                <div className='absolute right-[25em] flex px-10 py-2 bg-white flip-border bottom-[2em] rounded-lg blue-glow'>
                  <Image src={profile2} alt='profile badge' width="55px" height="55px" />
                  <div className='flex flex-col ml-3'>
                    <h1 className='text-[30px] text-[#FFBC6C] font-semibold'>50K</h1>
                    <p>Total Active Student</p>
                  </div>
                </div>
                <div className='absolute right-5 flex px-10 py-2 bg-white flip-border bottom-[150px] rounded-lg blue-glow'>
                  <Image src={profile} alt='profile badge' width="55px" height="55px" />
                  <div className='flex flex-col ml-3'>
                    <h1 className='text-[30px] text-[#00BE7E] font-semibold'>7.5K</h1>
                    <p>Total Active Task</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
      <FeatureOrganisation />
      <BenefitOrganisation />
      <section className="md:px-20 mobile:px-4 py-20 bg-[url('/FlipCbtBg2.png')] bg-contain bg-[#0075FF] bg-opacity-90">
      <div className='container flex flex-col items-center justify-center text-center space-y-7'>
        <h2 className='font-bold text-[40px] mb-4 mobile:text-[28px] text-white'>Ready to get started?</h2>
        <p className='text-white'>Marketing is the activity, institutions, and processes for creating, communicating,
          delivering, and exchanging, offerings that have value.</p>
        <Link href="#">
          <a className='text-base text-white bg-black btn-border px-12 py-4 text-[14px]'>
            APPLY NOW
          </a>
        </Link>
      </div>
      </section>
      <Guarantee />
    </Fragment>
  )
}

export default ForOrganisation