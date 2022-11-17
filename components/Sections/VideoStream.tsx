import React from 'react';
import NextImage from 'next/image';

const VideoStream = () => {
	return (
		<div className='relative py-14 lg:py-0'>
			<div className='absolute hidden xl:block left-[-80px] top-[-100px]'>
				<NextImage
					src={'/images/videosvg.svg'}
					alt=''
					width={175}
					height={175}
					className='-z-10'
				/>
			</div>
			<div className='absolute hidden xl:block right-[-80px] bottom-[-100px]'>
				<NextImage
					src={'/images/videosvg.svg'}
					alt=''
					width={175}
					height={175}
					className='-z-10'
				/>
			</div>
			{/* <Image
							src={'/images/videosvg.svg'}
							className='w-[175px] h-[175px] absolute'
							alt=''
						/> */}
			<video
				src='/videos/flipcbt.mp4'
				loop
				autoPlay
				muted
				className='mx-auto rounded-[50px] w-full h-full xl:h-[493px] shadow-2xl'
			></video>
		</div>
	);
};

export default VideoStream;
