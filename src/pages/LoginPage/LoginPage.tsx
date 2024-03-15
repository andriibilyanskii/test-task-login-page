import React, { FormEvent } from 'react';

import { Text, AuthLayout, Link } from 'components';

import styles from './LoginPage.module.scss';

const LoginPage: React.FC = () => {
	return (
		<AuthLayout
			title={'Log in to your account'}
			// className={styles.loginPage}
		>
			<form
				onSubmit={(e: FormEvent<HTMLFormElement>) => {
					e?.preventDefault();
				}}
			></form>

			<Text type={'b2'} className={'mt-5'}>
				Is your company new to Qencode? <Link to={'/auth/register'}>Sign up</Link>
			</Text>
		</AuthLayout>
	);
};

export default LoginPage;
