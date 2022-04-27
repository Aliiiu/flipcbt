import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type BenefitObject = {
  title: string,
  content: string
}
const BenefitOrganisation = () => {
  const benefit: BenefitObject[] = [
    {
      title: 'Sign up in 5 minutes',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Viverra pretium et commodo posuere arcu lectus. A vitae 
                libero feugiat commodo aliquam pharetra risus nunc at. `
    },
    {
      title: 'Customize for your business needs.',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Viverra pretium et commodo posuere arcu lectus. A vitae 
                libero feugiat commodo aliquam pharetra risus nunc at. `
    },
    {
      title: 'Pay Access and  Have full transparency',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Viverra pretium et commodo posuere arcu lectus. A vitae 
                libero feugiat commodo aliquam pharetra risus nunc at. `
    },
    {
      title: 'Get  resources and support',
      content: `It helps to save reports/data which includes scores of 
                assessment of students for easy accessibility in the future. This
                means when this report is needed for reference purpose, the app provides it at a go.`
    },
  ]
  return (
    <section className='md:px-20 mobile:px-5 bg-[#0075FF] py-[5rem] bg-opacity-5 container'>
          
          <h1 className='text-center font-bold text-[55px] md:pb-8'>Your Journey on Flip</h1>
          <div className='flex '>
            <div className='md:w-9/12 mobile:w-full'>
              
              {
                benefit.map((item, idx) => (
                  <div className='flex flex-col justify-between pr-1 mb-6 md:mb-12' key={idx}>
                    <div className='flex flex-col'>
                      <div className='flex'>
                        <Image src='/Tick-Square.svg' alt='tick' width='20px' height='20px' />
                        <h2 className='ml-5 font-bold text-[16px] md:text-[20px]'>{item.title}</h2>
                      </div>
                      <p className='mt-4'>{item.content}
                      </p>
                    </div>
            
                  </div>
                ))
              }
            
              <Link href=''>
                <a className='py-3 text-white bg-blue-500 px-[4rem] md:py-5 btn-border'>CONTACT US</a>
              </Link>
            </div>
            <div className='mobile:hidden md:hidden lg:block md:pt-[8rem]'>
              <Image src='/in-progress.png' alt='Celebration Illustration' width={'671px'} height='447.33px' />
            </div>
          </div>
      </section>
  )
}

export default BenefitOrganisation