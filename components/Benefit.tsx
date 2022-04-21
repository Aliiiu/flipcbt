import React from 'react'
import Image from 'next/image'
import tick from '../public/Tick-Square.svg'
import Button from './Button'

const Benefit = () => {
  return (
    <section>
          <div className='flex md:px-20 w-full bg-[#0075FF] py-[5rem] bg-opacity-5 mobile:px-5'>
            <div className='flex flex-col justify-between space-y-10 w-9/12 mobile:w-auto'>
              <div className='flex justify-between w-9/12'>
                <div >
                  <h2 className='text-xl font-bold text-[#0075FF]'>What School Get</h2>
                  <div className='bg-[#0075FF] w-[12rem] h-1'></div>
                </div>
                <div>
                  <h2 className='text-xl font-bold text-[#BDBDBD] mobile:hidden'>What Organization Get</h2>
                  <div className='bg-[#BDBDBD] w-full h-1'></div>
                </div>
              </div>
              <div className='flex flex-col justify-between space-y-10'>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <Image src={tick} alt='tick' />
                    <h2 className='font-bold mx-5'> Automatically generates exam numbers for students.</h2>
                  </div>
                  <p>It involves the conduct of examinations using computer
                    networks, and questions are set in such a way that
                    they can be formally and easily processed by the computer.</p>
                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <Image src={tick} alt='tick' />
                    <h2 className='font-bold mx-5'> Randomly assigns generated questions for each student.</h2>
                  </div>
                  <p>It involves the conduct of examinations using computer
                    networks, and questions are set in such a way that
                    they can be formally and easily processed by the computer.</p>
                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <Image src={tick} alt='tick' />
                    <h2 className='font-bold mx-5'> Enhanced security features to avoid exam malpractice.</h2>
                  </div>
                  <p>It involves the conduct of examinations using computer
                    networks, and questions are set in such a way that
                    they can be formally and easily processed by the computer.</p>
                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <Image src={tick} alt='tick' />
                    <h2 className='font-bold mx-5'> Real-time processing of results for candidates.</h2>
                  </div>
                  <p>It involves the conduct of examinations using computer
                    networks, and questions are set in such a way that
                    they can be formally and easily processed by the computer.</p>
                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <Image src={tick} alt='tick' />
                    <h2 className='font-bold mx-5'> Easy collation of results.</h2>
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