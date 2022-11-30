import Head from 'next/head';
import React, { Fragment, useEffect } from 'react';
import Faqs from '../components/Layout/Faqs';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import Benefit from '../components/Sections/marketers/Benefit';
import HowDoesItWork from '../components/Sections/marketers/HowDoesItWorks';
import Policies from '../components/Sections/marketers/Policies';
import Products from '../components/Sections/marketers/Products';
import VideoStream from '../components/Sections/VideoStream';
import HeroContainer from '../components/UI/HeroContainer';
import CustomImage from '../components/UI/Image';

const Marketers = () => {
	useEffect(() => {
		const html = document.getElementById('mainHtml') as HTMLElement;
		html.style.overflow = 'auto';
	});
	return (
		<Fragment>
			<Head>
				<title>Marketers - Flip CBT</title>
			</Head>
			<Navbar />
			<div className=' mt-[78px] mobile:mt-[83px]'>
				<div className='container'>
					<HeroContainer
						src={'/images/marketersBg.png'}
						title='Earn Up To 10% For Every School You Get To Partner With Flip'
						btnAction='Apply Now'
						pop={false}
						hrefLink='/marketing/register'
						alt='marketer illustration'
						content='The FLIP Affiliate program is for every person interested in pitching 
            our product to potential schools while getting rewarded with an attractive 
            commission on every successful school partnership.'
					/>
				</div>
				<section className='py-10 lg:py-20 bg-[#F9FBFE] lg:mt-10'>
					<Products />
				</section>
				<section className='flex justify-center py-4 md:py-8 px-7 xl:px-0 xl:py-[150px]'>
					<VideoStream />
				</section>
				<section className='bg-[#00be7e1a] sketch-1'>
					<div className='container xl:px-[8em] py-32 px-7'>
						<HowDoesItWork />
					</div>
				</section>
				<section className='container xl:px-[8em] px-7'>
					<Benefit />
				</section>
				<Faqs />
				<section className='py-10 lg:py-20 bg-primaryBlue lg:mt-10'>
					<Policies />
				</section>
				<Footer />
			</div>
		</Fragment>
	);
};

export default Marketers;
