import type { NextPage } from 'next'
import Link from 'next/link'
import React, {Fragment} from 'react'
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

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Flip CBT</title>
      </Head>
      <main>
        <section className="h-screen w-full px-5 md:px-20 mobile:text-center homePage">
          <div className='container flex flex-row mobile:w-auto pt-[8rem]'>
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
                  <a className='py-3 text-base text-white bg-[#0075FF] btn-border px-[4rem] md:py-5'>GET STARTED</a>
                </Link>
              </div>
            </div>
            <div className='relative w-6/12 lg:block md:hidden mobile:hidden'>
              <Image src='/bg.png' className="img" alt='logo' width='650px' height='550px' />
              <div className='absolute left-0 flex px-10 py-2 bg-white flip-border bottom-[55px] rounded-lg blue-glow'>
                <Image src={profile2} alt='profile badge' width="55px" height="55px" />
                <div className='flex flex-col ml-3'>
                  <h1 className='text-[30px] text-[#FFBC6C] font-semibold'>50K</h1>
                  <p>Total Active Student</p>
                </div>
              </div>
              <div className='absolute right-0 flex px-10 py-2 bg-white flip-border bottom-[220px] rounded-lg blue-glow'>
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
        <Marketing />
        <Guarantee />
        <Faqs />
      </main>
    </Fragment>
  )
}

export default Home
