import { useEffect, useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { GameAnswerOptions } from '../../../../../../../@types';
import { ALTERNATIVE_LABEL } from '../../../../../../../constants';

interface ContainerProperties {
	id: string;
	items: string[];
	className?: string;
}

export function Container({ id, items, className }: ContainerProperties) {
	// State to trigger re-render
	const [forceUpdateKey, setForceUpdateKey] = useState(0);

	useEffect(() => {
		setForceUpdateKey((prevKey) => prevKey + 1);
	}, []);

	return (
		<Droppable droppableId={id} key={forceUpdateKey} direction="horizontal">
			{(provided) => (
				<div
					className={
						className ??
						'border-2 border-primary-950 max-h-[50%] min-h-[426px] w-[20%] max-w-[320px] rounded-xl flex flex-wrap gap-4 content-start relative p-2'
					}
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					{ALTERNATIVE_LABEL[id as GameAnswerOptions] && (
						<h6 className="absolute -translate-y-[100%] top-0">
							{ALTERNATIVE_LABEL[id as GameAnswerOptions]}
						</h6>
					)}
					{items.map((item, index) => (
						<Draggable draggableId={item} index={index} key={item}>
							{(provided) => (
								<div
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
								>
									<img src={`/${item}.png`} />
								</div>
							)}
						</Draggable>
					))}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
}
