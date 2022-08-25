import Link, { LinkProps } from 'next/link';
import { FC } from 'react';

interface IButton {
	href: LinkProps['href'];
	content: String;
	bgColor: String;
}

const Button: FC<IButton> = ({ href, content, bgColor }) => {
	return (
		<Link href={href}>
			<a
				className={`py-[10px] px-[20px] md:px-[40px] md:py-[16px] text-[16px] transition-{background-color, transform} duration-500 rounded-[15px] ${bgColor} hover:opacity-60 active:translate-y-[10%] text-white`}
			>
				{content}
			</a>
		</Link>
	);
};

export default Button;
