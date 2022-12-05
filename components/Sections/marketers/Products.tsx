import React from 'react';
import InViewAnimateRight from '../../../transition/InViewAnimateRight';
import InViewAnimateTop from '../../../transition/InViewAnimateTop';
import CustomImage from '../../UI/Image';

const Products = () => {
	return (
		<InViewAnimateTop>
			<div className='flex flex-col gap-14 md:gap-6 container md:flex-row xl:px-[8em] px-7'>
				<div className='flex-1 flex flex-col justify-center '>
					<div className=''>
						<h3 className='text-flipDark font-semibold mb-6 text-4xl'>
							Our Product - FLIPCBT
						</h3>
						<p className='text-flipDark w-full md:max-w-[400px]'>
							Flip is an enhanced assessment platform that provides computerized
							tests, examination management, quick grading systems, and
							collation of results instead of the use of pen and paper.
						</p>
					</div>
				</div>
				<div className='flex-1 flex justify-center'>
					<CustomImage
						alt=''
						className='w-full h-[200px] lg::w-[471px] md:h-[351px]'
						src={'/images/adminDashboard.png'}
						fit
					/>
				</div>
			</div>
		</InViewAnimateTop>
	);
};

export default Products;
