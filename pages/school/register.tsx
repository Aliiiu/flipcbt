import Head from 'next/head';
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
			<Head>
				<title>School-Form</title>
			</Head>
			<div className='md:hidden'>
				<Navbar />
			</div>
			<div className='container'>
				<div className='md:flex '>
					<div className='lg:w-1/2 mobile:hidden md:hidden gs_register flex justify-center lg:inline-flex bg-[#0075FF]'>
						<div className='flex flex-col justify-between w-full h-full'>
							<div className=''>
								<Link href={'/'} passHref>
									<Image
										src={'/Flip_Cbt_WhiteLogo.png'}
										alt='flip logo'
										width={'200px'}
										height='200px'
										className='cursor-pointer'
									/>
								</Link>
							</div>
							<div className='relative w-full h-full'>
								<Image
									src={'/reg_bg.png'}
									alt='get started image'
									layout='fill'
									objectFit='contain'
								/>
								{/* <img
									src='/reg_bg.png'
									alt='get started image'
									className='get-started-img'
								/> */}
							</div>
						</div>
					</div>
					<div className='lg:w-1/2 pt-[116px] md:pb-[115px] pb-[129px] '>
						<div className='items-center justify-center md:flex mobile:px-7'>
							<div className='md:w-[70%]'>
								<h2 className='text-[30px] font-bold mobile:text-center'>
									Get Started
								</h2>
								<p className='text-[16px] mobile:text-center'>
									School Information
								</p>
								<form className='flex flex-col mt-[40px]'>
									<input
										type='text'
										placeholder='Name'
										className='px-4 py-4 mb-4 text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										type='text'
										placeholder='School Name'
										className='px-4 py-4 mb-4 text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										type='email'
										placeholder='Email'
										className='px-4 py-4 mb-4 text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										type='text'
										placeholder='Phone Number'
										className='px-4 py-4 mb-4 text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										type='text'
										placeholder='Role at school'
										className='px-4 py-4 mb-4 text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										type='text'
										placeholder='School Address'
										className='px-4 py-4 mb-4 text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<div className='relative'>
										<select className='block px-4 py-4 mb-4 text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight rounded-[10px]'>
											<option>Select School Size</option>
											<option>200 Students</option>
											<option>200 - 500 Students</option>
											<option>More than 500 Students</option>
										</select>
										<div className='absolute inset-y-0 flex items-center justify-center px-2 pointer-events-none right-2 bottom-4'>
											<Image
												src={'/Expand_down.png'}
												alt='expand button'
												width='19.17px'
												height='18.33px'
											/>
										</div>
									</div>
									<div className='inline-flex w-full bg-orange-100 '>
										<Button
											href={'/get-started'}
											content='Get Started'
											bgColor='bg-[#0075FF] w-full text-center'
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
