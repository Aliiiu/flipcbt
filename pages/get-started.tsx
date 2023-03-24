import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { PopupModal } from 'react-calendly';
import AppModal from '../components/widget/Modal/Modal';

const GetStarted = () => {
	const [active, setActive] = useState<boolean>(false);
	const [open, setOpen] = useState(false);
	const [organizationActive, setorganizationActive] = useState<boolean>(false);
	const [marketingActive, setMarketingActive] = useState<boolean>(false);
	const router = useRouter();
	const [openMeet, setOpenMeet] = useState(false);
	const [mounted, setMounted] = useState<boolean>(false);
	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	const schoolHandler = () => {
		setActive(true);
		setMarketingActive(false);
		setorganizationActive(false);
		setOpenMeet(true);
	};

	const organizationHandler = () => {
		setActive(false);
		setMarketingActive(false);
		setorganizationActive(true);
		setOpen(true);
	};

	const marketingHandler = () => {
		setActive(false);
		setMarketingActive(true);
		setorganizationActive(false);
	};

	return (
		<Fragment>
			<Head>
				<title>Get Started | Flip CBT</title>
			</Head>
			<AppModal
				open={open}
				onClose={() => setOpen(false)}
				content={
					<div
						className={`flex flex-col items-center gap-3 w-full md:w-[50vh] cursor-pointer gs_card hover:border-2`}
					>
						<Image
							src='/images/gs_organization.png'
							alt='Flip Cbt Logo'
							width='160px'
							height='140px'
						/>
						<p className='text-center w-[200px]'>
							Flip For Organization Is Coming Soon!
						</p>
						<button
							className='bg-[#0075FF] text-white py-2 px-6 rounded-2xl'
							onClick={() => setOpen(false)}
						>
							return
						</button>
					</div>
				}
			/>
			{mounted && (
				<PopupModal
					url='https://calendly.com/flipcbt/online-demo'
					onModalClose={() => setOpenMeet(false)}
					open={openMeet}
					/*
					 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
					 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
					 */
					rootElement={document.getElementById('overlay-root') as HTMLElement}
				/>
			)}
			<div className='gs_Bg'>
				<div className='container'>
					<div className='flex flex-col md:pt-[40px] pt-[22px] pb-[80px] md:pb-[263px] md:px-[8em] px-7'>
						<div className='text-center'>
							<Link href={'/'}>
								<a>
									<Image
										src='/images/FlipCbt.png'
										alt='Flip Cbt Logo'
										width='100px'
										height='50px'
									/>
								</a>
							</Link>
						</div>
						<div className='md:mt-[92px] mt-[64px] text-center md:mb-[66px] mb-[54px]'>
							<h1 className='text-[40px] mobile:text-[32px] font-bold'>
								Get Started
							</h1>
							<p>What do you want to use Flip for?</p>
						</div>
						<div className='grid grid-cols-3 mobile:grid-cols-1 mobile:gap-y-[50px] gap-x-9 '>
							<a
								onClick={schoolHandler}
								className={`flex flex-col items-center cursor-pointer gs_card hover:border-2 hover:border-[#0075FF] ${
									active ? 'card_select' : null
								} shadow-[0px_4px_50px_rgba(0,0,0,0.1)]`}
							>
								<Image
									src='/images/gs_school.png'
									alt='Flip Cbt Logo'
									width='230px'
									height='140px'
								/>
								<h2 className='text-[25px] mobile:text-[25px] font-semibold mt-[40px]'>
									School
								</h2>
								<p className='text-center'>
									I want Flip for <br className='mobile:hidden' /> my school
								</p>
							</a>
							<div>
								<a
									onClick={organizationHandler}
									className={`flex flex-col items-center cursor-pointer gs_card hover:border-2 hover:border-[#0075FF] ${
										organizationActive ? 'card_select' : null
									} shadow-[0px_4px_50px_rgba(0,0,0,0.1)]`}
								>
									<Image
										src='/images/gs_organization.png'
										alt='Flip Cbt Logo'
										width='160px'
										height='140px'
									/>
									<h2 className='text-[25px] mobile:text-[25px] font-semibold mt-[40px]'>
										Organization
									</h2>
									<p className='text-center'>
										I want to market for <br className='mobile:hidden' /> my
										organization
									</p>
								</a>
							</div>
							<Link href={'/marketing/register'} passHref>
								<a
									onClick={marketingHandler}
									className={`flex flex-col items-center cursor-pointer gs_card hover:border-2 hover:border-[#0075FF] ${
										marketingActive ? 'card_select' : null
									} shadow-[0px_4px_50px_rgba(0,0,0,0.1)]`}
								>
									<Image
										src='/images/gs_market.png'
										alt='Flip Cbt Logo'
										width='168px'
										height='139px'
									/>
									<h2 className='text-[25px] mobile:text-[25px] font-semibold mt-[40px]'>
										Marketers
									</h2>
									<p className='text-center'>
										I want to market <br className='mobile:hidden' /> for Flip
									</p>
								</a>
							</Link>
						</div>
						{/* <div className='mt-[7em] flex flex-col items-start mobile:items-center mobile:text-center'>
									<div className='mt-8 md:ml-[3em] text-center mobile:w-full'>
										<p>
											Alreadly have an account?{' '}
											<span className='text-[#0075FF] font-bold'>Sign in</span>{' '}
										</p>
									</div>
								</div> */}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default GetStarted;
