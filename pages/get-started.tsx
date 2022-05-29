import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

const GetStarted = () => {
	const [active, setActive] = useState<boolean>(false);
	const [organisationActive, setOrganisationActive] = useState<boolean>(false);
	const [marketingActive, setMarketingActive] = useState<boolean>(false);
	const router = useRouter();

	const schoolHandler = () => {
		setActive(true);
		setMarketingActive(false);
		setOrganisationActive(false);
	};

	const organisationHandler = () => {
		setActive(false);
		setMarketingActive(false);
		setOrganisationActive(true);
	};

	const marketingHandler = () => {
		setActive(false);
		setMarketingActive(true);
		setOrganisationActive(false);
	};

	useEffect(() => {
		const html = document.getElementById('mainHtml') as HTMLElement;
		html.style.overflow = 'auto';
	});
	return (
		<Fragment>
			<Head>
				<title>Get Started | Flip CBT</title>
			</Head>
			<div className='gs_Bg'>
				<div className='container'>
					<div className='flex flex-col md:pt-[40px] pt-[22px] pb-[80px] md:pb-[263px] md:px-[8em] px-7'>
						<div className='text-center'>
							<Link href={'/'}>
								<a>
									<Image
										src='/Flip Cbt.png'
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
							<p>What do you want to use flip for?</p>
						</div>
						<div className='grid grid-cols-3 mobile:grid-cols-1 mobile:gap-y-[50px] gap-x-9 '>
							<Link href={'/school/register'} passHref>
								<div
									onClick={schoolHandler}
									className={`flex flex-col items-center cursor-pointer gs_card hover:border-2 hover:border-[#0075FF] ${
										active ? 'card_select' : null
									} shadow-[0px_4px_50px_rgba(0,0,0,0.1)]`}
								>
									<Image
										src='/gs_school.png'
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
								</div>
							</Link>
							<Link href={'/organisation/register'} passHref>
								<div
									onClick={organisationHandler}
									className={`flex flex-col items-center cursor-pointer gs_card hover:border-2 hover:border-[#0075FF] ${
										organisationActive ? 'card_select' : null
									} shadow-[0px_4px_50px_rgba(0,0,0,0.1)]`}
								>
									<Image
										src='/gs_organisation.png'
										alt='Flip Cbt Logo'
										width='160px'
										height='140px'
									/>
									<h2 className='text-[25px] mobile:text-[25px] font-semibold mt-[40px]'>
										Organisation
									</h2>
									<p className='text-center'>
										I want to market for <br className='mobile:hidden' /> my
										organisation
									</p>
								</div>
							</Link>
							<Link href={'/marketing/register'} passHref>
								<div
									onClick={marketingHandler}
									className={`flex flex-col items-center cursor-pointer gs_card hover:border-2 hover:border-[#0075FF] ${
										marketingActive ? 'card_select' : null
									} shadow-[0px_4px_50px_rgba(0,0,0,0.1)]`}
								>
									<Image
										src='/gs_market.png'
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
								</div>
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
