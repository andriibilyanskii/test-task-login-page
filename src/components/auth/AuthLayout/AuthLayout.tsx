import React from 'react';

import { Text, Icon } from 'components/index';

import styles from './AuthLayout.module.scss';

interface IProps {
	children: React.ReactNode;
	title: string;
}

const AuthLayout: React.FC<IProps> = ({ children, title }) => {
	return (
		<main className={styles['authLayout']}>
			<Icon src={'/logo.svg'} size={'11rem'} isColorful={true} />
			<Text type={'header'} className={styles['authLayout-title']}>
				{title}
			</Text>
			{children}
		</main>
	);
};

export default AuthLayout;
