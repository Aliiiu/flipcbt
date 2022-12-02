import Image from 'next/image';
import InViewAnimateRight from '../../../transition/InViewAnimateRight';

const GettingStartedForSchool = () => {
	return (
		<section className='container'>
			<div className='xl:px-[8em] md:pt-[6em] pt-[78px] pb-[131px] md:pb-[181px] mobile:w-auto px-7'>
				<InViewAnimateRight>
					<div className='mobile:mx-0'>
						<div className='text-center'>
							<h2 className='font-semibold text-[32px] md:text-[40px] mb-[2rem] capitalize'>
								Getting started is free and easy
							</h2>
						</div>
						<div className='grid lg:grid-cols-3 grid-cols-1 gap-y-[60px] gap-x-[45px]'>
							<div className='bg-white flex flex-col items-center w-[100%] md:w-[400px] lg:w-[100%] h-[249px] card mx-auto'>
								<div>
									<Image
										src='/images/icon_plus.png'
										alt='Add Question illustration'
										width='92px'
										height='92px'
									/>
								</div>
								<h3 className='font-semibold mt-[24px] text-center text-[24px] md:text-[20px] lg:text-[24px]'>
									Add Questions
								</h3>
							</div>
							<div className='bg-white flex flex-col items-center w-[100%] md:w-[400px] lg:w-[100%] h-[280px] card mx-auto'>
								<div>
									<Image
										src='/images/device.png'
										alt='illustration'
										width='92px'
										height='92px'
									/>
								</div>
								<h3 className='font-semibold mt-[24px] text-center text-[24px] md:text-[20px] lg:text-[24px]'>
									Participant Engage <br className='mobile:hidden' /> Using Any
									Device
								</h3>
							</div>
							<div className=' bg-white flex flex-col items-center w-[100%] md:w-[400px] lg:w-[100%] h-[249px] card mx-auto'>
								<div>
									<Image
										src='/images/instant.png'
										alt='Instant illustration'
										width='92px'
										height='92px'
									/>
								</div>
								<h3 className='font-semibold mt-[24px] text-center text-[24px] md:text-[20px] lg:text-[24px]'>
									Get Instant Result
								</h3>
							</div>
						</div>
					</div>
				</InViewAnimateRight>
			</div>
		</section>
	);
};

export default GettingStartedForSchool;
