import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

const Navbar = () => {
  return (
    <header>
      <div className='container flex items-center px-[5rem] py-3 mobile:px-[2rem] z-10 shadow-2xl '>
        <Link href='/'>
          <a>
            <Image src="/Flip Cbt.png" alt='flipcbt logo' width='80px' height='40px' className='px-0 py-0'/>
          </a>
        </Link>
        <nav className='flex justify-between bg-white w-full items-centernavbar'>
          <div className='flex justify-between items-center w-full'>
            <div className='flex items-center'>
        
              <div className='ml-[7rem] w-full mobile:hidden  lg:block'>
                <Link href='/ForOrganisation'>
                  <a className='text-base font-semibold text-[#06042C] mr-[5rem]'>
                    For Organisation
                  </a>
                </Link>
                <Link href='/ForSchool'>
                  <a className='text-base font-semibold text-[#06042C]'>
                    For School
                  </a>
                </Link>
              </div>
            </div>
            <div className='mobile:hidden mr-[3rem]'>
              <Link href='/GetStarted'>
                <a href="">
                  <button className='text-base text-white bg-blue-500 rounded-md px-[3rem] md:py-3 text-[14px]'>
                    Get Started
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar