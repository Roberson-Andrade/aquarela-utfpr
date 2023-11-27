import { tv } from 'tailwind-variants';

export const button = tv({
	base: 'px-6 pb-2 bg-primary-400 border-2 border-primary-500 border-solid rounded-2xl text-3xl  transition-colors',
	variants: {
		variant: {
			primary:
				'text-white [-webkit-text-stroke:1px_#0eaae9] active:bg-primary-600 active:border-primary-600 hover:bg-primary-500',
			secondary: 'bg-transparent text-primary-500 hover:bg-primary-100 active:bg-primary-200',
		},
	},
});
