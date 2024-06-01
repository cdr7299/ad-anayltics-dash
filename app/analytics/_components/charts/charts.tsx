"use client";
import AdImpressions from "./_components/ad-impressions-plot";
import AdClicks from "./_components/ad-clicks-plot";
import BarChartPlot from "./_components/ctr-bar-plot/ctr-bar-plot";
import CountryImpressionsPlot from "./_components/country-impressions-plot";
import advertiser_data_json from "@/app/_data/advertiser_data.json";
import country_data_json from "@/app/_data/country_data.json";
import { useEffect, useMemo, useState } from "react";
import { AdvertiserData } from "@/types/advertiser-data";
import { CountryData } from "@/types/country-data";
import MultiSelect from "@/components/ui/multi-select";
import {
  getEndDate,
  getStartDate,
  getUniqueAdvertisersAndUniqueDates,
} from "./charts.utils";
import DatePicker from "react-datepicker";

const Charts = () => {
  const [advertiserData, setAdvertiserData] =
    useState<AdvertiserData[]>(advertiser_data_json);
  const [countryData, setCountryData] =
    useState<CountryData[]>(country_data_json);

  const { advertisers, dates } = useMemo(
    () => getUniqueAdvertisersAndUniqueDates(advertiser_data_json),
    []
  );

  const [selectedAdvertisers, setSelectedAdvertisers] =
    useState<string[]>(advertisers);

  const [startDate, setStartDate] = useState<Date | null>(getStartDate(dates));
  const [endDate, setEndDate] = useState<Date | null>(getEndDate(dates));
  console.log(startDate);

  useEffect(() => {
    const newAdvertiserData = advertiser_data_json.filter((row) =>
      selectedAdvertisers.includes(row.advertiser)
    );
    setAdvertiserData([...newAdvertiserData]);
  }, [selectedAdvertisers]);

  useEffect(() => {
    const newAdvertiserData = advertiser_data_json.filter((row) => {
      const rowDate = new Date(row.date);
      if (!startDate || !endDate) return true; // for the null case
      if (rowDate >= startDate && rowDate <= endDate) return true;
    });
    setAdvertiserData([...newAdvertiserData]);
  }, [startDate, endDate]);

  return (
    <div className="size-full flex flex-col px-6 py-6">
      <section className="w-full rounded-lg bg-slate-100 px-4 py-4 flex justify-between items-center ">
        <div className="flex gap-2 items-center">
          <span> Advertisers: </span>
          <MultiSelect
            data={advertisers}
            onChange={(newData: string[]) =>
              setSelectedAdvertisers([...newData])
            }
          />
        </div>
        <div className="flex gap-2 items-center mr-4">
          <span> Start Date: </span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <span> End Date: </span>

          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row my-6 gap-6">
        <div className="md:w-1/2 h-[350px] bg-slate-100 border-[1px] border-slate-500 rounded-lg p-6">
          <AdImpressions advertiserData={advertiserData} />
        </div>

        <div className="md:w-1/2 h-[350px] bg-slate-100 border-[1px] border-slate-500 rounded-lg p-6">
          <AdClicks advertiserData={advertiserData} />
        </div>
      </section>

      <section className="flex flex-col my-6 px-4 gap-6">
        <div className=" w-full h-[450px] bg-slate-100 border-[1px] border-slate-500 rounded-lg p-6">
          <BarChartPlot advertiserData={advertiserData} />
        </div>
        <div className=" w-full h-[700px] bg-slate-100 border-[1px] border-slate-500 rounded-lg p-6">
          <CountryImpressionsPlot countryData={countryData} />
        </div>
      </section>
    </div>
  );
};

export default Charts;
