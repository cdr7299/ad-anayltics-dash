import { getFormattedDate } from "./charts.utils";

const CustomDatePickerInput = (
  props: React.HTMLProps<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>
) => (
  <input
    {...props}
    value={getFormattedDate(props.value as string, true)}
    className="flex w-[120px] items-center justify-start rounded-md bg-white px-4 py-2 dark:bg-slate-600 dark:text-white"
  />
);

export default CustomDatePickerInput;
