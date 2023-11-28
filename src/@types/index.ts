export enum GameStage {
	TUTORIAL = 'TUTORIAL',
	STAGE_ONE = 'STAGE_ONE',
	STAGE_TWO = 'STAGE_TWO',
	DONE = 'DONE',
}

export enum GameAnswerOptions {
	RED = 'RED',
	BLUE = 'BLUE',
	GREEN = 'GREEN',
	YELLOW = 'YELLOW',
}

export interface GameReport {
	name: string;
	date: string;
	[GameAnswerOptions.BLUE]: number;
	[GameAnswerOptions.RED]: number;
	[GameAnswerOptions.GREEN]: number;
	[GameAnswerOptions.YELLOW]: number;
}
