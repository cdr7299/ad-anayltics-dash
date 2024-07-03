import { AdvertiserData } from "@/types/advertiser-data";
import { CountryData } from "@/types/country-data";
import { MONTH_NAMES } from "./charts.constants";

//TODO: Make type inference work better for parsing api data, intermediate data structures are not optimal probably if you have to fight the types

const sortByDate = (data: AdvertiserData[]) => {
  data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return data;
};

const getStartDate = (date: string[]) => {
  const parsedDates = date.map((d) => new Date(d).getTime());
  return new Date(Math.min.apply(null, parsedDates));
};
const getEndDate = (date: string[]) => {
  const parsedDates = date.map((d) => new Date(d).getTime());
  return new Date(Math.max.apply(null, parsedDates));
};

const getFormattedDate = (dateString: string, showYear = false) => {
  const formattedDate = new Date(dateString);
  const day = formattedDate.getDate() || "";
  const year = formattedDate.getFullYear() || "";

  const month = MONTH_NAMES[formattedDate.getMonth()] || "";
  return `${day} ${month} ${showYear ? year : ""}`;
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

const nFormatter = (num: number, digits: number) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
  const item = lookup.findLast((item) => num >= item.value);
  return item
    ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol)
    : "0";
};

export {
  sortByDate,
  getStartDate,
  getEndDate,
  getUniqueAdvertisersAndUniqueDates,
  getParsedImpressionsByAdvertiser,
  getFormattedDate,
  getParsedClicksByAdvertiser,
  getCtrByAdvertiser,
  getImpressionsByCountry,
  nFormatter,
};
