import React from 'react';
import LongButton from './LongButton/LongButton';
import ShortButton from './ShortButton/ShortButton';
import { IButtonProps } from '../../../types';

const Button: React.FC<IButtonProps> = ({
  variant, type, text, fullWidth, onClick,
}) => (type === 'short' ? (
  <ShortButton variant={variant} text={text} onClick={onClick} />
) : (
  <LongButton variant={variant} text={text} fullWidth={fullWidth} onClick={onClick} />
));

export default Button;
