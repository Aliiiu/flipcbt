import Image from 'next/image';
import { useState } from 'react';

type ArrayObject = {
	title: string;
	content: string;
};

const benefit: ArrayObject[][] = [
	[
		{
			title: 'Automatically generates exam numbers for students',
			content: `You don't have to give out exam numbers  separately
                 as the app has been designed to immediately initiate
                 random numbers to students.`,
		},
		{
			title: 'Randomly assigns generated questions for each student.',
			content: ` It distributes shuffled questions to students thereby
                 making sure that each student has completely different questions.`,
		},
		{
			title: 'Enhanced security features to avoid exam malpractice.',
			content: `There are various security features inherent in the 
                app to ensure that the assessment integrity is maintained. `,
		},
		{
			title: 'Retains Data for future use.',
			content: `It helps to save reports/data which includes scores of 
                assessment of students for easy accessibility in the future. This
                means when this report is needed for reference purpose, the app provides it at a go.`,
		},
		{
			title: 'Easy grading and collation of results.',
			content: `FLIP helps to eliminate the scope of human error and 
      the hassle of allotting evaluation responsibilities to teachers.
      In addition, multiple-choice questions can also be graded easily.`,
		},
	],
	[
		{
			title: 'Remote Friendly.',
			content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`,
		},
		{
			title: 'Easy examination streamlining.',
			content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`,
		},
		{
			title: 'Real-time processing of results for candidates',
			content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`,
		},
		{
			title: 'Operational and Reliable',
			content: `It involves the conduct of examinations using computer
              networks, and questions are set in such a way that
              they can be formally and easily processed by the computer.`,
		},
	],
];

const Benefit = () => {
	const [currTab, setCurrTab] = useState<number>(0);

	const ForSchool = (): void => {
		setCurrTab(0);
	};
	const ForOrganisation = (): void => {
		setCurrTab(1);
	};

	return (
		<section className='md:px-[8em] mobile:px-5 bg-[#0075FF] py-[6rem] bg-opacity-5'>
			<div className='flex container'>
				<div className='md:w-6/12 mobile:w-full'>
					<div className='flex overflow-x-hidden mb-9'>
						<div className='py-5 cursor-pointer whitespace-nowrap'>
							<button
								className={`text-xl font-semibold ${
									currTab === 0 ? 'text-[#0075FF]' : 'text-[#BDBDBD]'
								}`}
								type='button'
								onClick={ForSchool}
							>
								What Schools Get
							</button>
							<div
								className={`${
									currTab === 0 ? 'bg-[#0075FF]' : 'bg-[#BDBDBD]'
								} mt-3 h-1`}
							></div>
						</div>
						<div className='mobile:pl-[3rem] md:px-[8rem] py-5 whitespace-nowrap cursor-pointer'>
							<button
								className={`text-xl font-semibold mobile:w-[15rem] ${
									currTab === 1 ? 'text-[#0075FF]' : 'text-[#BDBDBD]'
								}`}
								type='button'
								onClick={ForOrganisation}
							>
								What Organisations Get
							</button>
							<div
								className={`${
									currTab === 1 ? 'bg-[#0075FF]' : 'bg-[#BDBDBD]'
								} mt-3 w-full h-1`}
							></div>
						</div>
					</div>
					{benefit[currTab].map((item, idx) => (
						<div
							className='flex flex-col justify-between pr-1 mb-6 md:mb-8'
							key={idx}
						>
							<div className='flex flex-col'>
								<div className='flex'>
									<Image
										src='/Tick-Square.svg'
										alt='tick'
										width='20px'
										height='20px'
									/>
									<h2 className='ml-5 font-semibold text-[18px] md:text-[20px]'>
										{item.title}
									</h2>
								</div>
								<p className='mt-4'>{item.content}</p>
							</div>
						</div>
					))}

					{/* <div className='mobile:pt-9 pt-9'>
                <Link href=''>
                  <a className='py-3 text-white bg-blue-500 px-[4rem] md:py-5 btn-border'> GET STARTED</a>
                </Link>
              </div> */}
				</div>
				<div className='mobile:hidden md:hidden lg:flex flex-col justify-center lg:w-full'>
					<Image
						src={'/benefit.png'}
						alt='Celebration Illustration'
						width={'900px'}
						height='700px'
					/>
				</div>
			</div>
		</section>
	);
};

export default Benefit;
