import { useNavigate } from 'react-router-dom';
import { GameAnswerOptions, GameReport } from '../../../../@types';
import { PartyingFace } from '../../../../assets/icons/partyingFace';
import { Button } from '../../../../components/Button';
import { ALTERNATIVE_LABEL } from '../../../../constants';
import { useGameContext } from '../../../../contexts/GameContext/useGameContext';
import { circleColor } from './styles';
import { ROUTES } from '../../../../utils/router';
import { useLayoutEffect, useState } from 'react';

export function GameDone() {
	const { history, currentGameInfo } = useGameContext();
	const navigate = useNavigate();
	const [gameReport, setGameReport] = useState<GameReport>();

	useLayoutEffect(() => {
		const reportData: GameReport = {
			name: currentGameInfo.userName,
			date: new Date().toISOString(),
			[GameAnswerOptions.BLUE]: 0,
			[GameAnswerOptions.RED]: 0,
			[GameAnswerOptions.GREEN]: 0,
			[GameAnswerOptions.YELLOW]: 0,
		};

		for (const item of history) {
			for (const attempts of item.wrongAttempts) {
				reportData[attempts] += 1;
			}
		}

		setGameReport(reportData);

		const gameReport = localStorage.getItem('game-history');

		if (gameReport) {
			const report = JSON.parse(gameReport) as GameReport[];

			report.push(reportData);
			localStorage.setItem('game-history', JSON.stringify(report));
			return;
		}

		localStorage.setItem('game-history', JSON.stringify([reportData]));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className="h-full w-full flex flex-col gap-12 p-8 items-center justify-center">
			<div className="flex flex-col items-center">
				<PartyingFace />
				<h1 className="text-3xl">VOCÊ COMPLETOU O JOGO!</h1>
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

							<p>{gameReport?.[option]} ERROS</p>
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
