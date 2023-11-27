import { GameAnswerOptions } from '../@types';
import { STAGE_TWO_OPTIONS } from '../constants';

export function getNoNRepeatedRandomAnswer(usedAnswers: GameAnswerOptions[]) {
	const answers = Object.values(GameAnswerOptions).filter(
		(option) => !usedAnswers.includes(option),
	);

	return answers[Math.floor(Math.random() * answers.length)];
}

export function getOptions(round: number) {
	const index = round - 1;

	return [
		STAGE_TWO_OPTIONS.BLUE[index],
		STAGE_TWO_OPTIONS.YELLOW[index],
		STAGE_TWO_OPTIONS.RED[index],
		STAGE_TWO_OPTIONS.GREEN[index],
	];
}
