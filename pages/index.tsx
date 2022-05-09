import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect } from 'react';
import Benefit from '../components/Benefit';
import Faqs from '../components/Faqs';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Guarantee from '../components/Guarantee';
import Marketing from '../components/Marketing';
import Motor from '../components/Motor';
import Navbar from '../components/Navbar';
import profile from '../public/profile.svg';
import profile2 from '../public/profile2.svg';

const Home: NextPage = () => {
	useEffect(() => {
		const html = document.getElementById('mainHtml') as HTMLElement;
		html.style.overflow = 'auto';
	});
	return (
		<Fragment>
			<Head>
				<title>Flip CBT</title>
			</Head>
			<Navbar />
			<main className='mt-[78px] md:mt-[78px] mobile:mt-[83px]'>
				<div className='homePage md:px-20 px-4'>
					<div className='relative container'>
						<section className='mobile:text-center'>
							<div className='flex justify-between'>
								<div className='mt-0 md:mt-5 w-full md:w-1/2 main-page'>
									<div className='flex mobile:w-full flex-col md:mt-14 mobile:py-[5em] '>
										<h1 className='lg:text-[50px] md:text-[35px] xl:text-[60px] lg:mb-[0px] mobile:text-[28px] font-bold'>
											Assessment{' '}
											<br className='mobile:hidden md:hidden lg:block' />{' '}
											streamline made{' '}
											<br className='mobile:hidden md:hidden lg:block' /> more
											accurate and{' '}
											<br className='mobile:hidden md:hidden lg:block' />{' '}
											time-bound.
										</h1>
										<p className='md:mt-3 mobile:mt-6 mb-[2em] lg:mb-[30px] xl:mb-[40px] main-paragraph'>
											FLIP serves as a source to provide tests, examination{' '}
											<br className='mobile:hidden md:hidden lg:block xl:hidden' />
											management, quick grading of systems and collation of{' '}
											<br className='mobile:hidden md:hidden lg:block xl:hidden' />{' '}
											results instead of the use of pen and paper.
										</p>
										<div className='flex mobile:mt-10 mobile:justify-center md:justify-start lg:justify-start'>
											<Link href='/'>
												<a className='py-3 text-base text-white bg-[#0075FF] btn-border px-[4rem] md:py-5'>
													GET STARTED
												</a>
											</Link>
										</div>
									</div>
								</div>
								<div className='w-1/2 lg:block md:flex justify-end mobile:hidden'>
									<div className='px-auto md:mt-[5em] lg:mt-[6em] xl:mt-[6em]'>
										<div>
											<img
												src='/bg2.png'
												alt='customer'
												className='bg-image-girl'
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='absolute right-[380px] mobile:hidden md:hidden lg:hidden xl:inline-flex flex px-10 py-2 bg-white flip-border bottom-[50px] rounded-lg blue-glow student-card'>
								<Image
									src={profile2}
									alt='profile badge'
									width='55px'
									height='55px'
								/>
								<div className='flex flex-col ml-3'>
									<h1 className='text-[30px] text-[#FFBC6C] font-semibold'>
										50K
									</h1>
									<p>Total Active Student</p>
								</div>
							</div>
							<div className='absolute right-[50px] mobile:hidden md:hidden lg:hidden xl:inline-flex flex lg:px-10 xl:px-10 py-2 bg-white flip-border bottom-[150px] rounded-lg blue-glow task-card'>
								<Image
									src={profile}
									alt='profile badge'
									width='55px'
									height='55px'
								/>
								<div className='flex flex-col ml-3'>
									<h1 className='text-[30px] text-[#00BE7E] font-semibold'>
										7.5K
									</h1>
									<p>Total Active Task</p>
								</div>
							</div>
						</section>
					</div>
				</div>
				<Feature />
				<Benefit />
				<Motor />
				<Marketing />
				<Guarantee />
				<Faqs />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Home;
