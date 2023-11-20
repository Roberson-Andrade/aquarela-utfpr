import { ButtonHTMLAttributes } from 'react';
import { button } from './styles';
import { VariantProps } from 'tailwind-variants';

interface ButtonProperties
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof button> {}

export function Button({ children, variant = 'primary', ...props }: ButtonProperties) {
	return (
		<button className={button({ variant })} {...props}>
			{children}
		</button>
	);
}
