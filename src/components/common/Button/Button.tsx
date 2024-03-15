import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import './Button.scss';

interface IProps {
	children?: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	className?: string;
	type?: 'button' | 'submit';
	disabled?: boolean;
	style?: CSSProperties;
	buttonType?: 'default' | 'round' | 'transparent' | 'tag';
}

const Button: React.FC<IProps> = (props) => {
	const { children, className, buttonType = 'default', ...rest } = props;

	return (
		<button
			className={classNames({
				button: true,
				[`button_${buttonType}`]: true,
				[className || '']: Boolean(className),
			})}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
