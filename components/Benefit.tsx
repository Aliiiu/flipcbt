import React, { useState, Fragment } from 'react'
import Image from 'next/image'
import tick from '../public/Tick-Square.svg'
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


benefit[0].map((element, index) => console.log(element))
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
    <section>
          <div className='flex md:px-20 bg-[#0075FF] py-[5rem] bg-opacity-5 mobile:px-5'>
            
              <div className='flex flex-col justify-between space-y-10 md:w-9/12 mobile:w-auto'>
                <div className={`flex justify-between w-[32rem] mobile:space-x-6 mobile:w-[22rem] mobile:overflow-hidden ${currTab === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div>
                    <h2 className='text-xl font-bold text-[#0075FF]'>
                      <a href="javascript:void(0);" onClick={ForSchool}>What School Get</a>
                    </h2>
                    <div className='bg-[#0075FF] w-[12rem] h-1'></div>
                  </div>
                  <div>
                    <h2 className='text-xl font-bold mobile:w-[20rem] text-[#BDBDBD]'>
                      <a href="javascript:void(0);" onClick={ForOrganisation}>What Organisation Get</a>
                    </h2>
                    <div className='bg-[#BDBDBD] w-full h-1'></div>
                  </div>
                </div>
                {
                  benefit[currTab].map((item, idx) => (
                    <div className='flex flex-col justify-between pr-1 space-y-10' key={idx}>
                      <div className='flex flex-col'>
                        <div className='flex'>
                          <Image src={tick} alt='tick' />
                          <h2 className='mx-5 font-bold'>{item.title}</h2>
                        </div>
                        <p>{item.content}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>            
          </div>
      </section>
  )
}

export default Benefit