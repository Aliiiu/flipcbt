import { ImageProps } from 'next/image';
import CustomImage from '../UI/Image';
import InViewAnimateRight from '../../transition/InViewAnimateRight';

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
				<InViewAnimateRight>
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
								{features.map((item, id) => {
									return (
										<div
											key={id}
											className='relative max-w-[500px] mx-auto feature-card flex flex-col items-center text-center mobile:mb-[5em] hover:scale-[1.1]'
										>
											<div className='absolute top-[-50px] mobile:top-[-40px]'>
												<CustomImage
													src={item.src}
													alt={item.alt}
													className='w-[80px] h-[80px] md:w-[100px] md:h-[100px]'
												/>
											</div>
											<h3 className='text-[25px] font-semibold text-[#06042C] mb-6'>
												{item.featureTopic}
											</h3>
											<p>{item.feature}</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</InViewAnimateRight>
			</div>
		</section>
	);
};

export default Feature;
