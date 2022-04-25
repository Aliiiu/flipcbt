import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [nav, ShowNav] = useState<boolean>(false);
  return (
    <nav className="navbar fixed top-0 left-0 w-full px-20 py-5 mobile:py-3 mobile:px-8 z-10">
      <div className='container flex justify-between items-center w-full'>
        <div className='flex items-center'>
          <Link href='/'>
            <a>
              <Image src="/Flip Cbt.png" alt='flipcbt logo' width='80px' height='40px' className='mobile:w-[80px] mobile:h-[40px] px-0 py-0'/>
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
        <div className='bg-orange-200'>
          <Link href='/GetStarted'>
            <a className='text-base text-white bg-blue-500 rounded-md px-12 py-3 text-[14px] mobile:hidden'>
                Get Started
            </a>
          </Link>
        </div>
        {/* <div className="hidden text-white mobile:block">
          <button onClick={() => ShowNav(true)}>
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
          {
                    nav && 
                    <div className="flex flex-col w-full mobile-nav bg-orange-200 h-100 p-7">
                        <div className="self-end">
                            {" "}
                            <button onClick={() => ShowNav(false)}>
                                <Image src='/x.svg' alt='close icon' width='12px' height='12px' />
                            </button>
                        </div>
                        <div className="flex flex-col self-center mt-20 text-center" >
                            <Link href="/features" >
                                <a onClick={() => ShowNav(false)} className="mt-5 mb-5 font-semibold no-underline hover:text-purple">
                                    Features
                                </a>
                            </Link>
                            <hr style={{width: '300px'}}/>
                            <Link href="/pricing">
                                <a onClick={() => ShowNav(false)} className="mt-5 mb-5 font-semibold no-underline hover:text-purple">
                                    Pricing
                                </a>
                            </Link>
                            <hr style={{width: '300px'}}/>
                            <Link href="#download">
                                <a  onClick={() => ShowNav(false)} className="mt-5 mb-5 font-semibold no-underline hover:text-purple">
                                    Download
                                </a>
                            </Link>
                            <hr style={{width: '300px'}}/>
                            <Link href="/faq">
                                <a onClick={() => ShowNav(false)} className="mt-5 mb-5 font-semibold no-underline hover:text-purple">
                                    Faq
                                </a>
                            </Link>
                        </div>
                    </div>
                }
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar