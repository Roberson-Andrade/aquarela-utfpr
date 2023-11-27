import { GameStage } from '../../@types';
import { useGameContext } from '../../contexts/GameContext/useGameContext';
import { GameDone } from './components/GameDone';
import { InGameHeader } from './components/InGameHeader';
import { StageOne } from './components/Stages/StageOne';
import { StageTwo } from './components/Stages/StageTwo';

export function InGame() {
	const { currentGameInfo } = useGameContext();

	const stages = {
		[GameStage.STAGE_ONE]: StageOne,
		[GameStage.STAGE_TWO]: StageTwo,
		[GameStage.DONE]: GameDone,
	};

	const SelectedStage = stages[currentGameInfo.stage];

	return (
		<main className="bg-primary-50 h-screen w-screen flex flex-col">
			{currentGameInfo.stage !== GameStage.DONE && <InGameHeader />}
			<SelectedStage />
		</main>
	);
}
