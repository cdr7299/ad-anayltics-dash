const CustomDatePickerInput = (
  props: React.HTMLProps<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>
) => (
  <input
    {...props}
    className="px-4 bg-white w-[120px] dark:bg-slate-600 flex items-center justify-start py-2 rounded-md dark:text-white"
  />
);

export default CustomDatePickerInput;
