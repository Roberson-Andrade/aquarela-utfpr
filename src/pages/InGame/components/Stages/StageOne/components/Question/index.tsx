import { GameAnswerOptions, GameStage } from '../../../../../../../@types';
import { Button } from '../../../../../../../components/Button';
import { ALPHABET, ALTERNATIVE_LABEL } from '../../../../../../../constants';
import { useGameContext } from '../../../../../../../contexts/GameContext/useGameContext';
import { stageOneQuestion } from '../../styles';
import { AlternativeButton } from '../AlternativeButton';

interface QuestionProps {
	gotItRight: boolean;
	wrongAttempts: GameAnswerOptions[];
	handleChooseAlternative: (option: GameAnswerOptions) => void;
}

export function Question({ gotItRight, wrongAttempts, handleChooseAlternative }: QuestionProps) {
	const { currentGameInfo, goToNextRound } = useGameContext();

	return (
		<section className="flex w-full grow flex-col gap-[20%]">
			<div className={stageOneQuestion({ answer: currentGameInfo.correctAnswer })}>
				QUAL O NOME DESSA COR?
			</div>

			<div className="mx-auto grid grid-cols-2 w-full max-w-2xl gap-12 text-3xl">
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
						isRightAnswer={currentGameInfo.correctAnswer === option}
					>
						{ALPHABET[index]}) {ALTERNATIVE_LABEL[option]}
					</AlternativeButton>
				))}
			</div>

			{gotItRight && (
				<Button
					className="w-fit mx-auto"
					onClick={() => goToNextRound(GameStage.STAGE_ONE, currentGameInfo.round)}
				>
					PRÓXIMA RODADA
				</Button>
			)}
		</section>
	);
}
