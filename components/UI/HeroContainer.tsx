import React, { FC, useEffect } from 'react';
import Button from './Button';
import NextImage, { ImageProps } from 'next/image';
import { LinkProps } from 'next/link';
import styled from 'styled-components';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

// className={`lg:text-[50px] md:text-[40px] ${
// 									maxWidth || 'xl:max-w-[630px]'
// 								} mobile:text-[32px] font-bold capitalize`}

const Title = styled.h2`
	font-size: 32px;
	font-weight: 700;
	// text-transform: capitalize;
	@media only screen and (min-width: 760px) {
		font-size: 40px;
	}
	@media only screen and (min-width: 1080px) {
		font-size: 50px;
	}
`;

const Word = styled(motion.span)`
	display: inline-block;
	margin-right: 0.25em;
	white-space: nowrap;
`;

const Character = styled(motion.span)`
	display: inline-block;
	margin-right: -0.05em;
`;

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
	const text = title;

	const ctrls = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			ctrls.start('visible');
		}

		if (!inView) {
			ctrls.start('hidden');
		}
	}, [ctrls, inView]);

	const wordAnimation = {
		hidden: {},
		visible: {},
	};

	const characterAnimation = {
		hidden: {
			opacity: 0,
			y: `0.25em`,
		},

		visible: {
			opacity: 1,
			y: `0em`,

			transition: {
				duration: 1,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
	};

	return (
		<motion.div className='relative xl:px-[8em] px-7'>
			<section className=''>
				<div className='flex justify-between'>
					<div className='w-full md:flex-1'>
						<div className='flex mobile:w-full flex-col md:mt-[106px] mobile:py-[50px]'>
							{/* <h1
								className={`lg:text-[50px] md:text-[40px] ${
									maxWidth || 'xl:max-w-[630px]'
								} mobile:text-[32px] font-bold capitalize`}
							>
								{title}
							</h1> */}
							<Title aria-label={text} role='heading'>
								{text.split(' ').map((word, index) => {
									return (
										<Word
											ref={ref}
											aria-hidden='true'
											key={index}
											initial='hidden'
											animate={ctrls}
											variants={wordAnimation}
											transition={{
												delayChildren: index * 0.25,
												staggerChildren: 0.05,
											}}
										>
											{word.split('').map((character, index) => {
												return (
													<Character
														aria-hidden='true'
														key={index}
														variants={characterAnimation}
													>
														{character}
													</Character>
												);
											})}
										</Word>
									);
								})}
							</Title>
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
					<div className='justify-end flex-1 md:flex hidden'>
						<div className='relative h-full lg:w-[550px] lg:h-[550px] xl:w-[641px] xl:h-[641px] w-full md:mt-[50px] lg:mt-[100px]'>
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
