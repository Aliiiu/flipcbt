import Image from 'next/image';
import InViewAnimateRight from '../../../transition/InViewAnimateRight';
import InViewAnimateTop from '../../../transition/InViewAnimateTop';
import { animate, motion, useAnimation } from 'framer-motion';
import React, { Children, FC } from 'react';
import { useInView } from 'react-intersection-observer';
import CustomImage from '../../UI/Image';

const GetCards: FC<{ children: any; delay: number }> = ({
	children,
	delay,
}) => {
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
			<motion.div animate={animation}>{children}</motion.div>
		</div>
	);
};

const GettingStartedForSchool = () => {
	return (
		<section className='container'>
			<div className='xl:px-[8em] md:pt-[6em] pt-[78px] pb-[131px] md:pb-[181px] mobile:w-auto px-7'>
				<>
					<div className='mobile:mx-0'>
						<div className='text-center'>
							<h2 className='font-semibold text-[32px] md:text-[40px] mb-[2rem] capitalize'>
								Getting started is free and easy
							</h2>
						</div>
						<div className='grid lg:grid-cols-3 grid-cols-1 gap-y-[60px] gap-x-[45px]'>
							<GetCards delay={0.6}>
								<div className='bg-white flex flex-col items-center hover:scale-110 w-[100%] md:w-[400px] lg:w-[100%] h-[249px] card mx-auto'>
									<div>
										<Image
											src='/images/icon_plus.png'
											alt='Add Question illustration'
											width='92px'
											height='92px'
										/>
									</div>
									<h3 className='font-semibold mt-[24px] text-center text-[24px] md:text-[20px] lg:text-[24px]'>
										Add Questions
									</h3>
								</div>
							</GetCards>
							<GetCards delay={0.9}>
								<div className='bg-white flex flex-col items-center hover:scale-110 w-[100%] md:w-[400px] lg:w-[100%] h-[280px] card mx-auto'>
									<div>
										<Image
											src='/images/device.png'
											alt='illustration'
											width='92px'
											height='92px'
										/>
									</div>
									<h3 className='font-semibold mt-[24px] text-center text-[24px] md:text-[20px] lg:text-[24px]'>
										Participant Engage <br className='mobile:hidden' /> Using
										Any Device
									</h3>
								</div>
							</GetCards>
							<GetCards delay={1.2}>
								<div className=' bg-white flex flex-col items-center hover:scale-110 w-[100%] md:w-[400px] lg:w-[100%] h-[249px] card mx-auto'>
									<div>
										<Image
											src='/images/instant.png'
											alt='Instant illustration'
											width='92px'
											height='92px'
										/>
									</div>
									<h3 className='font-semibold mt-[24px] text-center text-[24px] md:text-[20px] lg:text-[24px]'>
										Get Instant Result
									</h3>
								</div>
							</GetCards>
						</div>
					</div>
				</>
			</div>
		</section>
	);
};

export default GettingStartedForSchool;
