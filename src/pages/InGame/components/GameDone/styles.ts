import { tv } from 'tailwind-variants';
import { GameAnswerOptions } from '../../../../@types';

export const circleColor = tv({
	base: 'w-8 h-8 rounded-full bg-[red] block',
	variants: {
		answer: {
			[GameAnswerOptions.BLUE]: 'bg-[blue]',
			[GameAnswerOptions.RED]: 'bg-[red]',
			[GameAnswerOptions.GREEN]: 'bg-[green]',
			[GameAnswerOptions.YELLOW]: 'bg-[yellow]',
		},
	},
});
