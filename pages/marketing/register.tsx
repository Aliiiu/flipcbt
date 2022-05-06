import Image from 'next/image'
import React, { useEffect } from 'react'
import Link from 'next/link'

const Register = () => {
  useEffect(() => {
    const html = document.getElementById("mainHtml") as HTMLElement
    html.style.overflow = "auto";
  })
  return (
    <div className='h-screen'>
      <div className='md:flex justify-center'>
        <div className='md:w-1/2 mobile:hidden bg-[#0075FF] register md:px-[5em]'>
          <div className=''>
            <Link href={'/'} passHref>
              <Image src={'/Flip_Cbt_WhiteLogo.png'} alt="flip logo" width={'150px'} height='150px' />
            </Link>
          </div>
          
        </div>
        <div className='md:w-1/2 block md:px-[4em] lg:px-[7em] pt-[3em] pb-[7em] px-4 max-w-[50em]'>
          <div className='text-center md:hidden'>
            <Link href={'/'} passHref>
              <Image src='/Flip Cbt.png' alt='Flip Cbt Logo' width='100px' height='50px' />
            </Link>
          </div>
          <h2 className='text-[30px] font-bold mobile:text-center'>Get Started</h2>
          <p className='text-[16px] mb-8 mobile:text-center'>Marketing Information</p> 

          <form className='flex flex-col'>
            <input type="text" placeholder='Name' className='px-4 py-4 mb-5 text-[14px] input_border w-full shadow appearance-none leading-tight rounded-[10px]'/>
            <input type="text" placeholder='School Name' className='px-4 py-4 mb-5 text-[14px] border w-full shadow appearance-none leading-tight rounded-[10px]' />
            <input type="email" placeholder='Email'  className='px-4 py-4 mb-5 text-[14px] border w-full shadow appearance-none leading-tight rounded-[10px]' />
            <input type="text" placeholder='Phone Number'  className='px-4 py-4 mb-5 text-[14px] border w-full shadow appearance-none leading-tight rounded-[10px]'/>
            <input type="text" placeholder='Address'  className='px-4 py-4 mb-5 text-[14px] border w-full shadow appearance-none leading-tight rounded-[10px]'/>
            <div className='relative'>
              <select className='block px-4 py-4 mb-5 text-[14px] border w-full shadow appearance-none leading-tight rounded-[10px]'>
                <option>Degree</option>
                <option>Organisation Size</option>
                <option>School Size</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 bottom-4 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <div className='border text-center py-3 rounded-[10px] border-dashed'>
              Tap here to upload cover letter
            </div>
            <div className='mt-4 w-full'>
              <Link href="/" passHref>
                <button className='py-3 text-base text-white bg-[#0075FF] btn-border mobile:px-[142px] md:px-[155px] lg:px-[195px] md:py-4 w-full'>SUBMIT</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register