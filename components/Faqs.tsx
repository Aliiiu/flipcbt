import Image from 'next/image';
import React, { useState } from 'react';

const QA = [
	{
		question: 'What is Flip?',
		answer: `Flip is a CBT software as a source to provide tests, examination management and a quick grading
						 system and collation of results instead of the use of pen and paper.`,
	},
	{
		question: 'Is my data secured?',
		answer: `Yes, your data is secure, and provisions have been made to enable confidentiality and security.`,
	},
	{
		question: 'How accesible is Flip?',
		answer: `Flip is very accessible and can be used by both secondary schools and organizations.`,
	},
	{
		question: 'Do I need the internet to use the app?',
		answer: `Flip has been designed with free internet software for fair usage for secondary
							schools while organizations need to use the internet.`,
	},
];
const Faqs = () => {
	const [active, setActive] = useState<boolean>(false);
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
												src='/minus.svg'
												alt='minus icon'
												width='28px'
												height='28px'
											/>
										</button>
									) : (
										<button className='text-3xl font-bold bg-transparent border-none text-purple'>
											<Image
												src='/plus.svg'
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
