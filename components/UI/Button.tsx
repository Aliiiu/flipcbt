import Link, { LinkProps } from 'next/link';
import { FC, useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

interface IButton {
	href: LinkProps['href'];
	content: string;
	bgColor: string;
	hover?: string;
	pop?: boolean;
}

const Button: FC<IButton> = ({ href, content, bgColor, hover, pop }) => {
	const [mounted, setMounted] = useState<boolean>(false);
	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);
	return (
		<>
			{pop ? (
				<div
					className={`py-3 px-5 rounded-2xl ${bgColor} text-white ${
						hover
							? hover
							: ' hover:bg-transparent hover:border-2 hover:text-primary transition-colors ease-in-out duration-500 hover:border-[#0075FF]'
					}`}
				>
					{mounted && (
						<PopupButton
							url='https://calendly.com/flipcbt/online-demo'
							/*
							 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
							 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
							 */
							rootElement={
								document.getElementById('overlay-root') as HTMLElement
							}
							text={content}
						/>
					)}
				</div>
			) : (
				<Link href={href}>
					<a
						className={`py-3 px-5 rounded-2xl ${bgColor} text-white ${
							hover
								? hover
								: ' hover:bg-transparent hover:border-2 hover:text-primary transition-colors ease-in-out duration-500 hover:border-[#0075FF]'
						}`}
					>
						{content}
					</a>
				</Link>
			)}
		</>
	);
};

export default Button;
