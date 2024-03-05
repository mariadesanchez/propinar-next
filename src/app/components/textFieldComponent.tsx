// TextFieldComponent.tsx
import TextField from '@mui/material/TextField';

interface TextFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const TextFieldComponent: React.FC<TextFieldProps> = ({ value, onChange, error }) => (
  <TextField
    type="number"
    label="Tu Propina"
    variant="outlined"
    value={value}
    onChange={onChange}
    style={{ marginBottom: '10px' }}
    required
    error={error.length > 0}
    helperText={error}
  />
);

export default TextFieldComponent;
