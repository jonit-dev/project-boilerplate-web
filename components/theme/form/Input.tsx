import React from "react";

import { Form__ } from "../../../styles/components/form.styles";

interface IProps {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  smallText?: string;
  onChange?: (e) => void;
}

export const Input: React.FC<IProps> = ({
  id,
  label,
  type,
  smallText,
  onChange,
  placeholder,
}) => {
  return (
    <Form__.InputContainer className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
      />
      {smallText && <div className="form-text">{smallText}</div>}
    </Form__.InputContainer>
  );
};
