import Head from 'next/head';
import React, { Fragment, useEffect } from 'react';
import Faqs from '../components/Layout/Faqs';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import Benefit from '../components/Sections/marketers/Benefit';
import HowDoesItWork from '../components/Sections/marketers/HowDoesItWorks';
import HowItWorks from '../components/Sections/marketers/HowItWorks';
import Policies from '../components/Sections/marketers/Policies';
import Products from '../components/Sections/marketers/Products';
import ReferEarn from '../components/Sections/marketers/ReferEarn';
import VideoStream from '../components/Sections/VideoStream';
import HeroContainer from '../components/UI/HeroContainer';
import CustomImage from '../components/UI/Image';

interface QATypes {
	question: string;
	answer: string | JSX.Element;
}
const QA: QATypes[] = [
	{
		question: 'Do I share FLIP with both public and private schools?',
		answer: `Yes, you can tell about FLIP to both public and private schools`,
	},
	{
		question: 'Would I receive multiple commissions for multiple referrals?',
		answer: `You would receive 30,000 naira for every referral`,
	},
	{
		question: 'How do I get my affiliate link?',
		answer: `You would have access to a marketer dashboard as soon as the FLIP team verifies you as a marketer.`,
	},
	{
		question: 'How much commission can I earn in a month?',
		answer: `There is no limit to how much you can earn as a marketer so far there are referrals from you.`,
	},
	{
		question: 'Do I have access to FLIP promotional materials?',
		answer: `Every verified marketer would have access to FLIP promotional materials`,
	},
	{
		question: 'Can I test the FLIP software?',
		answer: `Yes, you can view the demo of the FLIP software.`,
	},
];

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
						title='Earn Up To 10% When You Tell a School About Flip.'
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
					<div className='container xl:px-[8em] py-16 lg:py-32 px-7'>
						<HowDoesItWork />
					</div>
				</section>
				<section className='container py-12 lg:py-24 xl:px-[8em] px-7'>
					<ReferEarn />
				</section>
				<section className="bg-flipGreen bg-[url('/images/bgVector.png')] bg-contain">
					<div className='container py-12 lg:py-24 xl:px-[8em] px-7'>
						<HowItWorks />
					</div>
				</section>
				<section className='container xl:px-[8em] px-7'>
					<Benefit />
				</section>
				<Faqs
					QA={QA}
					content='We’ve got answers to all your questions and inquiries.'
				/>
				<section className='py-10 lg:py-20 bg-primaryBlue lg:mt-10'>
					<Policies />
				</section>
				<Footer />
			</div>
		</Fragment>
	);
};

export default Marketers;
