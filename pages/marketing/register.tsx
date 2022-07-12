import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Navbar from '../../components/Layout/Navbar';
import Modal from '../../components/UI/Modal';

type User = {
	name: string;
	email: string;
	phoneNumber: string;
	marketerAddress: string;
	marketerDegree: string;
	marketerState: string;
	coverLetterUri: string;
};

const Register = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<User>();

	const onSubmit: SubmitHandler<User> = async (data) => {
		// console.log(JSON.stringify(data));
		let config = {
			method: 'POST',
			url: `https://webservice.flipcbt.com/v1/marketer/register/`,
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
			// console.log(err);
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
				<title>Marketers-Form</title>
			</Head>
			<div className='md:hidden'>
				<Navbar />
			</div>
			{showModal && (
				<Modal selector={'overlay-root'} onClick={() => setShowModal(false)} />
			)}
			<div className='container'>
				<div className='md:flex'>
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
							<div className='relative w-full h-full mx-auto'>
								<Image
									src={'../../images/reg_mark.png'}
									alt='get started iamge'
									layout='fill'
									objectFit='contain'
								/>
								{/* <img
									src='/reg_mark.png'
									alt='get started image'
									className='get-started-img'
								/> */}
							</div>
						</div>
					</div>
					<div className='lg:w-1/2 w-full md:pt-[116px] pt-[124px] pb-[207px] md:pb-[156px]'>
						<div className='items-center justify-center md:flex mobile:px-7'>
							<div className='md:w-[70%]'>
								<h2 className='md:text-[40px] text-[32px] font-bold mobile:text-center'>
									Become a Marketer
								</h2>
								<p className='text-[16px] mb-[50px] mobile:text-center'>
									Kindly provide us your information
								</p>
								<form
									onSubmit={handleSubmit(onSubmit)}
									className='flex flex-col'
								>
									<input
										required
										{...register('name')}
										type='text'
										placeholder='Name'
										className='px-4 py-4 mb-[25px] appearance-none text-[18px] placeholder-[#06042C] input_border w-full shadow leading-tight'
									/>
									<input
										required
										{...register('email')}
										type='email'
										placeholder='Email'
										className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										required
										{...register('phoneNumber')}
										type='tel'
										placeholder='Phone Number'
										className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										required
										{...register('marketerAddress')}
										type='text'
										placeholder='Address'
										className='px-4 py-4 mb-[25px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<div className='relative'>
										<select
											{...register('marketerDegree')}
											className='block px-4 bg-white py-4 mb-[25px] text-[18px] text-[#06042C] input_border w-full shadow appearance-none leading-tight rounded-[10px]'
										>
											<option>Degree</option>
											<option>Bsc</option>
											<option>HND</option>
											<option>others</option>
										</select>
										<div className='pointer-events-none absolute inset-y-0 right-2 h-[58px] flex flex-col justify-center items-center px-2 text-gray-700'>
											<Image
												src={'../../images/expandDown.png'}
												alt='expand button'
												width='19.17px'
												height='18.33px'
											/>
										</div>
									</div>
									<div className='relative'>
										<select
											{...register('marketerState')}
											className='block px-4 bg-white py-4 mb-[25px] text-[18px] text-[#06042C] input_border w-full shadow appearance-none leading-tight rounded-[10px]'
										>
											<option>State</option>
											<option>Lagos</option>
											<option>Ogun</option>
											<option>Oyo</option>
										</select>
										<div className='pointer-events-none absolute inset-y-0 right-2 h-[58px] flex flex-col justify-center items-center px-2 text-gray-700'>
											<Image
												src={'../../images/expandDown.png'}
												alt='expand button'
												width='19.17px'
												height='18.33px'
											/>
										</div>
									</div>
									<input
										required
										{...register('coverLetterUri')}
										type='url'
										placeholder='Drop link to cover letter'
										className='px-4 py-4 mb-[25px] appearance-none text-[18px] placeholder-[#06042C] input_border w-full shadow leading-tight'
									/>
									{/* <label
										htmlFor='dropzone-file'
										className='flex flex-col justify-center items-center w-full py-4 rounded-[10px] bg-white border-2 border-[#06042C] border-dashed cursor-pointer'
									>
										<p>Tap here to upload cover letter</p>
										<input id='dropzone-file' type='file' className='hidden' />
									</label> */}
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
