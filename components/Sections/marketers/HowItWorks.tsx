import { useAnimation, motion } from 'framer-motion';
import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import CustomImage from '../../UI/Image';

const referSteps = [
	{
		id: 1,
		icon: '/svgs/link.svg',
		content: 'Click here to get Unique link',
		action: 'Get link',
	},
	{
		id: 2,
		icon: '/svgs/cloud.svg',
		content: 'Share your unique referral Link to different Schools',
		// action: 'Get link',
	},
	{
		id: 3,
		icon: '/svgs/wallet.svg',
		content:
			'Earn ₦30,000 naira when any schools registers with flip using your Unique link',
		// action: 'Get link',
	},
];

const Cards: FC<{ item: any; delay: number }> = ({ item, delay }) => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	React.useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				transition: {
					type: 'tween',
					duration: 1.0,
					delay: delay,
				},
			});
		}
		if (!inView) {
			animation.start(
				{
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
				className='bg-white relative flex flex-col items-center gap-4 lg:gap-7 rounded-2xl pb-7 px-7 h-[200px] xl:px-10 hover:scale-[1.1]'
			>
				<div className='bg-[#BCDBFF] absolute -top-6 lg:-top-12 w-16 lg:w-24 h-16 lg:h-24 rounded-full flex justify-center items-center'>
					<CustomImage
						src={item.icon}
						alt=''
						className='w-10 lg:w-14 h-10 lg:h-14'
					/>
				</div>
				<div className='mt-[80px] flex flex-col items-center gap-2'>
					<p className={`text-center xl:text-base`}>{item.content}</p>
					{item?.action && (
						<button className='bg-[#0075FF] text-white mx-auto rounded-2xl py-2 px-4 xl:px-0 xl:w-[120px]'>
							{item.action}
						</button>
					)}
				</div>
			</motion.div>
		</div>
	);
};

const HowItWorks = () => {
	return (
		<div className='flex flex-col items-center gap-14 lg:gap-20'>
			<div>
				<h2 className='text-3xl md:text-4xl xl:text-5xl font-bold'>
					How does it work?
				</h2>
				<p className='mt-3'>
					Earn an additional 30k income in these three simple steps
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 px-8 md:px-0 gap-24 md:gap-8 xl:gap-28'>
				<Cards item={referSteps[0]} delay={0.4} />
				<Cards item={referSteps[1]} delay={0.8} />
				<Cards item={referSteps[2]} delay={1.2} />
			</div>
		</div>
	);
};

export default HowItWorks;
