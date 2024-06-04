"use client";
import React, { useEffect, useMemo, useState } from "react";
import { AdvertiserData } from "@/types/advertiser-data";
import advertiser_data_json from "@/app/_data/advertiser_data.json";
import country_data_json from "@/app/_data/country_data.json";
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
import Summary from "./_components/summary";
import Filters from "./_components/filters";

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
    <div className="flex size-full flex-col gap-6 px-6 py-6">
      <Summary advertiserData={advertiser_data_json} />
      <Filters
        advertisers={advertisers}
        startDate={startDate}
        endDate={endDate}
        dates={dates}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setSelectedAdvertisers={setSelectedAdvertisers}
      />
      <section className="flex flex-col gap-6 md:flex-row">
        <div className="h-[400px] rounded-lg bg-slate-100 py-6 shadow-lg transition duration-700 hover:bg-red-400/10 dark:bg-slate-900 md:w-1/2 md:p-6">
          <h2 className="w-full text-center text-xl font-bold">Impressions</h2>
          <AdImpressions advertiserData={advertiserData} />
        </div>

        <div className="h-[400px] rounded-lg bg-slate-100 py-6 shadow-lg transition duration-700 hover:bg-red-400/10 dark:bg-slate-900 md:w-1/2 md:p-6">
          <h2 className="w-full text-center text-xl font-bold">Clicks</h2>
          <AdClicks advertiserData={advertiserData} />
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="h-[500px] w-full rounded-lg bg-slate-100 py-6 shadow-lg transition duration-700 hover:bg-red-400/10 dark:bg-slate-900 md:p-6">
          <h2 className="w-full text-center text-xl font-bold">
            Click-through Rate
          </h2>
          <BarChartPlot advertiserData={advertiserData} />
        </div>
        <div className="h-[650px] w-full rounded-lg bg-slate-100 py-6 shadow-lg transition duration-700 hover:bg-red-400/10 dark:bg-slate-900 md:p-6">
          <h2 className="mb-4 w-full text-center text-xl font-bold">
            Total impressions by Country
          </h2>
          <CountryImpressionsPlot countryData={country_data_json} />
        </div>
      </section>
    </div>
  );
};

export default Charts;
