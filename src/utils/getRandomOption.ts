import { GameAnswerOptions } from '../@types';

export function getNoNRepeatedRandomAnswer(usedAnswers: GameAnswerOptions[]) {
	const answers = Object.values(GameAnswerOptions).filter(
		(option) => !usedAnswers.includes(option),
	);

	return answers[Math.floor(Math.random() * answers.length)];
}
