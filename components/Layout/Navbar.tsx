import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from '../UI/Button';

const Navbar = () => {
  const [nav, ShowNav] = useState<boolean>(false);
  const router = useRouter();

  const showNavHandler = () => {
    const html = document.getElementById('mainHtml') as HTMLElement;
    html.style.overflow = 'hidden';
    ShowNav(true);
  };

  const closeNavHandler = () => {
    const html = document.getElementById('mainHtml') as HTMLElement;
    html.style.overflow = 'auto';
    ShowNav(false);
  };
  //
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#ffffff33] backdrop-blur-lg ">
      <div className="container md:py-5">
        <div className="xl:px-[8em] mobile:flex mobile:justify-between mobile:py-5 px-7">
          <div className="flex items-center justify-between">
            <Link href="/" passHref>
              <a className="">
                <div className="relative w-[82px] h-[58px] lg:w-[102px] lg:h-[68px]">
                  <Image
                    src="../../images/FlipCbt.png"
                    alt="flipcbt logo"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer"
                  />
                </div>
              </a>
            </Link>
            <div className="mobile:hidden flex gap-4 justify-between lg:w-[40%]">
              <Link href="/">
                <a
                  id="navLink"
                  className={`text-[#06042C] inline-flex ${
                    router.pathname === '/' ? 'text-blue-400' : null
                  } hover:text-blue-500 active:text-blue-500 `}
                >
                  Home
                </a>
              </Link>
              <Link href="/for-organization">
                <a
                  id="navLink"
                  className={`text-[#06042C] inline-flex ${
                    router.pathname === '/for-organization'
                      ? 'text-blue-400'
                      : null
                  } hover:text-blue-500 active:text-blue-500 `}
                >
                  Organization
                </a>
              </Link>
              <Link href="/for-school">
                <a
                  id="navLink"
                  className={`text-[#06042C] inline-flex ${
                    router.pathname === '/for-school' ? 'text-blue-400' : null
                  } hover:text-blue-500 active:text-blue-500`}
                >
                  School
                </a>
              </Link>
              <Link href="/marketers">
                <a
                  id="navLink"
                  className={`text-[#06042C] inline-flex ${
                    router.pathname === '/marketers' ? 'text-blue-400' : null
                  } hover:text-blue-500 active:text-blue-500`}
                >
                  Marketers
                </a>
              </Link>
            </div>
            <Button
              href={'/get-started'}
              content="Get Started"
              bgColor={'bg-[#0075ff] mobile:hidden'}
            />
          </div>
          <div className="hidden overflow-hidden text-white mobile:block">
            {nav ? (
              <button onClick={closeNavHandler}>
                <Image
                  src="../../svgs/x.svg"
                  alt="close logo"
                  width="40px"
                  height="40px"
                />
              </button>
            ) : (
              <button onClick={showNavHandler}>
                <Image
                  src="../../images/hamburger.png"
                  alt="menu logo"
                  width="40px"
                  height="40px"
                />
              </button>
            )}
            {nav && (
              <div className=" bg-white mobile-nav px-7 md:px-[4em] pt-[100px] pb-[46px] inset-0 overflow-hidden">
                <div className="flex flex-col justify-between h-[80%]">
                  <div className="flex flex-col justify-between">
                    <Link href="/">
                      <a
                        onClick={() => ShowNav(false)}
                        className="mt-5 mb-5 text-[20px] font-semibold no-underline text-[#06042C]"
                      >
                        Home
                      </a>
                    </Link>
                    <Link href="/for-organization">
                      <a
                        onClick={() => ShowNav(false)}
                        className="mt-5 mb-5 text-[20px] font-semibold no-underline text-[#06042C]"
                      >
                        For Organization
                      </a>
                    </Link>
                    <Link href="/for-school">
                      <a
                        onClick={() => ShowNav(false)}
                        className="mt-5 mb-5 text-[20px] font-semibold no-underline text-[#06042C]"
                      >
                        For School
                      </a>
                    </Link>
                    <Link href="/marketers">
                      <a
                        onClick={() => ShowNav(false)}
                        className="mt-5 mb-5 text-[20px] font-semibold no-underline text-[#06042C]"
                      >
                        Marketers
                      </a>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Button
                      href={'/get-started'}
                      content="Get Started"
                      bgColor="bg-[#0075FF]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
