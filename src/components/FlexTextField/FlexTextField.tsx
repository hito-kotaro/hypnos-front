import { TextInputHooks } from "@/hooks/useTextInput";
import { FC } from "react";

interface Props {
  size?: "large" | "medium" | "small";
  placeholder?: string;
  inputHooks: TextInputHooks;
}

export const FlexTextField: FC<Props> = (props) => {
  const { size, placeholder, inputHooks } = props;

  if (size === "large") {
    return (
      <input
        type="input"
        value={inputHooks.value}
        onChange={inputHooks.handleChange}
        placeholder={placeholder ?? ""}
        className="h-10 font-semibold text-3xl text-text border-none focus:outline-none bg-primary"
      />
    );
  } else if (size === "small") {
    return (
      <input
        type="input"
        value={inputHooks.value}
        onChange={inputHooks.handleChange}
        placeholder={placeholder ?? ""}
        className="h-10 font-semibold text-lg text-text border-none focus:outline-none bg-primary"
      />
    );
  } else {
    return (
      <input
        type="input"
        value={inputHooks.value}
        onChange={inputHooks.handleChange}
        placeholder={placeholder ?? ""}
        className="h-10 font-semibold text-2xl text-text border-none focus:outline-none bg-primary"
      />
    );
  }
};
