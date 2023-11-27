import { ReactNode, useCallback, useMemo, useState } from 'react';
import { GameStage } from '../../@types';
import { CurrentGameInfo, GameContext, GameContextProps, GameHistory } from './context';
import { MAX_ROUNDS } from '../../constants';

interface GameContextProviderProps {
	children: ReactNode;
}

export function GameContextProvider({ children }: GameContextProviderProps) {
	const [currentGameInfo, setCurrentGameInfo] = useState<CurrentGameInfo>({
		stage: GameStage.STAGE_ONE,
		round: 1,
	});
	const [history, setHistory] = useState<GameHistory[]>([]);

	function changeStage(stage: GameStage) {
		setCurrentGameInfo((prevState) => ({ ...prevState, stage: stage, round: 1 }));
	}

	function addHistory(newHistory: GameHistory) {
		setHistory((prevHistory) => [...prevHistory, newHistory]);
	}

	const goToNextRound = useCallback((round: number): number | undefined => {
		if (round < MAX_ROUNDS) {
			setCurrentGameInfo((prevState) => ({
				...prevState,
				round: round + 1,
			}));
			return round + 1;
		}
	}, []);

	function changeGameStage(stage: GameStage) {
		setCurrentGameInfo({
			round: 1,
			stage,
		});
	}

	const value = useMemo<GameContextProps>(
		() => ({ changeStage, currentGameInfo, history, changeGameStage, goToNextRound, addHistory }),
		[currentGameInfo, goToNextRound, history],
	);

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
