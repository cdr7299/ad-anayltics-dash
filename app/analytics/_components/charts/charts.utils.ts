import { AdvertiserData } from "@/types/advertiser-data";
import { MONTH_NAMES } from "./charts.constants";
import { CountryData } from "@/types/country-data";

//TODO: Make type inference work better, intermediate data structures are not optimal probably

const getFormattedDate = (dateString: string) => {
  const formattedDate = new Date(dateString);
  const day = formattedDate.getDate() || "";
  const month = MONTH_NAMES[formattedDate.getMonth()] || "";
  return `${day} ${month}`;
};

const getUniqueAdvertisersAndUniqueDates = (
  advertiser_data: AdvertiserData[]
) => {
  const advertisers = [
    ...new Set(advertiser_data.map((item) => item.advertiser)),
  ];
  const dates = [...new Set(advertiser_data.map((item) => item.date))];
  return { advertisers, dates };
};

const getParsedImpressionsByAdvertiser = (
  advertiser_data: AdvertiserData[]
) => {
  const { advertisers, dates } =
    getUniqueAdvertisersAndUniqueDates(advertiser_data);
  const combinedData = dates.map((date) => {
    let dateEntry: { [key: string]: number | string } = { date };
    advertiser_data.forEach((item) => {
      if (item.date === date) {
        dateEntry[item.advertiser] = item.impressions;
      }
    });
    return dateEntry;
  });
  return { advertisers, data: combinedData };
};

const getParsedClicksByAdvertiser = (advertiser_data: AdvertiserData[]) => {
  const { advertisers, dates } =
    getUniqueAdvertisersAndUniqueDates(advertiser_data);
  const combinedData = dates.map((date) => {
    let dateEntry: { [key: string]: number | string } = { date };
    advertiser_data.forEach((item) => {
      if (item.date === date) {
        dateEntry[item.advertiser] = item.clicks;
      }
    });
    return dateEntry;
  });
  return { advertisers, data: combinedData };
};

const getCtrByAdvertiser = (advertiser_data: AdvertiserData[]) => {
  const { advertisers, dates } =
    getUniqueAdvertisersAndUniqueDates(advertiser_data);
  const combinedData = dates.map((date) => {
    let dateEntry: { [key: string]: number | string } = { date };
    advertiser_data.forEach((item) => {
      if (item.date === date) {
        dateEntry[item.advertiser] = item.ctr;
      }
    });
    return dateEntry;
  });
  return { advertisers, data: combinedData };
};

const getImpressionsByCountry = (country_data: CountryData[]) => {
  let dict: { [key: string]: number } = {};
  country_data.forEach((row) => {
    if (dict[row.country]) {
      dict[row.country] += row.impressions;
    } else {
      dict[row.country] = row.impressions;
    }
  });
  let res: { country: string; impressions: number }[] = [];
  Object.keys(dict).forEach((item) => {
    res.push({ country: item, impressions: dict[item] });
  });
  return res;
};

export {
  getParsedImpressionsByAdvertiser,
  getFormattedDate,
  getParsedClicksByAdvertiser,
  getCtrByAdvertiser,
  getImpressionsByCountry,
};
