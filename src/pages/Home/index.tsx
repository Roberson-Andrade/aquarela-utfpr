import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/router';

export function Home() {
	const [step, setStep] = useState<'default' | 'signup'>('default');
	const [userName, setUserName] = useState('');
	const navigate = useNavigate();

	return (
		<main className="bg-primary-50 h-screen w-screen flex justify-center items-center">
			<section className="h-[65%] flex flex-col -translate-y-[calc(25%)]">
				<img src="/logo-and-title.svg" className="flex-1" />

				<div className="flex flex-col gap-12 items-center">
					{step === 'default' ? (
						<>
							<Button onClick={() => setStep('signup')}>NOVO JOGO</Button>
							<Button onClick={() => navigate(ROUTES.REPORTS)}>RELATÓRIOS</Button>
							<Button onClick={() => window.close()}>SAIR</Button>
						</>
					) : (
						<>
							<Input
								label="NOME COMPLETO"
								value={userName}
								onChange={(e) => setUserName(e.target.value)}
							/>
							<Button onClick={() => navigate(ROUTES.IN_GAME)}>COMEÇAR</Button>
							<Button
								variant="secondary"
								onClick={() => {
									setStep('default');
									setUserName('');
								}}
							>
								VOLTAR
							</Button>
						</>
					)}
				</div>
			</section>
		</main>
	);
}
