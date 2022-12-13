import { motion, useAnimation } from 'framer-motion';
import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import CustomImage from '../../UI/Image';

const BenefitCards: FC<{ item: any; delay: number }> = ({ item, delay }) => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	React.useEffect(() => {
		if (inView) {
			animation.start({
				y: 0,
				opacity: 1,
				transition: {
					type: 'tween',
					duration: 1,
					delay: delay,
				},
			});
		}
		if (!inView) {
			animation.start(
				{
					y: '10vh',
					opacity: 0,
				},
				[inView]
			);
		}
	});
	return (
		<div ref={ref}>
			<motion.div
				animate={animation}
				className='flex flex-col justify-between pr-1 mb-6 md:mb-8'
			>
				<div className='flex flex-col'>
					<div className='inline-flex items-center'>
						<CustomImage
							className='w-[35px] h-[35px] '
							src={'/images/tick.png'}
							alt=''
						/>
						<h5 className='ml-5 font-semibold text-[18px] md:text-[20px] capitalize'>
							{item?.title}
						</h5>
					</div>
					<p className='mt-3 '>{item?.content}</p>
				</div>
			</motion.div>
		</div>
	);
};

export default BenefitCards;
