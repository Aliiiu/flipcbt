import Head from 'next/head';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';
import FeatureForSchool from '../components/FeatureForSchool';
import GettingStartedForSchool from '../components/GettingStartedForSchool';
import Guarantee from '../components/Sections/Guarantee';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import Button from '../components/UI/Button';
import HeroContainer from '../components/UI/HeroContainer';

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
					<HeroContainer
						src={'/images/schoolBg.png'}
						title='Use The Right Tool To Conduct A Stress-Free Assessment'
						alt='student illustration'
						content='Teaching many students different subjects and courses is quite demanding
						 and tasking already. Setting up a terminal assessment for them should not be 
						 worrisome, including marking scripts and collation of results.'
					/>
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
