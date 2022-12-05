import { animate, motion, useAnimation, useCycle } from 'framer-motion';
import { useEffect, useState } from 'react';
import InViewAnimateGrow from '../../transition/InViewAnimateGrow';
import InViewAnimateLeft from '../../transition/InViewAnimateLeft';
import InViewAnimateRight from '../../transition/InViewAnimateRight';
import Button from '../UI/Button';
import CustomImage from '../UI/Image';
import { useInView } from 'react-intersection-observer';
import InViewAnimateTop from '../../transition/InViewAnimateTop';
import BenefitCards from './Cards/BenefitCards';
import { Tab } from '@headlessui/react';

type ArrayObject = {
	title: string;
	content: string;
};

const tabContent = {
	Schools: [
		{
			id: 1,
			title: 'Advanced Security Features To Avoid Examination Malpractices',
			content: `There are standard security protocols inherent in
								FLIP to ensure that the assessment integrity is maintained.`,
		},
		{
			id: 2,
			title: 'Randomly Assigns Programmed Questions for Each Student',
			content: ` FLIP distributes shuffled questions for each student 
									with a completely different question arrangement.`,
		},
		{
			id: 3,
			title: 'Retains Data For Future Use',
			content: `Flip helps to save academic records including scores of students' assessments for easy accessibility in the future. This implies that Flip provides these records instantly when needed for reference purposes.`,
		},
		{
			id: 4,
			title: 'Automatic Grading',
			content: `Flip is designed to grade students immediately after the assessment has been taken which in turn relieves the stress of teachers.`,
		},

		{
			id: 5,
			title: 'Accuracy of Results',
			content: `With Flip, you can be rest assured that precise and error-free scores are allocated to students after the assessment is conducted.`,
		},
		{
			id: 6,
			title: 'Online Checking of Results',
			content: `Student results can now be assessed online using Flip. This allows easier access to individual results.`,
		},
		{
			id: 7,
			title: 'Swift Organization of Broadsheet ',
			content: `Flip provides a suitable platform to record academic broadsheets for retaining scores of each student's subjects. This further amplifies the teacher’s productivity and the school’s performance.`,
		},
		{
			id: 8,
			title: 'Appropriate Timetable Management',
			content: `Flip monitors and manages the programmed timetable for respective assessment schedules. This feature of Flip prevents schedule mixups between students and teachers. `,
		},
	],
	Organizations: [
		{
			id: 1,
			title: 'Remote Friendly.',
			content: `Flip allows organizations to conduct assessments that can be 
								easily accessed by different candidates at their respective locations.`,
		},
		{
			id: 2,
			title: 'Seamless Assessment Flow.',
			content: `FLIP frowns at any kind of hindrance while taking an assessment. Flip is very responsive and doesn’t 
								give room for hitches so far the assessment taker has a stable internet connection.`,
		},
		{
			id: 3,
			title: 'Real-time processing of results for candidates.',
			content: `FLIP eliminates the anxiety of candidates after taking an assessment. 
								Results and performance of each person are displayed immediately after the assessment is over.`,
		},
		{
			id: 4,
			title: 'Reliable and Flexible to Use.',
			content: `FLIP can be used on any device (mobile device, desktop, or laptop) 
								and can be set up on any operating system (Windows, Mac, Linux). `,
		},

		{
			id: 5,
			title: 'Security Protocol Enabled.',
			content: `It is extremely difficult for assessment takers to override the 
								security protocols fully enabled on FLIP.
								With FLIP, you can rest assured that every piece of data is safe`,
		},
	],
};

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const Benefit = () => {
	const [currTab, setCurrTab] = useState<number>(0);
	let [tabs] = useState(tabContent);
	const [isOpen, toggleOpen] = useCycle(false, true);
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		if (!inView) {
			animation.start('visible');
		}
		if (inView) {
			animation.start('hidden');
		}
	});

	const tabVariants = {
		active: {
			scale: 1.1,
			textShadow: '0px 0px 8px rgb(255,255,255)',
			boxShadow: '0px 0px 8px rgb(255,255,255)',
			transition: {
				duration: 0.3,
				yoyo: Infinity,
			},
		},
	};

	const ForSchool = (): void => {
		setCurrTab(0);
	};
	const Fororganization = (): void => {
		setCurrTab(1);
	};

	return (
		<section className=' md:bg-[#0075FF]'>
			<div className='vector-5'>
				<div className='vector-6'>
					<div className='vector-7 container'>
						<div className='xl:px-[8em] px-7 mobile:py-[6em] md:pt-[10em] md:pb-[10em]'>
							<div className='flex justify-between mobile:hidden'>
								<div className='bg-white flex flex-col justify-between w-[45%] rounded-[30px] p-[2rem] xl:p-[3em]'>
									<div>
										<>
											<div className='text-center text-[30px] font-semibold mb-7'>
												What Schools Get
											</div>
											<BenefitCards item={tabs['Schools'][0]} delay={0.3} />
											<BenefitCards item={tabs['Schools'][1]} delay={0.6} />
											<BenefitCards item={tabs['Schools'][2]} delay={0.9} />
											<BenefitCards item={tabs['Schools'][3]} delay={1.2} />
											<BenefitCards item={tabs['Schools'][4]} delay={1.5} />
											<BenefitCards item={tabs['Schools'][5]} delay={1.8} />
											<BenefitCards item={tabs['Schools'][6]} delay={2.1} />
											<BenefitCards item={tabs['Schools'][7]} delay={2.4} />
										</>
									</div>
									<div className='text-center md:mt-[15px]'>
										<Button
											href={'/for-school'}
											bgColor='bg-[#FFAD4A]'
											content={'Get Started'}
											hover='hover:border-2 hover:bg-transparent hover:text-secondary transition-colors ease-in-out duration-500 hover:border-secondary'
										/>
									</div>
								</div>
								<div className='bg-white w-[45%] rounded-[30px] p-[2em] xl:p-[3em] flex flex-col justify-between'>
									<div>
										<>
											<div className='text-center text-[30px] font-semibold mb-7'>
												What Organizations Get
											</div>
											<BenefitCards
												item={tabs['Organizations'][0]}
												delay={0.3}
											/>
											<BenefitCards
												item={tabs['Organizations'][1]}
												delay={0.6}
											/>
											<BenefitCards
												item={tabs['Organizations'][2]}
												delay={0.9}
											/>
											<BenefitCards
												item={tabs['Organizations'][3]}
												delay={1.2}
											/>
											<BenefitCards
												item={tabs['Organizations'][4]}
												delay={1.5}
											/>
										</>
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
								<Tab.Group>
									<Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
										{Object.keys(tabs).map((content, index) => (
											<Tab
												key={index}
												className={({ selected }) =>
													classNames(
														'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
														'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
														selected
															? 'bg-white shadow'
															: 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
													)
												}
												// className={({ selected }) =>
												// 	classNames(
												// 		'relative outline-none mr-[0.5rem] mb-[0.75rem] tab-default block w-auto cursor-pointer rounded-[0.5rem] px-[1.5rem] py-[0.75rem] shadow-none text-center transition-all duration-[300ms]',
												// 		selected
												// 			? 'bg-red-100 text-secondary selected font-normal'
												// 			: 'text-gray-400 font-light'
												// 	)
												// }
											>
												{content === 'Schools' ? (
													<h3 className='text-xl px-2 text-left font-semibold'>
														What <br /> Schools <br /> Get
													</h3>
												) : (
													<h3 className='text-xl px-2 text-left font-semibold'>
														What <br /> Organizations <br /> Get
													</h3>
												)}
											</Tab>
										))}
									</Tab.List>
									<Tab.Panels className='mt-2'>
										{Object.values(tabs).map((item, idx) => (
											<Tab.Panel
												key={idx}
												className={classNames(
													'rounded-xl bg-white p-3',
													'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
												)}
											>
												{({ selected }) => (
													<>
														<motion.ul
															animate={selected ? 'active' : 'inactive'}
															initial={'inactive'}
															variants={parentVariants}
														>
															{item.map((content) => (
																<motion.li
																	key={content.id}
																	variants={childVariants}
																	className='flex flex-col justify-between pr-1 mb-6 md:mb-8'
																>
																	<div className='flex flex-col'>
																		<div className='inline-flex items-center'>
																			<CustomImage
																				className='w-[35px] h-[35px] '
																				src={'/images/tick.png'}
																				alt=''
																			/>
																			<h5 className='ml-5 font-semibold text-[18px] md:text-[20px] capitalize'>
																				{content.title}
																			</h5>
																		</div>
																		<p className='mt-3 '>{content.content}</p>
																	</div>
																</motion.li>
															))}
														</motion.ul>
														<div className='text-center justify-end mt-[3em]'>
															<Button
																href={`${
																	idx === 0
																		? '/school/register'
																		: '/organization/register'
																}`}
																bgColor='bg-[#0075FF]'
																content={'Get Started'}
															/>
														</div>
													</>
												)}
											</Tab.Panel>
										))}
									</Tab.Panels>
								</Tab.Group>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const parentVariants = {
	active: {
		transition: { staggerChildren: 0.3, delayChildren: 0.5 },
	},
	inactive: {
		transition: { staggerChildren: 0.05 },
	},
};

const childVariants = {
	active: {
		scrollX: 0,
		opacity: 1,
		transition: {
			x: { stiffness: 1000, velocity: -100 },
		},
	},
	inactive: {
		scrollX: 50,
		opacity: 0,
		transition: {
			x: { stiffness: 1000 },
		},
	},
};
export default Benefit;
