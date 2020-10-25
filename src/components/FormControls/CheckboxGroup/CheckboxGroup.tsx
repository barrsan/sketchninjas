import { FC, useState, useEffect } from 'react';

interface IProps {
  children(onSelect: (onSelect: string) => void, value: string[]): JSX.Element;
  name: string;
  defaultValue?: Array<string>;
  onChange?: (value: string | string[], name: string) => void;
}

const CheckboxGroup: FC<IProps> = ({
  children,
  name,
  defaultValue = [],
  onChange = () => {},
}: IProps) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    onChange(value, name);
  }, [value]);

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
