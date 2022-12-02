import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../styles/home.module.css';
import CustomImage from '../../UI/Image';
import InViewAnimateLeft from '../../../transition/InViewAnimateLeft';
import InViewAnimateRight from '../../../transition/InViewAnimateRight';

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
							{/* {Data.map((item, index) => (
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
							))} */}
							<InViewAnimateLeft>
								<div
									className={`w-full flex flex-col md:flex-row md:mb-[68px] justify-between items-center`}
								>
									<div className={`flex-1 `}>
										<h3
											className={`font-semibold text-xl md:text-2xl lg:text-4xl leading-none lg:w-[85%] capitalize`}
										>
											{Data[0].heading}
										</h3>
										<p className={`mt-[18px]`}>{Data[0].content}</p>
									</div>
									<div className={`flex-1 flex justify-end`}>
										<CustomImage
											src={Data[0].image}
											alt={Data[0].alt}
											className='lg:w-[383px] lg:h-[383px] w-[316px] h-[316px] mobile:w-[283px] mobile:h-[283px]'
										/>
									</div>
								</div>
							</InViewAnimateLeft>
							<InViewAnimateRight>
								<div
									className={`w-full flex flex-col md:flex-row-reverse md:mb-[68px] justify-between items-center`}
								>
									<div className={`flex-1 `}>
										<h3
											className={`font-semibold text-xl md:text-2xl lg:text-4xl leading-none lg:w-[85%] capitalize`}
										>
											{Data[1].heading}
										</h3>
										<p className={`mt-[18px]`}>{Data[1].content}</p>
									</div>
									<div className={`flex-1`}>
										<CustomImage
											src={Data[1].image}
											alt={Data[1].alt}
											className='lg:w-[383px] lg:h-[383px] w-[316px] h-[316px] mobile:w-[283px] mobile:h-[283px]'
										/>
									</div>
								</div>
							</InViewAnimateRight>
							<InViewAnimateLeft>
								<div
									className={`w-full flex flex-col md:flex-row md:mb-[68px] justify-between items-center`}
								>
									<div className={`flex-1 `}>
										<h3
											className={`font-semibold text-xl md:text-2xl lg:text-4xl leading-none lg:w-[85%] capitalize`}
										>
											{Data[2].heading}
										</h3>
										<p className={`mt-[18px]`}>{Data[2].content}</p>
									</div>
									<div className={`flex-1 flex justify-end`}>
										<CustomImage
											src={Data[2].image}
											alt={Data[2].alt}
											className='lg:w-[383px] lg:h-[383px] w-[316px] h-[316px] mobile:w-[283px] mobile:h-[283px]'
										/>
									</div>
								</div>
							</InViewAnimateLeft>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default FeatureForSchool;
