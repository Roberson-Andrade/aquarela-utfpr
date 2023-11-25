import { useEffect, useState } from 'react';
import { GameAnswerOptions, GameStage } from '../../../../../@types';
import { useGameContext } from '../../../../../contexts/GameContext/useGameContext';
import { Question } from './components/Question';
import { StageDone } from './components/StageDone';
import { MAX_ROUNDS } from '../../../../../constants';

export function StageOne() {
	const { currentGameInfo, history, addHistory } = useGameContext();

	const [gotItRight, setGotItRight] = useState(false);
	const [wrongAttempts, setWrongAttempts] = useState<GameAnswerOptions[]>([]);

	function cleanUpLocalState() {
		setGotItRight(false);
		setWrongAttempts([]);
	}

	useEffect(() => {
		cleanUpLocalState();
	}, [currentGameInfo]);

	function handleChooseAlternative(option: GameAnswerOptions) {
		if (option === currentGameInfo.correctAnswer) {
			setGotItRight(true);
			addHistory({
				round: currentGameInfo.round,
				stage: currentGameInfo.stage,
				wrongAttempts,
				correctAnswer: currentGameInfo.correctAnswer,
			});
			return;
		}

		setWrongAttempts([...wrongAttempts, option]);
	}

	const stageOneHistory = history.filter(
		(historyItem) => historyItem.stage === GameStage.STAGE_ONE,
	);

	return stageOneHistory.length === MAX_ROUNDS ? (
		<StageDone />
	) : (
		<Question
			gotItRight={gotItRight}
			wrongAttempts={wrongAttempts}
			handleChooseAlternative={handleChooseAlternative}
		/>
	);
}
