import { GameAnswerOptions } from '../../../../../../../@types';
import { Button } from '../../../../../../../components/Button';
import { PlayAudioText } from '../../../../../../../components/PlayAudioText';
import { ALPHABET, ALTERNATIVE_LABEL } from '../../../../../../../constants';
import { useGameContext } from '../../../../../../../contexts/GameContext/useGameContext';
import { stageOneQuestion } from '../../styles';
import { AlternativeButton } from '../AlternativeButton';

interface QuestionProps {
	gotItRight: boolean;
	correctAnswer: GameAnswerOptions;
	wrongAttempts: GameAnswerOptions[];
	handleNextRound(): void;
	handleChooseAlternative: (option: GameAnswerOptions) => void;
}

export function Question({
	gotItRight,
	correctAnswer,
	wrongAttempts,
	handleNextRound,
	handleChooseAlternative,
}: QuestionProps) {
	const { currentGameInfo, goToNextRound } = useGameContext();

	return (
		<section className="flex w-full grow flex-col gap-[10%]">
			<div className={stageOneQuestion({ answer: correctAnswer })}>
				QUAL O NOME DESSA COR?{' '}
				<PlayAudioText
					text="QUAL O NOME DESSA COR?"
					svgProps={{ fill: correctAnswer === GameAnswerOptions.YELLOW ? 'black' : 'white' }}
				/>
			</div>

			<div
				className={`text-3xl mx-auto flex gap-4 items-center ${
					gotItRight ? 'visible' : 'invisible'
				}`}
			>
				VOCÊ ACERTOU!
				<PlayAudioText text="VOCÊ ACERTOU!" />
			</div>

			<div className="mx-auto grid grid-cols-2 w-full max-w-[36.5rem] gap-12 text-3xl">
				{Object.values(GameAnswerOptions).map((option, index) => (
					<AlternativeButton
						key={option}
						colorValue={option}
						gotItRight={gotItRight}
						onClick={() => {
							if (!gotItRight) {
								handleChooseAlternative(option);
							}
						}}
						hasUserMistaken={wrongAttempts.includes(option)}
						isRightAnswer={correctAnswer === option}
						text={`${ALPHABET[index]}) ${ALTERNATIVE_LABEL[option]}`}
					/>
				))}
			</div>

			{gotItRight && (
				<Button
					className="w-fit mx-auto"
					onClick={() => {
						goToNextRound(currentGameInfo.round);
						handleNextRound();
					}}
				>
					PRÓXIMA RODADA
				</Button>
			)}
		</section>
	);
}
