import Link, { LinkProps } from 'next/link';
import { FC } from 'react';

interface IButton {
	href: LinkProps['href'];
	content: String;
	bgColor: String;
}

const Button: FC<IButton> = ({ href, content, bgColor }) => {
	return (
		<Link href={href} passHref>
			<button
				className={`py-[10px] px-[20px] md:px-[40px] md:py-[16px] text-[16px] rounded-[15px] ${bgColor} text-white`}
			>
				{content}
			</button>
		</Link>
	);
};

export default Button;
