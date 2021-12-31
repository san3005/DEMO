import React from "react";
import { useCheckboxContext } from "./CheckBoxContext";

type Props = {
  value: string;
  label: string;
};

export default function CheckboxGroupItem({ value, label }: Props) {
  const { field, helpers } = useCheckboxContext();
  const checked = Boolean(field.value && field.value.find((_) => _ === value));
  return (
    <label style={{ display: "block" }}>
      <input
        {...field}
        type="checkbox"
        checked={checked}
        onChange={() => {
          if (checked) {
            helpers.setValue(field.value.filter((_) => _ !== value));
          } else {
            helpers.setValue([...field.value, value]);
          }
        }}
      />
      {label}
    </label>
  );
}