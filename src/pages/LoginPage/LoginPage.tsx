import React, {FormEvent, useState} from 'react';

import {Text, AuthLayout, Link, Button, Icon, Input} from 'components';
import {CONSTANTS} from "../../constants";

import styles from './LoginPage.module.scss';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('')

    return (
        <AuthLayout title={'Log in to your account'}>
            <div className={styles['loginPage-loginWithSocialButtons']}>
                <Button buttonType={'transparent'}>
                    <Icon isColorful={true} src={CONSTANTS.ICONS.google}/>
                    <Text type={'b2'} fontWeight={'medium'}>Google</Text>
                </Button>

                <Button buttonType={'transparent'}>
                    <Icon isColorful={true} src={CONSTANTS.ICONS.github}/>
                    <Text type={'b2'} fontWeight={'medium'}>Github</Text>
                </Button>
            </div>

            <div className={styles['loginPage-divider']}>
                <div className={styles['loginPage-divider-line']}/>
                <Text type={'b4'} className={styles['loginPage-divider-text']}>OR</Text>
                <div className={styles['loginPage-divider-line']}/>
            </div>
            <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e?.preventDefault();
                }}
            >
                <Input
                    value={email}
                    onChange={setEmail}
                    placeholder={'Work email'}
                    type={'email'}
                />

                <Button type={'submit'}>Log in to Qencode</Button>
            </form>

            <Text type={'b2'} className={'mt-5'}>
                Is your company new to Qencode? <Link to={'/auth/register'}>Sign up</Link>
            </Text>
        </AuthLayout>
    );
};

export default LoginPage;
