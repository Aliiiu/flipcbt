import { Fragment, useEffect } from 'react';
import BenefitOrganisation from '../components/BenefitOrganisation';
import Button from '../components/Button';
import FeatureOrganisation from '../components/FeatureOrganisation';
import Footer from '../components/Footer';
import Guarantee from '../components/Guarantee';
import Navbar from '../components/Navbar';

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
						<section className=''>
							<div className='flex justify-between'>
								<div className='mt-0 md:mt-5 w-full md:w-1/2'>
									<div className='flex mobile:w-full flex-col md:mt-[92px] mobile:py-[70px] '>
										<h1 className='lg:text-[50px] md:text-[40px] lg:mb-[0px] xl:mb-[5px] mobile:text-[32px] font-bold leading-[55px] mobile:leading-[40px]'>
											You Don’t Need <br className='mobile:hidden' /> To Sweat
											Up <br className='mobile:hidden' /> While Setting{' '}
											<br className='mobile:hidden' /> Up Assessments
										</h1>
										<p className='md:mt-3 mobile:my-[24px]'>
											FlipCBT for organizations allows potential individuals{' '}
											<br className='mobile:hidden' /> to take their respective
											assessments remotely. We <br className='mobile:hidden' />{' '}
											believe that taking an assessment, interview, or test{' '}
											<br className='mobile:hidden' /> with zero stress
											contributes to the success rate of{' '}
											<br className='mobile:hidden' /> such individuals and
											organizations.
										</p>
										<div className='flex justify-start md:mt-[24px] '>
											<Button
												href={'/get-started'}
												content='Get Started'
												bgColor='bg-[#0075FF]'
											/>
										</div>
									</div>
								</div>
								<div className='w-1/2 lg:block mobile:hidden'>
									<div className='md:mt-[91px] h-full'>
										<div className=''>
											<img
												src='/orgBg.png'
												alt='customer'
												className='bg-image-boy'
											/>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
			<FeatureOrganisation />
			<BenefitOrganisation />
			<section className="md:px-[8em] mobile:px-7 py-20 mobile:py-[70px] bg-[url('/FlipCbtBg2.png')] bg-contain bg-[#0075FF] bg-opacity-90">
				<div className='container flex flex-col items-center justify-center text-center'>
					<h2 className='font-bold text-[40px] mobile:text-[24px] mb-[10px] mobile:mb-[20px]  text-white'>
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

export default ForOrganisation;
