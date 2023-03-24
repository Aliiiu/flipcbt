import React from 'react';
import InViewAnimateTop from '../../../transition/InViewAnimateTop';
import CustomImage from '../../UI/Image';

const ReferEarn = () => {
	return (
		<InViewAnimateTop>
			<div className='flex flex-col gap-6 md:gap-0 md:flex-row items-center'>
				<CustomImage
					src={'/images/referNearn.png'}
					alt=''
					className='w-full md:flex-1 lg:w-[573px] h-[400px] lg:h-[558px]'
					fit
				/>
				<div className='flex flex-1 flex-col justify-start md:p-8 xl:p-16 gap-4'>
					<div>
						<h1 className='text-3xl xl:text-5xl max-w-[500px] xl:leading-[64px] font-bold'>
							Not sure About joining us a Marketer?
						</h1>
						<h1 className='text-3xl xl:text-5xl font-bold'>
							Try{' '}
							<span className='text-blue-500 xl:text-5xl'>REFER AND EARN</span>
						</h1>
					</div>
					<p className='max-w-[430px] mb-8'>
						With Our “<span className='font-bold'>Refer and Earn</span>”
						program, You can earn #30,000naira for every School that signs up
						with Flip as your referral.
					</p>
					<button className='bg-[#0075FF] w-fit text-white rounded-2xl py-4 px-10'>
						Get referral Link
					</button>
				</div>
			</div>
		</InViewAnimateTop>
	);
};

export default ReferEarn;
