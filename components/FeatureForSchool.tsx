import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../styles/home.module.css';

const Data = [
	{
		heading: 'Improves Students Time Management Ability',
		content: `FLIP helps to enable students to work at a 
							faster rate thereby helping them become better at time management.`,
		alt: 'Data Analytics Illustration',
		image: '/images/data_analytics.png',
	},
	{
		heading: 'Reduces Teachers Marking Responsibilities',
		content: `The post examination process such as marking of scripts is equally time consuming and tedious as well, 
							but all these processes are automated and streamlined efficiently using FLIP.`,
		alt: 'Remote Friendly Illustration',
		image: '/images/friendly.png',
	},
	{
		heading: 'Quick and Easy Access to Results',
		content: `With FLIP, students can access their grades
							and know their performance and how best to improve it.`,
		alt: 'Book Kepping Illustration',
		image: '/images/cloud-storage.png',
	},
];

const FeatureForSchool = () => {
	return (
		<Fragment>
			<section className='container md:mt-[142px] mobile:mt-[58px]'>
				<div className='vector-8'>
					<div className='vector-9'>
						<div className='px-7 md:px-[4em] lg:px-[8em]'>
							<div className='flex justify-center md:mb-[120px] mobile:mb-[65px]'>
								<h2 className='inline-block lg:text-[40px] md:text-[30px] text-[24px] text-center font-semibold md:leading-[52px] capitalize mobile:leading-[32.68px]'>
									Flip has recorded over 80% success{' '}
									<br className='mobile:hidden' /> rate in schools for
									conducting <br className='mobile:hidden' /> and taking
									assessments.
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
											<h3 className='font-semibold md:leading-[52px] capitalize'>
												{item.heading}
											</h3>
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

export default FeatureForSchool;
