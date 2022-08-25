import NextImage, { ImageProps } from 'next/image';
import { FC } from 'react';

interface IImage {
	className?: string;
	src: ImageProps['src'];
	alt: string;
}

const CustomImage: FC<IImage> = ({ className, src, alt = '' }) => {
	return (
		<div className={`relative flex-shrink-0 ${className}`}>
			<NextImage src={src} alt={alt} layout='fill' className='object-cover' />
		</div>
	);
};

export default CustomImage;
