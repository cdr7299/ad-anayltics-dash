import { AdvertiserData } from "@/types/advertiser-data";
import {
  getUniqueAdvertisersAndUniqueDates,
  nFormatter,
} from "../../charts.utils";

const Summary = ({ advertiserData }: { advertiserData: AdvertiserData[] }) => {
  const { advertisers } = getUniqueAdvertisersAndUniqueDates(advertiserData);
  const totalClicks = advertiserData.reduce(
    (acc, curr) => acc + Number(curr.clicks),
    0
  );
  const totalImpressions = advertiserData.reduce(
    (acc, curr) => acc + Number(curr.impressions),
    0
  );
  const avgCtr =
    advertiserData.reduce((acc, curr) => acc + Number(curr.ctr), 0) /
    (advertiserData.length / advertisers.length);
  const avgClicks =
    advertiserData.reduce((acc, curr) => acc + Number(curr.clicks), 0) /
    (advertiserData.length / advertisers.length);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4  w-full gap-4">
      <div className="w-full h-[100px] rounded-lg bg-red-500/40 p-4">
        <div className="flex flex-col gap-1">
          <span className="text-sm">Total Clicks</span>
          <span className="text-2xl font-semibold">
            {nFormatter(totalClicks, 2)}
          </span>
        </div>
      </div>
      <div className="w-full h-[100px] rounded-lg bg-blue-500/40 p-4">
        <div className="flex flex-col gap-1">
          <span className="text-sm">Total Impressions</span>
          <span className="text-2xl font-semibold">
            {nFormatter(totalImpressions, 2)}
          </span>
        </div>
      </div>
      <div className="w-full h-[100px] rounded-lg bg-yellow-500/40 p-4">
        <div className="flex flex-col gap-1">
          <span className="text-sm">Avg. CTR / day</span>
          <span className="text-2xl font-semibold">{avgCtr.toFixed(2)}</span>
        </div>
      </div>
      <div className="w-full h-[100px] rounded-lg bg-indigo-500/40 p-4">
        <div className="flex flex-col gap-1">
          <span className="text-sm"> Avg. Clicks / day</span>
          <span className="text-2xl font-semibold">{avgClicks.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
