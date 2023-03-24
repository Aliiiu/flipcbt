import Head from 'next/head';
import { Fragment, useEffect } from 'react';
import FeatureForSchool from '../components/Sections/school/FeatureForSchool';
import GettingStartedForSchool from '../components/Sections/school/GettingStartedForSchool';
import Guarantee from '../components/Sections/Guarantee';
import HeroContainer from '../components/UI/HeroContainer';
import ReadyToGetStarted from '../components/Sections/ReadyToGetStarted';
import Layout from '../components/Layout/Layout';

const ForSchool = () => {
	return (
		<Fragment>
			<Head>
				<title>School - Flip CBT</title>
			</Head>
			<Layout>
				<main>
					<div className=''>
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
				</main>
			</Layout>
		</Fragment>
	);
};

export default ForSchool;
