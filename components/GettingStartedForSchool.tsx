import Image from 'next/image';

const GettingStartedForSchool = () => {
	return (
		<section className='container'>
			<div className='xl:px-[8em] md:pt-[6em] pt-[78px] pb-[131px] md:pb-[181px] mobile:w-auto px-7'>
				<div className='mobile:mx-0'>
					<div className='text-center'>
						<h2 className='font-semibold text-[32px] md:text-[40px] mb-[2rem] capitalize'>
							Getting started is free and easy
						</h2>
					</div>
					<div className='grid grid-cols-3 mobile:grid-cols-1 gap-y-[60px] gap-x-[45px]'>
						<div className='bg-white flex flex-col items-center h-[249px] card'>
							<div>
								<Image
									src='/images/icon_plus.png'
									alt='Add Question illustration'
									width='92px'
									height='92px'
								/>
							</div>
							<h3 className='font-semibold mt-[24px] text-[24px]'>
								Add Questions
							</h3>
						</div>
						<div className='bg-white flex flex-col items-center h-[280px] card'>
							<div>
								<Image
									src='/images/device.png'
									alt='illustration'
									width='92px'
									height='92px'
								/>
							</div>
							<h3 className='font-semibold mt-[24px] text-center text-[24px]'>
								Participant Engage <br className='mobile:hidden' /> Using Any
								Device
							</h3>
						</div>
						<div className=' bg-white flex flex-col items-center h-[249px] card'>
							<div>
								<Image
									src='/images/instant.png'
									alt='Instant illustration'
									width='92px'
									height='92px'
								/>
							</div>
							<h3 className='font-semibold mt-[24px] text-[24px]'>
								Get Instant Result
							</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GettingStartedForSchool;
