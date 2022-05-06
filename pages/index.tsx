import type { NextPage } from 'next'
import Link from 'next/link'
import React, {Fragment, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Feature from '../components/Feature'
import profile from '../public/profile.svg'
import profile2 from '../public/profile2.svg'
import Benefit from '../components/Benefit'
import Motor from '../components/Motor'
import Guarantee from '../components/Guarantee'
import Faqs from '../components/Faqs'
import Marketing from '../components/Marketing'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  useEffect(() => {
    const html = document.getElementById("mainHtml") as HTMLElement
    html.style.overflow = "auto";
  })
  return (
    <Fragment>
      <Head>
        <title>Flip CBT</title>
      </Head>
      <Navbar />
      <main className='mt-[78px] md:mt-[78px] mobile:mt-[83px]'>
        <div className='homePage md:px-20 px-4'>
          <div className='relative homePage2 container'>
            <section className="mobile:text-center">
              <div className='lg:flex mobile:w-auto w-full md:pt-[4em] lg:py-0'>
                <div className='flex lg:w-1/2 mobile:w-full flex-col mt-14 mobile:py-[5em] '>
                  <h1 className='lg:text-[50px] md:text-[45px] mobile:text-[28px] font-bold lg:w-11/12 mb-[20px] lg:text-left text-center '>
                    Assessment streamline made more accurate and time-bound.
                  </h1>
                  <p className='lg:w-10/12 mb-[2em]'>
                    FLIP serves as a source to provide tests, examination management,
                    quick grading of systems and collation of results instead of the use of pen and paper.
                  </p>
                  <div className='flex mobile:justify-center md:justify-center lg:justify-start'>
                    <Link href="/">
                      <a className='py-3 text-base text-white bg-[#0075FF] btn-border px-[4rem] md:py-5'>GET STARTED</a>
                    </Link>
                  </div>
                </div>
                <div className='w-6/12 lg:block md:hidden mobile:hidden'>
                </div>
              </div>
              <div className='absolute right-[380px] mobile:invisible md:invisible lg:visible flex px-10 py-2 bg-white flip-border bottom-[50px] rounded-lg blue-glow'>
                <Image src={profile2} alt='profile badge' width="55px" height="55px" />
                <div className='flex flex-col ml-3'>
                  <h1 className='text-[30px] text-[#FFBC6C] font-semibold'>50K</h1>
                  <p>Total Active Student</p>
                </div>
              </div>
              <div className='absolute right-[0px] mobile:invisible md:invisible lg:visible flex px-10 py-2 bg-white flip-border bottom-[150px] rounded-lg blue-glow'>
                <Image src={profile} alt='profile badge' width="55px" height="55px" />
                <div className='flex flex-col ml-3'>
                  <h1 className='text-[30px] text-[#00BE7E] font-semibold'>7.5K</h1>
                  <p>Total Active Task</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Feature />
        <Benefit />
        <Motor />
        <Marketing />
        <Guarantee />
        <Faqs />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home
