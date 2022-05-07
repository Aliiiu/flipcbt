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
      <div className='text-center'>
        <div className='block md:px-[4em] lg:px-[7em] pt-[3em] pb-[7em] px-4'>
          <h2 className='text-[30px] font-bold mobile:text-center'>Create Account!</h2>
          <p className='text-[16px] text-[#828282] mb-8 mobile:text-center'>For the purpose of industry regulation, your details are required.</p> 

          <div className='bg-[#0075FF] bg-opacity-10 mx-[6em] px-[8em] py-[5em] rounded-[16px] mobile:mx-0 mobile:px-0 mobile:py-0 mobile:bg-white'>
            <form className='flex flex-col'>
              <input type="text" placeholder='Organisation Name' className='px-4 py-4 mb-5 text-[14px] input_border mobile:border-black w-full bg-transparent shadow appearance-none leading-tight rounded-[10px]'/>
              <input type="email" placeholder='Organisation Email'  className='px-4 py-4 mb-5 text-[14px] input_border bg-transparent w-full shadow appearance-none leading-tight rounded-[10px]' />
              <input type="text" placeholder='Password'  className='px-4 py-4 mb-5 text-[14px] input_border w-full shadow bg-transparent appearance-none leading-tight rounded-[10px]'/>
              <input type="text" placeholder='Organisation Address'  className='px-4 py-4 mb-5 text-[14px] input_border bg-transparent w-full shadow appearance-none leading-tight rounded-[10px]'/>
              <div className='relative'>
                <select className='block px-4 py-4 mb-5 text-[14px] text-gray-400 input_border w-full bg-transparent shadow appearance-none leading-tight rounded-[10px]'>
                  <option className=''>Purpose</option>
                  <option>Organisation Size</option>
                  <option>School Size</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 bottom-4 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              <textarea
                className='
                  block
                  resize-y
                  w-full
                  px-3
                  py-2
                  bg-transparent bg-clip-padding
                  input_border
                  transition
                  ease-in-out
                  m-0'
                placeholder="Message"
                rows={4}
              ></textarea>
              <div className='mt-[2em] mobile:items-center mobile:text-center'>
                <div>
                  <Link href={'/'} passHref>
                    <button
                      className='py-3 text-base text-white bg-[#0075FF] btn-border px-[6em] md:px-[6em] mobile:px-[6em] md:py-5 w-full'>Create Account</button>
                  </Link>
                </div>
                <div className='mt-4 text-center mobile:w-full'>
                  <p>Alreadly have an account? <span className='text-[#0075FF] font-bold'>Sign in</span> </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register