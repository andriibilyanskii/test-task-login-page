/* eslint-disable no-useless-escape */

import React, { CSSProperties, useCallback, useState } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';
import { Icon } from '../../index';
import { CONSTANTS } from '../../../constants';
import Text from '../Text/Text';
import { IErrorData } from '../../../interfaces';

interface IProps {
	value: string;
	onChange: (e: string) => void;
	placeholder?: string;
	className?: string;
	classNameContainer?: string;
	label?: string;
	style?: CSSProperties;
	labelStyle?: CSSProperties;
	maxLength?: number;
	type?: 'text' | 'email' | 'password';
	name?: string;
	disabled?: boolean;
	errorMessage?: string;
	errorData?: Array<IErrorData>;
}

const Input: React.FC<IProps> = (props) => {
	const {
		onChange,
		className,
		classNameContainer,
		type,
		errorMessage,
		errorData,
		labelStyle,
		label,
		...rest
	} = props;

	const [showPassword, setShowPassword] = useState(false);
	const showPasswordFunc = useCallback(() => {
		setShowPassword(!showPassword);
	}, [showPassword]);

	const error = errorData?.find((e) => e?.field_name === props?.name)?.error || errorMessage;

	return (
		<label
			className={classNames({
				[styles['input-container']]: true,
				[styles['input-container_withLabel']]: label,
				[classNameContainer || '']: !!classNameContainer,
			})}
			style={labelStyle}
		>
			{label && <p>{label}</p>}

			<input
				className={classNames({
					[styles.input]: true,
					[className || '']: Boolean(className),
				})}
				onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
					onChange(event?.target?.value);
				}}
				type={!showPassword ? type : 'text'}
				{...rest}
			/>

			{props?.type === 'password' && (
				<Icon
					className={classNames({
						[styles['inputIcon']]: true,
					})}
					src={CONSTANTS.ICONS.eye}
					onClick={showPasswordFunc}
					size={'1.5rem'}
				/>
			)}

			{error && (
				<Text type={'b4'} fontWeight={'medium'} className={styles.errorMessage}>
					{error}
				</Text>
			)}
		</label>
	);
};

export default Input;
