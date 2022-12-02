import React, { FC } from 'react';
import InViewAnimateLeft from '../../transition/InViewAnimateLeft';
import Button from '../UI/Button';

interface Props {
	content?: any;
	classes?: string;
	content2?: string;
}
const ReadyToGetStarted: FC<Props> = ({ content, content2, classes }) => {
	return (
		<InViewAnimateLeft>
			<div className='container flex flex-col items-center justify-center text-center'>
				<h2 className='font-bold text-[40px] mobile:text-[24px] mb-[10px] mobile:mb-[20px] capitalize text-white'>
					Ready to get started?
				</h2>
				<p className={`text-white  mobile:w-full ${classes}`}>{content}</p>
				<p className='text-white mb-[27px] mobile:mb-[25px]'>{content2}</p>
				<Button
					href={'/get-started'}
					content='Get Started'
					bgColor='bg-[#06042C]'
				/>
			</div>
		</InViewAnimateLeft>
	);
};

export default ReadyToGetStarted;
