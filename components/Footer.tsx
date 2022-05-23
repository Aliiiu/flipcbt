import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='md:pt-20 bg-[#06042C]'>
			<div className='container'>
				<div className='md:px-[8em] mobile:px-7 flex justify-between mobile:flex-col'>
					<div className='mobile:pt-[4em] mobile:pb-[3em] md:mr-[8em]'>
						<div className='relative w-[130px] h-[70px] mobile:w-[95px] mobile:h-[60px]'>
							<Link href='/' passHref>
								<Image
									src='/Flip Cbt.png'
									alt='flipcbt logo'
									layout='fill'
									objectFit='contain'
								/>
							</Link>
						</div>
					</div>
					<div className='mobile:grid flex justify-between w-full mobile:grid-cols-2'>
						<div className='space-y-8 mobile:mb-8'>
							<p className='text-white font-semibold'>Company</p>
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
						<div className='space-y-8'>
							<p className='text-white font-semibold'>Resources</p>
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
						<div className='mb-[5rem] space-y-8'>
							<p className='text-white font-semibold'>Contact</p>
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
										src='/fb-icon.png'
										alt='Facebook icon'
										width='20px'
										height='30px'
									/>
								</a>
								<a href='https://twitter.com/flipcbt'>
									<Image
										src='/twitter.png'
										alt='Twitter icon'
										width='35px'
										height='35px'
									/>
								</a>
								<a href='https://instagram.com/flipcbt/'>
									<Image
										src='/IG.png'
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
