import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
	onClick: any;
}
interface MProps {
	onClick: any;
	selector: any;
}

// const BackdropModal = () => {
// 	return <div className='backdrop'></div>;
// };

const OverLayModal = ({ onClick }: Props) => {
	return (
		<Fragment>
			<div className='backdrop' onClick={onClick} />
			<div className='flex bg-white modal flex-col px-[30px] py-[60px] md:px-[40px] md:py-[80px] gap-y-[10px] justify-center items-center'>
				<Image
					src={'../../images/successfulLogin.png'}
					alt='success check'
					width={110}
					height='110px'
				/>
				<h2 className='text-[#333333] font-semibold text-[20px] text-center '>
					You Have Successfully Submitted Your Data
				</h2>
				<p className='text-[14px] text-center text-[#4F4F4F]'>
					We will informed you about the next information, please sit tight.
				</p>
			</div>
		</Fragment>
	);
};

const Modal = ({ onClick, selector }: MProps) => {
	const [mounted, setMounted] = useState<boolean>(false);
	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, [selector]);
	return (
		<Fragment>
			{/* {mounted
				? createPortal(
						<BackdropModal />,
						document.getElementById(Bselector) as HTMLElement
				  )
				: null} */}
			{mounted
				? createPortal(
						<OverLayModal onClick={onClick} />,
						document.getElementById(selector) as HTMLElement
				  )
				: null}
		</Fragment>
	);
};

export default Modal;
