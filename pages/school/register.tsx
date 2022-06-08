import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Navbar from '../../components/Layout/Navbar';

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
									<a>
										<Image
											src={'../../images/whiteLogo.png'}
											alt='flip logo'
											width={'180px'}
											height='180px'
											className='cursor-pointer'
										/>
									</a>
								</Link>
							</div>
							<div className='relative w-full h-full'>
								<Image
									src={'../../images/reg_bg.png'}
									alt='get started image'
									layout='fill'
									objectFit='contain'
								/>
								{/* <img src='/reg_bg' alt='new' width={'700px'} height='650px' /> */}
							</div>
						</div>
					</div>
					<div className='lg:w-1/2 w-full pt-[116px] md:pb-[115px] pb-[129px] '>
						<div className='items-center justify-center md:flex mobile:px-7'>
							<div className='md:w-[70%]'>
								<h2 className='text-[30px] font-bold mobile:text-center'>
									Get Started
								</h2>
								<p className='text-[16px] mobile:text-center'>
									School Information
								</p>
								<form className='flex flex-col mt-[50px]'>
									<input
										required
										type='text'
										placeholder='Name'
										className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										required
										type='text'
										placeholder='School Name'
										className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										required
										type='email'
										placeholder='Email'
										className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										required
										type='text'
										placeholder='Phone Number'
										className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<div className='relative mb-[25px]'>
										<select className='block px-4 py-4 text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight rounded-[10px]'>
											<option>Role at School</option>
											<option> School Owner </option>
											<option>Principal</option>
											<option>Admin</option>
											<option>Teacher</option>
											<option>Others</option>
										</select>
										<div className='absolute inset-y-0 flex items-center justify-center px-2 pointer-events-none right-2'>
											<Image
												src={'../../images/expandDown.png'}
												alt='expand button'
												width='19.17px'
												height='18.33px'
											/>
										</div>
									</div>
									<input
										type='text'
										placeholder='School Address'
										className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<div className='relative mb-[25px]'>
										<select className='block px-4 py-4 text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight rounded-[10px]'>
											<option>School Size</option>
											<option> &lt; 200 </option>
											<option>200 - 500</option>
											<option>500 - 1000</option>
											<option>&gt; 1000</option>
										</select>
										<div className='absolute inset-y-0 flex flex-col justify-center px-2 pointer-events-none right-2'>
											<Image
												src={'../../images/expandDown.png'}
												alt='expand button'
												width='19.17px'
												height='18.33px'
											/>
										</div>
									</div>
									<div className='w-full text-center'>
										<button className='py-[10px] px-[20px] md:px-[40px] md:py-[16px] text-[16px] rounded-[15px] w-full bg-[#0075FF] text-white'>
											Submit
										</button>
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
