import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../styles/home.module.css';

const Data = [
	{
		heading: 'Turn student engagement into meaningful data',
		content: `Running a business can be demanding, having motivated employees is paramount to our success 
            and with earnipay’s flexible salary payment solutions, productivity isn’t a demand anymore, it’s a
            lifestyle.`,
		alt: 'Data Analytics Illustration',
		image: '/Ransom.png',
	},
	{
		heading:
			'Remote friendly - no need for participants to juggle tabs. They see questions on their own device',
		content: `Running a business can be demanding, having motivated employees is paramount 
          to our success and with earnipay’s flexible salary payment solutions, 
          productivity isn’t a demand anymore, it’s a lifestyle.`,
		alt: 'Remote Friendly Illustration',
		image: '/Friendship.png',
	},
	{
		heading: 'All reports are saved and can be accessed at any time',
		content: `Running a business can be demanding, having motivated employees is paramount to our success 
            and with earnipay’s flexible salary payment solutions, productivity isn’t a demand anymore, it’s a
            lifestyle.`,
		alt: 'Book Kepping Illustration',
		image: '/SecureServer.png',
	},
	{
		heading: 'Turn student engagement into meaningful data',
		content: `Running a business can be demanding, having motivated employees is paramount to our success 
            and with earnipay’s flexible salary payment solutions, productivity isn’t a demand anymore, it’s a
            lifestyle.`,
		alt: 'Happy Students Illustration',
		image: '/HappyStudent.png',
	},
];

const FeatureForSchool = () => {
	return (
		<Fragment>
			<section className='container md:px-[8em] pt-[8em] px-7'>
				<div className='vector-8'>
					<div className='vector-9'>
						<div className='text-center'>
							<h1 className='font-bold text-[24px] mt-9 mb-9 md:mb-[3em]'>
								Trusted By
							</h1>
							<div className='md:px-20 xl:px-0'>
								<div className='flex justify-between items-center mobile:justify-center  flex-wrap md:w-10/12 md:mx-auto'>
									<div className='mobile:mx-3 mobile:mb-7'>
										<Image
											src='/Coindesk 2.png'
											alt='Coindesk Logo 1'
											width='31.53px'
											height='29px'
										/>
										<Image
											src='/Coindesk 1.png'
											alt='Coindesk Logo 2'
											width='114.96px'
											height='29px'
										/>
									</div>
									<div className='mobile:mb-7'>
										<Image
											src='/reuters-logo 1.png'
											alt='reuters logo'
											width='154px'
											height='45.58px'
										/>
									</div>
									<Image
										src='/coinTracker.png'
										alt='cointracker logo'
										width='148px'
										height='55.84px'
									/>
								</div>
							</div>
						</div>
						<div className='relative md:flex md:justify-center'>
							<h1 className='inline-block md:text-[45px] text-[32px] text-center font-semibold md:px-20 pt-9 mobile:pt-5 mb-[2em]'>
								90% of students who use Flip report higher grades
							</h1>
							<span className='inline-block absolute top-[42px] md:top-[65px] left-[130px] md:left-[263px] lg:left-[293px] bg-[rgba(0,117,255,0.5)] rounded-[8px] w-[140px] md:w-[180px] mobile:h-[14px] md:h-[20px]'></span>
						</div>
						{Data.map((item, index) => (
							<section
								key={index}
								className={`${
									index % 2 === 0 ? styles.bigfeatleft : styles.bigfeatright
								} w-full mobile:w-auto flex flex-row mb-9 md:mb-[7em] mobile:mb-[7em] justify-between ${
									(index + 1) % 2 === 0 && 'flex-row-reverse'
								}`}
							>
								<div className={`w-5/12 mobile:w-full mobile:text-center`}>
									<div className='hidden mx-auto mb-10 mobile:block'>
										<Image
											src={item.image}
											alt={item.alt}
											width='300px'
											height='300px'
										/>
									</div>
									<div>
										<h1 className='font-semibold md:pt-[2em] lg:pt-[4em] text-[18px] md:text-[20px]'>
											{item.heading}
										</h1>
										<p className='mt-6'>{item.content}</p>
									</div>
								</div>
								<div className='mobile:hidden w-1/2'>
									<Image
										src={item.image}
										alt={item.alt}
										width='551px'
										height='551px'
										style={{ margin: 0 }}
									/>
								</div>
							</section>
						))}
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default FeatureForSchool;
