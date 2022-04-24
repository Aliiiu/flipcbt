import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 w-full px-20 py-4 mobile:px-[2rem] z-10">
      <div className='flex items-center'>
        <div>
          <Link href='/'>
            <a>
              <Image src="/Flip Cbt.png" alt='flipcbt logo' width='80px' height='40px' className='px-0 py-0'/>
            </a>
          </Link>
        </div>
        <div className='flex justify-between w-[30rem] ml-14 mobile:hidden'>
          <Link href='/ForOrganisation'>
            <a className='text-base font-semibold text-[#06042C]'>
              For Organizations
            </a>
          </Link>
          <Link href='/ForSchool'>
            <a className='text-base font-semibold text-[#06042C]'>
              For Schools
            </a>
          </Link>
          <Link href='/GetStarted'>
            <a className='text-base font-semibold text-[#06042C]'>
              Get Started
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar