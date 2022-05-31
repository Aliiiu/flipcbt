import { useState } from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSwiperRef from '../hook/useSwiperRef';

type dataObject = {
	content: string;
	name: string;
	role: string;
};

const Guarantee = () => {
	const [next, setNext] = useState(false);
	const [prev, setPrev] = useState(false);
	const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();
	const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();

	const nextPageHandler = () => {
		setNext(true);
		setPrev(false);
	};
	const prevPageHandler = () => {
		setNext(false);
		setPrev(true);
	};

	const data: dataObject[] = [
		{
			content: `Running a business can be demanding, having motivated
              employees is paramount to our success and with
              earnipay's flexible salary payment solutions,
              productivity isn't a demand anymore, it's a
              lifestyle.`,
			name: 'Courtney Henry',
			role: 'Founder of Easy Secondary School',
		},
		{
			content: `Running a business can be demanding, having motivated
              employees is paramount to our success and with
              earnipay's flexible salary payment solutions,
              productivity isn't a demand anymore, its a
              lifestyle.`,
			name: 'Leslie Alexander',
			role: 'Founder of Easy Secondary School',
		},
		{
			content: `Running a business can be demanding, having motivated
              employees is paramount to our success and with
              earnipay's flexible salary payment solutions,
              productivity isn't a demand anymore, it's a
              lifestyle.`,
			name: 'Stephen Madagascar',
			role: 'Founder of Easy Secondary School',
		},
		{
			content: `Running a business can be demanding, having motivated
              employees is paramount to our success and with
              earnipay's flexible salary payment solutions,
              productivity isn't a demand anymore, it&#39;s a
              lifestyle.`,
			name: 'Leslie Alexander',
			role: 'Founder of Easy Secondary School',
		},
	];
	return (
		<section className='flex flex-col space-y-8 bg-[#0075FF] bg-opacity-10'>
			<div className='container'>
				<div className='md:px-[8em] py-[6em] mobile:px-7'>
					<div className='flex items-center justify-between mb-[3rem]'>
						<h2 className='font-semibold text-[40px] mobile:text-[28px] capitalize'>
							Don&#39;t just take our word for it.
						</h2>
						<div className='flex items-center space-x-3'>
							<button
								className={`w-[50px] h-[50px] px-[21px] ${
									prev ? 'bg-blue-400' : 'bg-gray-300'
								} rounded-[100%] hover:bg-blue-400`}
								ref={prevElRef}
								onClick={prevPageHandler}
							>
								<svg
									width='8'
									height='28'
									viewBox='0 0 16 28'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M16 4L6 14L16 24L14 28L0 14L14 0L16 4Z'
										fill='white'
									/>
								</svg>
							</button>
							<button
								className={`w-[50px] h-[50px] px-[21px] ${
									next ? 'bg-blue-400' : 'bg-gray-300'
								} rounded-[100%] hover:bg-blue-400 `}
								ref={nextElRef}
								onClick={nextPageHandler}
							>
								<svg
									width='8'
									height='28'
									viewBox='0 0 16 28'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M0 24L10 14L0 4L2 0L16 14L2 28L0 24Z' fill='white' />
								</svg>
							</button>
						</div>
					</div>
					<div>
						<div className='flex mobile:hidden mobile:space-y-7 md:mx-auto'>
							<Swiper
								modules={[Navigation]}
								navigation={{
									prevEl,
									nextEl,
								}}
								spaceBetween={30}
								slidesPerView={2}
								loop
							>
								{data.map((item, index) => (
									<SwiperSlide key={index}>
										<div className='p-7 bg-white m-4 rounded-[30px] mobile:flex mobile:flex-col-reverse shadow-[0px_8px_16px_rgba(0,0,0,0.08)]'>
											<p>{item.content}</p>
											<div className='mb-2 md:mt-8'>
												<h2 className='font-bold text-[20px]'>{item.name}</h2>
												<h4 className='text-[14px]'>{item.role}</h4>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className='flex mobile-slider mobile:space-y-7 md:mx-auto shadow-[0px_8px_16px_rgba(0,0,0,0.08)] rounded-[30px]'>
							<Swiper
								modules={[Navigation]}
								navigation={{
									prevEl,
									nextEl,
								}}
								spaceBetween={30}
								slidesPerView={1}
								loop
							>
								{data.map((item, index) => (
									<SwiperSlide key={index}>
										<div className='p-6 bg-white rounded-[30px] mobile:flex mobile:flex-col-reverse'>
											<p>{item.content}</p>
											<div className='mb-8 md:mt-10'>
												<h2 className='font-bold text-[20px]'>{item.name}</h2>
												<h4 className='text-[16px]'>{item.role}</h4>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Guarantee;
