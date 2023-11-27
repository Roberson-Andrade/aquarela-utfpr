import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { CaretDown } from '@phosphor-icons/react';
import { GameAnswerOptions, GameReport } from '../../@types';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/router';
import { circleColor } from '../InGame/components/GameDone/styles';
import { ALTERNATIVE_LABEL } from '../../constants';

export function Reports() {
	const [report, setReport] = useState<Map<string, GameReport[]>>(new Map());

	const navigate = useNavigate();

	useEffect(() => {
		const savedGameReport = localStorage.getItem('game-history');

		if (savedGameReport) {
			const parsedGameReport = (JSON.parse(savedGameReport) as GameReport[]).reverse();

			const reportMap = new Map<string, GameReport[]>();

			for (const report of parsedGameReport) {
				const existingReport = reportMap.get(report.name.toUpperCase());

				if (existingReport) {
					existingReport.push(report);
					reportMap.set(report.name.toUpperCase(), existingReport);
				} else {
					reportMap.set(report.name.toUpperCase(), [report]);
				}
			}

			setReport(reportMap);
		}
	}, []);

	return (
		<main className="px-6 py-8 bg-primary-50 h-screen w-screen flex flex-col gap-12">
			<h1 className="text-3xl">RELATÓRIOS</h1>

			{[...report].length > 0 ? (
				<div className="w-full max-w-3xl mx-auto">
					{[...report].map(([name, reports]) => (
						<Accordion key={name} className="border border-primary-300 !bg-primary-100 ">
							<AccordionSummary
								expandIcon={<CaretDown />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography className="!text-primary-900 !text-2xl">{name}</Typography>
							</AccordionSummary>

							<AccordionDetails>
								{reports.map((report) => (
									<Accordion
										key={report.date}
										className="border border-primary-300 !bg-primary-100 "
									>
										<AccordionSummary
											expandIcon={<CaretDown />}
											aria-controls="panel1a-content"
											id="panel1a-header"
										>
											<Typography className="!text-primary-900 !text-2xl">
												{new Date(report.date).toLocaleString(navigator.language)}
											</Typography>
										</AccordionSummary>

										<AccordionDetails>
											{
												<ul className="flex flex-col gap-4">
													{Object.values(GameAnswerOptions).map((option) => (
														<li key={option} className="w-full flex items-center justify-between">
															<div className="flex items-center gap-2">
																<span className={circleColor({ answer: option })} />
																<p>{ALTERNATIVE_LABEL[option]}</p>
															</div>

															<p>{report?.[option]} ERROS</p>
														</li>
													))}
												</ul>
											}
										</AccordionDetails>
									</Accordion>
								))}
							</AccordionDetails>
						</Accordion>
					))}
				</div>
			) : (
				<div className="min-h-[30%] mx-auto flex items-center">
					<h2 className="text-3xl ">Nenhum relatório encontrado</h2>
				</div>
			)}
			<Button variant="secondary" className="w-fit mx-auto" onClick={() => navigate(ROUTES.HOME)}>
				Voltar
			</Button>
		</main>
	);
}
