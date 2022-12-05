import React, { FC } from 'react';
import CustomImage from '../../UI/Image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SchoolFeatureCard: FC<{
	item: any;
	delay: number;
	reverse?: boolean;
}> = ({ item, delay, reverse }) => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	React.useEffect(() => {
		if (inView) {
			animation.start({
				y: 0,
				opacity: 1,
				transition: {
					type: 'tween',
					duration: 1.5,
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
				className={`w-full flex flex-col ${
					reverse ? 'md:flex-row-reverse' : 'md:flex-row'
				} md:mb-[68px] justify-between items-center`}
			>
				<div className={`flex-1`}>
					<h3
						className={`font-semibold text-xl md:text-2xl lg:text-4xl leading-none lg:w-[85%] capitalize`}
					>
						{item.heading}
					</h3>
					<p className={`mt-[18px]`}>{item.content}</p>
				</div>
				<div className={`flex-1 ${reverse ? '' : 'flex justify-end'}`}>
					<CustomImage
						src={item.image}
						alt={item.alt}
						className='lg:w-[383px] lg:h-[383px] w-[316px] h-[316px] mobile:w-[283px] mobile:h-[283px]'
					/>
				</div>
			</motion.div>
		</div>
	);
};

export default SchoolFeatureCard;
