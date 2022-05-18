import Image from 'next/image';

const Feature = () => {
	return (
		<section className='md:pt-[6rem] bg-[#F7F8FA80] mobile:bg-[#F7F8FA] mobile:pt-[4rem]'>
			<div className='vector-1 container'>
				<div className='vector-2'>
					<div className='mobile:w-auto px-[8em] mobile:px-5 flex flex-col w-full mobile:mx-0'>
						<div className='text-center md:pt-9 md:mb-[8em] mb-[5rem]'>
							<h2 className='font-semibold text-[40px] mb-2 md:mb-6 mobile:text-[28px]'>
								Why <span className='text-blue-400'>Flip</span>
							</h2>
							<p>
								Preparing for exams, tests or interviews is very tedious
								normally, <br className='mobile:hidden' />
								But writing assessments should be comfortable.
							</p>
						</div>
						<div className='grid md:grid-cols-3 mobile:grid-cols-1 md:mb-[9rem] md:space-x-6 mobile:flex-col mobile:mb-8'>
							<div className='relative flip-border flex flex-col items-center pt-10 px-3 mobile:pb-8 mobile:mb-[5em] text-center bg-white semi-blue-glow rounded-[30px]'>
								<div className='absolute top-[-50px] right-0 left-0 m-auto'>
									<Image
										src='/time.png'
										alt='Time management illustration'
										width={100}
										height={100}
									/>
								</div>
								<h3 className='text-[20px] font-semibold text-[#0075FF] mt-6 md:uppercase'>
									Time Saving
								</h3>
								<p className='mt-6'>
									The time consumed in having to create question papers,
									arranging supplies and evaluating scripts can be totally
									avoided as it automates the entire process.{' '}
								</p>
							</div>
							<div className='relative flip-border flex flex-col items-center pt-10 pb-8 px-3 text-center mobile:mb-[5em] bg-white semi-blue-glow rounded-[30px]'>
								<div className='absolute top-[-50px] right-0 left-0 m-auto'>
									<Image
										src='/convenience.png'
										alt='Time management illustration'
										width={100}
										height={100}
									/>
								</div>
								<h3 className='text-[20px] font-semibold text-[#0075FF] mobile:mt-6 md:mt-12 lg:mt-6 md:uppercase'>
									Convenience
								</h3>
								<p className='mt-6'>
									Candidates can take tests at a time and place of their
									choosing. They do not need to travel to a particular physical
									location to write an exam, enabling candidates from far-off
									areas to attempt the test.{' '}
								</p>
							</div>
							<div className='relative flip-border flex flex-col items-center pt-10 px-3 mobile:pb-8 text-center bg-white semi-blue-glow rounded-[30px]'>
								<div className='absolute top-[-50px] right-0 left-0 m-auto'>
									<Image
										src='/convenience.png'
										alt='Time management illustration'
										width={100}
										height={100}
									/>
								</div>
								<h3 className='text-[20px] font-semibold text-[#0075FF] md:mt-12 mobile:mt-6 lg:mt-6 md:uppercase'>
									Speed and Accuracy
								</h3>
								<p className='mt-6'>
									Unlike the PPT exams that most often contain errors in
									grading, FLIP has been designed to enable efficiency in giving
									out results..
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature;
