import { ArrowRight } from '@phosphor-icons/react';
import { STAGE_TWO_OPTIONS } from '../../../../../constants';
import { Button } from '../../../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../../utils/router';
import { useGameContext } from '../../../../../contexts/GameContext/useGameContext';
import { GameStage } from '../../../../../@types';
import { PlayAudioText } from '../../../../../components/PlayAudioText';

export function Tutorial() {
	const navigate = useNavigate();
	const { changeStage } = useGameContext();

	return (
		<section className="w-full h-full flex flex-col items-center gap-12">
			<div className="bg-primary-100 border border-primary-400 rounded-lg p-4 w-full max-w-5xl text-3xl text-justify">
				AS CORES SÃO MUITO IMPORTANTES PARA DIFERENCIAR DIVERSOS OBJETOS. VAMOS CONHECER AS CORES E
				SEUS OBJETOS QUE UTILIZAREMOS NO JOGO:
				<PlayAudioText
					className="translate-y-2 translate-x-2"
					text="AS CORES SÃO MUITO IMPORTANTES PARA DIFERENCIAR DIVERSOS OBJETOS. VAMOS CONHECER AS CORES E SEUS OBJETOS QUE UTILIZAREMOS NO JOGO:"
				/>
			</div>

			<ul className="flex flex-col gap-4 w-full items-center">
				<li className="bg-primary-100 border border-primary-400 rounded-lg p-4 w-full max-w-5xl">
					<div className="flex items-center gap-4">
						<p className="text-[red] text-3xl">VERMELHO</p>
						<ArrowRight size={24} className="mt-2" />
						{STAGE_TWO_OPTIONS.RED.map((src) => (
							<img className="w-12 h-12" src={`/${src}.png`} />
						))}
					</div>
				</li>
				<li className="bg-primary-100 border border-primary-400 rounded-lg p-4 w-full max-w-5xl">
					<div className="flex items-center gap-4">
						<p className="text-[yellow] text-3xl">AMARELO</p>
						<ArrowRight size={24} className="mt-2" />
						{STAGE_TWO_OPTIONS.YELLOW.map((src) => (
							<img className="w-12 h-12" src={`/${src}.png`} />
						))}
					</div>
				</li>
				<li className="bg-primary-100 border border-primary-400 rounded-lg p-4 w-full max-w-5xl">
					<div className="flex items-center gap-4">
						<p className="text-[green] text-3xl">VERDE</p>
						<ArrowRight size={24} className="mt-2" />
						{STAGE_TWO_OPTIONS.GREEN.map((src) => (
							<img className="w-12 h-12" src={`/${src}.png`} />
						))}
					</div>
				</li>
				<li className="bg-primary-100 border border-primary-400 rounded-lg p-4 w-full max-w-5xl">
					<div className="flex items-center gap-4">
						<p className="text-[blue] text-3xl">AZUL</p>
						<ArrowRight size={24} className="mt-2" />
						{STAGE_TWO_OPTIONS.BLUE.map((src) => (
							<img className="w-12 h-12" src={`/${src}.png`} />
						))}
					</div>
				</li>
			</ul>

			<div className="flex  items-center gap-16">
				<Button variant="secondary" onClick={() => navigate(ROUTES.HOME)}>
					VOLTAR
				</Button>
				<Button onClick={() => changeStage(GameStage.STAGE_ONE)}>COMEÇAR</Button>
			</div>
		</section>
	);
}
