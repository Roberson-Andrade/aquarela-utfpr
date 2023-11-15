import { createContext } from 'react';
import { GameStep } from '../../@types';

export interface GameContextProps {
	step: GameStep;
	changeStep: (step: GameStep) => void;
}

export const GameContext = createContext<GameContextProps | undefined>(undefined);
