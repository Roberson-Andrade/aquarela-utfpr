import { CaretRight, House } from '@phosphor-icons/react';
import { IconButton } from '../../../../components/IconButton';

export function InGameHeader() {
	return (
		<div className="w-full flex items-center justify-between p-6 ">
			<div className="flex items-center text-2xl">
				<p className="mb-1">FASE 1</p> <CaretRight /> <p className="mb-1">RODADA 1</p>
			</div>

			<IconButton>
				<House size={28} />
			</IconButton>
		</div>
	);
}
