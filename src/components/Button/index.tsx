import { ButtonHTMLAttributes } from 'react';

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProperties) {
	return (
		<button
			className="px-6 pb-2 bg-primary-400 border-2 border-primary-500 border-solid rounded-2xl text-white [-webkit-text-stroke:1px_#0eaae9] text-3xl hover:bg-primary-500 transition-colors active:bg-primary-600 active:border-primary-600"
			{...props}
		>
			{children}
		</button>
	);
}
