import { GameAnswerOptions, GameStage } from '../@types';

export const GAME_STAGE_NUMBER: Record<GameStage, number> = {
	[GameStage.STAGE_ONE]: 1,
};

export const MAX_ROUNDS = Object.keys(GameAnswerOptions).length;

export const ALPHABET = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

export const ALTERNATIVE_LABEL: Record<GameAnswerOptions, string> = {
	[GameAnswerOptions.BLUE]: 'AZUL',
	[GameAnswerOptions.RED]: 'VERMELHO',
	[GameAnswerOptions.GREEN]: 'VERDE',
	[GameAnswerOptions.YELLOW]: 'AMARELO',
};
