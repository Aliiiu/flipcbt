import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';
import Benefit from '../components/Benefit';
import Button from '../components/Button';
import Faqs from '../components/Faqs';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Guarantee from '../components/Guarantee';
import Motor from '../components/Motor';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
	useEffect(() => {
		const html = document.getElementById('mainHtml') as HTMLElement;
		html.style.overflow = 'auto';
	});
	return (
		<Fragment>
			<Head>
				<title>Home Page | Flip CBT</title>
			</Head>
			<Navbar />
			<main className='mt-[78px] md:mt-[78px] mobile:mt-[83px]'>
				<div className='container'>
					<div className='relative md:px-[8em] px-7'>
						<section className=''>
							<div className='flex justify-between'>
								<div className='w-full md:w-1/2'>
									<div className='flex mobile:w-full flex-col md:mt-[106px] mobile:pt-[3em] mobile:pb-[6em]'>
										<h1 className='lg:text-[50px] md:text-[40px] mobile:text-[32px] font-bold md:leading-[68.09px]'>
											Setting Up and <br /> Preparing For <br /> Assessment{' '}
											<br className='md:hidden' /> Without{' '}
											<br className='mobile:hidden md' /> Stress.
										</h1>
										<p className='md:mt-3 mobile:mt-6 mb-[2em] lg:mb-[30px]'>
											FLIP is an enhanced assessment platform that{' '}
											<br className='mobile:hidden' /> provides computerized
											tests, examination <br className='mobile:hidden' />{' '}
											management, quick grading systems, and{' '}
											<br className='mobile:hidden' /> collation of results
											instead of the use of pen and{' '}
											<br className='mobile:hidden' /> paper.
										</p>
										<div className='flex justify-start mobile:mt-1'>
											<Button
												href={'/get-started'}
												content='Get Started'
												bgColor='bg-[#0075FF]'
											/>
										</div>
									</div>
								</div>
								<div className='justify-end w-1/2 lg:block md:flex mobile:hidden'>
									<div className='relative h-full w-full md:mt-[100px]'>
										<div className='bg-image'>
											<Image
												src={'/bg.png'}
												alt='excitment illustration'
												layout='fill'
												objectFit='contain'
											/>
											{/* <img
												src='/bg.png'
												alt='customer'
												className='bg-image-girl'
											/> */}
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
				<Feature />
				<Benefit />
				<Motor />
				{/* <Marketing /> */}
				<Guarantee />
				<Faqs />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Home;
