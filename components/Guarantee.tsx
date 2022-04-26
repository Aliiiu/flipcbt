import React,{useRef, useState, useCallback} from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';

type dataObject = {
  content: string,
  name: string,
  role: string,
}

const Guarantee = () => {
  const [prevEl, setPrevEl]= useState<HTMLElement | null>(null);
  const[nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const swiper = useSwiper();
  
  const data: dataObject[] = [
  {
    content: `Running a business can be demanding, having motivated
              employees is paramount to our success and with
              earnipay's flexible salary payment solutions,
              productivity isn't a demand anymore, it's a
              lifestyle.`,
    name: 'Courtney Henry',
    role: 'Founder of Easy Secondary School'
  },
  {
    content: `Running a business can be demanding, having motivated
              employees is paramount to our success and with
              earnipay's flexible salary payment solutions,
              productivity isn't a demand anymore, its a
              lifestyle.`,
    name: 'Leslie Alexander',
    role: 'Founder of Easy Secondary School'
  },
  {
    content: `Running a business can be demanding, having motivated
              employees is paramount to our success and with
              earnipay's flexible salary payment solutions,
              productivity isn't a demand anymore, it's a
              lifestyle.`,
    name: 'Stephen Madagascar',
    role: 'Founder of Easy Secondary School'
  },
  {
    content: `Running a business can be demanding, having motivated
              employees is paramount to our success and with
              earnipay's flexible salary payment solutions,
              productivity isn't a demand anymore, it&#39;s a
              lifestyle.`,
    name: 'Leslie Alexander',
    role: 'Founder of Easy Secondary School'
  },
]
  return (
    <section className='flex flex-col md:px-20 py-20 mobile:px-4 space-y-8 bg-[#F7F8FA]'>
      <div className="container">
        <div className='flex items-center justify-between mb-[4rem]'>
          <h2 className='font-semibold text-[40px] mb-4 mobile:text-[28px]'>Don&#39;t just take our word for it.</h2>
          <div className='flex space-x-3'>
            <button className='px-3 bg-gray-300 rounded-full' ref={(node) => setPrevEl(node)}>
              <svg
                width="8"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4L6 14L16 24L14 28L0 14L14 0L16 4Z"
                  fill='white'
                />
              </svg>
            </button>
            <button className='px-3 bg-blue-400 rounded-full' ref={(node) => setNextEl(node)}>
              <svg
                width="8"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24L10 14L0 4L2 0L16 14L2 28L0 24Z"
                  fill='white'
                />
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
                nextEl
              }}
              spaceBetween={30}
              slidesPerView={2}
              loop
              >
              {
                data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='p-10 bg-white rounded-[30px] mobile:flex mobile:flex-col-reverse'>
                      <p>
                        {item.content}
                      </p>
                      <div className='mb-8 md:mt-10'>
                        <h2 className='font-bold text-[20px]'>{item.name}</h2>
                        <h4 className='text-[16px]'>{item.role}</h4>
                      </div>
                    </div> 
                  </SwiperSlide>
                ))
                  
              }
              </Swiper>
            </div>
            <div className='flex mobile-slider mobile:space-y-7 md:mx-auto'>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl,
                nextEl
              }}
              spaceBetween={30}
              slidesPerView={1}
              loop
              >
              {
                data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='p-10 bg-white rounded-[30px] mobile:flex mobile:flex-col-reverse'>
                      <p>
                        {item.content}
                      </p>
                      <div className='mb-8 md:mt-10'>
                        <h2 className='font-bold text-[20px]'>{item.name}</h2>
                        <h4 className='text-[16px]'>{item.role}</h4>
                      </div>
                    </div> 
                  </SwiperSlide>
                ))
                  
              }
              </Swiper>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Guarantee;

{/* <div className='p-10 md:mr-5 bg-white rounded-[30px] mobile:flex mobile:flex-col-reverse'>
                <p>
                  Running a business can be demanding, having motivated
                  employees is paramount to our success and with
                  earnipay&#39;s flexible salary payment solutions,
                  productivity isn&#39;t a demand anymore, it&#39;s a
                  lifestyle.
                </p>
                <div className='mb-8 md:mt-10'>
                  <h2 className='font-bold text-[20px]'>Courtney Henry</h2>
                  <h4 className='text-[16px]'>Founder of Easy Secondary school</h4>
                </div>
              </div>
              <div className='p-10 bg-white rounded-[30px] mobile:flex mobile:flex-col-reverse'>
                <p>
                  Running a business can be demanding, having motivated
                  employees is paramount to our success and with
                  earnipay&#39;s flexible salary payment solutions,
                  productivity isn&#39;t a demand anymore, it&#39;s a
                  lifestyle.
                </p>
                <div className='mb-8 md:mt-10'>
                  <h2 className='font-bold text-[20px]'>Courtney Henry</h2>
                  <h4 className='text-[16px]'>Founder of Easy Secondary school</h4>
                </div>
              </div> */}