import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import './Icon.scss';

interface IProps {
	src: string;
	color?: string;
	size?:
		| '0.75rem'
		| '15px'
		| '1rem'
		| '1.25rem'
		| '1.5rem'
		| '2rem'
		| '2.25rem'
		| '2.5rem'
		| '4rem'
		| '8rem'
		| '12rem';
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	padding?: string;
	style?: CSSProperties;
}

const Icon: React.FC<IProps> = (props) => {
	const { src, color, size, padding, className, style, ...rest } = props;

	return (
		<div
			className={classNames({
				icon: true,
				[className || '']: Boolean(className),
			})}
			style={{
				mask: `url(${src}) no-repeat center / contain`,
				WebkitMask: `url(${src}) no-repeat center / contain`,
				backgroundColor: color || '',
				width: size || '',
				height: size || '',
				cursor: props?.onClick ? 'pointer' : 'initial',
				padding,
				...style,
			}}
			{...rest}
		/>
	);
};

Icon.defaultProps = {
	className: '',
	padding: '0rem',
};

export default Icon;
