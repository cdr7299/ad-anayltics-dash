const CustomDatePickerInput = ({
  value,
  onClick,
}: {
  value: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => (
  <button
    className="px-2 bg-slate-100 w-[150px] flex items-center justify-center py-2 rounded-2xl dark:text-black"
    onClick={onClick}
  >
    {value}
  </button>
);

export default CustomDatePickerInput;
