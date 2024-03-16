import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AnimateHeight, AuthLayout, Button, Icon, Input, Link, Text } from 'components';

import styles from './ForgotPassword.module.scss';
import { CONSTANTS } from '../../constants';
import { fetchData, validateEmail } from '../../utils';

const ForgotPassword: React.FC = () => {
	const [email, setEmail] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const history = useNavigate();

	return (
		<AuthLayout title={'Forgot Password?'}>
			<form
				onSubmit={async (e: FormEvent<HTMLFormElement>) => {
					e?.preventDefault();

					await fetchData(
						'/auth/password-reset',
						true,
						{
							body: {
								email,
							},
						},
						{
							setIsLoading,
							showSuccessMessage: true,
						}
					);
				}}
			>
				<Input
					value={email}
					onChange={setEmail}
					placeholder={'Enter your email'}
					type={'email'}
					name={'email'}
					disabled={isLoading}
					errorMessage={!validateEmail(email) && email ? 'Wrong email format' : ''}
				/>

				<Button type={'submit'} disabled={!validateEmail(email)}>
					Send
				</Button>

				<Button
					buttonType={'transparent'}
					onClick={() => {
						history(-1);
					}}
				>
					Cancel
				</Button>
			</form>
		</AuthLayout>
	);
};

export default ForgotPassword;
