import { GameStep } from '../@types';
import { Home } from '../pages/Home';

export const AllSteps: Record<GameStep, JSX.Element> = {
	[GameStep.HOME]: <Home />,
};
