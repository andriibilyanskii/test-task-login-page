import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthLayout, Button, Input } from 'components';

import { fetchData, useAppContext, validateEmail } from 'utils';
import { IErrorData } from 'interfaces';

const ForgotPassword: React.FC = () => {
	const { email, setEmail } = useAppContext();
	const [isLoading, setIsLoading] = useState(false);
	const history = useNavigate();
	const [errorData, setErrorData] = useState<Array<IErrorData>>([]);

	useEffect(() => {
		setErrorData([]);
	}, [email]);

	return (
		<AuthLayout title={'Forgot Password?'}>
			<form
				onSubmit={async (e: FormEvent<HTMLFormElement>) => {
					e?.preventDefault();

					const response = await fetchData(
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

					if (response?.status === 422 && typeof response?.detail !== 'string') {
						setErrorData(response?.detail);
					}
					// Because the server returns "Invalid user", this condition is omitted
					// else {
					history('/auth/create-password');
					// }
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
					errorData={errorData}
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
