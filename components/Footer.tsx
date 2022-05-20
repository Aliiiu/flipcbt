import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='md:pt-20 bg-[#06042C]'>
			<div className='container'>
				<div className='md:px-[8em] mobile:px-7 flex justify-between mobile:flex-col'>
					<div className='mobile:pt-[4em] mobile:pb-[3em] md:mr-[8em]'>
						<Link href={'/'}>
							<a className='mobile:hidden'>
								<Image
									src='/Flip_Cbt-logo.png'
									alt='Flip Cbt Logo'
									width='150px'
									height='80px'
								/>
							</a>
						</Link>
						<Link href={'/'}>
							<a className='md:hidden'>
								<Image
									src='/Flip_Cbt-logo.png'
									alt='Flip Cbt Logo'
									width='110px'
									height='60px'
								/>
							</a>
						</Link>
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
