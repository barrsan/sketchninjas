import { FC, useState, ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import { colors } from '@/constants';

interface IProps {
  name: string;
  placeholder: string;
  defaultValue?: string;
  type?: string;
  onChange: (value: string, name: string) => void;
}

interface IStyledPlaceholderProps {
  isFocused: boolean;
}

const Wrapper = styled.div`
  position: relative;
`;

const Placeholder = styled.p<IStyledPlaceholderProps>`
  position: absolute;
  z-index: 0;
  top: 40px;
  left: 0;
  font-size: 20px;
  font-weight: 700;
  color: ${colors.BLACK};
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  transform: scale(1);

  ${({ isFocused }: IStyledPlaceholderProps) => {
    if (isFocused) {
      return css`
        z-index: 2;
        font-size: 16px;
        transform: translateY(-30px);
      `;
    }
    return css``;
  }}
`;

const StyledInput = styled.input`
  position: relative;
  z-index: 1;
  padding: 35px 0 5px 0;
  width: 100%;
  height: 78px;
  font-size: 18px;
  font-weight: 400;
  color: ${colors.BLACK};
  line-height: 20px;
  border: 0;
  background-color: transparent;
  border-bottom: solid 1px ${hexToRgba(colors.BLACK, 0.3)};
  border-radius: 0;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: ${colors.MAJORELLE_BLUE};
  }
`;

const Input: FC<IProps> = ({
  name,
  placeholder,
  defaultValue = '',
  type = 'text',
  onChange,
}: IProps) => {
  const [inputValueState, setInputValueState] = useState<string>(defaultValue);
  const [focusedState, setFocusedState] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value, name);
    setInputValueState(value);
  };

  const handleFocus = () => {
    setFocusedState(true);
  };

  const handleBlur = () => {
    setFocusedState(false);
  };

  return (
    <Wrapper>
      <Placeholder isFocused={focusedState || !!inputValueState}>
        {placeholder}
      </Placeholder>
      <StyledInput
        type={type}
        name={name}
        defaultValue={defaultValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Wrapper>
  );
};

export default Input;
