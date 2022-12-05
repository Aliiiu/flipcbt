import Image from 'next/image';
import { Fragment } from 'react';
import InViewAnimateLeft from '../../../transition/InViewAnimateLeft';
import InViewAnimateRight from '../../../transition/InViewAnimateRight';
import InViewAnimateTop from '../../../transition/InViewAnimateTop';
import CustomImage from '../../UI/Image';
import FeatureCardsOrg from '../Cards/FeatureCardsOrg';
// import styles from '../styles/home.module.css';

const Data = [
	{
		heading: 'Improved organization’s Productivity.',
		content: `Flip is the powerhouse of all assessment providers,
							taking your organization to the next level.`,
		alt: 'Productivity Illustration',
		image: '/images/feature1.png',
	},
	{
		heading: 'Responsible access controlled by you',
		content: `Flip grants you complete authority over your data. This means that you
							have total access to your e-records whenever you need them.`,
		alt: 'High security Illustration',
		image: '/images/feature2.png',
	},
	{
		heading: 'Hitch Free Process.',
		content: `Flip has been designed to eliminate all difficulties you might
							encounter while conducting assessments.`,
		alt: 'Hitch Free Process Illustration',
		image: '/images/feature3.png',
	},
];

const Featureorganization = () => {
	return (
		<Fragment>
			<section className='md:mt-[142px] mobile:mt-[58px]'>
				<div className='vector-8'>
					<div className='vector-9'>
						<div className='container px-7 xl:px-[8em]'>
							<div className='flex justify-center md:mb-[120px] mobile:mb-[65px]'>
								<h2 className='inline-block md:text-3xl lg:text-[40px] text-[24px] text-center capitalize font-semibold md:leading-[52px]'>
									Flip is built with guaranteed <br className='mobile:hidden' />{' '}
									advantages for your <br className='mobile:hidden' />
									organization.
								</h2>
							</div>
							<FeatureCardsOrg item={Data[0]} delay={0.8} />
							<FeatureCardsOrg item={Data[1]} delay={1.0} reverse />
							<FeatureCardsOrg item={Data[2]} delay={1.2} />
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Featureorganization;
