import type { NextPage } from 'next';
import Head from 'next/head';
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
				<title>Flip CBT</title>
			</Head>
			<Navbar />
			<main className='mt-[78px] md:mt-[78px] mobile:mt-[83px]'>
				<div className='container'>
					<div className='relative md:px-[8em] px-4'>
						<section className='mobile:text-center'>
							<div className='flex justify-between'>
								<div className='mt-0 md:mt-5 w-full md:w-1/2 main-page'>
									<div className='flex mobile:w-full flex-col md:mt-14 mobile:py-[5em]'>
										<h1 className='lg:text-[45px] md:text-[35px] xl:text-[60px] lg:mb-[0px] mobile:text-[28px] font-bold'>
											Setting Up and <br /> Preparing For <br /> Assessment{' '}
											<br className='md:hidden' /> Without{' '}
											<br className='mobile:hidden md' /> Stress.
										</h1>
										<p className='md:mt-3 mobile:mt-6 mb-[2em] lg:mb-[30px] xl:mb-[40px] main-paragraph'>
											FLIP serves as a source to provide tests, examination{' '}
											<br className='mobile:hidden md:hidden lg:block xl:hidden' />
											management, quick grading of systems and collation of{' '}
											<br className='mobile:hidden md:hidden lg:block xl:hidden' />{' '}
											results instead of the use of pen and paper.
										</p>
										<div className='flex mobile:mt-10 mobile:justify-center md:justify-start lg:justify-start'>
											<Button
												href={'/get-started'}
												content='Get Started'
												bgColor='bg-[#0075FF]'
											/>
										</div>
									</div>
								</div>
								<div className='w-1/2 lg:block md:flex justify-end mobile:hidden'>
									<div className='px-auto md:mt-[5em] lg:mt-[6em] xl:mt-[6em]'>
										<div>
											<img
												src='/bg.png'
												alt='customer'
												className='bg-image-girl'
											/>
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
