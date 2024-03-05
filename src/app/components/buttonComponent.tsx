

interface ButtonProps {
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick }) => (
  // <Button
  //   onClick={onClick}
  //   style={{ backgroundColor: '#009ee3', color: '#fff' }}
  // >
  //   Mi Propina
  // </Button>
  <div className="flex flex-col mt-2">
<button
   onClick={onClick}
  className="flex p-2 hover:bg-gray-100 rounded transition-all"
>Mi Propina

</button>
</div>
);

export default ButtonComponent;
