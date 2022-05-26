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
			<div className='md:flex justify-center'>
				<div className='w-full mobile:hidden md:hidden gs_register flex justify-center lg:inline-flex bg-[#0075FF]'>
					<div className='flex flex-col justify-between h-full  max-w-[40em]'>
						<div className=''>
							<Link href={'/'} passHref>
								<Image
									src={'/Flip_Cbt_WhiteLogo.png'}
									alt='flip logo'
									width={'200px'}
									height='200px'
								/>
							</Link>
						</div>
						<div>
							<img
								src='/gs_marketersBg.png'
								alt='get started image'
								className='get-started-img'
							/>
						</div>
					</div>
				</div>
				<div className='md:w-full block md:pt-[116px] pt-[124px] mobile:pb-[200px]'>
					<div className='lg:max-w-[55em] md:max-w-[45em] md:mx-auto md:px-auto lg:px-[5em] xl:px-[7em] px-7'>
						<h2 className='md:text-[40px] text-[32px] font-bold mobile:text-center'>
							Get Started
						</h2>
						<p className='text-[16px] mb-[50px] mobile:text-center'>
							Marketing Information
						</p>
						<form className='flex flex-col'>
							<input
								type='text'
								placeholder='Name'
								className='px-4 py-4 mb-[30px] appearance-none text-[18px] placeholder-[#06042C] input_border w-full shadow leading-tight'
							/>
							<input
								type='text'
								placeholder='School Name'
								className='px-4 py-4 mb-[30px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
							/>
							<input
								type='email'
								placeholder='Email'
								className='px-4 py-4 mb-[30px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
							/>
							<input
								type='text'
								placeholder='Phone Number'
								className='px-4 py-4 mb-[30px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
							/>
							<input
								type='text'
								placeholder='Address'
								className='px-4 py-4 mb-[30px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
							/>
							<div className='relative'>
								<select className='block px-4 py-4 mb-[30px] text-[18px] text-[#06042C] input_border w-full shadow appearance-none leading-tight rounded-[10px]'>
									<option>Degree</option>
									<option>Organisation Size</option>
									<option>School Size</option>
								</select>
								<div className='pointer-events-none absolute inset-y-0 right-0 h-[58px] flex flex-col justify-center items-center px-2 text-gray-700'>
									{/* <svg
										className='fill-current h-4 w-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
									>
										<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
									</svg> */}
									<Image
										src={'/Expand_down.png'}
										alt='expand button'
										width='19.17px'
										height='18.33px'
									/>
								</div>
							</div>
							<div className='cover_border text-center text-[18px] py-3'>
								Tap here to upload cover letter
							</div>
							<div className='mt-[30px] w-full'>
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
	);
};

export default Register;
