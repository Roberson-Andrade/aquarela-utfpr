import { ButtonHTMLAttributes } from 'react';
import { alternative } from './styles';
import { VariantProps } from 'tailwind-variants';
import { PlayAudioText } from '../../../../../../../components/PlayAudioText';

interface AlternativeButtonProperties
	extends VariantProps<typeof alternative>,
		ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	hasUserMistaken?: boolean;
}

export function AlternativeButton({
	text,
	hasUserMistaken,
	isRightAnswer,
	colorValue,
	gotItRight,
	...props
}: AlternativeButtonProperties) {
	const { button, container } = alternative();

	return (
		<div className={container()}>
			<button
				className={button({ colorValue, isRightAnswer, gotItRight })}
				disabled={hasUserMistaken}
				{...props}
			>
				{text}
			</button>

			<PlayAudioText text={text} />
		</div>
	);
}
