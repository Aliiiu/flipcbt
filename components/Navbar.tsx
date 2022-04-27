import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [nav, ShowNav] = useState<boolean>(false);
  return (
    <nav className="fixed top-0 left-0 z-10 w-full px-20 py-5 navbar mobile:py-3 mobile:px-5">
      <div className='container flex items-center justify-between w-full'>
        <div className='flex items-center'>
          <Link href='/'>
            <a className='md:hidden '>
              <Image src="/Flip Cbt.png" alt='flipcbt logo' width='60px' height='30px' className='mobile:w-[80px] mobile:h-[40px] px-0 py-0n'/>
            </a>
          </Link>
          <Link href='/'>
            <a className='flex mobile:hidden'>
              <Image src="/Flip Cbt.png" alt='flipcbt logo' width='90px' height='50px' className='mobile:w-[80px] mobile:h-[40px] px-0 py-0 mobile:hidden'/>
            </a>
          </Link>
          <div className='ml-[7rem] w-full mobile:hidden  lg:block'>
            <Link href='/ForOrganisation'>
              <a className='text-base font-semibold text-[#06042C] mr-[5rem] visited:text-blue-500 hover:text-blue-500 active:text-blue-500'>
                For Organisation
              </a>
            </Link>
            <Link href='/ForSchool'>
              <a className='text-base font-semibold text-[#06042C] visited:text-blue-500 hover:text-blue-500 active:text-blue-500'>
                For School
              </a>
            </Link>
          </div>
        </div>
        <div>
          <Link href='/GetStarted'>
            <a className='text-base text-white bg-blue-500 rounded-md px-12 py-3 text-[14px] mobile:hidden'>
                Get Started
            </a>
          </Link>
        </div>
        <div className="hidden text-white mobile:block">
          {nav ?
            (<button onClick={() => ShowNav(false)}>
              <Image src='/x.svg' alt='close logo' width='30px' height='30px' />
            </button>) :
            (<button onClick={() => ShowNav(true)}>
              <Image src='/menu.svg' alt='menu logo' width='30px' height='30px' />
            </button>)}
          {
                nav && 
                    <div className="flex flex-col items-center w-full bg-white mobile-nav h-100 p-7">
                      <Link href="/" >
                          <a onClick={() => ShowNav(false)} className="mt-5 mb-5 text-[24px] font-bold no-underline text-black">
                            Home
                          </a>
                      </Link>
                      <Link href="/ForOrganisation">
                          <a onClick={() => ShowNav(false)} className="mt-5 mb-5 text-[24px] font-bold no-underline text-black">
                            For Organisation
                          </a>
                      </Link>
                      <Link href="/ForSchool">
                          <a  onClick={() => ShowNav(false)} className="mt-5 mb-5 text-[24px] font-bold no-underline text-black">
                            For School
                          </a>
                      </Link>
                      <Link href="/">
                          <a onClick={() => ShowNav(false)} className="mt-5 mb-5 text-[24px] font-bold no-underline text-black">
                            Get Started
                          </a>
                      </Link>
                    </div>
                }
        </div>
      </div>
    </nav>
  )
}

export default Navbar