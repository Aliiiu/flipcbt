import Head from 'next/head';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';
import FeatureForSchool from '../components/FeatureForSchool';
import GettingStartedForSchool from '../components/GettingStartedForSchool';
import Guarantee from '../components/Guarantee';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import Button from '../components/UI/Button';

const ForSchool = () => {
	useEffect(() => {
		const html = document.getElementById('mainHtml') as HTMLElement;
		html.style.overflow = 'auto';
	});
	return (
		<Fragment>
			<Head>
				<title>School - Flip CBT</title>
			</Head>
			<Navbar />
			<div className=' mt-[78px] mobile:mt-[83px]'>
				<div className='container'>
					<div className='relative md:px-[8em] px-7'>
						<section className=''>
							<div className='flex justify-between'>
								<div className='w-full mt-0 md:mt-5 md:w-1/2'>
									<div className='flex mobile:w-full flex-col md:mt-[92px] mobile:pt-[70px] mobile:pb-[90px] '>
										<h1 className='lg:text-[50px] md:text-[40px] mobile:text-[32px] font-bold md:leading-[62px] capitalize'>
											Use The Right <br /> Tool To Conduct <br />A stress-free{' '}
											<br />
											Assessment.
										</h1>
										<p className='md:mt-3 mobile:my-[24px]'>
											Teaching many students different subjects and{' '}
											<br className='mobile:hidden md:hidden lg:block' />
											courses is quite demanding and tasking already.{' '}
											<br className='mobile:hidden md:hidden lg:block' />{' '}
											Setting up a terminal assessment for them should{' '}
											<br className='mobile:hidden md:hidden lg:block' />
											not be worrisome, including marking scripts and{' '}
											<br className='mobile:hidden md:hidden lg:block' />{' '}
											collation of results.
										</p>
										<div className='flex justify-start md:mt-[24px] '>
											<Button
												href={'/get-started'}
												content='Get Started'
												bgColor='bg-[#0075FF]'
											/>
										</div>
									</div>
								</div>
								<div className='w-1/2 lg:block mobile:hidden'>
									<div className='relative md:mt-[61px] h-full'>
										<div className='bg-image'>
											<Image
												src={'/images/studentBg.png'}
												alt='student illustration'
												layout='fill'
												objectFit='contain'
											/>
											{/* <img
												src='/schoolBg.png'
												alt='customer'
												
											/> */}
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
			<FeatureForSchool />
			<GettingStartedForSchool />
			<section className="md:px-20 mobile:px-4 py-20 bg-[url('/FlipCbtBg2.png')] bg-contain bg-[#0075FF] bg-opacity-90">
				<div className='container flex flex-col items-center justify-center text-center space-y-7'>
					<h2 className='font-bold text-[40px] mobile:text-[28px] text-white capitalize'>
						Ready to get started?
					</h2>
					<p className='w-7/12 text-white mobile:w-full'>
						Greater Efficiency Is Undeniable. All Reports are{' '}
						<br className='mobile:hidden' /> Saved and Can Be Accessed At Any
						Time.
					</p>
					{/* <Link href='#'>
						<a className='text-white bg-black btn-border px-12 py-4 text-[14px]'>
							CLICK HERE
						</a>
					</Link> */}
					<Button
						href={'/marketing/register'}
						content='Get Started'
						bgColor='bg-[#06042C]'
					/>
				</div>
			</section>
			<Guarantee />
			<Footer />
		</Fragment>
	);
};

export default ForSchool;
