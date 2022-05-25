import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../styles/home.module.css';

const Data = [
	{
		heading: 'Improved Organization’s Productivity.',
		content: `FLIP is the powerhouse of all assessment providers,
							taking your organization to the next level.`,
		alt: 'Productivity Illustration',
		image: '/feature1.png',
	},
	{
		heading: 'Responsible access controlled by you',
		content: `FLIP grants you complete authority over your data. This means that you
							have total access to your e-records whenever you need them.`,
		alt: 'High security Illustration',
		image: '/feature2.png',
	},
	{
		heading: 'Hitch Free Process.',
		content: `FLIP has been designed to eliminate all difficulties you might
							encounter while conducting assessments.`,
		alt: 'Hitch Free Process Illustration',
		image: '/feature3.png',
	},
];

const FeatureOrganisation = () => {
	return (
		<Fragment>
			<section className='container md:mt-[142px] mobile:mt-[58px]'>
				<div className='vector-8'>
					<div className='vector-9'>
						<div className='px-7 md:px-[8em]'>
							<div className='flex justify-center md:mb-[120px] mobile:mb-[65px]'>
								<h2 className='inline-block md:text-[40px] text-[24px] text-center font-semibold md:leading-[52px] mobile:leading-[32.68px]'>
									FLIP is built with guaranteed <br className='mobile:hidden' />{' '}
									advantages for your <br className='mobile:hidden' />
									organization.
								</h2>
							</div>
							{Data.map((item, index) => (
								<div
									key={index}
									className={`${
										index % 2 === 0 ? styles.bigfeatleft : styles.bigfeatright
									} w-full mobile:w-auto md:flex flex-row md:mb-[88px] justify-between items-center ${
										index === 1 && 'flex-row-reverse'
									}`}
								>
									<div
										className={`w-1/2 mobile:w-full mobile:flex flex-col-reverse mobile:mb-[50px] `}
									>
										<div className='hidden mx-auto mobile:block'>
											<Image
												src={item.image}
												alt={item.alt}
												width='316px'
												height='316px'
											/>
										</div>
										<div>
											<h3 className='font-semibold'>{item.heading}</h3>
											<p className='mt-[18px] md:w-[95%]'>{item.content}</p>
										</div>
									</div>
									<div className='mobile:hidden'>
										<Image
											src={item.image}
											alt={item.alt}
											width='316px'
											height='316px'
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default FeatureOrganisation;
