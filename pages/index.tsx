import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';
import Benefit from '../components/Sections/Benefit';
import Feature from '../components/Sections/Feature';
import Guarantee from '../components/Sections/Guarantee';
import Faqs from '../components/Layout/Faqs';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import Motor from '../components/Sections/Motor';
import Button from '../components/UI/Button';

const Home: NextPage = () => {
	useEffect(() => {
		const html = document.getElementById('mainHtml') as HTMLElement;
		html.style.overflow = 'auto';
	});
	return (
		<Fragment>
			<Head>
				<title>Enhanced Assessment Platform</title>
			</Head>
			<Navbar />
			<main className='mt-[78px] md:mt-[78px] mobile:mt-[83px]'>
				<div className='container'>
					<div className='relative lg:px-[8em] md:px-[4em] px-7'>
						<section className=''>
							<div className='flex justify-between'>
								<div className='w-full lg:w-1/2'>
									<div className='flex mobile:w-full flex-col md:mt-[106px] mobile:py-[70px]'>
										<h1 className='lg:text-[50px] md:text-[40px] mobile:text-[32px] font-bold md:leading-[68.09px] capitalize'>
											Setting Up and <br /> Preparing For <br /> Assessment{' '}
											<br className='md:hidden' /> Without{' '}
											<br className='mobile:hidden md' /> Stress.
										</h1>
										<p className='md:mt-3 mobile:mt-6 mb-[2em] lg:mb-[30px]'>
											Flip is an enhanced assessment platform that{' '}
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
									<div className='relative h-full w-full bg-image md:mt-[100px]'>
										<Image
											src={'/images/hmpageBg.png'}
											alt='excitment illustration'
											layout='fill'
											objectFit='contain'
										/>
										{/* <div className=''></div> */}
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
				<Feature />
				<Benefit />
				<Motor />
				<Guarantee />
				<Faqs />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Home;
