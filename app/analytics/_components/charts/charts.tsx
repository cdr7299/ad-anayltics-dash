"use client";
import React, { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import { AdvertiserData } from "@/types/advertiser-data";
import advertiser_data_json from "@/app/_data/advertiser_data.json";
import country_data_json from "@/app/_data/country_data.json";
import MultiSelect from "@/components/ui/multi-select";
import {
  getEndDate,
  getStartDate,
  getUniqueAdvertisersAndUniqueDates,
  sortByDate,
} from "./charts.utils";
import AdClicks from "./_components/ad-clicks-plot";
import AdImpressions from "./_components/ad-impressions-plot";
import BarChartPlot from "./_components/ctr-bar-plot/ctr-bar-plot";
import CountryImpressionsPlot from "./_components/country-impressions-plot";
import CustomDatePickerInput from "./custom-date-picker-input";

const Charts = () => {
  const [advertiserData, setAdvertiserData] = useState<AdvertiserData[]>(
    sortByDate(advertiser_data_json)
  );

  const { advertisers, dates } = useMemo(
    () => getUniqueAdvertisersAndUniqueDates(advertiser_data_json),
    []
  );

  const [selectedAdvertisers, setSelectedAdvertisers] =
    useState<string[]>(advertisers);

  const [startDate, setStartDate] = useState<Date | null>(getStartDate(dates));
  const [endDate, setEndDate] = useState<Date | null>(getEndDate(dates));

  useEffect(() => {
    const newAdvertiserData = sortByDate(advertiser_data_json).filter((row) => {
      const rowDate = new Date(row.date);
      if (!startDate || !endDate) return true; // for the null case
      if (
        rowDate >= startDate &&
        rowDate <= endDate &&
        selectedAdvertisers.includes(row.advertiser)
      )
        return true;
    });
    setAdvertiserData([...newAdvertiserData]);
  }, [selectedAdvertisers, startDate, endDate]);

  return (
    <div className="size-full flex flex-col px-6 py-6">
      <section className="md:sticky md:top-0 w-full rounded-lg bg-slate-200 dark:bg-slate-500 z-50 px-4 py-4 flex md:flex-row flex-col justify-between md:items-center border-2 border-slate-400 ">
        <div className="flex gap-2 items-center">
          <span className="font-semibold"> Advertisers: </span>
          <MultiSelect
            data={advertisers}
            onChange={(newData: string[]) =>
              setSelectedAdvertisers([...newData])
            }
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:items-center mr-4">
          <span> Start Date: </span>
          <DatePicker
            selected={startDate}
            minDate={getStartDate(dates)}
            maxDate={getEndDate(dates)}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            customInput={React.createElement(CustomDatePickerInput)}
          />
          <span> End Date: </span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            minDate={getStartDate(dates)}
            maxDate={getEndDate(dates)}
            startDate={startDate}
            endDate={endDate}
            customInput={React.createElement(CustomDatePickerInput)}
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row mt-6 gap-6">
        <div className="md:w-1/2 h-[400px] bg-slate-100 dark:bg-slate-500 border-[1px] border-slate-500 rounded-lg py-6 md:p-6">
          <h2 className="w-full text-center font-bold text-xl">Impressions</h2>
          <AdImpressions advertiserData={advertiserData} />
        </div>

        <div className="md:w-1/2 h-[400px] bg-slate-100 dark:bg-slate-500 border-[1px] border-slate-500 rounded-lg md:p-6 py-6">
          <h2 className="w-full text-center font-bold text-xl">Clicks</h2>
          <AdClicks advertiserData={advertiserData} />
        </div>
      </section>

      <section className="flex flex-col my-6 gap-6">
        <div className=" w-full h-[500px] bg-slate-100 dark:bg-slate-500 border-[1px] border-slate-500 rounded-lg md:p-6 py-6">
          <h2 className="w-full text-center font-bold text-xl">
            Click-through Rate
          </h2>
          <BarChartPlot advertiserData={advertiserData} />
        </div>
        <div className=" w-full h-[650px] bg-slate-100 dark:bg-slate-500 border-[1px] border-slate-500 rounded-lg md:p-6 py-6">
          <h2 className="w-full text-center font-bold text-xl mb-4">
            Total impressions by Country
          </h2>
          <CountryImpressionsPlot countryData={country_data_json} />
        </div>
      </section>
    </div>
  );
};

export default Charts;
