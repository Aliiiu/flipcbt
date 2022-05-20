import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from './Button';

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
		<nav className='fixed top-0 left-0 z-50 navbar'>
			<div className='container md:py-5'>
				<div className='md:px-[8em] w-full mobile:py-5 mobile:px-4'>
					<div className='flex justify-between items-center'>
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
						<div className='mobile:hidden flex justify-between w-[40%]'>
							<Link href='/'>
								<a
									id='navLink'
									className={`text-[#06042C] inline-flex ${
										router.pathname === '/for-organisation'
											? 'text-blue-400'
											: null
									} hover:text-blue-500 active:text-blue-500 `}
								>
									Home
								</a>
							</Link>
							<Link href='/for-organisation'>
								<a
									id='navLink'
									className={`text-[#06042C] inline-flex ${
										router.pathname === '/for-organisation'
											? 'text-blue-400'
											: null
									} hover:text-blue-500 active:text-blue-500 `}
								>
									Organisation
								</a>
							</Link>
							<Link href='/for-school'>
								<a
									id='navLink'
									className={`text-[#06042C] inline-flex ${
										router.pathname === '/for-school' ? 'text-blue-400' : null
									} hover:text-blue-500 active:text-blue-500`}
								>
									Student
								</a>
							</Link>
						</div>
						<Button
							href={'get-started'}
							content='Get Started'
							bgColor={'bg-[#0075ff] mobile:hidden'}
						/>
					</div>
					<div className='hidden text-white mobile:block overflow-hidden'>
						{nav ? (
							<button onClick={closeNavHandler}>
								<Image
									src='/x.svg'
									alt='close logo'
									width='30px'
									height='30px'
								/>
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
			</div>
		</nav>
	);
};

export default Navbar;
