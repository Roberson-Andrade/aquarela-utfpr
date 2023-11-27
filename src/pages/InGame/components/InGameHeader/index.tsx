import { CaretRight, House } from '@phosphor-icons/react';
import { IconButton } from '../../../../components/IconButton';
import { useGameContext } from '../../../../contexts/GameContext/useGameContext';
import { GAME_STAGE_NUMBER } from '../../../../constants';
import { useState } from 'react';
import { Modal } from '../../../../components/Modal';
import { Button } from '../../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../utils/router';

export function InGameHeader() {
	const { currentGameInfo } = useGameContext();
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<>
			<header className="w-full flex items-center justify-between p-6 ">
				<div className="flex items-center text-2xl">
					<p className="mb-1">FASE {GAME_STAGE_NUMBER[currentGameInfo.stage]}</p> <CaretRight />{' '}
					<p className="mb-1">RODADA {currentGameInfo.round}</p>
				</div>

				<IconButton onClick={() => setOpen(true)}>
					<House size={28} />
				</IconButton>
			</header>
			<Modal
				open={open}
				title="IR PARA O MENU"
				content="SEU PROGRESSO SERÁ PERDIDO. TEM CERTEZA QUE DESEJA SAIR?"
				actionButtons={
					<>
						<Button variant="secondary" onClick={() => setOpen(false)}>
							CANCELAR
						</Button>{' '}
						<Button onClick={() => navigate(ROUTES.HOME)}>SAIR</Button>
					</>
				}
			/>
		</>
	);
}
