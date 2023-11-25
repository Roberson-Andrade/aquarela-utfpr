import { SpeakerHigh } from '@phosphor-icons/react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconButton } from '../../../../../../../components/IconButton';
import { alternative } from './styles';
import { VariantProps } from 'tailwind-variants';

interface AlternativeButtonProperties
	extends VariantProps<typeof alternative>,
		ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	hasUserMistaken?: boolean;
}

export function AlternativeButton({
	children,
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
				{children}
			</button>

			<IconButton>
				<SpeakerHigh />
			</IconButton>
		</div>
	);
}
