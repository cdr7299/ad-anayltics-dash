"use client";
import AdImpressions from "./_components/ad-impressions-plot";
import AdClicks from "./_components/ad-clicks-plot";
import BarChartPlot from "./_components/ctr-bar-plot/ctr-bar-plot";
import CountryImpressionsPlot from "./_components/country-impressions-plot";
import advertiser_data from "@/app/_data/advertiser_data.json";
import country_data from "@/app/_data/country_data.json";
const Charts = () => {
  return (
    <div className="size-full flex flex-col px-6">
      {/* <section>
        <div className="flex m-4 gap-2">
          <div className="flex-1 p-4 justify-center w-16 bg-gray-700 shadow rounded h-300px">
            <div className="">
              <p className="text-gray-200 font-semibold">Total returns</p>
              <p className="py-4 font-bold">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
          <div className="flex-1 p-4 justify-center w-16 bg-gray-700 shadow rounded max-h-300px">
            <div className="">
              <p className="text-gray-200 font-semibold">Total sales</p>
              <p className="py-4 font-bold">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
          <div className="flex-1 p-4 justify-center w-16  bg-gray-700 shadow rounded max-h-300px">
            <div className="">
              <p className="text-gray-200 font-semibold">Total subscriptions</p>
              <p className="py-4 font-bold">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
          <div className="flex-1 p-4 justify-center w-16  bg-gray-700 shadow rounded h-300px">
            <div className="">
              <p className="text-gray-200 font-semibold">Total returns</p>
              <p className="py-4 font-bold ">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="w-full rounded-lg">Hiya</section>
      <section className="flex my-6 gap-6">
        <div className="w-1/2 h-[350px] bg-slate-100 border-[1px] border-slate-500 rounded-lg p-6">
          <AdImpressions advertiser_data={advertiser_data} />
        </div>

        <div className="w-1/2 h-[350px] bg-slate-100 border-[1px] border-slate-500 rounded-lg p-6">
          <AdClicks advertiser_data={advertiser_data} />
        </div>
      </section>

      <section className="flex flex-col my-6 px-4 gap-6">
        <div className=" w-full h-[450px] bg-slate-100 border-[1px] border-slate-500 rounded-lg p-6">
          <BarChartPlot advertiser_data={advertiser_data} />
        </div>
        <div className=" w-full h-[700px] bg-slate-100 border-[1px] border-slate-500 rounded-lg p-6">
          <CountryImpressionsPlot country_data={country_data} />
        </div>
      </section>
    </div>
  );
};

export default Charts;
