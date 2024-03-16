/* eslint-disable no-useless-escape */

import React, {CSSProperties, useCallback, useState} from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';
import {Icon} from '../../index';
import {CONSTANTS} from '../../../constants';
import Text from "../Text/Text";

interface IProps {
	value: string;
	onChange: (e: string) => void;
	placeholder?: string;
	className?: string;
	classNameContainer?: string;
	padding?: string;
	style?: CSSProperties;
	maxLength?: number;
	type?: 'text' | 'email' | 'password';
	name?: string;
	disabled?: boolean;
	errorMessage?: string;
}

const Input: React.FC<IProps> = (props) => {
	const {onChange, className, classNameContainer, type, errorMessage, ...rest} = props;

	const [showPassword, setShowPassword] = useState(false);
	const showPasswordFunc = useCallback(() => {
		setShowPassword(!showPassword);
	}, [showPassword]);

	return (
		<label
			className={classNames({
				[styles['input-container']]: true,
				[classNameContainer || '']: !!classNameContainer,
			})}
		>
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

			<Text type={'b4'} className={styles.errorMessage}>{errorMessage}</Text>
		</label>
	);
};

export default Input;
