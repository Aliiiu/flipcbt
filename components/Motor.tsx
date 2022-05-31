import Image from 'next/image';
import Button from './Button';
const Motor = () => {
	return (
		<section className='flex flex-col container mobile:pt-0 mobile:pb-[8em] py-[10em] text-center'>
			<div className='vector-3'>
				<div className='vector-4'>
					<div className='mobile:px-7 md:px-[8em]'>
						<div>
							<div className='mb-[3rem]'>
								<div className='flex justify-center'>
									<div className=''>
										<h2 className='inline-block z-10 font-semibold text-[40px] mb-4 mobile:text-[25px] capitalize'>
											Great for Schools,
											<br />
											Loved By organizations.
										</h2>
									</div>
								</div>
								<p>
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
											<h2 className='text-[32px] font-semibold mt-3 text-white'>
												For Students
											</h2>
											<p className='mb-8 text-white'>
												Management of resources and cost-{' '}
												<br className='mobile:hidden' /> effectiveness.
											</p>
											<Button
												href={'/for-school'}
												content='Learn More'
												bgColor={'btn-border hover:bg-[#0075FF] hover:border-0'}
											/>
										</div>
									</div>
									<div className='text-center motor-fororganization bg-opacity-20 rounded-3xl py-[5em] overflow-hidden'>
										<div className=''>
											<h2 className='text-[32px] text-white font-semibold mt-3'>
												For organizations
											</h2>
											<p className='mb-8 text-white'>
												Guaranteed advantages for your{' '}
												<br className='mobile:hidden' /> organization.
											</p>
											<Button
												href={'/for-organization'}
												content='Learn More'
												bgColor={'btn-border hover:bg-[#0075FF] hover:border-0'}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='flex justify-between mobile:flex-col-reverse mobile:mt-[4em] md:mt-[10em]'>
							<div className='relative md:w-1/2 mobile:w-full mobile:mt-9 mobile:h-[266px] rounded-[20px] overflow-hidden'>
								<Image
									src='/marketer-img.png'
									layout='fill'
									alt='marketing illustration'
									objectFit='cover'
									objectPosition={'center'}
								/>
							</div>
							<div className='md:w-[43%] mobile:w-full text-left md:py-[4em] md:my-auto'>
								<h2 className='text-[40px] mobile:text-[24px] font-semibold leading-[125%] capitalize'>
									Earn 10% as an Affiliate Marketer With Flip.
								</h2>
								<p className='mt-3 mb-5'>
									Are you a marketer? Would you like to earn some funds while
									telling people about Flip, turning prospects into clients?
								</p>
								<div className='flex justify-start mobile:mt-10'>
									<Button
										href={'/marketing/register'}
										content='Yes, I Want to Earn'
										bgColor={'btn-border bg-[#0075FF]'}
									/>
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
