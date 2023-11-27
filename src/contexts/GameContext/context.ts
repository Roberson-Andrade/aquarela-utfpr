import { createContext } from 'react';
import { GameAnswerOptions, GameStage } from '../../@types';
export interface CurrentGameInfo {
	userName: string;
	stage: GameStage;
	round: number;
}

export interface GameHistory {
	stage: GameStage;
	round: number;
	correctAnswer: GameAnswerOptions;
	wrongAttempts: GameAnswerOptions[];
}
export interface GameContextProps {
	history: GameHistory[];
	currentGameInfo: CurrentGameInfo;
	addHistory: (newHistory: GameHistory) => void;
	changeStage: (step: GameStage) => void;
	goToNextRound: (round: number) => number | undefined;
	changeGameStage: (stage: GameStage) => void;
}

export const GameContext = createContext<GameContextProps | undefined>(undefined);
