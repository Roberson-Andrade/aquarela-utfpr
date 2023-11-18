import { InputHTMLAttributes } from 'react';

interface InputProperties extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProperties) {
	return <input {...props} />;
}
