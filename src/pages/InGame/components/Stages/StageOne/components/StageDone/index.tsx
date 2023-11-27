import { GameStage } from '../../../../../../../@types';
import { PartyEmoji } from '../../../../../../../assets/icons/partyEmoji';
import { Button } from '../../../../../../../components/Button';
import { useGameContext } from '../../../../../../../contexts/GameContext/useGameContext';

export function StageDone() {
	const { changeStage } = useGameContext();
	return (
		<div className="w-full h-full flex flex-col items-center justify-center gap-[10%] -translate-y-[10%]">
			<div className="flex flex-col items-center gap-12">
				<PartyEmoji />
				<p className="text-4xl">Você completou a primeira fase!</p>
			</div>

			<Button onClick={() => changeStage(GameStage.STAGE_TWO)}>IR PARA SEGUNDA FASE</Button>
		</div>
	);
}
