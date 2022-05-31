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
				<title>organization-Form</title>
			</Head>
			<div className='md:hidden'>
				<Navbar />
			</div>
			<div className='container'>
				<div className='md:flex'>
					<div className='w-1/2 mobile:hidden md:hidden flex justify-center gs_register lg:inline-flex bg-[#0075FF]'>
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
							<div className='relative h-full w-[90%] mx-auto'>
								<Image
									src={'/reg_org.png'}
									alt='get started image'
									layout='fill'
									objectFit='contain'
								/>
								{/* <img
									src='/reg_org.png'
									alt='get started image'
									className='get-started-img'
								/> */}
							</div>
						</div>
					</div>
					<div className='md:w-1/2 w-full block md:pt-[116px] pt-[124px] pb-[116px] md:pb-[150px]'>
						<div className='items-center justify-center md:flex mobile:px-7'>
							<div className='md:w-[70%]'>
								<h2 className='md:text-[40px] text-[32px] text-[#06042C] font-bold mobile:text-center'>
									Create Account!
								</h2>
								<p className='text-[16px] text-[#06042C] mb-[50px] mobile:text-center'>
									For the purpose of industry regulation, your details are
									required.
								</p>
								<div className=''>
									<form className='flex flex-col'>
										<input
											type='text'
											placeholder='organization Name'
											className='px-4 py-4 mb-[30px] text-[18px] placeholder-[#06042C] input_border mobile:border-black w-full bg-transparent shadow appearance-none leading-tight rounded-[10px]'
										/>
										<input
											type='email'
											placeholder='organization Email'
											className='px-4 py-4 mb-[30px] text-[18px] placeholder-[#06042C] input_border bg-transparent w-full shadow appearance-none leading-tight rounded-[10px]'
										/>
										<input
											type='text'
											placeholder='Password'
											className='px-4 py-4 mb-[30px] text-[18px] placeholder-[#06042C] input_border w-full shadow bg-transparent appearance-none leading-tight rounded-[10px]'
										/>
										<input
											type='text'
											placeholder='organization Address'
											className='px-4 py-4 mb-[30px] text-[18px] placeholder-[#06042C] input_border bg-transparent w-full shadow appearance-none leading-tight rounded-[10px]'
										/>
										<div className='relative'>
											<select className='block px-4 py-4 mb-[30px] text-[18px] placeholder-[#06042C] input_border w-full bg-transparent shadow appearance-none leading-tight rounded-[10px]'>
												<option className=''>Purpose</option>
												<option>organization Size</option>
												<option>School Size</option>
											</select>
											<div className='pointer-events-none absolute inset-y-0 right-2 bottom-4 flex justify-center h-[57px] items-center px-2 text-gray-700'>
												<Image
													src={'/Expand_down.png'}
													alt='expand button'
													width='19.17px'
													height='18.33px'
												/>
											</div>
										</div>
										{/* <textarea
											className='
																		block
																		resize-y
																		w-full
																		px-3
																		py-2
															text-[18px] placeholder-[#06042C]
																		bg-transparent bg-clip-padding
																		input_border
																		transition
																		ease-in-out
																		m-0'
											placeholder='Message'
											rows={4}
										></textarea> */}
										<div className='mt-[0px] mobile:items-center mobile:text-center'>
											<div>
												<Button
													href={'/get-started'}
													content='Get Started'
													bgColor='bg-[#0075FF] w-full'
												/>
											</div>
											{/* <div className='mt-4 text-center mobile:w-full'>
												<p>
													Alreadly have an account?{' '}
													<span className='text-[#0075FF] font-bold'>
														Sign in
													</span>{' '}
												</p>
											</div> */}
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
