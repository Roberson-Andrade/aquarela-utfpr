import { InputHTMLAttributes } from 'react';

interface InputProperties extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export function Input({ label, ...props }: InputProperties) {
	return (
		<div className="flex flex-col">
			{label && (
				<label htmlFor={props.id} className="text-primary-300">
					{label}
				</label>
			)}

			<input
				{...props}
				className="bg-primary-100 rounded-lg border border-solid border-primary-400 focus:border-primary-500 px-2 py-1"
			/>
		</div>
	);
}
