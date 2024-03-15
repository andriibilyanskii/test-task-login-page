import React from 'react';
import classNames from 'classnames';

import './Text.scss';

interface IProps {
	type: 'p' | 's' | 'header';
	className?: string;
	children: React.ReactNode;
}

const Text: React.FC<IProps> = (props) => {
	const { type, className, children, ...rest } = props;

	return (
		<p
			className={classNames({
				text: true,
				[`text_${type}`]: true,
				[className || '']: className,
			})}
			{...rest}
		>
			{children}
		</p>
	);
};

export default Text;
