import { useContext } from 'react';
import { GameContext } from './context';

export function useGameContext() {
	const value = useContext(GameContext);

	if (!value) {
		throw new Error('useGameContext should be called within GameContextProvider');
	}

	return value;
}
