import { useState } from 'react';

const useTextInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset] as const;
};

export default useTextInput;