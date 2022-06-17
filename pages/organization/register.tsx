import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Navbar from '../../components/Layout/Navbar';

type User = {
	organizationName: string;
	organizationEmail: string;
	assessmentType: string;
	organizationAddress: string;
};

const Register = () => {
	const { register, handleSubmit, reset } = useForm<User>();

	const onSubmit: SubmitHandler<User> = async (data) => {
		// console.log(JSON.stringify(data));
		let config = {
			method: 'POST',
			url: `https://webservice.flipcbt.com/v1/organization/register/`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify(data),
		};
		let error: any;
		try {
			const res = await axios(config);
			if (res.status === 200) {
				console.log('done');
				reset();
			}
		} catch (err) {
			console.log(err);
			error = err;
			if (error.response.status === 409) {
				alert(error.response.data.error.message);
			} else {
				alert('something went wrong');
			}
		}
	};

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
					<div className='lg:w-1/2 mobile:hidden md:hidden flex justify-center gs_register lg:inline-flex bg-[#0075FF]'>
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
							<div className='relative h-full w-[100%] mx-auto'>
								<Image
									src={'../../images/reg_org.png'}
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
					<div className='lg:w-1/2 w-full md:pt-[116px] pt-[124px] pb-[116px] md:pb-[150px]'>
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
									<form
										onSubmit={handleSubmit(onSubmit)}
										className='flex flex-col'
									>
										<input
											required
											type='text'
											{...register('organizationName')}
											placeholder='Organization Name'
											className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border mobile:border-black w-full bg-transparent shadow appearance-none leading-tight rounded-[10px]'
										/>
										<input
											required
											type='email'
											{...register('organizationEmail')}
											placeholder='Organization Email'
											className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border bg-transparent w-full shadow appearance-none leading-tight rounded-[10px]'
										/>
										<input
											required
											type='text'
											{...register('organizationAddress')}
											placeholder='Organization Address'
											className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border bg-transparent w-full shadow appearance-none leading-tight rounded-[10px]'
										/>
										<div className='relative mb-[25px]'>
											<select
												{...register('assessmentType')}
												className='block px-4 py-4 text-[18px] placeholder-[#06042C] input_border w-full bg-transparent shadow appearance-none leading-tight rounded-[10px]'
											>
												<option>Purpose</option>
												<option>aptitude</option>
												<option>quiz</option>
												<option>poll</option>
												<option>others</option>
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
										<div className='mt-[0px] text-center'>
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
		</div>
	);
};

export default Register;
