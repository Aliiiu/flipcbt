import Image from 'next/image';
import React, { useState } from 'react';

interface QATypes {
	question: string;
	answer: string | JSX.Element;
}
const QA: QATypes[] = [
	{
		question: 'How does the software work?',
		answer: `Flip is a cbt software that allows the Admin to input assessment questions into its database
							and the questions are then imported from the database to conduct assessment. `,
	},
	{
		question: 'Does the software need internet connection?.',
		answer: `Flip for School does not require internet access while Flip for organization requires internet access. `,
	},
	{
		question: 'Who can use the software',
		answer: `Flip can be used by schools or organizations(companies) of any size to conduct assessment.`,
	},
	{
		question:
			'What are the minimum system requirements to install the product  ',
		answer: (
			<>
				<ul>
					<li>
						<b>Supported platforms:</b> Windows 7, Windows 8, Windows 8.1 ,
						Windows 10 (32bit/64 bit).{' '}
					</li>
					<li>
						<b>Installation requirements:</b> 50 MB free space 1GHz CPU 256 MB
						RAM 800x600 screen resolution
					</li>
				</ul>
			</>
		),
	},
	{
		question: 'How do I report a bug?',
		answer: (
			<>
				We work hard to keep Flip secure, and make every effort to keep on top
				of the latest threats by working with our inhouse security team. If you
				think we&apos;ve made a security mistake or have a vulnerability, please
				share with us right away at{' '}
				<a className='text-[#0075FF]' href='mailto:security@flipcbt.com'>
					security@flipcbt.com
				</a>
			</>
		),
	},
	{
		question: 'How do I report a complaint?',
		answer: (
			<>
				Our support team are available to receive any complaint, kindly send a
				mail of your complaint to{' '}
				<a className='text-[#0075FF]' href='mailto:support@flipcbt.com'>
					support@flipcbt.com
				</a>
			</>
		),
	},
];
const Faqs = () => {
	const [currQuestion, setCurrQuestion] = useState<number | null>(0);

	const handleClick = (e: React.MouseEvent, index: number) => {
		e.preventDefault();
		if (currQuestion === index) {
			return setCurrQuestion(null);
		}
		setCurrQuestion(index);
	};

	return (
		<section className='bg-white container pb-[8em] md:pb-[10em] md:pt-3'>
			<div className='vector-1'>
				<div className='vector-2 md:px-[8em] mobile:px-7'>
					<div className='text-center pt-[6rem] mb-[2em] mobile:mx-5'>
						<div className='flex justify-center'>
							<div className=''>
								<h2 className='font-semibold text-[40px] text-[#06042C] mobile:text-[28px] capitalize'>
									Faqs
								</h2>
							</div>
						</div>
						<p className='mx-auto md:w-7/12 mobile:mt-2'>
							We have carefully prepared a list of the most frequent inquiries
							for you. This will give you more insights on how to use Flip
						</p>
					</div>
					<div className='grid grid-cols-1 gap-7 justify-items-center'>
						{QA.map((item, index) => (
							<div
								className='w-10/12 md:mx-auto faq-border mobile:w-full'
								key={index}
							>
								<a
									href='#'
									onClick={(e) => handleClick(e, index)}
									className='flex items-center justify-between'
								>
									<h3
										className={`font-semibold w-full border-[#E0E0E0] text-[#06042C] capitalize`}
									>
										{item.question}
									</h3>
									{currQuestion === index ? (
										<button className='text-3xl font-bold bg-transparent border-none text-purple'>
											<Image
												src='/svgs/minus.svg'
												alt='minus icon'
												width='28px'
												height='28px'
											/>
										</button>
									) : (
										<button className='text-3xl font-bold bg-transparent border-none text-purple'>
											<Image
												src='/svgs/plus.svg'
												alt='plus icon'
												width='28px'
												height='28px'
											/>
										</button>
									)}
								</a>

								{currQuestion === index ? (
									<>
										<hr className='mt-7 mobile:mt-4' />
										<div className='flex flex-wrap pt-7 mobile:pt-4'>
											<p className='text-[#06042C]'>{item.answer}</p>
										</div>
									</>
								) : null}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faqs;
