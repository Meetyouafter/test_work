import React from 'react';
import LongButton from './LongButton/LongButton';
import ShortButton from './ShortButton/ShortButton';
import { IButton } from '../../types';

const Button: React.FC<IButton> = ({
  variant, type, text, fullWidth,
}) => (type === 'short' ? (
  <ShortButton variant={variant} text={text} />
) : (
  <LongButton variant={variant} text={text} fullWidth={fullWidth} />
));

export default Button;
