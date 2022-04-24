import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='md:px-20 md:pt-20 bg-[#06042C] mobile:px-5'>
      <div className='flex mobile:flex-col'>
        <div className='md:mr-[6rem] mobile:text-center mobile:py-10'>
          <Image src='/Flip Cbt.png' alt='Flip Cbt Logo' width='120px' height='60px' />
        </div>
        <div className='flex md:justify-between w-full md:mr-[6rem] mobile:flex-wrap'>
          <div className='space-y-8 mobile:mb-8 mobile:mx-[3rem]'>
            <h2 className='text-white'>Company</h2>
            <h2 className='font-thin text-gray-500'><a className='hover:text-white' href="#">Our Blog</a></h2>
            <h2 className='font-thin text-gray-500'><a className='hover:text-white' href="#">Career</a></h2>
          </div>
          <div className='space-y-8'>
            <h2 className='text-white'>Resources</h2>
            <h2 className='font-thin text-gray-500'><a className='hover:text-white' href="#">Terms of use</a></h2>
            <h2 className='font-thin text-gray-500'><a className='hover:text-white' href="#">Privacy Policy</a></h2>
          </div>
          <div className='mb-[5rem] space-y-8 mobile:ml-[3rem]'>
            <h2 className='text-white'>Contact</h2>
            <p className="font-thin text-gray-500" ><a href="mailto:hello@intrapair.com?subject=FlipCBT" className='hover:text-white'>hello@flipcbt.com</a></p>
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