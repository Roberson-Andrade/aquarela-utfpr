import { ReactNode, useMemo, useState } from 'react';
import { GameStep } from '../../@types';
import { GameContext, GameContextProps } from './context';

interface GameContextProviderProps {
	children: ReactNode;
}

export function GameContextProvider({ children }: GameContextProviderProps) {
	const [step, setStep] = useState<GameStep>(GameStep.HOME);

	function changeStep(step: GameStep) {
		setStep(step);
	}

	const value = useMemo<GameContextProps>(() => ({ changeStep, step }), [step]);

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
