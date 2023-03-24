import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import Button from '../../UI/Button';
import Menu, { MenuClose } from '../../widget/Icons/Menu';
import { OverlayDiv } from './topbar.styles';

interface TopLinksTypes {
	url: string;
	name: string;
	onPress?: () => void;
}
const LinkList: FC<TopLinksTypes> = ({ url, name }) => {
	let router = useRouter();
	return (
		<li className=' list-none'>
			<Link href={`${url}`}>
				<a
					id='navLink'
					className={`text-[#06042C] inline-flex ${
						router.pathname === url ? 'text-blue-400' : null
					} hover:text-blue-500 active:text-blue-500 `}
				>
					{name}
				</a>
			</Link>
		</li>
	);
};

const NavLinkList: FC<TopLinksTypes> = ({ url, name, onPress }) => {
	let router = useRouter();
	return (
		<li className=' list-none'>
			<Link href={url}>
				<a
					onClick={onPress}
					className='mt-5 mb-5 text-[20px] font-semibold no-underline text-[#06042C]'
				>
					{name}
				</a>
			</Link>
		</li>
	);
};

const Topbar = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (open) {
			document.body.classList.add('overlay');
		} else {
			document.body.classList.remove('overlay');
		}
		// checkScroll();
	}, [open]);

	const checkScroll = () => {
		const header = document.querySelector('header') as HTMLElement;

		if (window.innerWidth <= 768) {
			header?.classList.add('bg-white');
		}
		if (window.scrollY > 30 || open) {
			header?.classList.add('backdrop-blur-lg');
			header?.classList.remove('bg-white');
		} else {
			header?.classList.remove('backdrop-blur-lg');
			header?.classList.add('bg-white');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', checkScroll);
		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', checkScroll);
	}, []);
	return (
		<header className='z-30 sticky top-0 left-0 right-0 transition ease-in-out duration-500'>
			<Transition
				show={open}
				enter='transition ease-out duration-500'
				enterFrom='transform opacity-0'
				enterTo='transform opacity-100'
				leave='transition ease-in duration-500'
				leaveFrom='transform opacity-100'
				leaveTo='transform opacity-0'
			>
				<nav
					className={`mx-auto fixed top-0 left-0 mt-[0px] lg:w-[66.666667%] w-full ${
						open ? 'animate-slide-down' : 'animate-slide-up'
					}`}
				>
					<div className='px-7 bg-white md:px-[4em] h-[100vh] pt-[100px] pb-[46px]'>
						<div className='flex flex-col gap-[100px] justify-between'>
							<div className='flex flex-col gap-[30px] justify-between'>
								<NavLinkList
									url='/'
									name='Home'
									onPress={() => setOpen(false)}
								/>
								<NavLinkList
									url='/for-organization'
									name='For Organization'
									onPress={() => setOpen(false)}
								/>
								<NavLinkList
									url='/for-school'
									name='For School'
									onPress={() => setOpen(false)}
								/>
								<NavLinkList
									url='/marketers'
									name='Marketers'
									onPress={() => setOpen(false)}
								/>
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
				</nav>
			</Transition>
			<div className='flex'>
				<div className='container w-full'>
					<nav className='py-5 xl:px-[8em] px-7 flex justify-between  items-center'>
						<Link href='/' passHref>
							<a className=''>
								<div className='relative w-[82px] h-[58px] mobile:w-[70px] mobile:h-[40px]'>
									<Image
										src='../../../images/FlipCbt.png'
										alt='flipcbt logo'
										layout='fill'
										objectFit='contain'
										className='cursor-pointer'
									/>
								</div>
							</a>
						</Link>
						<div className='hidden md:flex gap-[50px] lg:gap-[100px]'>
							<LinkList name='Home' url='/' />
							<LinkList name='Organization' url='/for-organization' />
							<LinkList name='School' url='/for-school' />
							<LinkList name='Marketers' url='/marketers' />
						</div>
						<Button
							href={'/get-started'}
							content='Get Started'
							bgColor={'bg-[#0075ff] hidden md:block'}
						/>
						<button
							data-collapse-toggle='navbar-sticky'
							type='button'
							className='inline-flex md:hidden items-center lg:p-2 lg:px-0 p-0 text-sm text-black rounded-lg z-30 focus:outline-none focus:ring-0 focus:ring-gray-200'
							aria-controls='navbar-sticky'
							aria-expanded='false'
							onClick={() => setOpen(!open)}
						>
							<span className='sr-only'>Open main menu</span>
							{!open ? <Menu /> : <MenuClose />}
						</button>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Topbar;
