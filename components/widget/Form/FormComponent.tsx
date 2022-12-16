import React from 'react';

export const Input = React.forwardRef<
	HTMLInputElement,
	{
		label: string;
		register: any;
		required: boolean;
		error: any;
		pattern?: any;
		type: string;
		placeholder?: string;
	}
>(({ label, register, required, pattern, error, type, placeholder }, ref) => (
	<div className='mb-[25px]'>
		<input
			type={type}
			ref={ref}
			placeholder={placeholder}
			className='px-4 py-4  appearance-none text-base placeholder:text-[#06042C] outline-none focus:border-blue-400 input_border w-full shadow leading-tight'
			{...register(label, { required, pattern: pattern })}
		/>
		{error && (
			<h5 className='text-red-500 text-xs'>
				Enter {label ? `your ${label}` : 'this Field'}
			</h5>
		)}
	</div>
));

// you can use React.forwardRef to pass the ref too
export const Select = React.forwardRef<
	HTMLSelectElement,
	{ name: string; label: string; onChange: () => void; onBlur: () => void }
>(({ onChange, onBlur, name, label }, ref) => (
	<>
		<label>{label}</label>
		<select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
			<option value='20'>20</option>
			<option value='30'>30</option>
		</select>
	</>
));

Select.displayName = 'CustomSelect';
Input.displayName = 'CustomInput';
