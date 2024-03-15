import React from 'react';
// import classNames from "classnames";


import {Text, Icon} from 'components';

import styles from './AuthLayout.module.scss';

interface IProps {
    children: React.ReactNode;
    title: string;
    className?: string;
}

const AuthLayout: React.FC<IProps> = ({children, title, className = ''}) => {
    return <main
        //     className={classNames({
        //     [styles['authLayout']]: true,
        //     [className]: className,
        // })}
    >
        {/*<Icon src={'/logo.svg'} size={'11rem'} isColorful={true}/>*/}
        <Text type={'header'}>{title}</Text>
        {children}
    </main>;
};

export default AuthLayout;
