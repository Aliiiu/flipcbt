import Image from 'next/image';
import React, { FC, useState } from 'react';
import InViewAnimateRight from '../../transition/InViewAnimateRight';
import InViewAnimateTop from '../../transition/InViewAnimateTop';

interface QATypes {
	question: string;
	answer: string | JSX.Element;
}

const Faqs: FC<{ QA: QATypes[]; content: string }> = ({ QA, content }) => {
	const [currQuestion, setCurrQuestion] = useState<number | null>(0);

	const handleClick = (e: React.MouseEvent, index: number) => {
		e.preventDefault();
		if (currQuestion === index) {
			return setCurrQuestion(null);
		}
		setCurrQuestion(index);
	};

	return (
		<section className='vector-1 bg-white pb-[8em] md:pb-[10em] md:pt-3'>
			<div className='vector-2'>
				<InViewAnimateTop>
					<div className='container md:px-[8em] mobile:px-7'>
						<div className='text-center pt-[6rem] mb-[2em] mobile:mx-5'>
							<div className='flex justify-center'>
								<div className=''>
									<h2 className='font-semibold text-[40px] text-[#06042C] mobile:text-[28px] capitalize'>
										Faqs
									</h2>
								</div>
							</div>
							<p className='mx-auto md:w-7/12 mobile:mt-2'>{content}</p>
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
				</InViewAnimateTop>
			</div>
		</section>
	);
};

export default Faqs;
