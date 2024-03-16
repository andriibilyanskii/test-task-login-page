import React, { FormEvent, useEffect, useState } from 'react';
import { AuthLayout, Button, Input } from 'components';

import { fetchData } from 'utils';
import { IErrorData } from 'interfaces';

import styles from './CreatePassword.module.scss';

const CreatePassword: React.FC = () => {
	const [password, setPassword] = useState('');
	const [passwordConfirmed, setPasswordConfirmed] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [errorData, setErrorData] = useState<Array<IErrorData>>([]);

	useEffect(() => {
		setErrorData([]);
	}, [password, passwordConfirmed]);

	return (
		<AuthLayout title={'Create new Password?'}>
			<form
				onSubmit={async (e: FormEvent<HTMLFormElement>) => {
					e?.preventDefault();

					const response = await fetchData(
						'/auth/password-set',
						true,
						{
							body: {
								password: password,
								password_confirm: passwordConfirmed,
								access_token: 'access_token',
								refresh_token: 'refresh_token',
							},
						},
						{
							setIsLoading,
							showSuccessMessage: true,
						}
					);

					if (response?.status === 422 && typeof response?.detail !== 'string') {
						setErrorData(response?.detail);
					}
				}}
				className={styles.createPasswordPage}
			>
				<Input
					value={password}
					onChange={setPassword}
					placeholder={'Password'}
					label={'Password'}
					type={'password'}
					name={'password'}
					classNameContainer={styles.inputContainer}
					errorMessage={
						password !== passwordConfirmed
							? "Passwords don't match"
							: password?.length > 0 && password?.length < 8
								? 'Wrong password format'
								: ''
					}
					errorData={errorData}
					disabled={isLoading}
				/>

				<Input
					value={passwordConfirmed}
					onChange={setPasswordConfirmed}
					placeholder={'Password'}
					label={'Confirm Password'}
					type={'password'}
					name={'password_confirm'}
					classNameContainer={styles.inputContainer}
					errorMessage={
						password !== passwordConfirmed
							? "Passwords don't match"
							: passwordConfirmed?.length > 0 && passwordConfirmed?.length < 8
								? 'Wrong password format'
								: ''
					}
					errorData={errorData}
					disabled={isLoading}
				/>

				<Button
					type={'submit'}
					disabled={password?.length < 8 || passwordConfirmed?.length < 8}
				>
					Reset Password
				</Button>
			</form>
		</AuthLayout>
	);
};

export default CreatePassword;
