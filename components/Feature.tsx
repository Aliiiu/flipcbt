import Image from 'next/image';

const Feature = () => {
	return (
		<section className='md:pt-[6rem] mobile:pt-[4rem]'>
			<div className='vector-1 container'>
				<div className='vector-2'>
					<div className='mobile:w-auto px-[8em] mobile:px-7 flex flex-col w-full mobile:mx-0'>
						<div className='text-center md:pt-9 md:mb-[8em] mb-[5rem]'>
							<h2 className='font-semibold text-[40px] mb-2 md:mb-6 mobile:text-[28px]'>
								Why <span className='text-[#0075FF]'>Flip</span>
							</h2>
							<p>
								Preparing for exams, tests or interviews is very tedious
								normally, <br className='mobile:hidden' />
								But writing assessments should be comfortable.
							</p>
						</div>
						<div className='grid md:grid-cols-3 mobile:grid-cols-1 md:mb-[9rem] md:space-x-6 mobile:flex-col mobile:mb-2'>
							<div className='relative feature-card flex flex-col items-center text-center mobile:mb-[5em]'>
								<div className='absolute top-[-50px] right-0 left-0 m-auto'>
									<div className='mobile:hidden'>
										<Image
											src='/time.png'
											alt='Time management illustration'
											width={100}
											height={100}
										/>
									</div>
									<div className='md:hidden'>
										<Image
											src='/time.png'
											alt='Time management illustration'
											width={80}
											height={80}
										/>
									</div>
								</div>
								<h3 className='text-[20px] font-semibold text-[#06042C] mb-6'>
									Time Saving
								</h3>
								<p>
									The time consumed in having to create question papers,
									arranging supplies and evaluating scripts can be totally
									avoided as it automates the entire process.{' '}
								</p>
							</div>
							<div className='relative feature-card flex flex-col items-center text-center mobile:mb-[5em]'>
								<div className='absolute top-[-50px] right-0 left-0 m-auto'>
									<div className='mobile:hidden'>
										<Image
											src='/convenience.png'
											alt='convenience illustration'
											width={100}
											height={100}
										/>
									</div>
									<div className='md:hidden'>
										<Image
											src='/convenience.png'
											alt='convenience illustration'
											width={80}
											height={80}
										/>
									</div>
								</div>
								<h3 className='text-[20px] font-semibold text-[#06042C] mb-6'>
									Convenience
								</h3>
								<p>
									Candidates can take tests at a time and place of their
									choosing. They do not need to travel to a particular physical
									location to write an exam, enabling candidates from far-off
									areas to attempt the test.{' '}
								</p>
							</div>
							<div className='relative flex flex-col items-center feature-card text-center mobile:mb-[0em]'>
								<div className='absolute top-[-50px] right-0 left-0 m-auto'>
									<div className='mobile:hidden'>
										<Image
											src='/speed.png'
											alt='Speed illustration'
											width={100}
											height={100}
										/>
									</div>
									<div className='md:hidden'>
										<Image
											src='/speed.png'
											alt='Speed illustration'
											width={80}
											height={80}
										/>
									</div>
								</div>
								<h3 className='text-[20px] font-semibold text-[#06042C] mb-6'>
									Speed and Accuracy
								</h3>
								<p>
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
