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
			title: 'Automatically generates exam numbers for students',
			content: `Discard the manual method of giving out examination numbers. Embrace 
								FLIP to immediately generate unique numbers for students.
`,
		},
		{
			title: 'Randomly assigns generated questions for each student.',
			content: ` Flip distributes shuffled questions to students thereby
                 making sure that each student has completely different questions.`,
		},
		{
			title: 'Enhanced security features to avoid exam malpractice.',
			content: `There are various security features inherent in the 
                app to ensure that the assessment integrity is maintained. `,
		},
		{
			title: 'Real-time processing of results for candidates.',
			content: `It helps to save reports/data which includes scores of 
                assessment of students for easy accessibility in the future. This
                means when this report is needed for reference purpose, the app provides it at a go.`,
		},
		{
			title: 'Easy collation of results.',
			content: `It involves the conduct of examinations using computer networks, and questions are
								set in such a way that they can be formally and easily processed by the computer.`,
		},
	],
	[
		{
			title: 'Remote Friendly.',
			content: `FLIP allows organizations to conduct assessments that can be 
								easily assessed by different candidates at their respective locations.`,
		},
		{
			title: 'Seamless Assessment Flow.',
			content: `FLIP frowns at any kind of hindrance while taking an assessment. 
								Flip is very responsive and doesn’t give room for hitches so far 
								the assessment taker has a stable internet connection.`,
		},
		{
			title: 'Real-time processing of results for candidates.',
			content: `FLIP eliminates the anxiety of assessment takers after taking an 
								assessment. Results and performance of each person are displayed 
								immediately after the assessment is over.`,
		},
		{
			title: 'Reliable and Flexible to Use.',
			content: `FLIP can be used on any device (mobile device, desktop, or laptop)
								and can be set up on any operating system (Windows, Mac, Linux).`,
		},
		{
			title: 'Security Protocol Enabled.',
			content: `It is extremely difficult for assessment takers to override the security 
								protocols fully enabled on FLIP. With FLIP, you can rest assured that every 
								piece of data is extremely secure.`,
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
		<section className=' md:bg-[#0075FF]'>
			<div className='container vector-5'>
				<div className='vector-6'>
					<div className='vector-7'>
						<div className='md:px-[8em] mobile:px-7 mobile:py-[6em] md:pt-[10em] md:pb-[10em]'>
							<div className='flex justify-between mobile:hidden'>
								<div className='bg-white w-[45%] rounded-[30px] p-[3em]'>
									<div className='text-center text-[30px] font-semibold mb-7'>
										What School Get
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
													<h5 className='ml-5 font-semibold text-[18px] md:text-[20px]'>
														{item.title}
													</h5>
												</div>
												<p className='mt-3	'>{item.content}</p>
											</div>
										</div>
									))}
									<div className='text-center'>
										<Button
											href={'/for-school'}
											bgColor='bg-[#FFAD4A]'
											content={'Get Started'}
										/>
									</div>
								</div>
								<div className='bg-white w-[45%] rounded-[30px] p-[3em] flex flex-col'>
									<div className='text-center text-[30px] font-semibold mb-7'>
										What Organisation Get
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
											href={'/for-organisation'}
											bgColor='bg-[#0075FF]'
											content={'Get Started'}
										/>
									</div>
								</div>
							</div>
							<div className='md:hidden mobile:w-full'>
								<div className='flex justify-between w-full'>
									<div className='py-5 header-card cursor-pointer whitespace-nowrap'>
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
									<div className='header-card py-5 whitespace-nowrap cursor-pointer'>
										<button
											className={`text-xl text-left font-semibold ${
												currTab === 1 ? 'text-[#06042C]' : 'text-[#BABABA]'
											}`}
											type='button'
											onClick={ForOrganisation}
										>
											What <br /> Organisations <br /> Get
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

{
	/* <div className='w-full'>
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
		<div className='flex flex-col justify-between pr-1 mb-6 md:mb-8' key={idx}>
			<div className='flex flex-col'>
				<div className='flex'>
					<Image src='/Tick-Square.svg' alt='tick' width='20px' height='20px' />
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
              </div> */
}
// </div>; */}
