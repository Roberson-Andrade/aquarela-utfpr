import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Home() {
	const [step, setStep] = useState<'default' | 'signup'>('default');

	return (
		<main className="bg-primary-50 h-screen w-screen flex justify-center items-center">
			<section className="h-[65%] flex flex-col -translate-y-[calc(25%)]">
				<img src="/logo-and-title.svg" className="flex-1" />

				<div className="flex flex-col gap-12 items-center">
					{step === 'default' ? (
						<>
							<Button onClick={() => setStep('signup')}>NOVO JOGO</Button>
							<Button>RELATÓRIOS</Button>
							<Button onClick={() => window.close()}>SAIR</Button>
						</>
					) : (
						<>
							<Input />
							<Button>COMEÇAR</Button>
							<Button onClick={() => setStep('default')}>VOLTAR</Button>
						</>
					)}
				</div>
			</section>
		</main>
	);
}
