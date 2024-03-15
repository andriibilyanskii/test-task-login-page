import React from 'react';

import {Text} from "components";

import styles from './ForgotPassword.module.scss';

const ForgotPassword: React.FC = () => {
    return (
        <div className={styles['loginPage']}>
            <Text type={'b1'} fontWeight={'bold'}>Forgot Password</Text>
        </div>
    );
};

export default ForgotPassword;
