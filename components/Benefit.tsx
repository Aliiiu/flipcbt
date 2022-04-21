import React from 'react'
import Image from 'next/image'
import tick from '../public/Tick-Square.svg'
import Button from './Button'

const Benefit = () => {
  return (
    <section>
          <div className='flex md:px-20 bg-[#0075FF] py-[5rem] bg-opacity-5 mobile:px-5'>
            <div className='flex flex-col justify-between space-y-10 md:w-9/12 mobile:w-auto'>
              <div className='flex jusitify-between mobile:space-x-6 mobile:w-[22rem] overflow-hidden border-2 border-indigo-300'>
                <div>
                  <h2 className='text-xl font-bold text-[#0075FF]'>What School Get</h2>
                  <div className='bg-[#0075FF] w-[12rem] h-1'></div>
                </div>
                <div>
                  <h2 className='text-xl font-bold w-[20rem] text-[#BDBDBD]'>What Organization Get</h2>
                  <div className='bg-[#BDBDBD] w-full h-1'></div>
                </div>
              </div>
              <div className='flex flex-col justify-between pr-1 space-y-10'>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <Image src={tick} alt='tick' />
                    <h2 className='mx-5 font-bold'> Automatically generates exam numbers for students.</h2>
                  </div>
                  <p>It involves the conduct of examinations using computer
                    networks, and questions are set in such a way that
                    they can be formally and easily processed by the computer.</p>
                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <Image src={tick} alt='tick' />
                    <h2 className='mx-5 font-bold'> Randomly assigns generated questions for each student.</h2>
                  </div>
                  <p>It involves the conduct of examinations using computer
                    networks, and questions are set in such a way that
                    they can be formally and easily processed by the computer.</p>
                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <Image src={tick} alt='tick' />
                    <h2 className='mx-5 font-bold'> Enhanced security features to avoid exam malpractice.</h2>
                  </div>
                  <p>It involves the conduct of examinations using computer
                    networks, and questions are set in such a way that
                    they can be formally and easily processed by the computer.</p>
                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <Image src={tick} alt='tick' />
                    <h2 className='mx-5 font-bold'> Real-time processing of results for candidates.</h2>
                  </div>
                  <p>It involves the conduct of examinations using computer
                    networks, and questions are set in such a way that
                    they can be formally and easily processed by the computer.</p>
                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <Image src={tick} alt='tick' />
                    <h2 className='mx-5 font-bold'> Easy collation of results.</h2>
                  </div>
                  <p>It involves the conduct of examinations using computer
                    networks, and questions are set in such a way that
                    they can be formally and easily processed by the computer.</p>
                </div>
              </div>
              <Button />
            </div>
            <div className='flex flex-col items-center justify-center mobile:hidden'>
              <div>
                <Image src='/image-benefit.png' alt='benefit illustration' width='625.75px' height='445px' />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Benefit