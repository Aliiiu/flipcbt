import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GetStarted = () => {
  const [active, setActive] = useState<boolean>(false)
  const [organisationActive, setOrganisationActive] = useState<boolean>(false)
  const [marketingActive, setMarketingActive] = useState<boolean>(false)
  const router = useRouter();

  const schoolHandler = () => {
    setActive(true)
    setMarketingActive(false)
    setOrganisationActive(false)
  }

  const organisationHandler = () => {
    setActive(false)
    setMarketingActive(false)
    setOrganisationActive(true)
  }

  const marketingHandler = () => {
    setActive(false)
    setMarketingActive(true)
    setOrganisationActive(false)
  }

  const registerHandler = () => {
    if (active) {
      router.push('/school/register')
    }
    if (organisationActive) {
      router.push('/organisation/register')
    }

    if (marketingActive) {
      router.push('/marketing/register')
    }
  }
  useEffect(() => {
    const html = document.getElementById("mainHtml") as HTMLElement
    html.style.overflow = "auto";
  })
  return (
    <div className='GetStarted'>
      <div className='flex flex-col pt-[4em] pb-[5em] md:px-20 px-4 container'>
        <div className='text-center'>
          <Link href={'/'}>
            <a>
              <Image src='/Flip Cbt.png' alt='Flip Cbt Logo' width='100px' height='50px' />
            </a>
          </Link>
        </div>
        <div className='mt-7 text-center mb-[4em]'>
          <h1 className='text-[45px] mobile:text-[35px] font-bold'>Get Started</h1>
          <p>What do you want to use flip for?</p>
        </div>

        <div className='grid grid-cols-3 mobile:grid-cols-1 mobile:gap-y-5 gap-x-9 '>
          <div
            onClick={schoolHandler}
            className={`flex flex-col items-center bg-white py-8 px-[3em] hover:border-2 hover:border-[#0075FF] rounded-[30px] ${active ? 'card_select' : null} shadow-[0px_4px_50px_rgba(0,0,0,0.1)]`}>
            <Image src='/school.png' alt='Flip Cbt Logo' width='120px' height='120px' />
            <h2 className='text-[25px] mobile:text-[25px] font-semibold mt-5'>School</h2>
            <p className='text-center mt-3'>I want Flip for my school</p>
          </div>
          <div
            onClick={organisationHandler}
            className={`flex flex-col items-center bg-white py-8 px-[3em] rounded-[30px] hover:border-2 hover:border-[#0075FF] ${organisationActive ? 'card_select' : null} shadow-[0px_4px_50px_rgba(0,0,0,0.1)]`}>
            <Image src='/organisation.png' alt='Flip Cbt Logo' width='120px' height='120px' />
            <h2 className='text-[25px] mobile:text-[25px] font-semibold mt-5'>Organisation</h2>
            <p className='text-center mt-3'>I want Flip for my school</p>
          </div>
          <div
            onClick={marketingHandler}
            className={`flex flex-col items-center bg-white py-8 px-[3em] rounded-[30px] hover:border-2 hover:border-[#0075FF] ${marketingActive ? 'card_select' : null} shadow-[0px_4px_50px_rgba(0,0,0,0.1)]`}>
            <Image src='/market.png' alt='Flip Cbt Logo' width='120px' height='120px' />
            <h2 className='text-[25px] mobile:text-[25px] font-semibold mt-5'>Marketers</h2>
            <p className='text-center mt-3'>I want to do marketing for Flip</p>
          </div>
        </div>

        <div className='mt-[7em] flex flex-col items-start mobile:items-center mobile:text-center'>
          <div>
            <button onClick={registerHandler}>
              <a
                className='py-3 text-base text-white bg-[#0075FF] btn-border px-[12em] md:px-[9em] mobile:px-[6em] md:py-5'>Register</a>
            </button>
          </div>
          <div className='mt-8 md:ml-[3em] text-center mobile:w-full'>
            <p>Alreadly have an account? <span className='text-[#0075FF] font-bold'>Sign in</span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted