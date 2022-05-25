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
								<div className='absolute top-[-50px] mobile:top-[-40px] right-0 left-0 m-auto'>
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
								<h3 className='text-[25px] font-semibold text-[#06042C] mb-6'>
									Time Saving
								</h3>
								<p>
									The amount of time consumed in curating question papers,
									arranging supplies, and evaluating scripts can be avoided as
									FLIP automates the entire process, increasing your
									productivity 100% better.{' '}
								</p>
							</div>
							<div className='relative feature-card flex flex-col items-center text-center mobile:mb-[5em]'>
								<div className='absolute top-[-50px] mobile:top-[-40px] right-0 left-0 m-auto'>
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
								<h3 className='text-[25px] font-semibold text-[#06042C] mb-6'>
									Stress-Free
								</h3>
								<p>
									Assessments can be conducted all year round, at any time
									without breaking an arm. Assessment takers do not need to
									travel far distances to a particular physical location before
									taking an assessment.
								</p>
							</div>
							<div className='relative flex flex-col items-center feature-card text-center mobile:mb-[0em]'>
								<div className='absolute top-[-50px] mobile:top-[-40px] right-0 left-0 m-auto'>
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
								<h3 className='text-[25px] font-semibold text-[#06042C] mb-6'>
									Cost-Effective
								</h3>
								<p>
									You don’t need to break the bank before you can use FLIP. Save
									up to 60% of your expenditures while using FLIP.
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
