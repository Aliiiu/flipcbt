import type { NextPage } from 'next';
import Head from 'next/head';
import NextImage from 'next/image';
import { Fragment, useEffect } from 'react';
import Benefit from '../components/Sections/Benefit';
import Feature from '../components/Sections/Feature';
import Guarantee from '../components/Sections/Guarantee';
import Faqs from '../components/Layout/Faqs';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import Motor from '../components/Sections/Motor';
import Button from '../components/UI/Button';
import YouTube, { YouTubeProps } from 'react-youtube';
import Image from '../components/UI/Image';
import HeroContainer from '../components/UI/HeroContainer';
import VideoStream from '../components/Sections/VideoStream';
import { PopupButton } from 'react-calendly';
import { motion } from 'framer-motion';

interface QATypes {
	question: string;
	answer: string | JSX.Element;
}
const QA: QATypes[] = [
	{
		question: 'How does the software work?',
		answer: `Flip is a cbt software that allows the Admin to input assessment questions into its database
							and the questions are then imported from the database to conduct assessment. `,
	},
	{
		question: 'Does the software need internet connection?.',
		answer: `Flip for School does not require internet access while Flip for organization requires internet access. `,
	},
	{
		question: 'Who can use the software',
		answer: `Flip can be used by schools or organizations(companies) of any size to conduct assessment.`,
	},
	{
		question:
			'What are the minimum system requirements to install the product  ',
		answer: (
			<>
				<ul>
					<li>
						<b>Supported platforms:</b> Windows 7, Windows 8, Windows 8.1 ,
						Windows 10 (32bit/64 bit).{' '}
					</li>
					<li>
						<b>Installation requirements:</b> 50 MB free space 1GHz CPU 256 MB
						RAM 800x600 screen resolution
					</li>
				</ul>
			</>
		),
	},
	{
		question: 'How do I report a bug?',
		answer: (
			<>
				We work hard to keep Flip secure, and make every effort to keep on top
				of the latest threats by working with our inhouse security team. If you
				think we&apos;ve made a security mistake or have a vulnerability, please
				share with us right away at{' '}
				<a className='text-[#0075FF]' href='mailto:security@flipcbt.com'>
					security@flipcbt.com
				</a>
			</>
		),
	},
	{
		question: 'How do I report a complaint?',
		answer: (
			<>
				Our support team are available to receive any complaint, kindly send a
				mail of your complaint to{' '}
				<a className='text-[#0075FF]' href='mailto:support@flipcbt.com'>
					support@flipcbt.com
				</a>
			</>
		),
	},
];

const Home: NextPage = () => {
	useEffect(() => {
		const html = document.getElementById('mainHtml') as HTMLElement;
		html.style.overflow = 'auto';
	});
	return (
		<div>
			<Head>
				<title>Enhanced Assessment Platform</title>
			</Head>
			<Navbar />
			<main className='mt-[78px] md:mt-[78px] mobile:mt-[83px]'>
				<div className='container'>
					<HeroContainer
						src={'/images/hmPage.png'}
						alt='excitment illustration'
						pop={true}
						hrefLink=''
						title='Setting Up and Preparing For Assessment Without Stress.'
						content='FLIP is an enhanced assessment platform that provides
											computerized tests, examination management, quick grading
											systems, and collation of results instead of the use of
											pen and paper.'
					/>
				</div>
				<section className='flex justify-center md:py-8 px-7 xl:px-0 xl:py-[150px]'>
					<VideoStream />
				</section>
				<Feature />
				<Benefit />
				<Motor />
				<Guarantee />
				<Faqs
					QA={QA}
					content='We have carefully prepared a list of the most frequent inquiries
								for you. This will give you more insights on how to use Flip'
				/>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
