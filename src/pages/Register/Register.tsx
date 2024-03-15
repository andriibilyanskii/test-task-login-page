import React from 'react';

import {Text} from "components";

import styles from './Register.module.scss';
import AuthLayout from "../../components/auth/AuthLayout/AuthLayout";

const Register: React.FC = () => {
    return (
        <div className={styles['registerPage']}>
            <AuthLayout title={'This is page for registration'}>
                <Text type={'b1'}>This functionality is not specified in the requirements</Text>
            </AuthLayout>
        </div>
    );
};

export default Register;
