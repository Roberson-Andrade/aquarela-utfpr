import { ReactNode, useCallback, useMemo, useState } from 'react';
import { GameStage } from '../../@types';
import { CurrentGameInfo, GameContext, GameContextProps, GameHistory } from './context';
import { getNoNRepeatedRandomAnswer } from '../../utils/getRandomOption';
import { MAX_ROUNDS } from '../../constants';

interface GameContextProviderProps {
	children: ReactNode;
}

export function GameContextProvider({ children }: GameContextProviderProps) {
	const [currentGameInfo, setCurrentGameInfo] = useState<CurrentGameInfo>({
		stage: GameStage.STAGE_ONE,
		round: 1,
		correctAnswer: getNoNRepeatedRandomAnswer([]),
	});
	const [history, setHistory] = useState<GameHistory[]>([]);

	function changeStage(stage: GameStage) {
		setCurrentGameInfo((prevState) => ({ ...prevState, stage: stage }));
	}

	function addHistory(newHistory: GameHistory) {
		setHistory((prevHistory) => [...prevHistory, newHistory]);
	}

	const goToNextRound = useCallback(
		(stage: GameStage, round: number) => {
			if (round < MAX_ROUNDS) {
				const currentStageHistory = history.filter((historyItem) => historyItem.stage === stage);
				const usedAnwsers = currentStageHistory.map((historyItem) => historyItem.correctAnswer);

				setCurrentGameInfo((prevState) => ({
					...prevState,
					round: round + 1,
					correctAnswer: getNoNRepeatedRandomAnswer(usedAnwsers),
				}));
			}
		},
		[history],
	);

	const value = useMemo<GameContextProps>(
		() => ({ changeStage, currentGameInfo, history, goToNextRound, addHistory }),
		[currentGameInfo, goToNextRound, history],
	);

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
