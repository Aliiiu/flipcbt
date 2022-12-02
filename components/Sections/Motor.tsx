import Image from 'next/image';
import Button from '../UI/Button';
import InViewAnimateTop from '../../transition/InViewAnimateTop';
import InViewAnimateLeft from '../../transition/InViewAnimateLeft';
const Motor = () => {
	return (
		<section className='flex flex-col vector-3 mobile:pt-0 mobile:pb-[8em] py-[10em] text-center'>
			<div className='vector-4'>
				<div className='container '>
					<div className='px-7 xl:px-[8em]'>
						<div>
							<InViewAnimateTop>
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
										organizations <br className='mobile:hidden' /> for
										assessment of all kinds.
									</p>
								</div>
								<div>
									<div className='grid md:grid-cols-2 md:gap-x-[1em] lg:gap-x-[4em] mobile:gap-y-5 md:mx-auto md:w-full'>
										<div className='relative flex-1 h-[300px] lg:h-[364px] text-center overflow-hidden rounded-3xl'>
											{/* <div className='motor-forStudent'></div> */}
											<Image
												src={'/images/forSchool.png'}
												alt=''
												layout='fill'
												objectFit='cover'
												objectPosition={'center'}
											/>
											<div className='py-20 absolute bg-[#06042c87] hover:backdrop-blur-lg w-full h-full'>
												<h2 className='text-[32px] font-semibold mt-3 text-white'>
													For Schools
												</h2>
												<p className='mb-8 text-white'>
													Management of resources and cost-{' '}
													<br className='mobile:hidden' /> effectiveness.
												</p>
												<Button
													href={'/for-school'}
													content='Learn More'
													bgColor={'border-2 border-white'}
													hover='hover:text-white hover:bg-[#0075FF] bg-transparent hover:border-none transition-colors ease-in-out duration-500'
												/>
											</div>
										</div>
										<div className='relative flex-1 h-[300px] lg:h-[364px] text-center rounded-3xl overflow-hidden'>
											<Image
												src={'/images/forOrganization.png'}
												alt=''
												layout='fill'
												objectFit='cover'
												objectPosition={'center'}
											/>
											<div className='py-20 absolute bg-[#06042c87] hover:backdrop-blur-lg w-full h-full'>
												<h2 className='text-[32px] text-white font-semibold mt-3'>
													For Organizations
												</h2>
												<p className='mb-8 text-white'>
													Guaranteed advantages for your{' '}
													<br className='mobile:hidden' /> organization.
												</p>
												<Button
													href={'/for-organization'}
													content='Learn More'
													bgColor={'btn-border'}
													hover='hover:text-white hover:bg-[#0075FF] bg-transparent hover:border-0 transition-colors ease-in-out duration-500'
												/>
											</div>
										</div>
									</div>
								</div>
							</InViewAnimateTop>
						</div>
						<InViewAnimateLeft>
							<div className='flex justify-between mobile:flex-col-reverse mobile:mt-[4em] md:mt-[10em]'>
								<div className='relative md:w-1/2 mobile:w-full mobile:mt-9 mobile:h-[266px] rounded-[20px] overflow-hidden'>
									<Image
										src='/images/marketer-img.png'
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
											content='Apply Now'
											bgColor={'btn-border bg-[#0075FF]'}
										/>
									</div>
								</div>
							</div>
						</InViewAnimateLeft>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Motor;
