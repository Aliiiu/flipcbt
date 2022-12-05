import React from 'react';
import InViewAnimateLeft from '../../../transition/InViewAnimateLeft';
import InViewAnimateRight from '../../../transition/InViewAnimateRight';
import InViewAnimateTop from '../../../transition/InViewAnimateTop';

const policies = [
	{
		id: 1,
		content:
			'We prohibit unacceptable promotional online activities like spamming, hacking, etc that can be detrimental to our product.',
	},
	{
		id: 2,
		content:
			'We must acknowledge and endorse all your promotional materials before pushing them out to your prospects.',
	},
	{
		id: 3,
		content:
			'We would pay the expected commission for only the number of schools that partner with us via your unique affiliate link',
	},
];

const Policies = () => {
	return (
		<InViewAnimateTop>
			<div className='flex flex-col items-center container xl:px-[8em] px-7'>
				<h2 className='text-flipDark font-semibold mb-8 text-3xl lg:text-4xl'>
					Policies
				</h2>
				<div className='flex flex-col md:flex-row gap-9 w-full justify-between'>
					{policies.map((item) => (
						<div key={item.id} className='flex-1 flex gap-4'>
							<div className='bg-secondaryBlue text-lg lg:text-4xl rounded-full text-white lg:w-14 lg:h-14 w-8 h-8 flex justify-center items-center'>
								{item.id}
							</div>
							<p className='lg:max-w-[289px] text-xs lg:text-base flex-1'>
								{item.content}
							</p>
						</div>
					))}
				</div>
			</div>
		</InViewAnimateTop>
	);
};

export default Policies;
