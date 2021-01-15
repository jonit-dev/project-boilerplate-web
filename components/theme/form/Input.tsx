import React from "react";
import InputMask from "react-input-mask";

import { Form__ } from "../../../styles/components/form.styles";

interface IProps {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  smallText?: string;
  onChange?: (e) => void;
  mask?: string;
}

export const Input: React.FC<IProps> = ({
  id,
  label,
  type,
  smallText,
  onChange,
  placeholder,
  mask,
}) => {
  return (
    <Form__.InputContainer className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>

      {mask ? (
        <InputMask mask={mask} onChange={(e) => onChange(e)}>
          {(inputProps) => (
            <input
              {...inputProps}
              type={type}
              className="form-control"
              id={id}
              placeholder={placeholder}
            />
          )}
        </InputMask>
      ) : (
        <input
          type={type}
          className="form-control"
          id={id}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
        />
      )}
      {smallText && <div className="form-text">{smallText}</div>}
    </Form__.InputContainer>
  );
};
