import Image, { ImageProps } from 'next/image';
import React, { FC, useState } from 'react';
import Button from '../../UI/Button';

const merits = [
	{
		id: 1,
		icon: '/svgs/icon_checked.svg',
		title: 'Sign up to Become a Certified Affiliate Marketer for FLIP',
		content:
			'Sign up as a marketer on FLIP and submit all requirements needed for verification.',
	},
	{
		id: 2,
		icon: '/svgs/speaker.svg',
		title: 'Introduce Prospects to FLIP',
		content: (
			<>
				Tell as many schools as possible about Flip. <br />
				Invite your prospects to use Flip by reaching out to them on various
				social media platforms or by sending an email. You can also visit the
				schools directly to tell them about FLIP.
			</>
		),
	},
	{
		id: 3,
		icon: '/svgs/chat.svg',
		title: 'Strike up Conversations',
		content: `Follow up on your prospects and be eager to answer all questions concerning Flip. Be ready to jump on quick calls with your prospects until their partnership is secured with the FLIP sales team. Reach out to the FLIP support team if you have any challenges.`,
	},
	{
		id: 4,
		icon: '/svgs/earn.svg',
		title: 'Earn',
		content: `Earn as much as you secure more partnerships of schools with FLIP. Gain a 10% commission on every school that partners with FLIP via your affiliate link.
`,
	},
];

interface Props {
	icon: ImageProps['src'];
	title: string;
	content: string | any;
	classes: string;
}
const HowDoesItWorkCard: FC<Props> = ({ icon, title, content, classes }) => {
	return (
		<div
			// key={merit.id}
			className={` flex flex-col bg-white w-full ease-in-out shadow-sm py-6 px-7 rounded-2xl max-w-[400px] ${classes}`}
		>
			<div className={`flex flex-col gap-5 items-start`}>
				<Image src={icon} alt='' width={56} height={56} />
				<h3 className='font-semibold text-xl lg:text-2xl'>{title}</h3>
				<p className='xl:text-xl font-light'>{content}</p>
			</div>
		</div>
	);
};

const HowDoesItWork = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className='flex flex-col lg:flex-row gap-7 justify-between'>
			<div className='flex self-center flex-col lg:max-w-[275px] gap-3 lg:gap-5'>
				<h4 className='text-2xl md:text-3xl lg:text-[40px] leading-tight animate-fade-in capitalize font-semibold'>
					How Does It Work?
				</h4>
				<p className='text-sm text-black text-opacity-70 lg:text-base'>
					Become a certified FLIP marketer with these 4 easy steps
				</p>
				<Button
					href={'/get-started'}
					content={'Get Started'}
					bgColor='bg-[#0075FF] max-w-max'
				/>
			</div>
			<div className='grid md:grid-cols-2 md:grid-rows-10 gap-4 lg:gap-8'>
				<HowDoesItWorkCard
					icon={merits[0].icon}
					title={merits[0].title}
					content={merits[0].content}
					classes='md:row-span-4 md:col-start-1 md:col-end-2'
				/>
				<HowDoesItWorkCard
					icon={merits[1].icon}
					title={merits[1].title}
					content={merits[1].content}
					classes='md:row-start-2 md:row-end-7 md:col-start-2 md:col-end-3'
				/>
				<HowDoesItWorkCard
					icon={merits[2].icon}
					title={merits[2].title}
					content={merits[2].content}
					classes='md:row-span-5 md:col-start-1 md:col-end-2'
				/>
				<HowDoesItWorkCard
					icon={merits[3].icon}
					title={merits[3].title}
					content={merits[3].content}
					classes='md:row-span-4 md:col-start-2 md:col-end-3'
				/>
			</div>
		</div>
	);
};

export default HowDoesItWork;
