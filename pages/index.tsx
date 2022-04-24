import type { NextPage } from 'next'
import Link from 'next/link'
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
        <section className="h-screen w-full px-5 md:px-20 mobile:text-center homePage">
          <div className='flex flex-row mobile:w-auto pt-[10rem]'>
            <div className='flex md:w-6/12 mobile:w-full flex-col space-y-10'>
              <h1 className='lg:text-[50px] md:text-[35px] font-extrabold mobile:text-[32px]'>
                Assessment streamline made more accurate and time-bound.
              </h1>
              <p>
                Flip is a CBT software as a source to provide tests, examination management and
                quick grading system and collation of results instead of the use of pen and paper.
              </p>
              <div className='flex mobile:justify-center'>
                <Link href="/">
                  <a className='py-3 text-base text-white bg-[#0075FF] rounded-md px-[4rem] md:py-5'>GET STARTED</a>
                </Link>
              </div>
            </div>
            <div className='relative w-6/12 lg:block md:hidden mobile:hidden'>
              <Image src='/bg.png' className="img" alt='logo' width='650px' height='650px' />
              <div className='absolute left-0 flex px-10 py-2 bg-white flip-border bottom-20 rounded-lg blue-glow'>
                <Image src={profile2} alt='profile badge' width="55px" height="55px" />
                <div className='flex flex-col ml-3'>
                  <h1 className='text-[30px] text-[#FFBC6C] font-semibold'>50K</h1>
                  <p>Total Active Student</p>
                </div>
              </div>
              <div className='absolute right-0 flex px-10 py-2 bg-white flip-border bottom-[250px] rounded-lg blue-glow'>
                <Image src={profile} alt='profile badge' width="55px" height="55px" />
                <div className='flex flex-col ml-3'>
                  <h1 className='text-[30px] text-[#00BE7E] font-semibold'>7.5K</h1>
                  <p>Total Active Task</p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
