import { useEffect, useState } from 'react';
import { GameAnswerOptions, GameStage } from '../../../../../@types';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Container } from './components/Container';
import { useGameContext } from '../../../../../contexts/GameContext/useGameContext';
import { getOptions } from '../../../../../utils/getRandomOption';
import { MAX_ROUNDS, STAGE_TWO_OPTIONS } from '../../../../../constants';
import { Button } from '../../../../../components/Button';
export function StageTwo() {
	const { currentGameInfo, goToNextRound, addHistory, changeStage } = useGameContext();

	const [wrongAttempts, setWrongAttempts] = useState<GameAnswerOptions[]>([]);

	const [containers, setContainers] = useState<Record<GameAnswerOptions | 'BACKLOG', string[]>>({
		BACKLOG: getOptions(currentGameInfo.round),
		BLUE: [],
		RED: [],
		GREEN: [],
		YELLOW: [],
	});

	useEffect(() => {
		if (containers.BACKLOG.length === 0 && currentGameInfo.round === MAX_ROUNDS) {
			changeStage(GameStage.DONE);
		}
	}, [currentGameInfo.round, containers.BACKLOG.length, changeStage]);

	function handleDragEnd(result: DropResult) {
		const { destination, source, draggableId } = result;

		if (destination === source || !destination?.droppableId) {
			return;
		}

		if (!STAGE_TWO_OPTIONS[destination.droppableId as GameAnswerOptions].includes(draggableId)) {
			setWrongAttempts((prevState) => [...prevState, destination.droppableId as GameAnswerOptions]);
			return;
		}

		setContainers((prevState) => {
			const newState = { ...prevState };

			const [removed] = newState[source.droppableId as GameAnswerOptions | 'BACKLOG'].splice(
				source.index,
				1,
			);

			newState[destination.droppableId as GameAnswerOptions | 'BACKLOG'].splice(
				destination.index,
				0,
				removed,
			);

			return newState;
		});
	}

	function handleClickNextRound() {
		const nextRound = goToNextRound(currentGameInfo.round);

		addHistory({
			round: currentGameInfo.round,
			stage: currentGameInfo.stage,
			wrongAttempts,
			correctAnswer: GameAnswerOptions.BLUE,
		});

		setWrongAttempts([]);

		if (nextRound) {
			setContainers({ BACKLOG: getOptions(nextRound), BLUE: [], RED: [], GREEN: [], YELLOW: [] });
		}
	}

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<section className="w-full h-full flex flex-col items-center gap-8 px-8">
				<h1 className="text-3xl">ARRASTE E SOLTE OS OBJETOS EM SUAS CAIXAS PELA SUA COR</h1>

				<div className="w-full flex justify-center gap-8">
					{Object.entries(containers)
						.filter(([container]) => container !== 'BACKLOG')
						.map(([container, items]) => (
							<Container key={container} id={container} items={items}></Container>
						))}
				</div>

				<Container
					key={'BACKLOG'}
					id={'BACKLOG'}
					items={containers.BACKLOG}
					className="w-full flex gap-4 "
				/>

				{containers.BACKLOG.length === 0 && (
					<Button onClick={handleClickNextRound}>PRÓXIMA RODADA</Button>
				)}
			</section>
		</DragDropContext>
	);
}
