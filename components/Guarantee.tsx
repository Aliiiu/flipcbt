import React from 'react'

const Guarantee = () => {
  return (
    <section className='flex flex-col md:px-20 py-20 space-y-8 bg-[#F7F8FA] mobile:px-5 '>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold md:text-[55px] mobile:text-xl'>Don&#39;t just take our word for it</h1>
        <div className='flex space-x-3'>
          <button className='px-3 bg-gray-300 rounded-full'>
            <svg
              width="8"
              height="28"
              viewBox="0 0 16 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4L6 14L16 24L14 28L0 14L14 0L16 4Z"
                fill='white'
              />
            </svg>
          </button>
          <button className='px-3 bg-blue-400 rounded-full'>
            <svg
              width="8"
              height="28"
              viewBox="0 0 16 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 24L10 14L0 4L2 0L16 14L2 28L0 24Z"
                fill='white'
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div className='flex md:space-x-9 mobile:flex-col mobile:space-y-7 lg:w-12/12 md:mx-auto'>
          <div className='px-8 py-4 bg-white mobile:px-4 rounded-xl mobile:flex mobile:flex-col-reverse'>
            <p className='md:text-[20px] text-[17px]'>
              Running a business can be demanding, having motivated
              employees is paramount to our success and with
              earnipay&#39;s flexible salary payment solutions,
              productivity isn&#39;t a demand anymore, it&#39;s a
              lifestyle.
            </p>
            <div className='mb-8 md:mt-10'>
              <h2 className='font-bold text-[20px]'>Courtney Henry</h2>
              <h4 className='text-[16px]'>Founder of Easy Secondary school</h4>
            </div>
          </div>
          <div className='px-8 py-4 bg-white mobile:px-4 rounded-xl mobile:flex mobile:flex-col-reverse'>
            <p className='md:text-[20px] text-[17px]'>
                Running a business can be demanding, having motivated
                employees is paramount to our success and with
                earnipay&#39;s flexible salary payment solutions,
                productivity isn&#39;t a demand anymore, it&#39;s a
                lifestyle.
              </p>
              <div className='mb-8 md:mt-10'>
                <h2 className='font-bold text-[20px]'>Courtney Henry</h2>
                <h4 className='text-[16px]'>Founder of Easy Secondary school</h4>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guarantee