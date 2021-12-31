import { ErrorMessage, useField } from "formik";
import React, { ReactNode } from "react";
import Item from "./CheckBoxGroupItem";
import { CheckboxProvider } from "./CheckBoxContext";

type Props = {
  children: ReactNode;
  name: string;
  label: string;
};

function CheckboxGroup({ name, label, children }: Props) {
  const [field, meta, helpers] = useField<String>(name);
  return (
    <CheckboxProvider value={{ field, helpers, meta }}>
      <fieldset>
        <legend>{label}</legend>
        <ErrorMessage
          name={name}
          render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
        />
        {children}
      </fieldset>
    </CheckboxProvider>
  );
}

export default Object.assign(CheckboxGroup, { Item });
