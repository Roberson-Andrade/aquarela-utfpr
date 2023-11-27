import { useState } from 'react';
import { GameAnswerOptions, GameStage } from '../../../../../@types';
import { useGameContext } from '../../../../../contexts/GameContext/useGameContext';
import { Question } from './components/Question';
import { StageDone } from './components/StageDone';
import { MAX_ROUNDS } from '../../../../../constants';
import { getNoNRepeatedRandomAnswer } from '../../../../../utils/getRandomOption';

export function StageOne() {
	const { currentGameInfo, history, addHistory } = useGameContext();

	const [gotItRight, setGotItRight] = useState(false);
	const [wrongAttempts, setWrongAttempts] = useState<GameAnswerOptions[]>([]);
	const [correctAnswer, setCorrectAnswer] = useState<GameAnswerOptions>(() =>
		getNoNRepeatedRandomAnswer([]),
	);

	function cleanUpLocalState() {
		setGotItRight(false);
		setWrongAttempts([]);
	}

	function handleChooseAlternative(option: GameAnswerOptions) {
		if (option === correctAnswer) {
			setGotItRight(true);
			addHistory({
				round: currentGameInfo.round,
				stage: currentGameInfo.stage,
				wrongAttempts,
				correctAnswer: correctAnswer,
			});
			return;
		}

		setWrongAttempts([...wrongAttempts, option]);
	}

	function handleNextRound() {
		const currentStageHistory = history.filter(
			(historyItem) => historyItem.stage === GameStage.STAGE_ONE,
		);
		const usedAnswers = currentStageHistory.map((historyItem) => historyItem.correctAnswer);

		setCorrectAnswer(() => getNoNRepeatedRandomAnswer(usedAnswers));
		cleanUpLocalState();
	}

	const stageOneHistory = history.filter(
		(historyItem) => historyItem.stage === GameStage.STAGE_ONE,
	);

	return stageOneHistory.length === MAX_ROUNDS ? (
		<StageDone />
	) : (
		<Question
			gotItRight={gotItRight}
			correctAnswer={correctAnswer}
			wrongAttempts={wrongAttempts}
			handleNextRound={handleNextRound}
			handleChooseAlternative={handleChooseAlternative}
		/>
	);
}
