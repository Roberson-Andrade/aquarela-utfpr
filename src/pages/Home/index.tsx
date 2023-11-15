import { Button } from '../../components/Button';

export function Home() {
	return (
		<main className="bg-primary-50 h-screen w-screen flex justify-center items-center">
			<section className="h-[65%] flex flex-col -translate-y-[calc(25%)]">
				<img src="/logo-and-title.svg" className="flex-1" />

				<div className="flex flex-col gap-12 items-center">
					<Button>NOVO JOGO</Button>
					<Button>RELATÓRIOS</Button>
					<Button onClick={() => window.close()}>SAIR</Button>
				</div>
			</section>
		</main>
	);
}
