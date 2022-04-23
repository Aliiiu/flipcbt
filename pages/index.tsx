import type { NextPage } from 'next'
import React, {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Feature from '../components/Feature'
import profile from '../public/profile.svg'
import profile2 from '../public/profile2.svg'
import Button from '../components/Button'
import Benefit from '../components/Benefit'
import Motor from '../components/Motor'
import Guarantee from '../components/Guarantee'
import Faqs from '../components/Faqs'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Flip CBT</title>
      </Head>
      <main>
        <div className='homePage'>
          <section className="px-5 md:px-20 mobile:mb-9 mobile:text-center pageBody homePage2">
            <div className='flex mobile:w-auto pb-12'>
              <div className='flex flex-col space-y-5 mobile:pt-[8rem] md:pt-[12rem]  lg:pt-[8rem] md:w-11/12'>
                <h1 className='lg:text-[43px] md:text-[35px] font-bold mobile:text-[32px] md:w-12/12'>
                  We Design and Implement an online computer-based test system.
                </h1>
                <p className='md:text-[20px] lg:text-[24px] text-[18px]'>
                  Flip is a CBT software as a source to provide tests, examination management and
                  quick grading system and collation of results instead of the use of pen and paper.
                </p>
                <div className='flex mobile:justify-center'>
                  <button className='py-3 text-base text-white bg-blue-500 rounded-md px-[4rem] md:py-5'>
                    <a href="#">GET STARTED</a>
                  </button>
                </div>
              </div>
              <div className='relative lg:block mobile:hidden md:pt-[8rem] md:mt-[4rem] w-full'>              
                <div className='absolute mobile:hidden left-0 flex px-8 py-2 bg-white border bottom-6 rounded-xl shadow-[0px_30px_60px_rgba(0,117,255,0.3)]'>
                  <Image src={profile2} alt='profile badge' />
                  <div className='flex flex-col ml-3'>
                    <h1 className='text-[30px] text-[#FFBC6C] font-bold'>50K</h1>
                    <p className='text-[20px]'>Total Active Student</p>
                  </div>
                </div>
                <div className='absolute mobile:hidden right-0 flex px-8 py-2 bg-white border shadow-[0px_30px_60px_rgba(0,117,255,0.3)] bottom-[150px] rounded-xl'>
                  <Image src={profile} alt='profile badge' />
                  <div className='flex flex-col ml-3'>
                    <h1 className='text-[30px] text-[#00BE7E] font-bold'>7.5K</h1>
                    <p className='text-[20px]'>Total Active Task</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Feature />
        <Benefit />
        <Motor />
        <section className="flex flex-col space-y-7 md:px-20 py-20 text-center bg-[url('/FlipCbtBg2.png')] bg-contain bg-[#0075FF] bg-opacity-80 mobile:px-3">
          <h1 className='font-bold text-white md:text-5xl mobile:text-[32px]'>Want to do marketing with Flip?</h1>
          <p className='text-white mobile:text-[18px]'>Marketing is the activity, institutions, and processes for creating, communicating, <br />
            delivering, and exchanging, offerings that have value.</p>
          <div><button className='px-10 py-4 text-base text-white bg-black rounded-xl'><a href="#">CLICK HERE</a></button></div>
        </section>
        <Guarantee />
        <Faqs />
      </main>
    </Fragment>
  )
}

export default Home
