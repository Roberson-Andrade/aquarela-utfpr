import { ReactNode } from 'react';

interface IconButtonProperties {
	children: ReactNode;
}

export function IconButton({ children }: IconButtonProperties) {
	return (
		<button className="hover:bg-gray-300 active:bg-gray-400 p-1 transition-colors rounded-full">
			{children}
		</button>
	);
}
