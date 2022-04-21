import type { NextPage } from 'next'
import React, {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tick from '../public/Tick-Square.svg'
import styles from '../styles/Home.module.css'
import Feature from '../components/Feature'
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
        <section className="h-screen py-[10rem] px-5 md:px-20 md:py-[8rem] lg:py-20 mobile:mb-9 mobile:text-center homePage">
          <div className='flex mobile:w-auto'>
            <div className='flex flex-col space-y-5 align-middle'>
              <h1 className='lg:text-[50px] md:text-[35px] font-bold mobile:text-[32px]'>
                We Design and Implement an online computer-based test system.
              </h1>
              <p className='md:text-[20px] lg:text-[24px] text-[18px]'>
                Flip is a CBT software as a source to provide tests, examination management and
                quick grading system and collation of results instead of the use of pen and paper.
              </p>
              <div className='flex mobile:justify-center'>
                <button className='py-3 text-base text-white bg-blue-500 rounded-md px-[4rem] md:py-5'>
                  GET STARTED
                </button>
              </div>
            </div>
            <div className='mobile:hidden'>
              <Image src='/happyMan.png' alt='logo' width='1400px' height='1000px' />
            </div>
          </div>
        </section>
        <Feature />
        <Benefit />
        <Motor />
        <section className="flex flex-col space-y-7 md:px-20 py-20 text-center bg-[url('/FlipCbtBg.png')] bg-[length:30%] bg-[#0075FF]">
          <h1 className='font-bold text-white md:text-5xl mobile:text-2xl'>Want to do marketing with Flip?</h1>
          <p className='text-white '>Marketing is the activity, institutions, and processes for creating, communicating, <br />
            delivering, and exchanging, offerings that have value.</p>
          <div><button className='px-10 py-4 text-base text-white bg-black rounded-xl'>CLICK HERE</button></div>
        </section>
        <Guarantee />
        <Faqs />
      </main>
    </Fragment>
  )
}

export default Home
