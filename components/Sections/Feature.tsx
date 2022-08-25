import { ImageProps } from 'next/image';
import CustomImage from '../UI/Image';

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
		<section className='md:pt-[6rem] mobile:pt-[60px]'>
			<div className='container vector-1'>
				<div className='vector-2'>
					<div className='mobile:w-auto px-[8em] mobile:px-7 flex flex-col w-full mobile:mx-0'>
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
							{/* <div className='relative feature-card flex flex-col items-center text-center mobile:mb-[5em]'>
								<div className='absolute top-[-50px] mobile:top-[-40px]'>
									<CustomImage
										src={'/images/time.png'}
										alt='Time management illustration'
										className='w-[80px] h-[80px] md:w-[100px] md:h-[100px]'
									/>
								</div>
								<h3 className='text-[25px] font-semibold text-[#06042C] mb-6'>
									Time Saving
								</h3>
								<p>
									The amount of time consumed in curating question papers,
									arranging supplies, and evaluating scripts can be avoided as
									Flip automates the entire process, increasing your
									productivity 100% better.{' '}
								</p>
							</div>
							<div className='relative feature-card flex flex-col items-center text-center mobile:mb-[5em]'>
								<div className='absolute top-[-50px] mobile:top-[-40px]'>
									<CustomImage
										src={'/images/convenience.png'}
										alt='convenience illustration'
										className='w-[80px] h-[80px] md:w-[100px] md:h-[100px]'
									/>
								</div>
								<h3 className='text-[25px] font-semibold text-[#06042C] mb-6'>
									Stress-Free
								</h3>
								<p>
									Assessments can be conducted all year round, at any time
									without breaking an arm. Assessment takers do not need to
									travel far distances to a particular physical location before
									taking an assessment.
								</p>
							</div>
							<div className='relative flex flex-col items-center feature-card text-center mobile:mb-[0em]'>
								<div className='absolute top-[-50px] mobile:top-[-40px]'>
									<CustomImage
										src={'/images/speed.png'}
										alt='Speed illustration'
										className='w-[80px] h-[80px] md:w-[100px] md:h-[100px]'
									/>
								</div>
								<h3 className='text-[25px] font-semibold text-[#06042C] mb-6'>
									Cost-Effective
								</h3>
								<p>
									You don’t need to break the bank before you can use Flip. Save
									up to 60% of your expenditures while using Flip.
								</p>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature;
