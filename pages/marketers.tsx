import Head from 'next/head';
import React, { Fragment, useEffect } from 'react';
import Faqs from '../components/Layout/Faqs';
import Footer from '../components/Layout/Footer';
import Layout from '../components/Layout/Layout';
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
		question: 'Is there a signup fee?',
		answer: `No, joining our affiliate program is free.`,
	},
	{
		question: 'What technical skills do I need to become an Affiliate?',
		answer: `You should be able to carry out basic functions on a computer system ( Laptops or desktops).`,
	},
	{
		question: 'How do I sign-up?',
		answer: `Click on the get started page on the nav menu or click on apply now on the marketer’s page. Then click on Marketer on the get started and fill in the required form.`,
	},
	{
		question: 'Would I receive multiple commissions for multiple referrals?',
		answer: `You would receive 30,000 naira for each school that finally signs up with Flip.`,
	},
	{
		question:
			'Can I receive both the referral and affiliate Marketer’s commission ?',
		answer: `No, you wouldn’t be able to receive both commissions. To be a Marketer with Flip you would have to register.`,
	},
	{
		question: 'Do I have access to Flip promotional materials?',
		answer: `Every verified marketer would have access to Flip promotional materials`,
	},
	{
		question: 'How do I get paid for my referral commission?',
		answer: `After confirmation that the school referred has registered with Flip. The sum of ₦30,000 will be sent directly to the bank account you filled in the form.`,
	},
	{
		question: 'How do I monitor my commissions as a marketer?',
		answer: `You would have access to a marketer dashboard as soon as the Flip team verifies you as a certified marketer.`,
	},
	{
		question: 'Can I see the Flip software in action (demo)?',
		answer: `Yes, you can access the online demo of Flip software.`,
	},
	{
		question:
			'What if I don’t receive my referral commission after the school has registered?',
		answer: (
			<>
				We will work with you to resolve this as quickly as possible. Shoot an
				email to affiliates
				<a className='text-[#0075FF] mx-1' href='mailto:support@flipcbt.com'>
					support@flipcbt.com
				</a>
				with the following information: The name of the school that signed up
				through your referral.
			</>
		),
	},
];

const Marketers = () => {
	return (
		<Fragment>
			<Head>
				<title>Marketers - Flip CBT</title>
			</Head>
			<Layout>
				<div className=''>
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
				</div>
			</Layout>
		</Fragment>
	);
};

export default Marketers;
