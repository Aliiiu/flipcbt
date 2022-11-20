import Image from 'next/image';
import { Fragment } from 'react';
import CustomImage from './UI/Image';
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
							{Data.map((item, index) => (
								<div
									key={index}
									className={`w-full flex flex-col md:flex-row md:mb-[68px] justify-between items-center ${
										index === 1 && 'md:flex-row-reverse w-full'
									}`}
								>
									<div
										className={`flex-1 ${
											index === 1 && 'lg:flex flex-col items-end'
										}`}
									>
										<h3
											className={`font-semibold text-xl md:text-2xl lg:text-4xl leading-none lg:w-[85%] capitalize`}
										>
											{item.heading}
										</h3>
										<p
											className={`mt-[18px]  ${
												index !== 1 ? 'md:w-[58%]' : 'md:w-[85%]'
											}`}
										>
											{item.content}
										</p>
									</div>
									<div
										className={`flex-1  ${index !== 1 && 'flex justify-end'}`}
									>
										<CustomImage
											src={item.image}
											alt={item.alt}
											className='lg:w-[383px] lg:h-[383px] w-[316px] h-[316px] mobile:w-[283px] mobile:h-[283px]'
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

export default Featureorganization;
