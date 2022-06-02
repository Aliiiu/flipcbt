import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';

const Register = () => {
	return (
		<div className=''>
			<Head>
				<title>Marketers-Form</title>
			</Head>
			<div className='md:hidden'>
				<Navbar />
			</div>
			<div className='container'>
				<div className='md:flex'>
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
							<div className='relative w-full h-full mx-auto'>
								<Image
									src={'/reg_mark.png'}
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
									Get Started
								</h2>
								<p className='text-[16px] mb-[40px] mobile:text-center'>
									Marketing Information
								</p>
								<form className='flex flex-col'>
									<input
										type='text'
										placeholder='Name'
										className='px-4 py-4 mb-[20px] appearance-none text-[18px] placeholder-[#06042C] input_border w-full shadow leading-tight'
									/>
									<input
										type='text'
										placeholder='School Name'
										className='px-4 py-4 mb-[20px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										type='email'
										placeholder='Email'
										className='px-4 py-4 mb-[20px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										type='text'
										placeholder='Phone Number'
										className='px-4 py-4 mb-[20px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<input
										type='text'
										placeholder='Address'
										className='px-4 py-4 mb-[20px] text-[18px] placeholder-[#06042C] input_border w-full shadow appearance-none leading-tight'
									/>
									<div className='relative'>
										<select className='block px-4 py-4 mb-[20px] text-[18px] text-[#06042C] input_border w-full shadow appearance-none leading-tight rounded-[10px]'>
											<option>Degree</option>
											<option>organization Size</option>
											<option>School Size</option>
										</select>
										<div className='pointer-events-none absolute inset-y-0 right-2 h-[58px] flex flex-col justify-center items-center px-2 text-gray-700'>
											<Image
												src={'/Expand_down.png'}
												alt='expand button'
												width='19.17px'
												height='18.33px'
											/>
										</div>
									</div>
									<label
										htmlFor='dropzone-file'
										className='flex flex-col justify-center items-center w-full py-4 rounded-[10px] bg-white border-2 border-[#06042C] border-dashed cursor-pointer'
									>
										<p>Tap here to upload cover letter</p>
										<input id='dropzone-file' type='file' className='hidden' />
									</label>
									<div className='inline-flex text-center mt-[25px] w-full'>
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
		</div>
	);
};

export default Register;
