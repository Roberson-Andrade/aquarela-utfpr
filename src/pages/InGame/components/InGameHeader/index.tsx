import { CaretRight, House } from '@phosphor-icons/react';
import { IconButton } from '../../../../components/IconButton';
import { useGameContext } from '../../../../contexts/GameContext/useGameContext';
import { GAME_STAGE_NUMBER } from '../../../../constants';

export function InGameHeader() {
	const { currentGameInfo } = useGameContext();

	return (
		<header className="w-full flex items-center justify-between p-6 ">
			<div className="flex items-center text-2xl">
				<p className="mb-1">FASE {GAME_STAGE_NUMBER[currentGameInfo.stage]}</p> <CaretRight />{' '}
				<p className="mb-1">RODADA {currentGameInfo.round}</p>
			</div>

			<IconButton>
				<House size={28} />
			</IconButton>
		</header>
	);
}
