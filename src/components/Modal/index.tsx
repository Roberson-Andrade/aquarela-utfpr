import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProperties {
	open: boolean;
	title: string;
	content: string;
	actionButtons: ReactNode;
}

export function Modal({ title, content, actionButtons, open }: ModalProperties) {
	return open
		? createPortal(
				<div className="h-screen w-screen flex justify-center items-center absolute top-0 left-0 backdrop-blur-sm">
					<div className="w-full max-w-[800px] bg-white rounded-lg border border-gray-200  flex flex-col">
						<div className="text-3xl p-6 border-b border-gray-200">{title}</div>
						<div className="text-2xl p-6 border-b border-gray-200">{content}</div>
						<div className="text-2xl p-6 ml-auto">{actionButtons}</div>
					</div>
				</div>,
				document.body,
		  )
		: null;
}
