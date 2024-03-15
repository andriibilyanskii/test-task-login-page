import React, {CSSProperties} from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

interface IProps {
    value: string;
    onChange: (e: string) => void;
    placeholder?: string;
    className?: string;
    padding?: string;
    style?: CSSProperties;
    maxLength?: number;
    type?: 'text' | 'email' | 'password';
}

const Input: React.FC<IProps> = (props) => {
    const {onChange, className, ...rest} = props;

    return (
        <input
            className={classNames({
                [styles.input]: true,
                [className || '']: Boolean(className),
            })}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                onChange(event?.target?.value);
            }}
            {...rest}
        />
    );
};

export default Input;
