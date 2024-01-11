import { useState } from "react";

export interface TextInputHooks {
  value: string;
  clearValue: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useTextInput = (defaultValue?: string) => {
  const [value, setValue] = useState(defaultValue ?? "");

  const clearValue = () => {
    setValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, clearValue, handleChange };
};
