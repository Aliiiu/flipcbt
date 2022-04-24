import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 w-full px-20 py-5 mobile:px-8 z-10">
      <div className='container flex justify-between items-center w-full'>
        <div className='flex items-center'>
          <Link href='/'>
            <a>
              <Image src="/Flip Cbt.png" alt='flipcbt logo' width='120px' height='60px' className='mobile:w-[80px] mobile:h-[40px] px-0 py-0'/>
            </a>
          </Link>
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
        <div className='mobile:hidden'>
          <Link href='/GetStarted'>
            <a className='text-base text-white bg-blue-500 rounded-md px-12 py-3 text-[14px]'>
                Get Started
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar