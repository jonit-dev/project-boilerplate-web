import React from "react";

import { Form__ } from "../../../styles/components/form.styles";

interface IProps {
  id: string;
  label: string;
  smallText?: string;
  onChange?: (e) => void;
}

export const Input: React.FC<IProps> = ({ id, label, smallText, onChange }) => {
  return (
    <Form__.InputContainer className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type="email"
        className="form-control"
        id={id}
        onChange={(e) => onChange(e)}
      />
      {smallText && <div className="form-text">{smallText}</div>}
    </Form__.InputContainer>
  );
};
