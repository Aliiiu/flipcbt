import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect } from 'react';
import BenefitOrganisation from '../components/BenefitOrganisation';
import Button from '../components/Button';
import FeatureOrganisation from '../components/FeatureOrganisation';
import Footer from '../components/Footer';
import Guarantee from '../components/Guarantee';
import Navbar from '../components/Navbar';
import profile from '../public/profile.svg';
import profile2 from '../public/profile2.svg';

const ForOrganisation = () => {
	useEffect(() => {
		const html = document.getElementById('mainHtml') as HTMLElement;
		html.style.overflow = 'auto';
	});
	return (
		<Fragment>
			<Navbar />
			<div className=' mt-[78px] mobile:mt-[83px]'>
				<div className='container'>
					<div className='relative md:px-[8em] px-7'>
						<section className='mobile:text-center'>
							<div className='flex justify-between'>
								<div className='mt-0 md:mt-5 w-full md:w-1/2 main-page'>
									<div className='flex mobile:w-full flex-col md:mt-14 mobile:py-[5em] '>
										<h1 className='lg:text-[50px] md:text-[35px] lg:mb-[0px] xl:mb-[5px] mobile:text-[28px] font-bold leading-[62px]'>
											We Design and{' '}
											<br className='mobile:hidden md:hidden lg:block' />{' '}
											Implement an{' '}
											<br className='mobile:hidden md:hidden lg:block' /> online
											computer-{' '}
											<br className='mobile:hidden md:hidden lg:block' /> based
											test system.
										</h1>
										<p className='md:mt-3 mobile:mt-6 mb-[2em] lg:mb-[30px] xl:mb-[40px] main-paragraph'>
											FLIP serves as a source to provide tests, examination{' '}
											<br className='mobile:hidden md:hidden lg:block xl:hidden' />
											management, quick grading of systems and collation of{' '}
											<br className='mobile:hidden md:hidden lg:block xl:hidden' />{' '}
											results instead of the use of pen and paper.
										</p>
										<div className='flex mobile:mt-10 mobile:justify-center md:justify-start md:mb-[4em] lg:mb-0 lg:justify-start'>
											<Button
												href={'/get-started'}
												content='Get Started'
												bgColor='bg-[#0075FF]'
											/>
										</div>
									</div>
								</div>
								<div className='w-1/2 lg:block md:flex justify-end mobile:hidden'>
									<div className='px-auto md:mt-[7em] lg:mt-[5em] xl:mt-[7em]'>
										<div>
											<img
												src='/OrganisationBg.png'
												alt='customer'
												className='bg-image-boy'
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='absolute right-[380px] xl:right-[300px] mobile:hidden md:hidden lg:hidden xl:inline-flex flex px-10 py-2 bg-white flip-border bottom-[50px] xl:bottom-[40px] rounded-lg blue-glow student-card'>
								<Image
									src={profile2}
									alt='profile badge'
									width='55px'
									height='55px'
								/>
								<div className='flex flex-col ml-3'>
									<h1 className='text-[30px] text-[#FFBC6C] font-semibold'>
										50K
									</h1>
									<p>Total Active Student</p>
								</div>
							</div>
							<div className='absolute right-[50px] xl:right-[0px] mobile:hidden md:hidden lg:hidden xl:inline-flex flex lg:px-10 xl:px-10 py-2 bg-white flip-border bottom-[150px] xl:bottom-[200px] rounded-lg blue-glow task-card'>
								<Image
									src={profile}
									alt='profile badge'
									width='55px'
									height='55px'
								/>
								<div className='flex flex-col ml-3'>
									<h1 className='text-[30px] text-[#00BE7E] font-semibold'>
										7.5K
									</h1>
									<p>Total Active Task</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
			<FeatureOrganisation />
			<BenefitOrganisation />
			<section className="md:px-20 mobile:px-4 py-20 bg-[url('/FlipCbtBg2.png')] bg-contain bg-[#0075FF] bg-opacity-90">
				<div className='container flex flex-col items-center justify-center text-center space-y-7'>
					<h2 className='font-bold text-[40px] mobile:text-[28px] text-white'>
						Ready to get started?
					</h2>
					<p className='text-white w-7/12 mobile:w-full'>
						Marketing is the activity, institutions, and processes for creating,
						communicating, delivering, and exchanging, offerings that have
						value.
					</p>
					<Link href='#'>
						<a className='text-white bg-black btn-border px-12 py-4 text-[14px]'>
							GET STARTED
						</a>
					</Link>
				</div>
			</section>
			<Guarantee />
			<Footer />
		</Fragment>
	);
};

export default ForOrganisation;
