import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='lg:pt-20 bg-[#06042C]'>
			<div className='container'>
				<div className='lg:px-[8em] md:px-[4em] px-7 flex justify-between mobile:flex-col'>
					<div className='mobile:pt-[4em] mobile:pb-[3em] md:mr-[8em]'>
						<div className='relative w-[130px] h-[70px] mobile:w-[95px] mobile:h-[60px]'>
							<Link href='/' passHref>
								<a>
									<Image
										src='/images/FlipCbt.png'
										alt='flipcbt logo'
										layout='fill'
										objectFit='contain'
									/>
								</a>
							</Link>
						</div>
					</div>
					<div className='flex justify-between w-full mobile:grid mobile:grid-cols-2'>
						<div className='space-y-5 mobile:mb-8'>
							<p className='font-semibold text-white'>Company</p>
							<p className='font-thin'>
								<a className='text-white' href='#'>
									Our Blog
								</a>
							</p>
							<p className='font-thin'>
								<a className='text-white' href='#'>
									Career
								</a>
							</p>
						</div>
						<div className='space-y-5'>
							<p className='font-semibold text-white'>Resources</p>
							<p className='font-thin'>
								<a className='text-white' href='#'>
									Terms of use
								</a>
							</p>
							<p className='font-thin'>
								<a className='text-white' href='#'>
									Privacy Policy
								</a>
							</p>
						</div>
						<div className='mb-[5rem] space-y-5 mobile:mt-5'>
							<p className='font-semibold text-white'>Contact</p>
							<p className='font-thin'>
								<a
									href='mailto:hello@intrapair.com?subject=FlipCBT'
									className='text-white'
								>
									hello@flipcbt.com
								</a>
							</p>
							<div className='flex space-x-6'>
								<a href='https://www.linkedin.com/company/flipcbt/'>
									<Image
										src='/icons/linkedin.svg'
										alt='Facebook icon'
										width='32px'
										height='32px'
									/>
								</a>
								<a href='https://twitter.com/flipcbt'>
									<Image
										src='/icons/twitter.png'
										alt='Twitter icon'
										width='35px'
										height='35px'
									/>
								</a>
								<a href='https://instagram.com/flipcbt/'>
									<Image
										src='/icons/IG.png'
										alt='Instagram icon'
										width='35px'
										height='35px'
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
