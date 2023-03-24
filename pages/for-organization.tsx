import Head from 'next/head';
import { Fragment, useEffect } from 'react';
import Benefitorganization from '../components/Sections/organizations/BenefitOrganization';
import Featureorganization from '../components/Sections/organizations/FeatureOrganization';
import Guarantee from '../components/Sections/Guarantee';
import HeroContainer from '../components/UI/HeroContainer';
import InViewAnimateLeft from '../transition/InViewAnimateLeft';
import ReadyToGetStarted from '../components/Sections/ReadyToGetStarted';
import Layout from '../components/Layout/Layout';

const Fororganization = () => {
	return (
		<Fragment>
			<Head>
				<title>Organization - Flip CBT</title>
			</Head>
			<Layout>
				<main>
					<div className=''>
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
				</main>
			</Layout>
		</Fragment>
	);
};

export default Fororganization;
