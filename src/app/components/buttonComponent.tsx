// ButtonComponent.tsx
import Button from '@mui/material/Button';

interface ButtonProps {
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick }) => (
  <Button
    onClick={onClick}
    style={{ backgroundColor: '#009ee3', color: '#fff' }}
  >
    Mi Propina
  </Button>
);

export default ButtonComponent;
