import { IconProps, SpeakerHigh } from '@phosphor-icons/react';
import { IconButton } from '../IconButton';
import { useEffect, useState } from 'react';

interface PlayAudioTextProperties {
	text: string;
	svgProps?: IconProps;
	className?: string;
}

export function PlayAudioText({ text, svgProps, className }: PlayAudioTextProperties) {
	const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

	useEffect(() => {
		const synth = window.speechSynthesis;
		const u = new SpeechSynthesisUtterance(text);

		u.lang = 'pt-BR';

		setUtterance(u);

		return () => {
			synth.cancel();
		};
	}, [text]);

	const handlePlay = () => {
		const synth = window.speechSynthesis;

		if (!utterance) {
			return;
		}

		synth.speak(utterance);
	};

	return (
		<IconButton
			onClick={() => handlePlay()}
			className={`hover:bg-gray-300 rounded-full active:bg-gray-400 transition-colors ${
				className ?? ''
			}`}
		>
			<SpeakerHigh {...svgProps} />
		</IconButton>
	);
}
