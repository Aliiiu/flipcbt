import Head from 'next/head';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';
import FeatureForSchool from '../components/Sections/school/FeatureForSchool';
import GettingStartedForSchool from '../components/Sections/school/GettingStartedForSchool';
import Guarantee from '../components/Sections/Guarantee';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import Button from '../components/UI/Button';
import HeroContainer from '../components/UI/HeroContainer';
import ReadyToGetStarted from '../components/Sections/ReadyToGetStarted';

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
						hrefLink={''}
						pop={true}
						content='Teaching many students different subjects and courses is quite demanding
						 and tasking already. Setting up a terminal assessment for them should not be 
						 worrisome, including marking scripts and collation of results.'
					/>
				</div>
			</div>
			<FeatureForSchool />
			<GettingStartedForSchool />
			<section className="md:px-20 mobile:px-4 py-20 bg-[url('/FlipCbtBg2.png')] bg-contain bg-[#0075FF] bg-opacity-90">
				<ReadyToGetStarted
					content={
						'Greater Efficiency Is Undeniable. All Reports are Saved and Can Be Accessed At Any Time.'
					}
					classes='w-4/12'
				/>
			</section>
			<Guarantee />
			<Footer />
		</Fragment>
	);
};

export default ForSchool;
