import { FC, useState } from 'react';

interface IProps {
  children(onSelect: (onSelect: string) => void, value: string[]): JSX.Element;
  defaultValue?: Array<string>;
}

const CheckboxGroup: FC<IProps> = ({ children, defaultValue = [] }: IProps) => {
  const [value, setValue] = useState(defaultValue);

  const onSelect = (selectedValue: string) => {
    if (Array.isArray(selectedValue)) {
      if (selectedValue.length) {
        let nextValue = value.concat(selectedValue);
        nextValue = [...new Set(nextValue)];
        setValue(nextValue);
      } else {
        setValue(selectedValue);
      }
    } else {
      const index = value.indexOf(selectedValue);
      if (index === -1) {
        const nextValue = [...value, selectedValue];
        setValue(nextValue);
      } else {
        const nextValue = value.filter((i: string) => i !== selectedValue);
        setValue(nextValue);
      }
    }
  };

  return children(onSelect, value);
};

export default CheckboxGroup;
