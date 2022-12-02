import Head from 'next/head';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';
import Benefitorganization from '../components/Sections/organizations/BenefitOrganization';
import Featureorganization from '../components/Sections/organizations/FeatureOrganization';
import Guarantee from '../components/Sections/Guarantee';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import Button from '../components/UI/Button';
import HeroContainer from '../components/UI/HeroContainer';
import InViewAnimateLeft from '../transition/InViewAnimateLeft';
import ReadyToGetStarted from '../components/Sections/ReadyToGetStarted';

const Fororganization = () => {
	useEffect(() => {
		const html = document.getElementById('mainHtml') as HTMLElement;
		html.style.overflow = 'auto';
	});
	return (
		<Fragment>
			<Head>
				<title>Organization - Flip CBT</title>
			</Head>
			<Navbar />
			<div className='mt-[78px] mobile:mt-[83px]'>
				<div className='container'>
					<HeroContainer
						src={'/images/orgBg.png'}
						alt='organization illustration'
						hrefLink={'/get-started'}
						btnAction='Get Started'
						pop={false}
						title='We Design and Implement an online computer-based test system.'
						content='FLIP serves as a source to provide tests, examination
management, quick grading of systems and collation of
results instead of the use of pen and paper.'
					/>
				</div>
			</div>
			<Featureorganization />
			<Benefitorganization />
			<section className="md:px-[8em] mobile:px-7 py-20 mobile:py-[70px] bg-[url('/FlipCbtBg2.png')] bg-contain bg-[#0075FF] bg-opacity-90">
				<ReadyToGetStarted
					content={
						'Are you eager to start conducting better assessments and recording excellent grades?'
					}
					classes='w-7/12'
					content2='Kindly register your details below'
				/>
			</section>
			<Guarantee />
			<Footer />
		</Fragment>
	);
};

export default Fororganization;
