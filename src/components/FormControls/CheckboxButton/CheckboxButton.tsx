import { FC } from 'react';
import styled from 'styled-components';
import { colors } from '@/constants';

interface IProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onSelect: (value: string) => void;
}

const Label = styled.label`
  margin: 0;
  display: inline-block;
`;

const FakeButton = styled.span`
  margin: 0;
  padding: 12px 24px;
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.BLACK};
  border-radius: 19px;
  background-color: ${colors.WILD_SAND};
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;

  &:active {
    transform: scale(0.95);
  }
`;

const Input = styled.input`
  display: none;
  padding: 0;

  &[type='checkbox']:checked + ${FakeButton} {
    color: ${colors.WHITE};
    background-color: ${colors.MAJORELLE_BLUE};
  }
`;

const Checkbox: FC<IProps> = ({
  value,
  name,
  label,
  checked,
  onSelect,
}: IProps) => {
  const handleSelect = () => {
    onSelect(value);
  };

  return (
    <Label>
      <Input
        type="checkbox"
        name={name}
        value={value}
        onChange={handleSelect}
        checked={checked}
      />
      <FakeButton>{label}</FakeButton>
    </Label>
  );
};

export default Checkbox;
