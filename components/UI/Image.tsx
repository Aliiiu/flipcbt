import NextImage, { ImageProps } from 'next/image';
import { FC } from 'react';

interface IImage {
	className?: string;
	src: ImageProps['src'];
	alt: string;
	fit?: boolean;
}

const CustomImage: FC<IImage> = ({ className, src, alt = '', fit }) => {
	return (
		<div className={`relative flex-shrink-0 ${className}`}>
			<NextImage
				src={src}
				alt={alt}
				layout='fill'
				className={`${fit ? 'object-contain' : 'object-cover'}`}
			/>
		</div>
	);
};

export default CustomImage;
