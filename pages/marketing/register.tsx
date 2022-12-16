import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Navbar from '../../components/Layout/Navbar';
import Loader from '../../components/UI/Loader';
import Modal from '../../components/UI/Modal';
import AppModal from '../../components/widget/Modal/Modal';
import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from 'react-icons/io5';
import { Input } from '../../components/widget/Form/FormComponent';

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
	const [showLoader, setShowLoader] = useState(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [successMsg, setSuccessMsg] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<User>();

	useEffect(() => {
		setErrorMsg('');
		setSuccessMsg('');
	}, []);

	const onSubmit: SubmitHandler<User> = async (data) => {
		// console.log(JSON.stringify(data));
		setShowLoader(true);
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
				// setShowLoader(false);
				setSuccessMsg('You Have Successfully Submitted Your Data');
				reset();
			}
		} catch (err) {
			// console.log(err);
			// setShowLoader(false);
			error = err;
			if (error.response.status === 409) {
				// alert();
				setErrorMsg(
					error?.response?.data?.error?.message || 'something went wrong'
				);
			} else {
				setErrorMsg('something went wrong');
			}
		} finally {
			setShowLoader(false);
			setShowModal(true);
			console.log(successMsg, errorMsg);
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
			{/* {showModal && (
				<Modal selector={'overlay-root'} onClick={() => setShowModal(false)} />
			)} */}
			<AppModal
				open={showModal}
				onClose={() => setShowModal(false)}
				content={
					<>
						<div className='flex bg-white max-w-[400px] rounded-lg flex-col px-[30px] py-[60px] md:px-[40px] md:py-[80px] gap-y-[10px] justify-center items-center'>
							{successMsg && (
								<IoCheckmarkCircleSharp className='text-green-400 text-6xl' />
							)}
							{errorMsg && (
								<IoCloseCircleSharp className='text-red-400 text-6xl' />
							)}
							{successMsg && (
								<>
									<h2 className='text-[#333333] max-w-[323px] font-semibold text-[20px] text-center '>
										{successMsg}
									</h2>
									<p className='text-[14px] max-w-[301px] text-center text-[#4F4F4F]'>
										We will informed you about the next information, please sit
										tight.
									</p>
								</>
							)}
							{errorMsg && (
								<>
									<h2 className='text-[#333333] font-semibold text-[20px] text-center '>
										{errorMsg}
									</h2>
									<p className='text-[14px] text-center text-[#4F4F4F]'>
										Contact support for further assistance
									</p>
								</>
							)}
						</div>
					</>
				}
			/>
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
									<Input
										placeholder='Name'
										label='name'
										register={register}
										error={errors.name}
										type={'text'}
										required
									/>
									<Input
										placeholder='Email'
										label='email'
										register={register}
										error={errors.email}
										type={'email'}
										required
										pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}
									/>
									<Input
										placeholder='Phone Number'
										label='phoneNumber'
										register={register}
										error={errors.phoneNumber}
										type={'number'}
										required
									/>
									<Input
										placeholder='Address'
										label='marketerAddress'
										register={register}
										error={errors.marketerAddress}
										type={'text'}
										required
									/>
									<div className='relative'>
										<select
											{...register('marketerDegree')}
											className='block px-4 bg-white py-4 mb-[25px] text-base text-[#06042C] outline-none focus:border-blue-400 input_border w-full shadow appearance-none leading-tight rounded-[10px]'
										>
											<option value={''} selected disabled hidden>
												Degree
											</option>
											<option value={'Bsc'}>Bsc</option>
											<option className='text-black' value={'HND'}>
												HND
											</option>
											<option value={'Others'}>others</option>
										</select>
										<div className='pointer-events-none absolute inset-y-0 right-2 h-[58px] flex flex-col justify-center items-center px-2 text-gray-700'>
											<Image
												src={'../../images/expandDown.png'}
												alt='expand button'
												width='15.17px'
												height='15.33px'
											/>
										</div>
									</div>
									<div className='relative'>
										<select
											{...register('marketerState')}
											className='block px-4 bg-white py-4 mb-[25px] text-base text-[#06042C] outline-none focus:border-blue-400 input_border w-full shadow appearance-none leading-tight rounded-[10px]'
										>
											<option value={''} disabled selected hidden>
												State
											</option>
											<option value={'Lagos'}>Lagos</option>
											<option value={'Ogun'}>Ogun</option>
											<option value={'Oyo'}>Oyo</option>
										</select>
										<div className='pointer-events-none absolute inset-y-0 right-2 h-[58px] flex flex-col justify-center items-center px-2 text-gray-700'>
											<Image
												src={'../../images/expandDown.png'}
												alt='expand button'
												width='15.17px'
												height='15.33px'
											/>
										</div>
									</div>
									<Input
										placeholder='Drop link to cover letter'
										label='coverLetterUri'
										register={register}
										error={errors.coverLetterUri}
										type={'url'}
										required
									/>
									{/* <input
										required
										{...register('coverLetterUri')}
										type='url'
										placeholder='Drop link to cover letter'
										className='px-4 py-4 mb-[25px] appearance-none text-base outline-none focus:border-blue-400 text-[#06042C]  input_border w-full shadow leading-tight'
									/> */}
									<div className='w-full text-center'>
										<button className='py-[10px] px-[20px] flex justify-center md:px-[40px] md:py-[16px] text-[16px] rounded-[15px] w-full bg-[#0075FF] text-white'>
											{showLoader ? <Loader /> : 'Submit'}
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
