import { createContext } from 'react';
import { GameAnswerOptions, GameStage } from '../../@types';
export interface CurrentGameInfo {
	stage: GameStage;
	round: number;
	correctAnswer: GameAnswerOptions;
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
	goToNextRound: (stage: GameStage, round: number) => void;
}

export const GameContext = createContext<GameContextProps | undefined>(undefined);
