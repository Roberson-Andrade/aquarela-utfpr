import { useNavigate } from 'react-router-dom';
import { GameAnswerOptions } from '../../../../@types';
import { PartyingFace } from '../../../../assets/icons/partyingFace';
import { Button } from '../../../../components/Button';
import { ALTERNATIVE_LABEL } from '../../../../constants';
import { useGameContext } from '../../../../contexts/GameContext/useGameContext';
import { circleColor } from './styles';
import { ROUTES } from '../../../../utils/router';

export function GameDone() {
	const { history } = useGameContext();
	const navigate = useNavigate();

	return (
		<section className="h-full w-full flex flex-col gap-12 p-8 items-center justify-center">
			<div className="flex flex-col items-center">
				<PartyingFace />
				<h1 className="text-3xl">Você completou o jogo!</h1>
			</div>

			<div className=" w-full relative border-2 border-primary-950 rounded-xl flex flex-col p-12 max-w-4xl">
				<h2 className="text-lg absolute -translate-y-full top-0 left-4">RELATÓRIO</h2>

				<ul className="flex flex-col gap-4">
					{Object.values(GameAnswerOptions).map((option) => (
						<li key={option} className="w-full flex items-center justify-between">
							<div className="flex items-center gap-2">
								<span className={circleColor({ answer: option })} />
								<p>{ALTERNATIVE_LABEL[option]}</p>
							</div>

							<p>
								{history.reduce((acc, item) => {
									return acc + item.wrongAttempts.filter((wrong) => wrong === option).length;
								}, 0)}{' '}
								ERROS
							</p>
						</li>
					))}
				</ul>
			</div>

			<div className="flex flex-col gap-4">
				<Button onClick={() => navigate(ROUTES.HOME)}>MENU PRINCIPAL</Button>
			</div>
		</section>
	);
}
