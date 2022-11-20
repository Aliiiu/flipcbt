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

const Home: NextPage = () => {
	useEffect(() => {
		const html = document.getElementById('mainHtml') as HTMLElement;
		html.style.overflow = 'auto';
	});
	const onPlayerReady: YouTubeProps['onReady'] = (event) => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	};

	const opts: YouTubeProps['opts'] = {
		height: '390',
		width: '640',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};
	return (
		<Fragment>
			<Head>
				<title>Enhanced Assessment Platform</title>
			</Head>
			<Navbar />
			<main className='mt-[78px] md:mt-[78px] mobile:mt-[83px]'>
				<div className='container'>
					<HeroContainer
						src={'/images/hmPage.png'}
						alt='excitment illustration'
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
				<Faqs />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Home;
