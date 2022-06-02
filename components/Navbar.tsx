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
	//
	return (
		<nav className='fixed top-0 left-0 z-50 w-full bg-white'>
			<div className='container md:py-5'>
				<div className='md:px-[8em] mobile:flex mobile:justify-between mobile:py-5 mobile:px-7'>
					<div className='flex items-center justify-between'>
						<div className='relative w-[82px] h-[58px] mobile:w-[70px] mobile:h-[40px]'>
							<Link href='/' passHref>
								<Image
									src='/Flip Cbt.png'
									alt='flipcbt logo'
									layout='fill'
									objectFit='contain'
									className='cursor-pointer'
								/>
							</Link>
						</div>
						<div className='mobile:hidden flex justify-between w-[40%]'>
							<Link href='/'>
								<a
									id='navLink'
									className={`text-[#06042C] inline-flex ${
										router.pathname === '/' ? 'text-blue-400' : null
									} hover:text-blue-500 active:text-blue-500 `}
								>
									Home
								</a>
							</Link>
							<Link href='/for-organization'>
								<a
									id='navLink'
									className={`text-[#06042C] inline-flex ${
										router.pathname === '/for-organization'
											? 'text-blue-400'
											: null
									} hover:text-blue-500 active:text-blue-500 `}
								>
									For Organization
								</a>
							</Link>
							<Link href='/for-school'>
								<a
									id='navLink'
									className={`text-[#06042C] inline-flex ${
										router.pathname === '/for-school' ? 'text-blue-400' : null
									} hover:text-blue-500 active:text-blue-500`}
								>
									For School
								</a>
							</Link>
						</div>
						<Button
							href={'get-started'}
							content='Get Started'
							bgColor={'bg-[#0075ff] mobile:hidden'}
						/>
					</div>
					<div className='hidden overflow-hidden text-white mobile:block'>
						{nav ? (
							<button onClick={closeNavHandler}>
								<Image
									src='/x.svg'
									alt='close logo'
									width='40px'
									height='40px'
								/>
							</button>
						) : (
							<button onClick={showNavHandler}>
								<Image
									src='/hamburger.png'
									alt='menu logo'
									width='40px'
									height='40px'
								/>
							</button>
						)}
						{nav && (
							<div className=' bg-white mobile-nav px-7 pt-[100px] pb-[46px] inset-0 overflow-hidden'>
								<div className='flex flex-col justify-between h-[90%]'>
									<div className='flex flex-col justify-between'>
										<Link href='/'>
											<a
												onClick={() => ShowNav(false)}
												className='mt-5 mb-5 text-[20px] font-semibold no-underline text-[#06042C]'
											>
												Home
											</a>
										</Link>
										<Link href='/for-organization'>
											<a
												onClick={() => ShowNav(false)}
												className='mt-5 mb-5 text-[20px] font-semibold no-underline text-[#06042C]'
											>
												For Organization
											</a>
										</Link>
										<Link href='/for-school'>
											<a
												onClick={() => ShowNav(false)}
												className='mt-5 mb-5 text-[20px] font-semibold no-underline text-[#06042C]'
											>
												For School
											</a>
										</Link>
									</div>
									<div className='text-center'>
										<Button
											href={'/get-started'}
											content='Get Started'
											bgColor='bg-[#0075FF]'
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
