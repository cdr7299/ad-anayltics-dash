import React from "react";
import DatePicker from "react-datepicker";
import MultiSelect from "@/components/ui/multi-select";
import { getEndDate, getStartDate } from "../../charts.utils";
import CustomDatePickerInput from "../../custom-date-picker-input";

const Filters = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  dates,
  advertisers,
  setSelectedAdvertisers,
}: {
  advertisers: string[];
  startDate: Date | null;
  endDate: Date | null;
  dates: string[];
  setStartDate: (arg: Date | null) => void;
  setEndDate: (arg: Date | null) => void;
  setSelectedAdvertisers: (arr: string[]) => void;
}) => (
  <section className="md:sticky md:top-0 w-full shadow-md rounded-lg bg-slate-100 dark:bg-gray-800 z-50 px-4 py-2 flex md:flex-row flex-col gap-4 justify-between md:items-center ">
    <div className="flex gap-4 items-center text-sm">
      <span className="font-semibold ">Advertisers </span>
      <MultiSelect
        data={advertisers}
        onChange={(newData: string[]) => setSelectedAdvertisers([...newData])}
      />
    </div>
    <div className="flex gap-2 justify-start md:items-center text-sm">
      <div>
        <label className="mr-2"> From </label>
        <DatePicker
          selected={startDate}
          minDate={getStartDate(dates)}
          maxDate={getEndDate(dates)}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          customInput={React.createElement(
            React.forwardRef(CustomDatePickerInput)
          )}
        />
      </div>
      <div>
        <label className="mx-2"> To </label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          minDate={getStartDate(dates)}
          maxDate={getEndDate(dates)}
          startDate={startDate}
          endDate={endDate}
          customInput={React.createElement(
            React.forwardRef(CustomDatePickerInput)
          )}
        />
      </div>
    </div>
  </section>
);

export default Filters;
