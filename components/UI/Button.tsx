import Link, { LinkProps } from 'next/link';
import { FC } from 'react';

interface IButton {
	href: LinkProps['href'];
	content: String;
	bgColor: String;
	hover?: string;
	isHover?: boolean;
}

const Button: FC<IButton> = ({ href, content, bgColor, hover, isHover }) => {
	return (
		<Link href={href}>
			<a
				className={`py-[10px] px-[20px] md:px-[40px] md:py-[16px] text-[16px] rounded-[15px] ${bgColor} text-white hover:bg-transparent ${
					hover
						? hover
						: 'hover:border-2 hover:text-primary transition-colors ease-in-out duration-500 hover:border-[#0075FF]'
				}`}
			>
				{content}
			</a>
		</Link>
	);
};

export default Button;
