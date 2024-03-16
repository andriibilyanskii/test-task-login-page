import React, { FormEvent, useState } from 'react';

import { Text, AuthLayout, Link, Button, Icon, Input, AnimateHeight } from 'components';
import { CONSTANTS } from '../../constants';

import { validateEmail } from 'utils';

import styles from './LoginPage.module.scss';

const LoginPage: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPasswordField, setShowPasswordField] = useState(false);

	return (
		<AuthLayout title={'Log in to your account'}>
			<div className={styles['loginPage-loginWithSocialButtons']}>
				<Button buttonType={'transparent_small'}>
					<Icon isColorful={true} src={CONSTANTS.ICONS.google} />
					<Text type={'b2'} fontWeight={'medium'}>
						Google
					</Text>
				</Button>

				<Button buttonType={'transparent_small'}>
					<Icon isColorful={true} src={CONSTANTS.ICONS.github} />
					<Text type={'b2'} fontWeight={'medium'}>
						Github
					</Text>
				</Button>
			</div>

			<div className={styles['loginPage-divider']}>
				<div className={styles['loginPage-divider-line']} />
				<Text type={'b4'} className={styles['loginPage-divider-text']}>
					OR
				</Text>
				<div className={styles['loginPage-divider-line']} />
			</div>

			<form
				onSubmit={(e: FormEvent<HTMLFormElement>) => {
					e?.preventDefault();

					console.log(email, password);
				}}
			>
				<Input
					value={email}
					onChange={(value: string) => {
						setEmail(value);
						setShowPasswordField(validateEmail(value));
					}}
					placeholder={'Work email'}
					name={'email'}
					type={'email'}
					style={{
						marginBottom: showPasswordField ? '25px' : 0,
					}}
				/>

				<AnimateHeight isOpen={showPasswordField}>
					<Input
						value={password}
						onChange={setPassword}
						placeholder={'Password'}
						type={'password'}
						name={'password'}
					/>

					<Text type={'b2'} className={styles['loginPage-forgotPasswordText']}>
						<Link to={'/auth/forgot-password'}>Forgot your password?</Link>
					</Text>
				</AnimateHeight>

				<Button type={'submit'} disabled={!validateEmail(email) || password.length < 8}>
					Log in to Qencode
				</Button>
			</form>

			<Text type={'b2'} className={'mt-5'}>
				Is your company new to Qencode? <Link to={'/auth/register'}>Sign up</Link>
			</Text>
		</AuthLayout>
	);
};

export default LoginPage;
