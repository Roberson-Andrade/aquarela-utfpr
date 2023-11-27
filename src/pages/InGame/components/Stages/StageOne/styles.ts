import { tv } from 'tailwind-variants';
import { GameAnswerOptions } from '../../../../../@types';

export const stageOneQuestion = tv({
	base: 'flex w-full justify-center py-16 text-white text-3xl text-center',
	variants: {
		answer: {
			[GameAnswerOptions.BLUE]: 'bg-[blue]',
			[GameAnswerOptions.RED]: 'bg-[red]',
			[GameAnswerOptions.GREEN]: 'bg-[green]',
			[GameAnswerOptions.YELLOW]: 'bg-[yellow] text-primary-950',
		},
	},
});
