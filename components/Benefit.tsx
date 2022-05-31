import { useState } from 'react';
import Button from './Button';
import CustomImage from './Image';

type ArrayObject = {
	title: string;
	content: string;
};

const benefit: ArrayObject[][] = [
	[
		{
			title: 'Automatically Generates Exam Numbers For Students',
			content: `Discard the manual method of giving out examination numbers. Embrace 
								Flip to immediately generate unique numbers for students.
`,
		},
		{
			title: 'Randomly Assigns Generated Questions For Each Student.',
			content: ` Flip distributes shuffled questions for each student
									with a completely different question arrangement.`,
		},
		{
			title: 'Advanced Security Features To Avoid Examination Malpractices.',
			content: `There are standard security protocols inherent in Flip to 
								ensure that the assessment integrity is maintained. `,
		},
		{
			title: 'Retains Data For Future Use.',
			content: `Flip helps to save academic records including scores of assessment
								of students for easy accessibility in the future.This implies that
								Flip provides these records instantly when needed for reference purposes.`,
		},
		{
			title: 'Easy Grading and Collation of Results.',
			content: `Flip helps eliminate the scope of human error and the hassle of assigning
								script marking responsibilities to teachers. In addition, multiple-choice
								questions can also be graded easily.`,
		},
	],
	[
		{
			title: 'Remote Friendly.',
			content: `Flip allows organizations to conduct assessments that can be 
								easily assessed by different candidates at their respective locations.`,
		},
		{
			title: 'Seamless Assessment Flow.',
			content: `Flip frowns at any kind of hindrance while taking an assessment. 
								Flip is very responsive and doesn’t give room for hitches so far 
								the assessment taker has a stable internet connection.`,
		},
		{
			title: 'Real-time processing of results for candidates.',
			content: `Flip eliminates the anxiety of assessment takers after taking an 
								assessment. Results and performance of each person are displayed 
								immediately after the assessment is over.`,
		},
		{
			title: 'Reliable and Flexible to Use.',
			content: `Flip can be used on any device (mobile device, desktop, or laptop)
								and can be set up on any operating system (Windows, Mac, Linux).`,
		},
		{
			title: 'Security Protocol Enabled.',
			content: `It is extremely difficult for assessment takers to override the security 
								protocols fully enabled on Flip. With Flip, you can rest assured that every 
								piece of data is extremely secure.`,
		},
	],
];

const Benefit = () => {
	const [currTab, setCurrTab] = useState<number>(0);

	const ForSchool = (): void => {
		setCurrTab(0);
	};
	const Fororganization = (): void => {
		setCurrTab(1);
	};

	return (
		<section className=' md:bg-[#0075FF]'>
			<div className='container vector-5'>
				<div className='vector-6'>
					<div className='vector-7'>
						<div className='md:px-[8em] mobile:px-7 mobile:py-[6em] md:pt-[10em] md:pb-[10em]'>
							<div className='flex justify-between mobile:hidden'>
								<div className='bg-white flex flex-col justify-between w-[45%] rounded-[30px] p-[3em]'>
									<div>
										<div className='text-center text-[30px] font-semibold mb-7'>
											What Schools Get
										</div>
										{benefit[0].map((item, idx) => (
											<div
												className='flex flex-col justify-between pr-1 mb-6 md:mb-8'
												key={idx}
											>
												<div className='flex flex-col'>
													<div className='inline-flex items-center'>
														<CustomImage
															className='w-[35px] h-[35px] '
															src={'/tick.png'}
															alt=''
														/>
														<h5 className='ml-5 font-semibold text-[18px] md:text-[20px] capitalize'>
															{item.title}
														</h5>
													</div>
													<p className='mt-3 '>{item.content}</p>
												</div>
											</div>
										))}
									</div>
									<div className='text-center'>
										<Button
											href={'/for-school'}
											bgColor='bg-[#FFAD4A]'
											content={'Get Started'}
										/>
									</div>
								</div>
								<div className='bg-white w-[45%] rounded-[30px] p-[3em] flex flex-col justify-between'>
									<div>
										<div className='text-center text-[30px] font-semibold mb-7'>
											What Organizations Get
										</div>
										{benefit[1].map((item, idx) => (
											<div
												className='flex flex-col justify-between pr-1 mb-6 md:mb-8'
												key={idx}
											>
												<div className='flex flex-col'>
													<div className='inline-flex items-center'>
														<CustomImage
															className='w-[35px] h-[35px] '
															src={'/tick.png'}
															alt=''
														/>
														<h5 className='ml-5 font-semibold text-[18px] md:text-[20px] capitalize'>
															{item.title}
														</h5>
													</div>
													<p className='mt-3'>{item.content}</p>
												</div>
											</div>
										))}
									</div>
									<div className='text-center'>
										<Button
											href={'/for-organization'}
											bgColor='bg-[#0075FF]'
											content={'Get Started'}
										/>
									</div>
								</div>
							</div>
							<div className='md:hidden mobile:w-full'>
								<div className='flex justify-between w-full mb-8'>
									<div className='py-5 cursor-pointer header-card whitespace-nowrap'>
										<button
											className={`text-xl text-left font-semibold ${
												currTab === 0 ? 'text-[#06042C]' : 'text-[#BABABA]'
											}`}
											type='button'
											onClick={ForSchool}
										>
											What <br /> Schools <br /> Get
										</button>
									</div>
									<div className='py-5 cursor-pointer header-card whitespace-nowrap'>
										<button
											className={`text-xl text-left font-semibold ${
												currTab === 1 ? 'text-[#06042C]' : 'text-[#BABABA]'
											}`}
											type='button'
											onClick={Fororganization}
										>
											What <br /> Organizations <br /> Get
										</button>
									</div>
								</div>
								{benefit[currTab].map((item, idx) => (
									<div
										className='flex flex-col justify-between pr-1 mb-6 md:mb-8'
										key={idx}
									>
										<div className='flex flex-col'>
											<div className='inline-flex items-center'>
												<CustomImage
													className='w-[35px] h-[35px] '
													src={'/tick.png'}
													alt=''
												/>
												<h5 className='ml-5 font-semibold text-[18px] md:text-[20px]'>
													{item.title}
												</h5>
											</div>
											<p className='mt-3'>{item.content}</p>
										</div>
									</div>
								))}
								<div className='text-center justify-end mt-[3em]'>
									<Button
										href={`${
											currTab == 0 ? '/school/register' : '/school/register'
										}`}
										bgColor='bg-[#0075FF]'
										content={'Get Started'}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Benefit;
