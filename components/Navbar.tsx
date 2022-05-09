import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
	return (
		<nav className='fixed top-0 left-0 z-50 w-full navbar mobile:py-5 mobile:px-4'>
			<div className='container lg:px-20 xl:px-0 md:py-5  flex items-center justify-between w-full'>
				<div className='flex items-center'>
					<Link href='/'>
						<a className='md:hidden '>
							<Image
								src='/Flip Cbt.png'
								alt='flipcbt logo'
								width='60px'
								height='30px'
								className='mobile:w-[80px] mobile:h-[40px] px-0 py-0n'
							/>
						</a>
					</Link>
					<Link href='/'>
						<a className='flex mobile:hidden'>
							<Image
								src='/Flip Cbt.png'
								alt='flipcbt logo'
								width='90px'
								height='50px'
								className='mobile:w-[80px] mobile:h-[40px] px-0 py-0 mobile:hidden'
							/>
						</a>
					</Link>
					<div className='lg:ml-[7rem] md:ml-[4rem] w-full mobile:hidden  lg:block'>
						<Link href='/for-organisation'>
							<a
								id='navLink'
								className={`text-base font-semibold mr-[5rem] ${
									router.pathname === '/for-organisation'
										? 'text-blue-400'
										: null
								} hover:text-blue-500 active:text-blue-500 `}
							>
								For Organisation
							</a>
						</Link>
						<Link href='/for-school'>
							<a
								id='navLink'
								className={`text-base font-semibold ${
									router.pathname === '/for-school' ? 'text-blue-400' : null
								} hover:text-blue-500 active:text-blue-500`}
							>
								For School
							</a>
						</Link>
					</div>
				</div>
				<div>
					<Link href='/get-started'>
						<a className='text-base text-white bg-blue-500 rounded-md px-12 py-4 text-[14px] mobile:hidden'>
							Get Started
						</a>
					</Link>
				</div>
				<div className='hidden text-white mobile:block overflow-hidden'>
					{nav ? (
						<button onClick={closeNavHandler}>
							<Image src='/x.svg' alt='close logo' width='30px' height='30px' />
						</button>
					) : (
						<button onClick={showNavHandler}>
							<Image
								src='/menu.svg'
								alt='menu logo'
								width='30px'
								height='30px'
							/>
						</button>
					)}
					{nav && (
						<div className='flex flex-col w-full bg-white mobile-nav h-full px-4 py-7 inset-0 overflow-hidden'>
							<Link href='/'>
								<a
									onClick={() => ShowNav(false)}
									className='mt-5 mb-5 text-[24px] font-semibold no-underline text-[#333333]'
								>
									Home
								</a>
							</Link>
							<Link href='/for-organisation'>
								<a
									onClick={() => ShowNav(false)}
									className='mt-5 mb-5 text-[24px] font-semibold no-underline text-[#333333]'
								>
									For Organisation
								</a>
							</Link>
							<Link href='/for-school'>
								<a
									onClick={() => ShowNav(false)}
									className='mt-5 mb-5 text-[24px] font-semibold no-underline text-[#333333]'
								>
									For School
								</a>
							</Link>
							<Link href='/get-started'>
								<a
									onClick={() => ShowNav(false)}
									className='mt-5 mb-5 text-[24px] font-semibold no-underline text-[#333333]'
								>
									Get Started
								</a>
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
