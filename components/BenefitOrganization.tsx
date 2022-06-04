import { ImageProps } from 'next/image';
import Button from './UI/Button';
import CustomImage from './UI/Image';

type BenefitObject = {
	title: string;
	content: string;
	alt: string;
	image: ImageProps['src'];
};
const Benefitorganization = () => {
	const benefit: BenefitObject[] = [
		{
			title: 'Sign up in 5 minutes',
			content: `Input your details and sign up for free`,
			alt: 'sign up time illustration',
			image: '/images/sign-up.png',
		},
		{
			title: 'Set-up Questions and Instructions For Assessment',
			content: `Input the candidate's assessment questions, guidelines,
								and other necessary data while Flip processes the rest. `,
			alt: 'questions and instruction illustration',
			image: '/images/questions.png',
		},
		{
			title: 'Easy Access and Full Transparency',
			content: `Flip allows free access to your admin portal, 
								ensuring complete honesty and stringent security.`,
			alt: 'easy access illustration',
			image: '/images/easy-access.png',
		},
		{
			title: 'Get Resources and Support',
			content: `Our support team is always available to assist 
								you and provide answers to your inquiries.`,
			alt: 'support illustration',
			image: '/images/support.png',
		},
	];
	return (
		<section className='container'>
			<div className='md:px-[8em] mobile:px-5 md:pt-[60px] mobile:pt-[40px] pb-[95px]'>
				<h1 className='text-center font-semibold mobile:text-[32px] md:text-[40px] mobile:mb-[33px] mb-[90px]'>
					Start Your Flip Journey In Four Steps
				</h1>
				<div className=''>
					<div className='grid md:grid-cols-2 grid-cols-1 gap-y-[30px] md:gap-x-[103px] md:gap-y-[47px]'>
						{benefit.map((item, idx) => (
							<div className='flex' key={idx}>
								<CustomImage
									src={item.image}
									alt={item.alt}
									className='w-[135px] h-[125px] mobile:w-[55px] mobile:h-[51px]'
								/>

								<div className='ml-[20px] mobile:ml-[10px]'>
									<h2 className='font-semibold text-[20px] md:text-[24px] capitalize'>
										{item.title}
									</h2>
									<p
										className={`mt-1 ${idx === 0 ? 'md:w-[85%]' : 'md:w-full'}`}
									>
										{item.content}
									</p>
								</div>
							</div>
						))}
					</div>

					<div className='md:mt-[89px] mt-[30px] text-center'>
						<Button
							href={'/get-started'}
							content='Contact Us'
							bgColor='bg-[#0075FF]'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Benefitorganization;
