import Image from 'next/image';
import React, { useState } from 'react';

const QA = [
	{
		question: 'What is flip?',
		answer: `The flip app is economical and accurate and gives the best results possible.`,
	},
	{
		question: 'Is my data secured?',
		answer: `Yes, your data is secure, and provisions have been made to enable confidentiality and security.`,
	},
	{
		question: 'Can I be a marketer for Flip?',
		answer: `The FLIP app is very accessible and can be used by both secondary schools and organisations.`,
	},
	{
		question: 'Why should I use FLIP?',
		answer: `The FLIP app is very accessible and can be used by both secondary schools and organisations.`,
	},
	{
		question: 'Do I need the internet to use the app?',
		answer: `The app has been designed with free internet software for fair usage for secondary
     schools while organizations need to engage the use of internet internet.`,
	},
];
const Faqs = () => {
	const [active, setActive] = useState<boolean>(false);
	const [currQuestion, setCurrQuestion] = useState<number>(0);

	const handleClick = (e: React.MouseEvent, index: number) => {
		e.preventDefault();
		// setActive(true);
		setActive((prevState) => !prevState);
		setCurrQuestion(index);
	};

	return (
		<section className='bg-white container pb-[4rem] md:pt-3'>
			<div className='vector-1'>
				<div className='vector-2 md:px-[8em] mobile:px-5'>
					<div className='text-center pt-[5rem] mb-[2em] mobile:mx-5'>
						<div className='flex justify-center'>
							<div className=''>
								<h2 className='font-semibold text-[40px] text-[#06042C] mobile:text-[28px]'>
									FAQs
								</h2>
							</div>
						</div>
						<p className='mx-auto md:w-7/12 text-[#06042C]'>
							We have carefully prepared a list of most frequent inquiries for
							you. This will give you more knowledge and insights into the app
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
									className='flex items-center justify-between py-3 mobile:py-0 md:px-8 mobile:px-4'
								>
									<h3
										className={`font-semibold w-full border-[#E0E0E0] text-[#06042C] mobile:px-2`}
									>
										{item.question}
									</h3>
									{active && currQuestion === index ? (
										<button className='text-3xl font-bold bg-transparent border-none text-purple'>
											<Image
												src='/minus.svg'
												alt='minus icon'
												width='28px'
												height='28px'
											/>
										</button>
									) : (
										<button className='text-3xl font-bold bg-transparent border-none text-purple'>
											<Image
												src='/plus.png'
												alt='plus icon'
												width='28px'
												height='28px'
											/>
										</button>
									)}
								</a>

								{active && currQuestion === index ? (
									<>
										<hr className='w-[92%] mx-auto' />
										<div className='flex flex-wrap py-3 md:px-8 mobile:px-4'>
											<p className=' text-[#06042C]'>{item.answer}</p>
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
