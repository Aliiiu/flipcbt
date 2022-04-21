import React from 'react'

const Guarantee = () => {
  return (
    <section className='flex flex-col md:px-20 py-20 space-y-8 bg-[#F7F8FA] mobile:px-5 '>
      <div className='flex justify-between items-center border-2 border-indigo-600'>
        <h1 className='font-bold md:text-4xl mobile:text-xl'>Don&#39;t just take our word for it</h1>
        <div className='flex space-x-3'>
          <button className='bg-gray-300 rounded-full px-3'>
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
          <button className='bg-blue-400 rounded-full px-3'>
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
        </div>
      </div>
      <div className='flex md:space-x-[4rem] mobile:flex-col mobile:space-y-7'>
        <div className='bg-white px-8 py-4 rounded-xl'>
          <p>
            Running a business can be demanding, having motivated
            employees is paramount to our success and with
            earnipay&#39;s flexible salary payment solutions,
            productivity isn&#39;t a demand anymore, it&#39;s a
            lifestyle.
          </p>
          <div className='mt-2'>
            <h2 className='font-bold'>Courtney Henry</h2>
            <h4 className='text-sm'>Founder of Easy Secondary school</h4>
          </div>
        </div>
        <div className='bg-white px-8 py-4 rounded-xl'>
          <p>
              Running a business can be demanding, having motivated
              employees is paramount to our success and with
              earnipay&#39;s flexible salary payment solutions,
              productivity isn&#39;t a demand anymore, it&#39;s a
              lifestyle.
            </p>
            <div className='mt-2'>
              <h2 className='font-bold'>Courtney Henry</h2>
              <h4 className='text-sm'>Founder of Easy Secondary school</h4>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Guarantee