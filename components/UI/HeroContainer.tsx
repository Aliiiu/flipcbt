import React, { FC } from 'react';
import Button from './Button';
import NextImage, { ImageProps } from 'next/image';
import { LinkProps } from 'next/link';
import { motion } from 'framer-motion';

interface HeroTypes {
	src: ImageProps['src'];
	content: string;
	title: string;
	alt: string;
	maxWidth?: string;
	btnAction?: string;
	pop: boolean;
	hrefLink: LinkProps['href'];
}
const HeroContainer: FC<HeroTypes> = ({
	src,
	content,
	pop,
	alt,
	hrefLink,
	maxWidth,
	btnAction,
	title,
}) => {
	const containerVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: { duration: 1.5 },
		},
		exit: {
			x: '-100vw',
			transition: { ease: 'easeInOut' },
		},
	};
	return (
		<motion.div
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='relative xl:px-[8em] px-7'
		>
			<section className=''>
				<div className='flex justify-between'>
					<div className='w-full md:flex-1'>
						<div className='flex mobile:w-full flex-col md:mt-[106px] mobile:py-[70px]'>
							<h1
								className={`lg:text-[50px] md:text-[40px] ${
									maxWidth || 'xl:max-w-[630px]'
								} mobile:text-[32px] font-bold capitalize`}
							>
								{title}
							</h1>
							<p className='md:mt-3 mobile:mt-6 mb-[2em] xl:max-w-[431px] lg:mb-[30px]'>
								{content}
							</p>
							<div className='flex justify-start mobile:mt-1'>
								<Button
									href={btnAction ? hrefLink : ''}
									content={btnAction ? btnAction : 'Book A Demo'}
									bgColor='bg-[#0075FF]'
									pop={pop}
								/>
							</div>
						</div>
					</div>
					<div className='justify-end flex-1 lg:block md:flex mobile:hidden'>
						<div className='relative h-full xl:w-[641px] xl:h-[641px] w-full bg-image md:mt-[100px]'>
							<NextImage
								src={src}
								alt={alt}
								layout='fill'
								objectFit='contain'
							/>
						</div>
					</div>
				</div>
			</section>
		</motion.div>
	);
};

export default HeroContainer;
