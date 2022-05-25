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
		<div className='h-screen'>
			<div className='md:hidden'>
				<Navbar />
			</div>
			<div className='md:flex justify-center'>
				<div className='w-full h-screen mobile:hidden md:hidden gs_register lg:block pr-0 bg-[#0075FF]'>
					<div className='flex flex-col justify-between h-full  max-w-[40em] ml-auto'>
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
								src='/gs_organisationBg.png'
								alt='get started image'
								className='get-started-img h-[890px]'
							/>
						</div>
					</div>
				</div>
				<div className='md:w-full block md:pt-[116px] pt-[124px] mobile:pb-[200px]'>
					<div className='lg:max-w-[55em] md:max-w-[45em] md:mx-auto md:px-auto lg:px-[5em] xl:px-[7em] px-7'>
						<h2 className='md:text-[40px] text-[32px] text-[#06042C] font-bold mobile:text-center'>
							Create Account!
						</h2>
						<p className='text-[16px] text-[#06042C] mb-[50px] mobile:text-center'>
							For the purpose of industry regulation, your details are required.
						</p>
						<div className=''>
							<form className='flex flex-col'>
								<input
									type='text'
									placeholder='Organisation Name'
									className='px-4 py-4 mb-[30px] text-[14px] input_border mobile:border-black w-full bg-transparent shadow appearance-none leading-tight rounded-[10px]'
								/>
								<input
									type='email'
									placeholder='Organisation Email'
									className='px-4 py-4 mb-[30px] text-[14px] input_border bg-transparent w-full shadow appearance-none leading-tight rounded-[10px]'
								/>
								<input
									type='text'
									placeholder='Password'
									className='px-4 py-4 mb-[30px] text-[14px] input_border w-full shadow bg-transparent appearance-none leading-tight rounded-[10px]'
								/>
								<input
									type='text'
									placeholder='Organisation Address'
									className='px-4 py-4 mb-[30px] text-[14px] input_border bg-transparent w-full shadow appearance-none leading-tight rounded-[10px]'
								/>
								<div className='relative'>
									<select className='block px-4 py-4 mb-[30px] text-[14px] text-gray-400 input_border w-full bg-transparent shadow appearance-none leading-tight rounded-[10px]'>
										<option className=''>Purpose</option>
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
								<textarea
									className='
                          block
                          resize-y
                          w-full
                          px-3
                          py-2
                          bg-transparent bg-clip-padding
                          input_border
                          transition
                          ease-in-out
                          m-0'
									placeholder='Message'
									rows={4}
								></textarea>
								<div className='mt-[2em] mobile:items-center mobile:text-center'>
									<div>
										<Button
											href={'/get-started'}
											content='Get Started'
											bgColor='bg-[#0075FF] w-full'
										/>
									</div>
									<div className='mt-4 text-center mobile:w-full'>
										<p>
											Alreadly have an account?{' '}
											<span className='text-[#0075FF] font-bold'>Sign in</span>{' '}
										</p>
									</div>
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
