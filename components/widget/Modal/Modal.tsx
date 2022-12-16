import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ModalHeader } from './modal.style';

// import { AppButton } from "../Button/AppButton";
// import { ExclamationIcon } from "@heroicons/react/outline";

const AppModal = ({ ...props }) => {
	const cancelButtonRef = useRef(null);

	return (
		<Transition.Root show={props.open} as={Fragment}>
			<Dialog
				as='div'
				className={`fixed ${props.z_index || 'z-40'} inset-0 overflow-y-auto`}
				initialFocus={cancelButtonRef}
				onClose={props.onClose}
			>
				<div className='flex items-center justify-center min-h-screen sm:block sm:p-0'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className='hidden sm:inline-block sm:align-middle sm:h-screen'
						aria-hidden='true'
					>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						enterTo='opacity-100 translate-y-0 sm:scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 translate-y-0 sm:scale-100'
						leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
					>
						<div
							onClick={props.onClose}
							className='inline-block align-top overflow-hidden transform transition-all sm:my-8 sm:align-middle'
						>
							{props.content}
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default AppModal;
