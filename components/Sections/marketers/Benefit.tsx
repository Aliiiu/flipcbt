import Image from 'next/image';
import React from 'react';
import InViewAnimateGrow from '../../../transition/InViewAnimateGrow';
import CustomImage from '../../UI/Image';

const features = [
	{
		id: 1,
		content:
			'Earn as much as you can depending on the number of prospects you can convert.',
	},
	{
		id: 2,
		content:
			'Automatically receive first-hand updates and exciting offers on FLIP CBT.',
	},
	{
		id: 3,
		content: 'Receive online recognition across all our social media pages',
	},
	{
		id: 4,
		content: 'Direct accessibility to our promotional resources.',
	},
	{
		id: 5,
		content: 'Technical and customer support from our team.',
	},
	{
		id: 6,
		content: 'Receive product tips and newsletters directly from us',
	},
];

const Benefit = () => {
	return (
		<div className='pt-20 md:pt-32'>
			<InViewAnimateGrow>
				<h2 className='text-flipDark max-w-[760px] mx-auto text-2xl md:text-3xl text-center lg:text-[40px]'>
					Benefits of Becoming an Affiliate Marketer with FLIP
				</h2>
				<p className='text-flipDark max-w-[650px] text-sm md:text-base mt-5 lg:mt-10 mx-auto text-opacity-80 text-center'>
					Being a marketer with Flip has an enormous advantage as you get to
					earn sufficient cash when you bring in a school for partnership
				</p>
				<div className='flex flex-col gap-14 md:gap-0 md:flex-row mt-8 lg:mt-[80px]'>
					<div className='flex-1 flex flex-col gap-6'>
						{features.map((item) => (
							<div key={item.id} className='flex gap-4'>
								<Image
									src={'/svgs/featured_icon.svg'}
									alt=''
									width={50}
									height={50}
								/>
								<p className='text-flipDark max-w-[325px] text-opacity-80 pt-2'>
									{item.content}
								</p>
							</div>
						))}
					</div>
					<div className='flex-1 relative h-full sketch-2'>
						<CustomImage
							alt=''
							className='h-[400px] -z-10 md:h-[500px]'
							src={'/images/marketer-2.png'}
						/>
					</div>
				</div>
			</InViewAnimateGrow>
		</div>
	);
};

export default Benefit;
