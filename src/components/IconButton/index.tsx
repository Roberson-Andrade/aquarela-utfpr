import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IconButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export function IconButton({ children, ...props }: IconButtonProperties) {
	return (
		<button
			className="hover:bg-gray-300 active:bg-gray-400 p-1 transition-colors rounded-full"
			{...props}
		>
			{children}
		</button>
	);
}
