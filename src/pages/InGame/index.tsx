import { GameStage } from '../../@types';
import { useGameContext } from '../../contexts/GameContext/useGameContext';
import { InGameHeader } from './components/InGameHeader';
import { StageOne } from './components/Stages/StageOne';

export function InGame() {
	const { currentGameInfo } = useGameContext();

	const stages = {
		[GameStage.STAGE_ONE]: StageOne,
	};

	const SelectedStage = stages[currentGameInfo.stage];

	return (
		<main className="bg-primary-50 h-screen w-screen flex flex-col">
			<InGameHeader />
			<SelectedStage />
		</main>
	);
}
