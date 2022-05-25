import Image from 'next/image';

const GettingStartedForSchool = () => {
	return (
		<section className='md:px-20 xl:px-0 pt-[6em] bg-[#F7F8FA80] mobile:w-auto mobile:px-5'>
			<div className='mobile:mx-0'>
				<div className='text-center'>
					<h2 className='font-semibold text-[32px] md:text-[40px] mb-[2rem]'>
						Getting started is free and easy
					</h2>
				</div>
				<div className='flex justify-between'>
					<div className='bg-white  flex flex-col items-center card'>
						<Image
							src='/icon_plus.png'
							alt='Add Question illustration'
							width='92px'
							height='92px'
						/>
						<h3 className='font-semibold mt-[24px] text-[24px]'>
							Add Questions
						</h3>
					</div>
					<div className='bg-white flex flex-col items-center card'>
						<Image
							src='/device.png'
							alt='illustration'
							width='92px'
							height='92px'
						/>
						<h3 className='font-semibold mt-[24px] text-center text-[24px]'>
							Participant Engage <br className='mobile:hidden' /> Using Any
							Device
						</h3>
					</div>
					<div className=' bg-white flex flex-col items-center card'>
						<div>
							<Image
								src='/instant.png'
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
		</section>
	);
};

export default GettingStartedForSchool;
