import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';

const Register = () => {
	useEffect(() => {
		const html = document.getElementById('mainHtml') as HTMLElement;
		html.style.overflow = 'auto';
	});
	return (
		<div className=''>
			<div className='md:hidden'>
				<Navbar />
			</div>
			<div className=''>
				<div className='md:flex justify-center'>
					<div className='w-full mobile:hidden h-screen md:hidden gs_register lg:block pr-0 bg-[#0075FF]'>
						<div className='flex flex-col justify-between h-full max-w-[40em] ml-auto'>
							<div className=''>
								<Link href={'/'} passHref>
									<Image
										src={'/Flip_Cbt_WhiteLogo.png'}
										alt='flip logo'
										width={'150px'}
										height='150px'
									/>
								</Link>
							</div>
							<div>
								<img
									src='/register_bg.png'
									alt='get started image'
									className='get-started-img'
								/>
							</div>
						</div>
					</div>
					<div className='w-full pt-[116px] pb-[154px]'>
						<div className='lg:max-w-[55em] md:max-w-[45em] md:mx-auto md:px-auto lg:px-[5em] xl:px-[7em] px-7'>
							<h2 className='text-[30px] font-bold mobile:text-center'>
								Get Started
							</h2>
							<p className='text-[16px] mobile:text-center'>
								School Information
							</p>
							<form className='flex flex-col mt-[50px]'>
								<input
									type='text'
									placeholder='Name'
									className='px-4 py-4 mb-5 text-[14px] input_border w-full shadow appearance-none leading-tight'
								/>
								<input
									type='text'
									placeholder='School Name'
									className='px-4 py-4 mb-5 text-[14px] input_border w-full shadow appearance-none leading-tight'
								/>
								<input
									type='email'
									placeholder='Email'
									className='px-4 py-4 mb-5 text-[14px] input_border w-full shadow appearance-none leading-tight'
								/>
								<input
									type='text'
									placeholder='Phone Number'
									className='px-4 py-4 mb-5 text-[14px] input_border w-full shadow appearance-none leading-tight'
								/>
								<input
									type='text'
									placeholder='Role at school'
									className='px-4 py-4 mb-5 text-[14px] input_border w-full shadow appearance-none leading-tight'
								/>
								<input
									type='text'
									placeholder='School Address'
									className='px-4 py-4 mb-5 text-[14px] input_border w-full shadow appearance-none leading-tight'
								/>
								<div className='relative'>
									<select className='block px-4 py-4 mb-5 text-[14px] text-gray-400 input_border w-full shadow appearance-none leading-tight rounded-[10px]'>
										<option>School Size</option>
										<option>Organisation Size</option>
										<option>School Size</option>
									</select>
									<div className='pointer-events-none absolute inset-y-0 right-0 bottom-4 flex items-center px-2 text-gray-700'>
										<svg
											className='fill-current h-4 w-4'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
										>
											<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
										</svg>
									</div>
								</div>
								<div className='mt-4 w-full'>
									{/* <Link href='/' passHref>
										<button className='py-3 text-base text-white bg-[#0075FF] btn-border mobile:px-[142px] md:px-[155px] lg:px-[195px] md:py-4 w-full'>
											SUBMIT
										</button>
									</Link> */}
									<Button
										href={'/get-started'}
										content='Get Started'
										bgColor='bg-[#0075FF] w-full'
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
