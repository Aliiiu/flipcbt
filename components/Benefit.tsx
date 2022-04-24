import React, { useState, Fragment } from 'react'
import Image from 'next/image'
import tick from '../public/Tick-Square.svg'
import celebration from '../public/benefit.svg'
import Button from './Button'

type ArrayObject = {
  title: string;
  content: string;
};

const benefit: ArrayObject[][] = [
  [
    {
      title: 'Automatically generates exam numbers for students',
      content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`
    },
    {
      title: 'Randomly assigns generated questions for each student.',
      content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`
    },
    {
      title: 'Enhanced security features to avoid exam malpractice.',
      content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`
    },
    {
      title: 'Real-time processing of results for candidates.',
      content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`
    },
    {
      title: 'Easy collation of results.',
      content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`
    },
  ],
  [
    {
      title: 'Real-time processing of results for candidates.',
      content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`
    },
    {
      title: 'Randomly assigns generated questions for each student.',
      content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`
    },
    {
      title: 'Enhanced security features to avoid exam malpractice.',
      content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`
    },
    {
      title: 'Automatically generates exam numbers for students',
      content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`
    },
    {
      title: 'Easy collation of results.',
      content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`
    },
  ],
]

const Benefit = () => {
  const [currTab, setCurrTab] = useState<number>(0)
  
  const ForSchool = (): void => {
    setCurrTab(0);
  };
  const ForOrganisation = (): void => {
    setCurrTab(1);
  };
  // const tabHandler = (index: number) => {
  //   setCurrTab(index)
  // }
  return (
      <section className='flex md:px-20 mobile:px-8 bg-[#0075FF] py-[5rem] bg-opacity-5'>
          <div className='md:w-9/12 mobile:w-full'>
            <div className='flex overflow-x-auto mb-9'>
              <div className='py-5 whitespace-nowrap font-bold cursor-pointer'>
                <button className={`text-xl font-bold ${currTab === 0 ? 'text-[#0075FF]' : 'text-[#BDBDBD]'}`} type='button' onClick={ForSchool}>What Schools Get</button>
                <div className={`${currTab === 0 ? 'bg-[#0075FF]' : 'bg-[#BDBDBD]'} mt-3 h-1`}></div>
              </div>
              <div className='pl-[5rem] md:px-[10rem] py-5 whitespace-nowrap font-bold cursor-pointer'>
                <button className={`text-xl font-bold mobile:w-[15rem] ${currTab === 1 ? 'text-[#0075FF]' : 'text-[#BDBDBD]'}`} type='button' onClick={ForOrganisation}>What Organizations Get</button>
                <div className={`${currTab === 1 ? 'bg-[#0075FF]' : 'bg-[#BDBDBD]'} mt-3 w-full h-1`}></div>
              </div>
            </div>
            {
              benefit[currTab].map((item, idx) => (
                <div className='flex flex-col justify-between pr-1 mb-6 md:mb-12' key={idx}>
                  <div className='flex flex-col'>
                    <div className='flex'>
                      <Image src='/Tick-Square.svg' alt='tick' width='20px' height='20px' />
                      <h2 className='ml-5 font-semibold text-[16px] md:text-[20px]'>{item.title}</h2>
                    </div>
                    <p className='mt-4'>{item.content}
                    </p>
                  </div>
                </div>
              ))
            }
        </div>
        <div className='mobile:hidden md:hidden lg:block md:pt-[18rem]'>
          <Image src={celebration} alt='Celebration Illustration' />
        </div>
      </section>
  )
}

export default Benefit