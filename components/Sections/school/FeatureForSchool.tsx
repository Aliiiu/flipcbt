import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../styles/home.module.css';
import CustomImage from '../../UI/Image';
import InViewAnimateLeft from '../../../transition/InViewAnimateLeft';
import InViewAnimateRight from '../../../transition/InViewAnimateRight';
import SchoolFeatureCard from '../Cards/SchoolFeatureCard';

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
			<section className='md:mt-[142px] mobile:mt-[58px]'>
				<div className='vector-8'>
					<div className='vector-9'>
						<div className='container px-7 xl:px-[8em]'>
							<div className='flex justify-center md:mb-[120px] mobile:mb-[65px]'>
								<h2 className='inline-block md:text-3xl lg:text-[40px] text-[24px] text-center font-semibold md:leading-[52px] capitalize mobile:leading-[32.68px]'>
									Flip has recorded over 80% success{' '}
									<br className='mobile:hidden' /> rate in schools for
									conducting <br className='mobile:hidden' /> and taking
									assessments.
								</h2>
							</div>
							<SchoolFeatureCard item={Data[0]} delay={0.8} />
							<SchoolFeatureCard item={Data[1]} delay={1.0} reverse />
							<SchoolFeatureCard item={Data[2]} delay={1.2} />
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default FeatureForSchool;
