import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='md:px-20 md:pt-20 bg-[#06042C] mobile:px-5'>
      <div className='flex mobile:flex-col'>
        <div className='md:mr-[8rem] mobile:text-center mobile:py-10'>
          <Image src='/Flip Cbt.png' alt='Flip Cbt Logo' width='80px' height='40px' />
        </div>
        <div className='flex justify-between w-full md:mr-[8rem] mobile:flex-wrap'>
          <div className='space-y-8 mobile:mb-8 mobile:mr-6'>
            <h2 className='text-white'>Company</h2>
            <h2 className='text-gray-500 font-thin'>Our Blog</h2>
            <h2 className='text-gray-500 font-thin'>Career</h2>
          </div>
          <div className='space-y-8'>
            <h2 className='text-white'>Resources</h2>
            <h2 className='text-gray-500 font-thin'>Terms of Use</h2>
            <h2 className='text-gray-500 font-thin'>Privacy Policy</h2>
          </div>
          <div className='mb-[5rem] space-y-8'>
            <h2 className='text-white'>Contact</h2>
            <p className="text-gray-500 font-thin" ><a href="mailto:career@intrapair.com">career@intrapair</a></p>
            <div className='flex space-x-8'>
              <a href="https://www.linkedin.com/company/flipcbt/">
                <Image src="/facebook-icon.png" alt="Facebook icon" width="20px" height="20px" />
              </a>
              <a href="https://instagram.com/flipcbt/">
                <Image src="/instagram-icon.png" alt="Instagram icon" width="20px" height="20px" />
              </a>
              <a href="https://twitter.com/flipcbt">
                <Image src="/twitter-icon.png" alt="Twitter icon" width="20px" height="20px" />
              </a>
                            
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer