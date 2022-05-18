import Image from 'next/image';
import Link from 'next/link';
const Motor = () => {
	return (
		<section className='flex flex-col container py-[6em] text-center'>
			<div className='vector-3'>
				<div className='vector-4'>
					<div className='mobile:px-5 md:px-[8em]'>
						<div>
							<div className='mb-[3rem]'>
								<div className='flex justify-center'>
									<div className='relative'>
										<h2 className='inline-block z-10 font-semibold text-[40px] mb-4 mobile:text-[25px]'>
											Great for Schools,
											<br />
											Loved By Organizations.
										</h2>
										<span className='inline-block absolute top-[14px] md:top-[24px] right-[54px] md:right-[75px] bg-[rgba(0,117,255,0.5)] rounded-[8px] w-[80px] md:w-[140px] mobile:h-[14px] md:h-[20px]'></span>
										<span className='inline-block absolute top-[52px] md:top-[84px] right-[13px] md:right-[13px] bg-[rgba(0,117,255,0.5)] rounded-[8px] w-[160px] md:w-[260px] mobile:h-[14px] md:h-[20px]'></span>
									</div>
								</div>
								<p className='text-[#000000]'>
									Essential in secondary schools, universities and even
									organizations <br className='mobile:hidden' /> for assessment
									of all kinds.
								</p>
							</div>
							<div>
								<div className='grid grid-cols-2 mobile:grid-cols-1 md:gap-x-[1em] lg:gap-x-[4em] mobile:gap-y-5 md:mx-auto md:w-full'>
									<div className='text-center bg-opacity-20 rounded-3xl motor-forStudent py-[5em]'>
										{/* <Image src='/forSchool.png' alt='student image' layout='fill' /> */}
										<div className=''>
											<h2 className='text-[32px] font-bold mt-3 text-white'>
												For Students
											</h2>
											<p className='mb-8 text-white'>
												Management of resources and cost-{' '}
												<br className='mobile:hidden' /> effectiveness.
											</p>
											<Link href='#'>
												<a className='text-white text-base py-3 px-9 btn-border'>
													LEARN MORE
												</a>
											</Link>
										</div>
									</div>
									<div className='text-center motor-forOrganisation bg-opacity-20 rounded-3xl py-[5em]'>
										<div className=''>
											<h2 className='text-[32px] text-white font-bold mt-3'>
												For Organisations
											</h2>
											<p className='mb-8 text-white'>
												Guaranteed advantages for your{' '}
												<br className='mobile:hidden' /> organization.
											</p>
											<Link href='#'>
												<a className='text-white text-base py-3 px-9 btn-border'>
													LEARN MORE
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='flex justify-between mt-[10em] mobile:hidden'>
							<div className='relative w-1/2 overflow-hidden'>
								<Image
									src='/marketing.png'
									layout='fill'
									alt='marketing illustration'
								/>
							</div>
							<div className='w-[43%] text-left py-[5em]'>
								<h2 className='text-[40px] font-semibold leading-[125%]'>
									Want to do <br /> marketing with <br /> Flip?
								</h2>
								<p className='my-8'>
									Marketing is the activity, institutions, and processes for
									creating, communicating, delivering, and exchanging offerings
									that have value.
								</p>
								<div className='flex mobile:mt-10 mobile:justify-center md:justify-start lg:justify-start'>
									<Link href='/get-started'>
										<a className='py-3 text-white bg-[#0075FF] btn-border px-[3rem] md:py-5'>
											GET STARTED
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Motor;
