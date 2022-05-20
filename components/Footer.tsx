import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='md:pt-20 bg-[#06042C]'>
			<div className='container'>
				<div className='md:px-[8em] mobile:px-5 flex mobile:flex-col'>
					<div className='md:mr-[8em] lg:mr-[12em] mobile:text-center mobile:py-10'>
						<Image
							src='/Flip_Cbt-logo.png'
							alt='Flip Cbt Logo'
							width='150px'
							height='80px'
						/>
					</div>
					<div className='flex md:justify-between w-full md:mr-[6rem] mobile:flex-wrap'>
						<div className='space-y-8 mobile:mb-8 mobile:mx-[3rem]'>
							<h2 className='text-white'>Company</h2>
							<h2 className='font-thin text-gray-500'>
								<a className='hover:text-white' href='#'>
									Our Blog
								</a>
							</h2>
							<h2 className='font-thin text-gray-500'>
								<a className='hover:text-white' href='#'>
									Career
								</a>
							</h2>
						</div>
						<div className='space-y-8'>
							<h2 className='text-white'>Resources</h2>
							<h2 className='font-thin text-gray-500'>
								<a className='hover:text-white' href='#'>
									Terms of use
								</a>
							</h2>
							<h2 className='font-thin text-gray-500'>
								<a className='hover:text-white' href='#'>
									Privacy Policy
								</a>
							</h2>
						</div>
						<div className='mb-[5rem] space-y-8 mobile:ml-[3rem]'>
							<h2 className='text-white'>Contact</h2>
							<p className='font-thin text-gray-500'>
								<a
									href='mailto:hello@intrapair.com?subject=FlipCBT'
									className='hover:text-white'
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
