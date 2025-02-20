import { Button as MUIButton, styled } from '@mui/material';
import TranslateText from 'components/hoc/TranslateText';
import React from 'react';
import { TButtonUseCase } from 'ts/types';

const StyledMuiButton = styled(MUIButton)`
  justify-content: center;
  align-items: center;
  display: flex;
  min-width: 5rem;
  padding: 0.5rem 1rem;
  margin: 0.8rem 0;
  color: var(--color-text-dark);
  background: var(--color-main-light);
  border-radius: 0.8rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.5s ease 0s;
  border: 1px solid var(--color-dark-accent);

  &:hover {
    cursor: pointer;
    background-color: var(--color-main) !important;
    box-shadow: 0px 8px 12px rgba(100, 198, 223, 0.4);
    color: var(--color-main-light);
    transform: scale(var(--transform-scale));
  }

  &.disabled {
    background: var(--color-dark-accent) !important;
    color: var(--color-text-light) !important;
    &:hover {
      cursor: not-allowed;
      transform: none;
    }
  }

  &.active {
    background-color: var(--color-main) !important;
    color: var(--color-text-light) !important;
  }

  &.small {
    width: 10rem;
    height: 2rem;
    font-size: 1rem;
    box-shadow: var(--box-shadow-small);
  }

  &.middle {
    width: 15rem;
    height: 2.5rem;
    font-size: 1.2rem;
    margin: 1rem 0;
    letter-spacing: 0.1em;
  }

  &.big {
    width: 20rem;
    height: 3rem;
    font-size: 1.5rem;
    margin: 2rem 0;
    letter-spacing: 0.1em;
    box-shadow: var(--box-shadow-main);
  }

  &.fullLine {
    letter-spacing: 0.1em;
    box-shadow: var(--box-shadow-main);
    height: 2.5rem;
    font-size: 1.2em;
    padding: 0;
    border-radius: 0;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

interface ButtonProps {
  text: string;
  style?: object;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active?: boolean | (() => boolean);
  disabled?: boolean | (() => boolean);
  useCase?: TButtonUseCase;
  classes?: string;
  type?: 'button' | 'reset' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  text,
  style,
  onClick = () => {},
  active,
  disabled,
  useCase,
  classes,
  type = 'button',
}) => {
  const isDisabled = typeof disabled === 'function' ? disabled() : disabled ?? false;
  const isActive = () => {
    if (isDisabled) return false;
    else if (typeof active === 'undefined' || (typeof active === 'function' && active()) || active) return true;
    return false;
  };

  const buttonClasses = [useCase, isActive() ? 'active' : '', isDisabled ? 'disabled' : '', classes].join(' ');

  return (
    <StyledMuiButton
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={isDisabled}
      style={{ ...style }}
    >
      <TranslateText>{text}</TranslateText>
    </StyledMuiButton>
  );
};

export default Button;