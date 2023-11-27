import { tv } from 'tailwind-variants';
import { GameAnswerOptions } from '../../../../../../../@types';

export const alternative = tv({
	slots: {
		container: 'flex items-center gap-2',
		button:
			'hover:text-primary-900 transition-colors disabled:text-gray-500 disabled:line-through disabled:cursor-not-allowed',
	},
	variants: {
		gotItRight: {
			true: '',
		},
		isRightAnswer: {
			true: '',
		},
		colorValue: {
			[GameAnswerOptions.BLUE]: '',
			[GameAnswerOptions.RED]: '',
			[GameAnswerOptions.GREEN]: '',
			[GameAnswerOptions.YELLOW]: '',
		},
	},
	compoundVariants: [
		{
			gotItRight: true,
			colorValue: [GameAnswerOptions.BLUE],
			isRightAnswer: true,
			class: { button: 'text-[blue] hover:text-[blue]' },
		},
		{
			gotItRight: true,
			colorValue: [GameAnswerOptions.YELLOW],
			isRightAnswer: true,
			class: { button: 'text-[yellow] hover:text-[yellow]' },
		},
		{
			gotItRight: true,
			colorValue: [GameAnswerOptions.RED],
			isRightAnswer: true,
			class: { button: 'text-[red] hover:text-[red]' },
		},
		{
			gotItRight: true,
			colorValue: [GameAnswerOptions.GREEN],
			isRightAnswer: true,
			class: { button: 'text-[green] hover:text-[green]' },
		},
	],
});
