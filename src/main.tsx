import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GameContextProvider } from './contexts/GameContext/GameContextProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GameContextProvider>
			<RouterProvider router={router} />
		</GameContextProvider>
	</React.StrictMode>,
);
