import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Navbar from '../../components/Layout/Navbar';
import Modal from '../../components/UI/Modal';

type User = {
	name: string;
	schoolName: string;
	email: string;
	phoneNumber: string;
	role: string;
	schoolAddress: string;
	schoolSize: string;
};

const Register: React.FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<User>();

	useEffect(() => {
		const html = document.getElementById('mainHtml') as HTMLElement;
		html.style.overflow = 'auto';
	});

	const onSubmit: SubmitHandler<User> = async (data) => {
		// console.log(JSON.stringify(data));
		let config = {
			method: 'POST',
			url: `https://webservice.flipcbt.com/v1/school/register`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify(data),
		};
		let error: any;
		try {
			const res = await axios(config);
			if (res.status === 200) {
				setShowModal(true);
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
	return (
		<div className=''>
			<Head>
				<title>School-Form</title>
			</Head>
			<div className='md:hidden'>
				<Navbar />
			</div>
			{showModal && (
				<Modal selector={'overlay-root'} onClick={() => setShowModal(false)} />
			)}
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
											width={'150px'}
											height='150px'
											className='object-contain cursor-pointer'
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
								<form
									onSubmit={handleSubmit(onSubmit)}
									className='flex flex-col mt-[50px]'
								>
									<input
										required
										type='text'
										{...register('name')}
										placeholder='Name'
										className={`${
											errors?.name ? 'border border-red-500' : null
										} px-4 py-4 mb-[25px] text-[18px] rounded-[10px] outline-none placeholder-[#06042C] border border-[#828282] w-full shadow appearance-none leading-tight`}
									/>
									<input
										required
										type='text'
										{...register('schoolName')}
										placeholder='School Name'
										className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										required
										type='email'
										{...register('email')}
										placeholder='Email'
										className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										type='text'
										{...register('phoneNumber')}
										placeholder='Phone Number'
										className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<div className='relative mb-[25px]'>
										<select
											{...register('role')}
											className='block px-4 py-4 bg-white text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight rounded-[10px]'
										>
											<option>Role at School</option>
											<option>owner</option>
											<option>principal</option>
											<option>administrator</option>
											<option>teacher</option>
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
									<input
										type='text'
										{...register('schoolAddress')}
										placeholder='School Address'
										className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<div className='relative mb-[25px]'>
										<select
											{...register('schoolSize')}
											className='block px-4 py-4 bg-white text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight rounded-[10px]'
										>
											<option>School Size</option>
											<option> less_than_200 </option>
											<option>200_to_500</option>
											<option>500_to_1000</option>
											<option>greater_than_1000</option>
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
