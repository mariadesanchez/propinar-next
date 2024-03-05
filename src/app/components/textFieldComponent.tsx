import React, { ChangeEvent } from 'react';

interface TextFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  label: string;
}

const TextFieldComponent: React.FC<TextFieldProps> = ({ value, onChange, error, label }) => (
  <div style={{ marginBottom: '10px' }}>
    <label>{label}</label>
    <input
      type="number"
      value={value}
      onChange={onChange}
      required
      style={{ border: error.length > 0 ? '1px solid red' : '1px solid black' }}
    />
    {error && <span style={{ color: 'red' }}>{error}</span>}
  </div>
);

export default TextFieldComponent;
