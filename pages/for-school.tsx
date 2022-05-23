import Link from 'next/link';
import { Fragment, useEffect } from 'react';
import Button from '../components/Button';
import FeatureForSchool from '../components/FeatureForSchool';
import Footer from '../components/Footer';
import GettingStartedForSchool from '../components/GettingStartedForSchool';
import Guarantee from '../components/Guarantee';
import Navbar from '../components/Navbar';

const ForSchool = () => {
	useEffect(() => {
		const html = document.getElementById('mainHtml') as HTMLElement;
		html.style.overflow = 'auto';
	});
	return (
		<Fragment>
			<Navbar />
			<div className='ForSchool mt-[75px] md:px-20 xl:px-0 px-5'>
				<div className='container'>
					<div className='mobile:text-center py-[5em] md:pb-[5em] mobile:mt-0'>
						<h1 className='mobile:text-[28px] md:text-white md:text-[35px] lg:text-[50px] font-bold lg:leading-[62px]'>
							Get Yourself <br className='mobile:hidden md:hidden lg:block' />{' '}
							Prepared For <br className='mobile:hidden md:hidden lg:block' />{' '}
							CBT Exams
						</h1>
						<p className='md:text-white mobile:mt-6 mobile:mb-[5em] mb-[2em] md:mt-[2em] lg:mb-[2em] lg:mt-[1em] xl:mb-[4opx] xl:mt-[2em]'>
							Flip is a CBT software as a source to provide tests,{' '}
							<br className='mobile:hidden md:hidden lg:block' />
							examination management and quick grading system and{' '}
							<br className='mobile:hidden md:hidden lg:block' />
							collation of results instead of the use of pen and paper.
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
			</div>
			<section className='md:pt-[8em] mobile:pt-[1em]  text-center container'></section>
			<FeatureForSchool />
			<GettingStartedForSchool />
			<section className="md:px-20 mobile:px-4 py-20 bg-[url('/FlipCbtBg2.png')] bg-contain bg-[#0075FF] bg-opacity-90">
				<div className='container flex flex-col items-center justify-center text-center space-y-7'>
					<h2 className='font-bold text-[40px] mobile:text-[28px] text-white'>
						Ready to get started?
					</h2>
					<p className='text-white w-7/12 mobile:w-full'>
						Marketing is the activity, institutions, and processes for creating,
						communicating, delivering, and exchanging, offerings that have
						value.
					</p>
					<Link href='#'>
						<a className='text-white bg-black btn-border px-12 py-4 text-[14px]'>
							CLICK HERE
						</a>
					</Link>
				</div>
			</section>
			<Guarantee />
			<Footer />
		</Fragment>
	);
};

export default ForSchool;
