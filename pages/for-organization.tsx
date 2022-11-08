import Head from 'next/head';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';
import Benefitorganization from '../components/BenefitOrganization';
import Featureorganization from '../components/FeatureOrganization';
import Guarantee from '../components/Sections/Guarantee';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import Button from '../components/UI/Button';
import HeroContainer from '../components/UI/HeroContainer';

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
			<div className=' mt-[78px] mobile:mt-[83px]'>
				<div className='container'>
					<HeroContainer
						src={'/images/orgBg2.png'}
						alt='organization illustration'
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
				<div className='container flex flex-col items-center justify-center text-center'>
					<h2 className='font-bold text-[40px] mobile:text-[24px] mb-[10px] mobile:mb-[20px] capitalize text-white'>
						Ready to get started?
					</h2>
					<p className='text-white  mobile:w-[90%]'>
						Are you eager to start conducting better assessments and recording{' '}
						<br className='mobile:hidden' />
						excellent grades?
					</p>
					<p className='text-white mb-[27px] mobile:mb-[25px]'>
						Kindly register your details below.
					</p>
					{/* <Link href='#'>
						<a className='text-white bg-black btn-border px-12 py-4 text-[14px]'>
							GET STARTED
						</a>
					</Link> */}
					<Button
						href={'/get-started'}
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

export default Fororganization;
