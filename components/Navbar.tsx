import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

const Navbar = () => {
  return (
    <header className='fixed left-0 right-0 w-full bg-white z-10 shadow-[0px_4px_4px_rgba(0,117,255,0.2)] navbar'>
      <div className='container flex items-center px-[5rem] py-3 mobile:px-[2rem]'>
        <Link href='/'>
          <a>
            <Image src="/Flip Cbt.png" alt='flipcbt logo' width='80px' height='40px' className='px-0 py-0'/>
          </a>
        </Link>
        <nav className='flex justify-between w-full items-center'>
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
        <div className="hidden text-white mobile:block">
          <button>
              <svg
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z"
                  fill="#0075FF"
                  />
              </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar