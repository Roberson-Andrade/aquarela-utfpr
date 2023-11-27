import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { ROUTES } from './utils/router';
import { InGame } from './pages/InGame';
import { GameContextProvider } from './contexts/GameContext/GameContextProvider';

export const router = createBrowserRouter([
	{
		path: ROUTES.HOME,
		element: <Home />,
	},
	{
		path: ROUTES.REPORTS,
		element: <div>relatorios</div>,
	},
	{
		path: ROUTES.IN_GAME,

		element: (
			<GameContextProvider>
				<InGame />
			</GameContextProvider>
		),
	},
]);
