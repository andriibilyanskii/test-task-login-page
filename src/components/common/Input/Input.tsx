import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import './Input.scss';

interface IProps {
	value: string;
	onChange: (e: string) => void;
	placeholder?: string;
	className?: string;
	padding?: string;
	style?: CSSProperties;
	maxLength?: number;
}

const Input: React.FC<IProps> = (props) => {
	const { onChange, className, ...rest } = props;

	return (
		<input
			className={classNames({
				input: true,
				[className || '']: Boolean(className),
			})}
			onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
				onChange(event?.target?.value);
			}}
			{...rest}
		/>
	);
};

export default Input;
