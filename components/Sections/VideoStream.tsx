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
			{/* <video
				src='/videos/flipcbt.mp4'
				loop
				autoPlay
				muted
				className='mx-auto rounded-[50px] w-full h-full xl:h-[493px] shadow-2xl'
			></video> */}
			<iframe
				// width='560'
				// height='315'
				className='mx-auto rounded-2xl md:rounded-[50px] md:w-[700px] xl:w-[900px] h-[200px] md:h-[393px] xl:h-[493px] shadow-2xl'
				src='https://www.youtube.com/embed/izAM8cIhPpU'
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoStream;
