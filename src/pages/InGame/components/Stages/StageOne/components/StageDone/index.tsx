import { PartyEmoji } from '../../../../../../../assets/icons/partyEmoji';
import { Button } from '../../../../../../../components/Button';

export function StageDone() {
	return (
		<div className="w-full h-full flex flex-col items-center justify-center gap-[10%] -translate-y-[10%]">
			<div className="flex flex-col items-center gap-12">
				<PartyEmoji />
				<p className="text-4xl">Você completou a primeira fase!</p>
			</div>

			<Button>IR PARA SEGUNDA FASE</Button>
		</div>
	);
}
