import { ImageProps } from 'next/image';
import CustomImage from '../UI/Image';
import InViewAnimateRight from '../../transition/InViewAnimateRight';
import FeatureCards from './Cards/FeatureCards';

interface featureArray {
	src: ImageProps['src'];
	alt: string;
	featureTopic: string;
	feature: string;
}
const features: featureArray[] = [
	{
		src: '/images/time.png',
		alt: 'Time management illustration',
		featureTopic: 'Time Saving',
		feature: `The amount of time consumed in curating question papers,
									arranging supplies, and evaluating scripts can be avoided as
									Flip automates the entire process, increasing your
									productivity 100% better.`,
	},
	{
		src: '/images/convenience.png',
		alt: 'convenience illustration',
		featureTopic: 'Stress-Free',
		feature: `Assessments can be conducted all year round, at any time
									without breaking an arm. Assessment takers do not need to
									travel far distances to a particular physical location before
									taking an assessment.`,
	},
	{
		src: '/images/speed.png',
		alt: 'speed illustration',
		featureTopic: 'Cost-Effective',
		feature: `You don’t need to break the bank before you can use Flip. Save
									up to 60% of your expenditures while using Flip.`,
	},
];
const Feature = () => {
	return (
		<section className='vector-1'>
			<div className='md:pt-[6rem] vector-2 mobile:pt-[60px]'>
				<div className='container'>
					<div className='mobile:w-auto xl:px-[8em] px-7 flex flex-col w-full mobile:mx-0'>
						<div className='text-center md:pt-9 md:mb-[8em] mb-[5rem]'>
							<h2 className='font-semibold text-[40px] mb-2 md:mb-6 mobile:text-[28px]'>
								Why <span className='text-[#0075FF]'>Flip</span>
							</h2>
							<p>
								Preparing for exams, tests or interviews is very tedious
								normally, <br className='mobile:hidden' />
								but writing assessments should be comfortable.
							</p>
						</div>
						<div className='grid lg:grid-cols-3 mobile:grid-cols-1 md:mb-[9rem] md:gap-[30px] mobile:flex-col mobile:mb-2'>
							<FeatureCards item={features[0]} delay={0.4} />
							<FeatureCards item={features[1]} delay={0.8} />
							<FeatureCards item={features[2]} delay={1.2} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature;
